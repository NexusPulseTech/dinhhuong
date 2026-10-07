/**
 * Major Service - Tầng nghiệp vụ xử lý dữ liệu chuyên ngành đại học
 * Tuân thủ Clean Architecture: Tách biệt logic truy vấn dữ liệu khỏi giao diện React
 */

import { MAJORS_DATA } from '../data/majors';
import { Major } from '../types';

export const majorService = {
  /**
   * Lấy toàn bộ danh sách 23+ chuyên ngành
   */
  getAll(): Major[] {
    return MAJORS_DATA;
  },

  /**
   * Tìm kiếm chuyên ngành theo ID
   */
  getById(id: string): Major | undefined {
    return MAJORS_DATA.find(m => m.id === id);
  },

  /**
   * Lọc chuyên ngành theo khối thi THPT (A00, A01, D01, B00, C00...)
   */
  getByAdmissionBlock(block: string): Major[] {
    if (!block || block === 'Tất cả') return MAJORS_DATA;
    return MAJORS_DATA.filter(m => m.admissionBlocks.includes(block));
  },

  /**
   * Lọc chuyên ngành theo nhóm ngành
   */
  getByCategory(category: string): Major[] {
    if (!category || category === 'Tất cả') return MAJORS_DATA;
    return MAJORS_DATA.filter(m => m.category === category || m.sector === category);
  },

  /**
   * Tìm kiếm chuyên ngành theo từ khóa (tên ngành, mã ngành, từ khóa nghề nghiệp)
   */
  search(query: string, block = 'Tất cả', category = 'Tất cả'): Major[] {
    const q = query.trim().toLowerCase();
    return MAJORS_DATA.filter(major => {
      const matchQuery =
        !q ||
        major.name.toLowerCase().includes(q) ||
        major.code.toLowerCase().includes(q) ||
        major.tagline.toLowerCase().includes(q) ||
        major.summary.toLowerCase().includes(q) ||
        major.whatYouDo.entryRoles.some(r => r.toLowerCase().includes(q));

      const matchBlock = block === 'Tất cả' || major.admissionBlocks.includes(block);
      const matchCat = category === 'Tất cả' || major.category === category || major.sector === category;

      return matchQuery && matchBlock && matchCat;
    });
  },

  /**
   * Lấy danh sách ID của tất cả chuyên ngành (dùng cho routing & sitemap)
   */
  getAllIds(): string[] {
    return MAJORS_DATA.map(m => m.id);
  }
};
