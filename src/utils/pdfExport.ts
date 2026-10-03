import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportReportToPdf(
  elementId: string,
  fileName: string = 'BaoCao_HuongNghiep_NexusPulse.pdf'
): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element #${elementId} not found for PDF export`);
    return false;
  }

  try {
    // 1. Capture element to high-res canvas (scale: 2 for sharp retina text)
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.color = '#0f172a';
          clonedEl.style.backgroundColor = '#ffffff';
          clonedEl.style.padding = '20px';
          // Hide any buttons inside cloned element
          const buttons = clonedEl.querySelectorAll('button, .no-print');
          buttons.forEach((b) => ((b as HTMLElement).style.display = 'none'));
        }
      }
    });

    // 2. Initialize jsPDF in A4 format (210mm x 297mm)
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const imgWidth = pageWidth - 20; // 10mm margins on each side
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10; // 10mm top margin

    // First page
    pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= (pageHeight - 20);

    // Multi-page handling if report is long
    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= (pageHeight - 20);
    }

    // 3. Trigger direct browser download
    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error('Error generating PDF with jsPDF & html2canvas:', error);
    // Fallback: trigger print dialog if canvas capture failed
    try {
      window.print();
      return true;
    } catch (e) {
      console.error('Print fallback failed:', e);
      return false;
    }
  }
}
