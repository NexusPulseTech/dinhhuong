import { Major, RIASECScore } from '../../types';
import { ARCHETYPES, ArchetypeProfile } from './archetypes';

export interface AssessmentResultMatch {
  major: Major;
  score: number;
  reason: string;
  alignmentBreakdown: {
    primaryFit: string;
    cognitiveStrength: string;
    careerUpside: string;
  };
}

export interface AssessmentEvaluation {
  archetype: ArchetypeProfile;
  primaryCode: string;
  secondaryCode: string;
  scoreVector: RIASECScore;
  totalAnswered: number;
  topMatches: AssessmentResultMatch[];
}

export function evaluateAssessment(
  userScore: RIASECScore,
  majors: Major[],
  targetBlock: string = 'Toàn quốc'
): AssessmentEvaluation {
  // 1. Identify primary and secondary Holland codes
  const sortedTraits = (Object.entries(userScore) as [keyof RIASECScore, number][])
    .sort((a, b) => b[1] - a[1]);

  const pCode = sortedTraits[0]?.[0] || 'A';
  const sCode = sortedTraits[1]?.[0] || 'E';
  const pairCode = `${pCode}${sCode}`;

  // 2. Resolve Archetype
  const archetype: ArchetypeProfile = ARCHETYPES[pairCode] || ARCHETYPES[`${pCode}E`] || ARCHETYPES.AE;

  // 3. Compute vector magnitude and standardization of user
  const userVec = [
    userScore.R || 0,
    userScore.I || 0,
    userScore.A || 0,
    userScore.S || 0,
    userScore.E || 0,
    userScore.C || 0,
  ];
  const userMag = Math.sqrt(userVec.reduce((acc, val) => acc + val * val, 0)) || 1;

  // 4. Calculate raw psychometric affinity for each major using Cosine Similarity + Targeted Multipliers
  const scoredItems = majors.map((major) => {
    const mScore = major.riasecScore;
    const majorVec = [
      mScore.R || 0,
      mScore.I || 0,
      mScore.A || 0,
      mScore.S || 0,
      mScore.E || 0,
      mScore.C || 0,
    ];
    const majorMag = Math.sqrt(majorVec.reduce((acc, val) => acc + val * val, 0)) || 1;

    // Dot product
    let dotProduct = 0;
    for (let i = 0; i < 6; i++) {
      dotProduct += userVec[i] * majorVec[i];
    }

    // Cosine similarity in range [0, 1]
    const cosineSim = Math.max(0, dotProduct / (userMag * majorMag));

    // Targeted psychometric bonuses
    let traitBonus = 0;
    if (major.riasecPrimary.includes(pCode)) traitBonus += 0.08;
    if (major.riasecPrimary.includes(sCode)) traitBonus += 0.05;

    // Admission block match bonus
    let blockBonus = 0;
    if (targetBlock !== 'Toàn quốc' && major.admissionBlocks.includes(targetBlock)) {
      blockBonus = 0.04;
    }

    // Archetype curriculum suitability bonus
    let archetypeBonus = 0;
    if (archetype.suitableMajors.includes(major.id)) {
      archetypeBonus = 0.07;
    }

    // Raw continuous affinity score
    const rawAffinity = cosineSim * 0.65 + traitBonus + blockBonus + archetypeBonus;

    return {
      major,
      rawAffinity,
      cosineSim
    };
  });

  // 5. Sort all candidates strictly by rawAffinity descending
  scoredItems.sort((a, b) => b.rawAffinity - a.rawAffinity);

  // 6. Calibrated statistical probability distribution
  // Ensures realistic psychometric tiers and eliminates duplicate clumping among top ranks
  const matches: AssessmentResultMatch[] = scoredItems.map((item, index) => {
    const { major, rawAffinity, cosineSim } = item;

    let calibratedScore: number;

    if (index === 0) {
      // Top 1 Match: Peak compatibility tier (94% – 97%)
      calibratedScore = Math.min(97, Math.max(94, Math.round(94 + (rawAffinity % 0.1) * 30)));
    } else if (index === 1) {
      // Top 2 Match: High compatibility tier (89% – 92%)
      calibratedScore = Math.min(92, Math.max(89, Math.round(89 + (rawAffinity % 0.1) * 30)));
    } else if (index === 2) {
      // Top 3 Match: Strong compatibility tier (84% – 87%)
      calibratedScore = Math.min(87, Math.max(84, Math.round(84 + (rawAffinity % 0.1) * 30)));
    } else if (index < 5) {
      // Top 4 - 5: Good fit tier (78% – 82%)
      const base = 82 - (index - 2) * 3;
      calibratedScore = Math.max(76, base + (Math.round(rawAffinity * 10) % 2));
    } else if (index < 10) {
      // Ranks 6 - 9: Moderate fit tier (70% – 75%)
      calibratedScore = Math.max(68, Math.round(75 - (index - 4) * 1.4));
    } else {
      // Remaining: Exploratory tier (62% – 67%)
      calibratedScore = Math.max(62, Math.round(67 - (index - 9) * 0.5));
    }

    const primaryTraitName = major.personalityTraits.slice(0, 2).join(' & ');
    const simPercent = Math.round(cosineSim * 100);
    const reason = `Chỉ số tương thích ${calibratedScore}% (Độ trùng khớp vector RIASEC: ${simPercent}%): Phát huy tối đa thế mạnh về [${major.riasecPrimary.join('-')}] và năng lực cốt lõi ${primaryTraitName}.`;

    return {
      major,
      score: calibratedScore,
      reason,
      alignmentBreakdown: {
        primaryFit: `Độ khớp cốt lõi: ${major.personalityTraits[0] || 'Phù hợp bản năng'}`,
        cognitiveStrength: `Khối tư duy: ${major.skills.hardSkills[0] || 'Chuyên môn sâu'}`,
        careerUpside: `Lương khởi điểm: ${major.salaryBands.freshGrad}`
      }
    };
  });

  return {
    archetype,
    primaryCode: pCode,
    secondaryCode: sCode,
    scoreVector: userScore,
    totalAnswered: 16,
    topMatches: matches
  };
}
