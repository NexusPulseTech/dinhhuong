import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI if key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// Direct download endpoint for project ZIP
app.get(['/api/download-zip', '/dinhhuong-source.zip'], (_req, res) => {
  const zipPath = path.resolve(__dirname, 'public', 'dinhhuong-source.zip');
  res.download(zipPath, 'dinhhuong-source.zip');
});

// Server-side AI Mentor Endpoint with Search Grounding
app.post('/api/mentor-chat', async (req, res) => {
  try {
    const { messages, userContext, query } = req.body;

    if (!aiClient) {
      // Intelligent fallback if no API key is provided
      return res.json({
        reply: `Chào em! Anh đang ở chế độ tư vấn ngoại tuyến (Offline Mentor). 
Dựa trên hồ sơ của em (Khối ${userContext?.targetBlock || 'D01'}, định hướng: ${userContext?.interestedMajors?.join(', ') || 'Ngôn ngữ Anh, Marketing, Truyền thông'}):
- **Ngôn ngữ Anh**: Bản chất là học sâu về ngôn ngữ học và văn hóa. Nếu chỉ giỏi giao tiếp thì chưa đủ, cần kỹ năng thực chiến (marketing, sales, dịch thuật chuyên ngành).
- **Marketing**: Bản chất là kinh doanh kết hợp tâm lý hành vi và phân tích số liệu (ROI, CAC, Content).
- **Truyền thông**: Tập trung vào kể chuyện, xây dựng hình ảnh, PR và tổ chức sự kiện.
Em muốn anh phân tích sâu vào môn học cụ thể hay cơ hội việc làm thực tế của ngành nào trước?`,
        groundingSources: [],
        mode: 'fallback'
      });
    }

    const systemInstruction = `Bạn là một người anh trai kiêm Product Analyst & Career Mentor dày dạn kinh nghiệm tại Việt Nam.
Bạn đang tư vấn 1-1 cho học sinh lớp 12 (đặc biệt các bạn khối D01: Toán - Văn - Anh như trường hợp của Ngọc Yến).
Phong cách trò chuyện:
1. Thân thiện, ấm áp như anh trai trong nhà ("anh - em"), không sáo rỗng, không phán xét, không dùng thuật ngữ học thuật khô khan.
2. Cực kỳ thực tế và dữ liệu chuẩn xác: Liệt kê rõ ngành học gì, làm gì, ở trường nào (Hà Nội / TP.HCM như FTU, UEH, RMIT, USSH, HUB...), học phí, điểm chuẩn 2024-2025, và mức lương khởi điểm (8-15tr).
3. "Phá bỏ ảo tưởng/chấp niệm" một cách khéo léo:
   - Thích tiếng Anh: Giải thích rõ tiếng Anh là CÔNG CỤ hay NGHỀ NGHIỆP. Ngành Ngôn ngữ Anh học văn học, ngữ âm, dịch thuật, chứ không phải chỉ là "học giao tiếp tiếng Anh".
   - "Sài Gòn đẹp lắm": Cân nhắc chi phí sinh hoạt (8-12tr/tháng), môi trường áp lực, xa gia đình so với học tại Hà Nội hoặc địa phương.
4. Trả lời súc tích, có gạch đầu dòng rõ ràng, hành văn tự nhiên, khuyến khích học sinh suy nghĩ phản biện.`;

    const promptText = `Hồ sơ học sinh:
- Tên: ${userContext?.name || 'Ngọc Yến'}
- Khối thi: ${userContext?.targetBlock || 'D01 (Toán - Văn - Anh)'}
- Ngành đang quan tâm: ${userContext?.interestedMajors?.join(', ') || 'Ngôn ngữ Anh, Marketing, Truyền thông'}
- Nhóm Holland RIASEC nổi trội: ${userContext?.riasecTop || 'Artistic & Enterprising'}
- Yếu tố cảm xúc/băn khoăn: ${userContext?.emotionalNote || 'Có chấp niệm với tiếng Anh, thích Sài Gòn'}

Câu hỏi hoặc tâm sự của học sinh:
"${query || messages?.[messages.length - 1]?.content || 'Em đang rất phân vân giữa Ngôn ngữ Anh, Marketing và Truyền thông, anh phân tích giúp em với!'}"`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Anh đã nhận được câu hỏi. Hãy cùng phân tích cụ thể nhé!';
    
    // Extract search grounding metadata if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const groundingSources = groundingChunks
      .map((c: any) => ({
        title: c.web?.title || 'Nguồn dữ liệu tuyển sinh',
        url: c.web?.uri || '#',
      }))
      .filter((s: any) => s.url !== '#');

    res.json({
      reply,
      groundingSources,
      mode: 'live_grounded'
    });
  } catch (error: any) {
    console.error('Error in /api/mentor-chat:', error);
    res.json({
      reply: 'Hệ thống AI đang bận kết nối dữ liệu trực tuyến. Anh tóm tắt nhanh: Với khối D01, cả 3 ngành Ngôn ngữ Anh, Marketing và Truyền thông đều là lựa chọn hàng đầu. Trong đó Truyền thông và Marketing có tính ứng dụng kinh doanh mạnh hơn, còn Ngôn ngữ Anh mạnh về nền tảng ngôn ngữ & giảng dạy.',
      groundingSources: [],
      mode: 'error_fallback'
    });
  }
});

// Server-side market research endpoint with live search
app.post('/api/market-research', async (req, res) => {
  try {
    const { majorName, university } = req.body;
    if (!aiClient) {
      return res.json({
        summary: `Thông tin ngành ${majorName}: Điểm chuẩn khối D01 các trường top (FTU, UEH, USSH) thường dao động từ 24.5 - 27.5 điểm. Học phí từ 25 - 60 triệu/năm tùy hệ chuẩn hay chất lượng cao.`,
        sources: []
      });
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Tra cứu dữ liệu điểm chuẩn mới nhất (2024-2025) và cơ hội việc làm thực tế ngành ${majorName} ${university ? `tại trường ${university}` : ''} ở Việt Nam. Tóm tắt 3 ý chính: Điểm chuẩn khối D01, Học phí tham khảo, Mức lương khởi điểm thực tế của cử nhân.`,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks.map((c: any) => ({
      title: c.web?.title || 'Thông tin tuyển sinh',
      url: c.web?.uri || '#',
    }));

    res.json({
      summary: response.text,
      sources
    });
  } catch (err: any) {
    console.error('Market research error:', err);
    res.status(500).json({ error: 'Không thể truy xuất dữ liệu tìm kiếm lúc này.' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    // In dev mode, mount Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
