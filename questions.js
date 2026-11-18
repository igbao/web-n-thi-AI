// Danh sách các chương và thông tin tài liệu
const CHAPTERS_DATA = [
  {
    "id": "ch1",
    "num": 1,
    "title": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "originalTitle": "Chapter 1: Changing Business in the Blink of an AI",
    "description": "OpenAI & ChatGPT, Chatbot trong doanh nghiệp, Tự động hóa sản xuất (Robot 6 trục), Y tế & Nông nghiệp, Kỹ thuật viết prompt cơ bản, Đạo đức & Thiên vị.",
    "badge": "35 câu hỏi",
    "icon": "💼",
    "color": "#3b82f6"
  },
  {
    "id": "ch2",
    "num": 2,
    "title": "Chương 2: Từ Turing Đến Học Sâu",
    "originalTitle": "Chapter 2: Progressing from Turing to Deep Learning",
    "description": "Lịch sử AI 1950s & NASA, Hội thảo Dartmouth 1956, Phép thử Turing, Machine Learning (Arthur Samuel), Mùa đông AI, Computer Vision, Deep Learning, GPU & Attention, Microsoft Copilot trong Word/PowerPoint.",
    "badge": "35 câu hỏi",
    "icon": "🧠",
    "color": "#8b5cf6"
  },
  {
    "id": "ch3",
    "num": 3,
    "title": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "originalTitle": "Prompt Engineering: CRISP và RCIFENI-O (TS. Trần Việt Tâm)",
    "description": "Định nghĩa Prompt Engineering, Tác hại GIGO & Tin nhầm câu trả lời, Triết học Khắc kỷ, Khung CRISP 5 thành tố, Khung RCIFENI-O 8 khối (VNHTVNĐO), Đo bằng 4 con số, 3 nguyên tắc kỷ luật, Beeftext & Magical.",
    "badge": "42 câu hỏi",
    "icon": "✍️",
    "color": "#ec4899"
  },
  {
    "id": "ch4",
    "num": 4,
    "title": "Chương 4: AI Trong Tổ Chức & Nghịch Lý Jevons",
    "originalTitle": "AI in the Organization: Augmented Intelligence & Jevons Paradox",
    "description": "Ảo tưởng 'Thu hẹp để chiến thắng', AI là Trí tuệ Tăng cường, Nghịch lý bác sĩ X-quang, Nghịch lý Jevons (1865: Efficiency ↑ Cost ↓ Demand ↑), Case studies Capital One & Chipotle, 4 kỹ năng thời đại AI.",
    "badge": "26 câu hỏi",
    "icon": "🏢",
    "color": "#10b981"
  },
  {
    "id": "ch5",
    "num": 5,
    "title": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "originalTitle": "Giới hạn của AI: DIKW, Đã giải quyết, Một phần & Hiện tại",
    "description": "Kim tự tháp DIKW (Data - Information - Knowledge - Wisdom), Giới hạn đã giải quyết (Deep Blue, Watson, AlphaGo, Xe tự lái), Một phần (EQ, Ảo giác & RAG), Giới hạn hiện tại (AGI, Bền vững, Căn phòng tiếng Trung, Lẽ thường), Phân công Con người vs AI.",
    "badge": "38 câu hỏi",
    "icon": "⚖️",
    "color": "#f59e0b"
  },
  {
    "id": "ch6",
    "num": 6,
    "title": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "originalTitle": "Tương lai của AI: Những Đồn Đoán, Thực Tế và Ứng Dụng Thực Tiễn",
    "description": "Giải mã tin đồn vũ khí hạt nhân & Ngày tận thế việc làm, Kỹ sư Full-Stack & Vai trò Toàn chu kỳ, Lợi thế ngữ cảnh của con người, Case study thực tế doanh nghiệp, Nghịch lý giáo dục (Cognitive Offloading), Bài kiểm tra AGI của Andrew Ng.",
    "badge": "32 câu hỏi",
    "icon": "🚀",
    "color": "#06b6d4"
  }
];

// Ngân hàng toàn bộ 208 câu hỏi trắc nghiệm môn Ứng dụng AI
const QUESTIONS_BANK = [
  {
    "id": 1,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Lịch sử và Sứ mệnh của OpenAI",
    "question": "Tổ chức nghiên cứu trí tuệ nhân tạo OpenAI được thành lập vào thời gian nào và với sứ mệnh ban đầu là gì?",
    "options": [
      "Tháng 12 năm 2015, với sứ mệnh nghiên cứu và phát triển trí tuệ nhân tạo tổng quát (AGI) an toàn và mang lại lợi ích cho nhân loại.",
      "Tháng 10 năm 2022, với sứ mệnh thương mại hóa công nghệ chatbot thông minh trên toàn cầu.",
      "Tháng 1 năm 2010, với mục tiêu đánh bại các kỳ thủ cờ vua và cờ vây hàng đầu thế giới.",
      "Tháng 6 năm 2018, với mục đích xây dựng công cụ tìm kiếm cạnh tranh trực tiếp với Google."
    ],
    "correct": 0,
    "explanation": "Theo tài liệu Chương 1 (trang 2), OpenAI là tổ chức nghiên cứu AI có trụ sở tại Hoa Kỳ được thành lập vào tháng 12 năm 2015. Sứ mệnh ban đầu là nghiên cứu và thúc đẩy công nghệ AI với mục tiêu phát triển Trí tuệ Nhân tạo Tổng quát (AGI) an toàn và có lợi."
  },
  {
    "id": 2,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Sản phẩm của OpenAI tạo nên bước ngoặt",
    "question": "Vào năm 2022, OpenAI đã mở đầu cho làn sóng bùng nổ AI toàn cầu bằng việc ra mắt hai sản phẩm đột phá nào?",
    "options": [
      "ChatGPT và DALL-E",
      "Siri và Google Assistant",
      "Watson và Deep Blue",
      "Copilot và Midjourney"
    ],
    "correct": 0,
    "explanation": "Theo trang 2 của Chapter 1: 'By 2022, OpenAI kicked off an AI revolution with the release of two products, ChatGPT (Chat Generative Pre-Trained Transformer) and DALL-E, making the organization the major focus of the latest AI boom.'"
  },
  {
    "id": 3,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Ý nghĩa các thành phần trong từ viết tắt ChatGPT",
    "question": "Trong tên gọi sản phẩm 'ChatGPT', chữ 'P' viết tắt của từ nào và có ý nghĩa là gì?",
    "options": [
      "Pre-trained: mô hình được huấn luyện trước trên một lượng dữ liệu văn bản khổng lồ trước khi áp dụng cho các tác vụ cụ thể.",
      "Predictive: mô hình có khả năng dự đoán chính xác tuyệt đối tương lai của thị trường chứng khoán.",
      "Programmed: mô hình được lập trình thủ công từng quy tắc xử lý ngôn ngữ bởi các chuyên gia.",
      "Prompt-based: công cụ chỉ hoạt động khi người dùng nhập câu lệnh có chứa từ khóa được định nghĩa trước."
    ],
    "correct": 0,
    "explanation": "Theo trang 2: 'Pre-trained: ChatGPT is trained on a massive amount of data before it is used for specific tasks.' (Chat: phản hồi giống người; Generative: tạo nội dung mới; Pre-trained: tiền huấn luyện trên dữ liệu khổng lồ; Transformer: kiến trúc mạng nơ-ron)."
  },
  {
    "id": 4,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Khái niệm và đặc trưng của AI Chatbot",
    "question": "Điểm khác biệt cốt lõi giữa AI Chatbot và các công nghệ chăm sóc khách hàng truyền thống không sử dụng AI là gì?",
    "options": [
      "AI Chatbot đưa ra câu trả lời cá nhân hóa, tức thì và tương tác bắt chước cách trò chuyện tự nhiên của con người.",
      "AI Chatbot chỉ có thể gửi email định kỳ đã soạn sẵn vào hòm thư khách hàng theo lịch hẹn.",
      "AI Chatbot yêu cầu luôn phải có nhân viên tổng đài bấm nút phê duyệt từng câu chữ trước khi gửi.",
      "AI Chatbot chỉ trả lời được bằng các dãy mã số kỹ thuật thay vì ngôn ngữ tự nhiên."
    ],
    "correct": 0,
    "explanation": "Theo tài liệu Chương 1 (trang 3): 'Chatbots are different from other customer service technologies that are not AI because they give personalized, immediate answers to a customer’s questions' và sử dụng generative AI để tương tác mô phỏng hội thoại con người."
  },
  {
    "id": 5,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Ứng dụng AI thực tế - Duolingo Max",
    "question": "Ứng dụng học ngôn ngữ Duolingo Max sử dụng tính năng AI nào để giúp người học thực hành kỹ năng giao tiếp trong thế giới thực?",
    "options": [
      "AI Roleplay (đóng vai hội thoại với các nhân vật hư cấu bản ngữ)",
      "AI Grammar Check (chấm điểm ngữ pháp tự động qua bài trắc nghiệm)",
      "AI Translation Engine (chỉ hiển thị từ điển tra cứu song ngữ)",
      "AI Subtitle Generator (tạo phụ đề video tự động)"
    ],
    "correct": 0,
    "explanation": "Theo Chapter 1 (trang 4): 'Duolingo, an educational language app, has a feature called AI Roleplay that allows learners to practice real-world conversation skills with native-speaking fictional characters' (như gọi cà phê, hỏi đường, họp đồng nghiệp quốc tế)."
  },
  {
    "id": 6,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Ứng dụng AI thực tế - Instagram",
    "question": "Ứng dụng mạng xã hội Instagram sử dụng trí tuệ nhân tạo chủ yếu cho các mục đích nào sau đây?",
    "options": [
      "Gợi ý nội dung (content recommendations), nhận diện hình ảnh và quảng cáo cá nhân hóa theo sở thích người dùng.",
      "Tự động khóa tài khoản sau 10 phút sử dụng để giảm thời gian nhìn màn hình.",
      "Thay thế hoàn toàn người sáng tạo nội dung bằng cách tự động đăng ảnh mà không cần sự đồng ý.",
      "Dự báo thị trường cổ phiếu dựa trên số lượt like bài viết."
    ],
    "correct": 0,
    "explanation": "Theo trang 4 Chapter 1: 'The social media app Instagram uses AI for content recommendations, image recognition, and personalized advertising. For example, if you search for sunglasses, Instagram may display similar types of sunglasses that might interest you.'"
  },
  {
    "id": 7,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Ứng dụng AI thực tế - Sephora & The North Face",
    "question": "Thương hiệu bán lẻ trang phục dã ngoại The North Face và chuỗi mỹ phẩm Sephora đã tích hợp công nghệ AI nào để nâng cao trải nghiệm khách hàng?",
    "options": [
      "Sephora sử dụng ứng dụng Virtual Artist để thử trang điểm ảo; The North Face sử dụng chatbot trợ lý ảo (virtual assistant) tư vấn sản phẩm 24/7.",
      "Sephora dùng robot giao hàng tận nhà; The North Face dùng flycam chụp ảnh tự động.",
      "Cả hai thương hiệu đều cấm khách hàng sử dụng điện thoại khi mua sắm tại cửa hàng.",
      "Sephora dùng AI để tăng giá sản phẩm theo giờ; The North Face dùng AI để sản xuất lều bạt tự động."
    ],
    "correct": 0,
    "explanation": "Theo trang 5 Chapter 1: Sephora phát triển ứng dụng Sephora Virtual Artist với trải nghiệm thử đồ ảo (virtual try-on). The North Face tích hợp AI chatbot gọi là virtual assistant trên website đóng vai trò như cố vấn bán hàng 24/7."
  },
  {
    "id": 8,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "AI và Tự động hóa trong ngành sản xuất ô tô",
    "question": "Theo tài liệu, việc ứng dụng robot trong các nhà máy sản xuất ô tô đã mang lại hiệu quả năng suất như thế nào và tỷ lệ công việc do robot đảm nhận là bao nhiêu?",
    "options": [
      "Tăng năng suất 30% và đảm nhận tới 90% quy trình sản xuất mỗi chiếc xe trong ngành công nghiệp trị giá 1.53 nghìn tỷ USD.",
      "Tăng năng suất 10% và đảm nhận khoảng 40% quy trình sản xuất xe hơi.",
      "Tăng năng suất 80% và thay thế 100% toàn bộ công nhân trong nhà máy mà không cần kiểm soát chất lượng.",
      "Giảm chi phí 50% nhưng khiến thời gian lắp ráp một chiếc xe kéo dài gấp đôi."
    ],
    "correct": 0,
    "explanation": "Theo trang 6 Chapter 1: 'most auto manufacturers use robots in their production processes, which has led to a 30 percent increase in productivity. In most car factories around the world, robots are responsible for manufacturing 90 percent of each car in this $1.53 trillion dollar industry.'"
  },
  {
    "id": 9,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Robot 6 trục trong sản xuất",
    "question": "Loại robot nào được nhắc đến trong sản xuất ô tô có khả năng di chuyển linh hoạt theo mọi hướng để thực hiện các thao tác hàn, sơn, lắp ráp chính xác và vận chuyển vật liệu?",
    "options": [
      "Robot 6 trục (Six-axis robot)",
      "Robot bánh xích đơn hướng (Single-track robot)",
      "Robot hình người Asimo",
      "Robot gắp thả 2 chiều (2-axis gantry)"
    ],
    "correct": 0,
    "explanation": "Theo trang 6 Chapter 1: 'All kinds of robots work together to complete manufacturing tasks, including a six-axis robot that performs tasks such as precise auto assembly, welding, painting, and material handling. It can move in any direction.'"
  },
  {
    "id": 10,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "AI trong Y tế và Dược phẩm",
    "question": "Trong lĩnh vực y tế và dược phẩm, các nhà khoa học đã sử dụng thuật toán AI để đạt được bước đột phá nào trong điều trị nhiễm trùng?",
    "options": [
      "Phát hiện ra một loại kháng sinh mới để điều trị vi khuẩn kháng thuốc (nhiễm khuẩn MRSA).",
      "Thay thế hoàn toàn bác sĩ trong việc kê đơn mà không cần kiểm tra phản ứng phụ.",
      "Xóa bỏ hoàn toàn nhu cầu xét nghiệm máu trong bệnh viện.",
      "Chế tạo vaccine cho tất cả các loại bệnh ung thư trong vòng một tuần."
    ],
    "correct": 0,
    "explanation": "Theo trang 8 Chapter 1: 'Scientists recently used AI algorithms to discover a new type of antibiotics to treat drug-resistant bacterial infections (called MRSA infections).'"
  },
  {
    "id": 11,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Phẫu thuật bằng Robot (Robotic Surgery)",
    "question": "Ưu điểm của việc ứng dụng robot trong phẫu thuật (chẳng hạn như phẫu thuật thay khớp gối) so với phẫu thuật thông thường là gì?",
    "options": [
      "Ít xâm lấn hơn, thời gian hồi phục ngắn hơn, ít sẹo hơn, cơn đau sau phẫu thuật nhẹ hơn và giảm nguy cơ nhiễm trùng.",
      "Chi phí rẻ hơn 100 lần và không cần bác sĩ ngoại khoa giám sát trong phòng mổ.",
      "Bệnh nhân có thể xuất viện ngay lập tức sau 5 phút mà không cần theo dõi.",
      "Robot có thể tự ý thay đổi bộ phận nhân tạo mà không cần thông qua kế hoạch điều trị."
    ],
    "correct": 0,
    "explanation": "Theo trang 8 Chapter 1: 'Robotic surgery is often less invasive than conventional surgeries, which results in shorter recovery times, fewer opportunities for scarring, milder post surgical pain, and lower risk of infection.'"
  },
  {
    "id": 12,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Tự động hóa trong Nông nghiệp",
    "question": "Công nghệ AI và tự động hóa đang được triển khai như thế nào trong ngành nông nghiệp theo Chapter 1?",
    "options": [
      "Sử dụng máy kéo tự lái (self-driving tractors) và máy thu hoạch tự động để nâng cao hiệu suất canh tác.",
      "Sử dụng robot để tưới nước thủ công từng chiếc lá trong rừng nhiệt đới.",
      "Thay thế toàn bộ cây trồng tự nhiên bằng cây trồng nhân tạo làm từ nhựa sinh học.",
      "Dự đoán chuẩn xác thời tiết từng giây trong vòng 50 năm tới."
    ],
    "correct": 0,
    "explanation": "Theo trang 8 Chapter 1 (mục Automating Agriculture): 'Self-driving tractors and automated harvesting machines (Figure 1-12) are helping farmers monitor and harvest crops more efficiently.'"
  },
  {
    "id": 13,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Bản chất của Mô hình Ngôn ngữ (Language Model)",
    "question": "Bản chất hoạt động của một mô hình ngôn ngữ (Language Model) như ChatGPT là gì?",
    "options": [
      "Học từ lượng văn bản khổng lồ được thu thập và tạo ra văn bản gốc bằng cách dự đoán từ tiếp theo (predicting the next word).",
      "Tìm kiếm chính xác các trang web trên Google và sao chép nguyên văn đường link hiển thị lên màn hình.",
      "Lưu trữ sẵn các câu trả lời hoàn chỉnh trong cơ sở dữ liệu và chỉ việc tra cứu theo từ khóa.",
      "Tự suy nghĩ và có ý thức độc lập giống hệt bộ não người."
    ],
    "correct": 0,
    "explanation": "Theo trang 9 Chapter 1: 'A language model learns from text that has been collected from existing information and can produce original text by predicting the next word in a text response. A language model can recognize voice, optical characters, and handwriting.'"
  },
  {
    "id": 14,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Bảo mật dữ liệu doanh nghiệp và Closed AI Models",
    "question": "Tại sao nhiều doanh nghiệp do dự khi tải dữ liệu nội bộ lên các nền tảng LLM công cộng như ChatGPT và họ đã giải quyết vấn đề này như thế nào?",
    "options": [
      "Lo ngại dữ liệu độc quyền bị dùng để huấn luyện và rò rỉ cho đối thủ cạnh tranh; giải pháp là xây dựng mô hình ngôn ngữ 'đóng' (closed AI models) chỉ dùng trong nội bộ công ty.",
      "Vì chi phí bấm nút gửi tin nhắn trên ChatGPT quá đắt đỏ so với thuê nhân sự thủ công.",
      "Vì ChatGPT từ chối xử lý các văn bản liên quan đến báo cáo tài chính doanh nghiệp.",
      "Vì các mô hình mở luôn tự động xóa toàn bộ dữ liệu máy tính người dùng sau 24 giờ."
    ],
    "correct": 0,
    "explanation": "Theo trang 10 Chapter 1: 'Because of ChatGPT’s need to constantly feed on data for training, many businesses are reluctant to upload their data... This proprietary data could then be used by ChatGPT for training and form the basis of an answer to another user’s question... Due to this risk, many businesses are building their own \"closed\" AI language models that can be used only by those who belong to the business.'"
  },
  {
    "id": 15,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Tính biến thiên của kết quả sinh ra bởi AI",
    "question": "Khi bạn chạy cùng một câu lệnh prompt nhiều lần trên một chatbot AI, điều gì thường xảy ra với câu trả lời nhận được?",
    "options": [
      "Kết quả có thể khác biệt ở mỗi lần chạy prompt, dù nội dung prompt nhập vào hoàn toàn giống nhau.",
      "Kết quả luôn luôn giống nhau từng ký tự một không bao giờ thay đổi.",
      "Chatbot sẽ báo lỗi trùng lặp và từ chối tạo câu trả lời lần thứ hai.",
      "Chatbot sẽ tự động khóa tài khoản vì nghi ngờ hành vi spam."
    ],
    "correct": 0,
    "explanation": "Theo trang 11 Chapter 1: 'Each time you run an NLP prompt with a chatbot, the AI model generates responses based on its training and the specific context provided in the prompt. The exact results may vary each time you enter a prompt, even with the same text.'"
  },
  {
    "id": 16,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Kỹ thuật viết Prompt - Chỉ dẫn rõ ràng (Clear Instructions)",
    "question": "Tại sao việc đưa ra chỉ dẫn rõ ràng và súc tích (explicit and concise) là yếu tố quyết định khi viết prompt cho AI?",
    "options": [
      "Giúp AI định hình chính xác phạm vi, độ dài và phong cách mong muốn, tránh việc đưa ra thông tin lan man, lệch hướng.",
      "Vì AI chỉ hiểu được các câu lệnh dưới 5 từ, nếu viết dài AI sẽ tự động ngắt kết nối.",
      "Để tiết kiệm bộ nhớ RAM cho trình duyệt web của người dùng.",
      "Để ngăn chặn AI tự động gửi câu hỏi đến hòm thư hỗ trợ của OpenAI."
    ],
    "correct": 0,
    "explanation": "Theo trang 12 Chapter 1: 'Be explicit and concise in your NLP prompts. If you want a short answer, ask for it. If you need expert-level writing, specify that you need a detailed, professional response. The more precise your instructions, the better the chances of generating the desired output. Vague prompts can lead you down rabbit holes.'"
  },
  {
    "id": 17,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Kỹ thuật viết Prompt - Áp dụng Nhân vật (Adopting a Persona)",
    "question": "Trong kỹ thuật viết prompt, việc yêu cầu AI 'Đóng vai một nhân vật / chuyên gia' (Adopting a Persona) nhằm giải quyết nhược điểm nào của các mô hình như ChatGPT?",
    "options": [
      "Khắc phục câu trả lời mặc định thường có văn phong chung chung, nhạt nhòa và không sát với ngữ cảnh đặc thù của doanh nghiệp.",
      "Giúp AI tăng tốc độ phản hồi từ 10 giây xuống còn 0.1 giây.",
      "Cho phép AI vượt qua tường lửa kiểm duyệt bản quyền của hệ thống.",
      "Giúp người dùng không phải trả tiền thuê bao hàng tháng cho dịch vụ AI."
    ],
    "correct": 0,
    "explanation": "Theo trang 13 Chapter 1: 'Chat models such as ChatGPT by default typically provide a professional and friendly tone in their generic responses. OpenAI set ChatGPT to work well for everyone, but that means the responses can be bland and not targeted to the exact needs of a business. To overcome this drawback, you can encourage the AI model to adopt a specific persona or tone.'"
  },
  {
    "id": 18,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Kỹ thuật viết Prompt - Ví dụ ngành Y tế",
    "question": "Trong ví dụ về prompt dành cho chuyên viên vật lý trị liệu (physical therapist) ở trang 14, prompt yêu cầu email gửi khách hàng cần bao gồm những nội dung nào?",
    "options": [
      "Ghi nhận tiến độ phẫu thuật vai, hỏi về mức độ đau và độ vận động, nhắc nhở bài tập sau phẫu thuật, và thông báo lịch tái khám sau 4 tuần.",
      "Yêu cầu khách hàng thanh toán toàn bộ viện phí, cảnh báo nguy cơ liệt toàn thân và hủy lịch tái khám.",
      "Kê đơn thuốc kháng sinh liều cao và khuyên khách hàng không nên cử động cánh tay trong 1 năm.",
      "Giới thiệu các dịch vụ phẫu thuật thẩm mỹ khác tại phòng khám với mức giảm giá 50%."
    ],
    "correct": 0,
    "explanation": "Theo trang 14 Chapter 1, prompt mẫu bao gồm 4 ý rõ ràng: Acknowledge shoulder surgery progress; Ask about pain level and mobility; Remind of post surgical exercises; Mention upcoming follow-up appointment in four weeks."
  },
  {
    "id": 19,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Kỹ thuật viết Prompt - Xác định định dạng đầu ra (Defining Output Format)",
    "question": "Khi viết prompt cho chatbot, người dùng có thể chỉ định định dạng đầu ra (Output Format) bằng những hình thức nào?",
    "options": [
      "Bảng biểu (table), danh sách gạch đầu dòng (bullet points), đoạn văn ngắn, email chuyên nghiệp hoặc khối mã lệnh (code).",
      "Chỉ duy nhất một tệp âm thanh định dạng .mp3 mà không hỗ trợ văn bản.",
      "Chỉ duy nhất hình ảnh đồ họa vẽ tay không có chữ viết kèm theo.",
      "Mã nhị phân 0 và 1 không thể chuyển đổi thành ký tự đọc được."
    ],
    "correct": 0,
    "explanation": "Theo trang 14 Chapter 1 (Defining the Output Format): 'When you enter a chatbot prompt, you can detail the format of the expected output. For example, you could ask the generative AI platform to provide a table, bullet points, a formal email, or executable code.'"
  },
  {
    "id": 20,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Kỹ thuật viết Prompt - Đối tượng mục tiêu (Targeting Audience)",
    "question": "Tại sao khi viết prompt cần phải xác định rõ đối tượng mục tiêu (Target Audience) của nội dung?",
    "options": [
      "Để AI điều chỉnh mức độ phức tạp của ngôn từ; tránh dùng thuật ngữ kỹ thuật khó hiểu với độc giả đại chúng hoặc ngôn ngữ quá đơn giản với chuyên gia.",
      "Để AI tự động gửi email thông báo trực tiếp đến địa chỉ IP của tất cả người đọc đó.",
      "Để hệ thống AI thu phí bản quyền trực tiếp từ người nhận nội dung.",
      "Để AI tự động lọc bỏ các ký tự tiếng Việt có dấu nhằm tăng tốc độ tải trang."
    ],
    "correct": 0,
    "explanation": "Theo trang 15 Chapter 1: 'Using technical jargon such as API (application programming interface) with a general nontechnical audience might lead to confusion, while overly simplified language for a technical audience might not provide enough detail.'"
  },
  {
    "id": 21,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Chiến dịch Social Media Marketing với AI",
    "question": "Theo Chapter 1, mạng xã hội hỗ trợ giao tiếp hai chiều (two-way communication) mang lại lợi ích gì cho doanh nghiệp khi kết hợp với các câu lệnh prompt?",
    "options": [
      "Giúp thu thập thấu cảm và phản hồi giá trị từ khách hàng để điều chỉnh sản phẩm, đồng thời xây dựng lòng tin và nhận diện thương hiệu.",
      "Giúp doanh nghiệp tự động xóa toàn bộ đánh giá 1 sao của khách hàng mà không cần giải trình.",
      "Ngăn chặn khách hàng bình luận công khai dưới các bài đăng bán hàng.",
      "Tự động ép buộc người dùng phải mua hàng mỗi khi họ lướt qua bài đăng."
    ],
    "correct": 0,
    "explanation": "Theo trang 16 Chapter 1: 'Social media enables businesses to highlight their products... It supports two-way communication, helping gather valuable customer insights for product adjustments such as customers reviewing products and asking questions... Customers want to know that they are being recognized, understood, and cared for.'"
  },
  {
    "id": 22,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Nghiên cứu & Phân tích - Ví dụ Đánh giá Khách sạn",
    "question": "Trong ví dụ về nghiên cứu thị trường ngành khách sạn ở trang 17, AI đã giúp chuỗi khách sạn phát hiện xu hướng tiềm ẩn nào từ hàng triệu đánh giá của khách hàng?",
    "options": [
      "Nhiều khách hàng Gen Z lần đầu lưu trú phàn nàn về việc thiếu ổ cắm điện/sạc ở vị trí thuận tiện trong phòng.",
      "Khách hàng phàn nàn rằng giá phòng quá rẻ so với chất lượng phục vụ 5 sao.",
      "Khách hàng mong muốn loại bỏ hoàn toàn hệ thống wifi để trải nghiệm cuộc sống không Internet.",
      "Khách hàng yêu cầu khách sạn phải nuôi thú cưng trong từng phòng ngủ."
    ],
    "correct": 0,
    "explanation": "Theo trang 17 Chapter 1: 'AI can uncover hidden trends, such as several first-time Gen-Z guests complaining about a lack of conveniently located electrical outlets to charge devices in their rooms.'"
  },
  {
    "id": 23,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "So sánh Glamping vs Khách sạn truyền thống",
    "question": "Khi sử dụng prompt để phân tích cạnh tranh giữa 'Glamping' (cắm trại tiện nghi) và 'Khách sạn truyền thống' (trang 18), lợi thế cạnh tranh chính của Glamping được chỉ ra là gì?",
    "options": [
      "Sự hòa mình trọn vẹn vào thiên nhiên (immersion in nature) kết hợp với các tiện ích sang trọng đa dạng phù hợp nhiều sở thích.",
      "Vị trí luôn nằm ngay tại các giao lộ trung tâm thương mại sầm uất nhất thành phố.",
      "Hệ thống phòng hội nghị quy mô hàng nghìn người và dịch vụ đưa đón bằng trực thăng miễn phí.",
      "Miễn phí hoàn toàn tiền ăn uống và dịch vụ giặt ủi trọn đời cho khách lưu trú."
    ],
    "correct": 0,
    "explanation": "Theo trang 18 Chapter 1, các lợi thế cạnh tranh của Glamping gồm: Immersion in nature (cho phép khách hòa mình vào thiên nhiên, ngắm sao, đi bộ đường dài) và Potential for luxury (từ lều đơn giản đến kết cấu cao cấp có bồn nước nóng, boong tàu riêng)."
  },
  {
    "id": 24,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Tạo mã nguồn với Prompt - Bài toán Python",
    "question": "Trong ví dụ về prompt tạo mã Python ở trang 19, đoạn code được AI sinh ra để in 100 số lẻ đầu tiên sử dụng kỹ thuật lập trình nào?",
    "options": [
      "List comprehension: `[num for num in range(1, 200) if num % 2 != 0]`",
      "Đệ quy vô hạn: `while True: print('odd')`",
      "Gọi API của Google Cloud Search để tải danh sách số lẻ về máy tính.",
      "Mã hóa chuỗi SHA-256 để tìm các ký tự số lẻ ngẫu nhiên."
    ],
    "correct": 0,
    "explanation": "Theo trang 19 Chapter 1: Đoạn mã mẫu: `odd_numbers = [num for num in range(1, 200) if num % 2 != 0]` và `print(odd_numbers)`."
  },
  {
    "id": 25,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Học tăng cường từ phản hồi con người (RLHF)",
    "question": "Cơ chế nào giúp ChatGPT ngày càng trở nên thông minh hơn và ghi nhớ phản hồi của người dùng theo thời gian?",
    "options": [
      "Reinforcement Learning from Human Feedback (Học tăng cường từ phản hồi của con người - RLHF)",
      "Chỉ dựa vào việc tăng thêm dung lượng ổ cứng của máy chủ",
      "Cài đặt lại hệ điều hành Windows trên máy chủ sau mỗi lượt chat",
      "Thuê nhân viên gõ tay sửa lại từng câu trả lời trong thời gian thực"
    ],
    "correct": 0,
    "explanation": "Theo trang 19-20 Chapter 1: 'ChatGPT is trained using reinforcement learning from human feedback (RLHF), which means that human trainers review and rate AI responses to guide the model toward generating better answers.'"
  },
  {
    "id": 26,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Đạo đức học thuật và vấn đề Đạo văn",
    "question": "Mối quan ngại lớn nhất về mặt đạo đức khi học sinh, sinh viên sử dụng ChatGPT để viết toàn bộ bài luận nộp cho giáo viên là gì?",
    "options": [
      "Xâm phạm tính liêm chính học thuật (academic integrity), làm thui chột tư duy nguyên bản và gây ra hành vi đạo văn (plagiarism).",
      "Làm tốn quá nhiều điện của nhà trường khi tải bài tập lên hệ thống.",
      "Khiến giáo viên không còn thời gian để chấm điểm trên giấy.",
      "Vi phạm bản quyền nhãn hiệu thương mại của OpenAI tại trường học."
    ],
    "correct": 0,
    "explanation": "Theo trang 20 Chapter 1: 'Using AI to generate human-quality text undermines the core principles of academic integrity, learning, and original thought... raises concerns about integrity and plagiarism.'"
  },
  {
    "id": 27,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Quyền riêng tư trong ứng dụng AI (Privacy)",
    "question": "Vấn đề quyền riêng tư (Privacy) trở thành mối quan tâm hàng đầu trong kỷ nguyên AI xuất phát từ lý do cốt lõi nào?",
    "options": [
      "Hệ thống AI yêu cầu thu thập và nạp lượng dữ liệu khổng lồ, bao gồm cả thông tin cá nhân và hành vi nhạy cảm của người dùng.",
      "Vì các mô hình AI chỉ hoạt động được khi người dùng chụp ảnh căn cước công dân công khai.",
      "Vì các công ty AI bắt buộc người dùng phải ký hợp đồng chuyển nhượng toàn bộ tài sản cá nhân.",
      "Vì dữ liệu chỉ được lưu trữ trên các ổ đĩa mềm không có mật khẩu bảo vệ."
    ],
    "correct": 0,
    "explanation": "Theo trang 20 Chapter 1: 'Privacy in AI is also a major concern. AI systems often require large amounts of data, raising questions about data collection practices, user consent, and security.'"
  },
  {
    "id": 28,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Hiện tượng Ảo giác của AI (Hallucination)",
    "question": "Hiện tượng 'Ảo giác' (Hallucination) trong các mô hình ngôn ngữ lớn như ChatGPT được hiểu là gì?",
    "options": [
      "Khi AI tự tin đưa ra thông tin sai lệch, bịa đặt số liệu hoặc sự kiện nhưng trình bày như thể đó là sự thật xác thực.",
      "Khi màn hình máy tính của người dùng bị chớp nháy màu sắc liên tục khi truy cập website.",
      "Khi AI từ chối trả lời câu hỏi và tự động phát nhạc chuông cảnh báo trên loa máy tính.",
      "Khi mô hình AI tự nhận mình là một con người bằng xương bằng thịt có hộ chiếu quốc tế."
    ],
    "correct": 0,
    "explanation": "Theo trang 21 Chapter 1: 'ChatGPT and other AI tools are not perfect and can provide misleading or incorrect responses, sometimes called hallucinations. You must critically evaluate the output and corroborate it with other sources.'"
  },
  {
    "id": 29,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Nguồn gốc của sự Thiên vị trong AI (Bias)",
    "question": "Sự thiên vị (Bias) trong kết quả sinh ra từ các mô hình AI bắt nguồn chủ yếu từ yếu tố nào?",
    "options": [
      "Từ các định kiến xã hội, sự mất cân bằng và thông tin sai lệch tồn tại sẵn trong tập dữ liệu huấn luyện được thu thập từ Internet.",
      "Do các kỹ sư lập trình cố tình gõ lệnh phân biệt đối xử vào mã nguồn của phần mềm.",
      "Do nhiệt độ của phòng đặt máy chủ CPU quá nóng làm sai lệch các phép toán số học.",
      "Do AI có cảm xúc giận dữ và định kiến cá nhân đối với một số nhóm người dùng cụ thể."
    ],
    "correct": 0,
    "explanation": "Theo trang 21 Chapter 1: 'Keep in mind that AI models like ChatGPT are trained on large datasets on the Internet, which means they gather information from sources that could be fake, prejudiced, or misleading. The datasets include the biases found in their original training data.'"
  },
  {
    "id": 30,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Nguyên tắc kiểm chứng thông tin (Fact-checking)",
    "question": "Để đảm bảo tính chính xác và trung thực khi sử dụng nội dung do AI tạo ra trong công việc và học tập, người dùng cần tuân thủ nguyên tắc nào?",
    "options": [
      "Luôn đánh giá có phản biện (critically evaluate) và đối chiếu, kiểm chứng chéo thông tin với các nguồn dữ liệu chính thống đáng tin cậy.",
      "Tuyệt đối tin tưởng 100% vào mọi văn bản do AI viết ra vì AI xử lý nhanh hơn con người.",
      "Chỉ cần kiểm tra chính tả các từ tiếng Anh, không cần quan tâm đến tính đúng sai của số liệu.",
      "Chụp ảnh màn hình câu trả lời của AI và coi đó là bằng chứng pháp lý tuyệt đối trước tòa."
    ],
    "correct": 0,
    "explanation": "Theo trang 21 Chapter 1: 'You must critically evaluate the output and corroborate it with other sources to check it for potential bias and accuracy.'"
  },
  {
    "id": 31,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Khả năng đa phương thức của Mô hình Ngôn ngữ",
    "question": "Ngoài văn bản thuần túy, mô hình ngôn ngữ hiện đại có thể nhận diện và xử lý được các dạng dữ liệu đầu vào nào sau đây?",
    "options": [
      "Giọng nói (voice), nhận dạng ký tự quang học từ tài liệu scan (OCR) và chữ viết tay (handwriting).",
      "Mùi hương và nhiệt độ vật lý của đồ vật xung quanh bàn làm việc.",
      "Tín hiệu sóng điện não trực tiếp từ xa mà không cần thiết bị cảm biến y tế chuyên dụng.",
      "Chỉ duy nhất các file văn bản thuần dạng .txt không có hình ảnh minh họa kèm theo."
    ],
    "correct": 0,
    "explanation": "Theo trang 9 Chapter 1: 'A language model can recognize voice, optical characters (scanned images), and handwriting.'"
  },
  {
    "id": 32,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Khái niệm Two Rights & a Wrong trong Chapter 1",
    "question": "Trong phần bài tập 'Two Rights & a Wrong' ở trang 5 Chapter 1, phát biểu nào sau đây là SAI?",
    "options": [
      "Chatbot AI hoàn toàn giống hệt và không có điểm gì khác biệt so với các công nghệ chăm sóc khách hàng truyền thống không dùng AI.",
      "AI đã gia tăng đáng kể tiềm năng nâng cao quan hệ khách hàng, hạn chế sai sót và hợp lý hóa quy trình công việc.",
      "The North Face sử dụng chatbot trợ lý ảo trên trang web để hỗ trợ tư vấn trang thiết bị dã ngoại phù hợp 24/7.",
      "Duolingo sử dụng AI Roleplay giúp người học rèn luyện phản xạ hội thoại thực tế với các nhân vật hư cấu."
    ],
    "correct": 0,
    "explanation": "Theo trang 5 Chapter 1: Phát biểu 'Chatbots are identical to other customer service technologies that are not AI' là câu SAI (a Wrong). Chatbot AI khác biệt vì cung cấp câu trả lời cá nhân hóa, tức thì và tương tác bắt chước con người."
  },
  {
    "id": 33,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Công cụ phân tích cảm xúc (Sentiment Analysis)",
    "question": "Công nghệ phân tích cảm xúc (Sentiment Analysis) sử dụng AI được các doanh nghiệp ứng dụng để làm gì?",
    "options": [
      "Đánh giá và phân loại các bình luận, phản hồi của khách hàng trong các bài đánh giá sản phẩm thành tích cực, tiêu cực hay trung tính.",
      "Đo nhịp tim và huyết áp của khách hàng thông qua camera bàn phím điện thoại.",
      "Tự động gửi tin nhắn đe dọa những khách hàng để lại bình luận chê bai sản phẩm.",
      "Dự đoán chỉ số thông minh IQ của người dùng dựa vào độ dài bình luận."
    ],
    "correct": 0,
    "explanation": "Theo trang 7 Chapter 1: 'sentiment analysis tools that evaluate the comments in product reviews' giúp doanh nghiệp thấu hiểu mức độ hài lòng của khách hàng."
  },
  {
    "id": 34,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Giảm thiểu sai sót y tế khi cấp phát thuốc",
    "question": "Hệ thống AI trong các đơn vị y tế hỗ trợ các y bác sĩ và dược sĩ như thế nào trước khi cấp phát thuốc cho bệnh nhân?",
    "options": [
      "Cảnh báo các vấn đề tiềm ẩn như sai liều lượng, tương tác thuốc nguy hiểm và tiền sử dị ứng của người bệnh.",
      "Tự động tăng gấp đôi liều lượng của mọi loại thuốc để bệnh nhân nhanh khỏi bệnh.",
      "Hủy bỏ toàn bộ đơn thuốc và khuyên bệnh nhân chuyển sang tự uống nước lọc.",
      "Thu hồi giấy phép hành nghề của bác sĩ nếu đơn thuốc có chữ viết không đẹp."
    ],
    "correct": 0,
    "explanation": "Theo trang 8 Chapter 1: 'AI-powered units can flag potential issues like incorrect dosages, drug interactions, and allergies before dispensing medications, reducing the chance of mistakes that could hurt patients.'"
  },
  {
    "id": 35,
    "chapterId": "ch1",
    "chapterTitle": "Chương 1: Thay Đổi Kinh Doanh Với AI",
    "topic": "Tổng kết mục tiêu chương 1",
    "question": "Sau khi hoàn thành Chương 1, kỹ năng nào sau đây KHÔNG PHẢI là mục tiêu học tập (Learning Objective) được nêu trong giáo trình?",
    "options": [
      "Tự tay thiết kế và chế tạo bo mạch phần cứng chip bán dẫn GPU trong phòng thí nghiệm vật lý.",
      "Giải thích cách chatbot được ứng dụng trong môi trường kinh doanh thực tế.",
      "Thiết kế prompt AI cho câu trả lời văn bản sử dụng nhiều định dạng khác nhau.",
      "Đánh giá công nghệ của OpenAI qua phân tích khía cạnh đạo đức, quyền riêng tư, thiên vị và độ chính xác."
    ],
    "correct": 0,
    "explanation": "Theo trang 1 Chapter 1 (Learning Objectives 1.1 đến 1.6), mục tiêu bao gồm hiểu chatbot kinh doanh, chuyển đổi tự động hóa, tính năng và giới hạn ChatGPT, thiết kế prompt, đạo đức và quyền riêng tư, phân tích thiên vị và độ chính xác. Việc chế tạo chip phần cứng GPU thuộc về lĩnh vực kỹ thuật phần cứng, không phải mục tiêu chương này."
  },
  {
    "id": 36,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Lịch sử AI thập niên 1950 & Human Computers",
    "question": "Vào thập niên 1950, khi Cơ quan Hàng không và Vũ trụ Hoa Kỳ (NASA) cần tính toán các phép toán quỹ đạo tên lửa phức tạp lên không gian, họ đã dựa vào lực lượng nào?",
    "options": [
      "Các 'Human computers' - nhóm các nhà toán học nữ chuyên giải các bài toán phức tạp bằng tay (như được khắc họa trong bộ phim Hidden Figures).",
      "Hệ thống siêu máy tính lượng tử kết nối mạng Internet toàn cầu.",
      "Các mô hình học sâu (Deep Learning) chạy trên hàng nghìn chip GPU.",
      "Các robot hình người tự động điều khiển trạm phóng tên lửa."
    ],
    "correct": 0,
    "explanation": "Theo trang 2 (trang 30 giáo trình) Chapter 2: 'In fact, when NASA needed solutions to complex calculations, like rocket launch paths to space, they often relied on human computers, groups of women who solved those hard math problems, as featured in the movie Hidden Figures.'"
  },
  {
    "id": 37,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Hội thảo Dartmouth 1956 - Khai sinh ngành AI",
    "question": "Sự kiện lịch sử nào vào năm 1956 được coi là mốc thời gian chính thức khai sinh ra lĩnh vực Trí tuệ Nhân tạo (AI)?",
    "options": [
      "Hội thảo mùa hè tại Đại học Dartmouth (Dartmouth College Summer Workshop) với sự tham gia của John McCarthy, Marvin Minsky, Allen Newell và Herbert Simon.",
      "Lễ ra mắt sản phẩm ChatGPT tại trụ sở OpenAI ở San Francisco.",
      "Cuộc thi cờ vua thế giới giữa siêu máy tính Deep Blue và Garry Kasparov.",
      "Hội nghị Liên Hợp Quốc về việc ban hành luật kiểm soát robot toàn cầu."
    ],
    "correct": 0,
    "explanation": "Theo trang 3 (trang 31 giáo trình) Chapter 2: 'The birth of the AI field starts in 1956 at the Dartmouth College Summer Workshop, where a group of creative thinkers including John McCarthy, Marvin Minsky, Allen Newell, and Herbert Simon laid the foundation for the field of AI.'"
  },
  {
    "id": 38,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Khái niệm Symbolic AI (AI Ký hiệu)",
    "question": "Thời kỳ đầu của AI (sau hội thảo Dartmouth) chứng kiến sự trỗi dậy của 'Symbolic AI' (AI ký hiệu). Phương pháp tiếp cận của Symbolic AI là gì?",
    "options": [
      "Lập trình cho máy tính bằng các quy tắc logic và mệnh đề tường minh (explicit rules and logic) để mô phỏng hành vi thông minh.",
      "Thu thập hàng tỷ hình ảnh trên mạng xã hội để huấn luyện mạng nơ-ron đa tầng.",
      "Cho robot tự học bằng cách bắt chước tiếng kêu của các loài động vật trong tự nhiên.",
      "Sử dụng thuật toán tiến hóa ngẫu nhiên không tuân theo bất kỳ nguyên lý logic nào."
    ],
    "correct": 0,
    "explanation": "Theo trang 3 Chapter 2: 'This era saw the rise of symbolic AI, where researchers focused on programming machines with explicit rules and logic to mimic intelligent behavior.'"
  },
  {
    "id": 39,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Phép thử Turing (Turing Test) & Trò chơi mô phỏng",
    "question": "Phép thử Turing (Turing Test) do nhà toán học người Anh Alan Turing đề xuất ban đầu dựa trên trò chơi có tên là gì và nhằm mục đích gì?",
    "options": [
      "Trò chơi mô phỏng (The Imitation Game), nhằm đánh giá xem liệu máy móc có khả năng thể hiện hành vi thông minh tương đương hoặc không thể phân biệt với con người hay không.",
      "Trò chơi giải ô chữ, nhằm kiểm tra khả năng tra cứu từ điển nhanh của máy tính.",
      "Trò chơi cờ vua, nhằm chứng minh máy tính có thể ghi nhớ mọi nước đi.",
      "Trò chơi trốn tìm, nhằm kiểm tra tốc độ xử lý đồ họa của màn hình vi tính."
    ],
    "correct": 0,
    "explanation": "Theo trang 4 Chapter 2: Phép thử Turing bắt nguồn từ bài báo năm 1950 của Alan Turing và trò chơi mô phỏng (Imitation Game) nhằm so sánh mối liên hệ giữa phép thử Turing và trí tuệ máy móc."
  },
  {
    "id": 40,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Thiết lập kịch bản của Phép thử Turing",
    "question": "Trong kịch bản chuẩn của Phép thử Turing (Turing Test) được mô tả ở trang 4 Chapter 2, người giám khảo (judge) thực hiện việc đánh giá như thế nào?",
    "options": [
      "Ngồi ở một phòng riêng và nhắn tin qua lại bằng văn bản với một con người và một máy tính ở hai phòng ẩn danh, sau đó xác định bên nào là người, bên nào là máy.",
      "Quan sát trực tiếp ngoại hình của robot và con người khi họ bắt tay nhau trên sân khấu.",
      "Đo thời gian phản hồi phần cứng CPU khi máy tính khởi động lại hệ điều hành.",
      "Yêu cầu máy tính và con người cùng chạy đua tiếp sức cự ly 100 mét."
    ],
    "correct": 0,
    "explanation": "Theo trang 4 Chapter 2: 'someone who serves as a judge chats with both a person and a computer program... You do not know who is behind either door, but you can chat with them by typing messages back and forth. Your job is to figure out which is the human and which is the computer.'"
  },
  {
    "id": 41,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Sự ra đời của thuật ngữ Machine Learning (ML)",
    "question": "Thuật ngữ 'Machine Learning' (Máy học) được đặt ra vào năm 1959 bởi nhà khoa học máy tính nào của tập đoàn IBM?",
    "options": [
      "Arthur Samuel",
      "Alan Turing",
      "Geoffrey Hinton",
      "John McCarthy"
    ],
    "correct": 0,
    "explanation": "Theo trang 5 Chapter 2: 'Arthur Samuel, a computer scientist at IBM, coined the term machine learning (ML).'"
  },
  {
    "id": 42,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Chương trình chơi cờ đam của Arthur Samuel",
    "question": "Chương trình máy tính tiên phong của Arthur Samuel đã minh họa cho khái niệm Máy học (Machine Learning) thông qua trò chơi nào?",
    "options": [
      "Trò chơi cờ đam (Checkers)",
      "Trò chơi cờ vua (Chess)",
      "Trò chơi cờ vây (Go)",
      "Trò chơi bài Poker"
    ],
    "correct": 0,
    "explanation": "Theo trang 5 Chapter 2: 'Samuel’s work focused on a computer program that played checkers... Each time the computer played checkers, it learned from its previous games to improve during the next game.'"
  },
  {
    "id": 43,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Định nghĩa Machine Learning trong giáo trình",
    "question": "Theo định nghĩa trong Chapter 2, Máy học (Machine Learning) là gì?",
    "options": [
      "Phương thức giúp máy tính học nhận diện các khuôn mẫu từ nhiều ví dụ và tự ra quyết định mà không cần được lập trình cụ thể từng quy tắc cho mọi quyết định.",
      "Quy trình người lập trình viên ngồi gõ mã lệnh if-else cho tất cả các tình huống có thể xảy ra trong cuộc sống.",
      "Việc nạp điện liên tục vào pin máy tính để thiết bị không bị tắt nguồn khi đang chạy.",
      "Kỹ thuật in ấn tự động tài liệu văn bản bằng máy in phun màu kết nối cổng USB."
    ],
    "correct": 0,
    "explanation": "Theo trang 5 Chapter 2: 'ML is a way for computers to learn to recognize patterns from many examples and to make decisions, without being directly programmed with specific rules for every decision.'"
  },
  {
    "id": 44,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Mùa đông AI (AI Winter) thập niên 1970",
    "question": "Thuật ngữ 'Mùa đông AI' (AI Winter) trong lịch sử phát triển trí tuệ nhân tạo dùng để chỉ giai đoạn nào và nguyên nhân chính là gì?",
    "options": [
      "Thời kỳ suy giảm nguồn tài trợ, sự quan tâm và tiến độ nghiên cứu AI (như thập niên 1970) do công nghệ phần cứng thời đó chưa đủ mạnh, máy tính đắt đỏ và cồng kềnh, không đáp ứng được kỳ vọng.",
      "Thời kỳ nhiệt độ toàn cầu giảm mạnh khiến các phòng máy tính ở Bắc Cực bị đóng băng.",
      "Giai đoạn các nhà khoa học ngừng nghiên cứu AI để tập trung sáng chế điều hòa nhiệt độ mùa đông.",
      "Thời kỳ các công ty AI bị cấm hoạt động trong suốt các tháng mùa đông hàng năm."
    ],
    "correct": 0,
    "explanation": "Theo trang 6 Chapter 2: 'The term AI winter refers to a period of reduced funding, interest, and progress in the field of AI. In the 1970s, the technology could not really support all the early ideas to turn the research into reality because computers were still basic, large, and expensive.'"
  },
  {
    "id": 45,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Sự chuyển hướng nghiên cứu thập niên 1980 - 1990",
    "question": "Sau giai đoạn AI Winter, các nhà nghiên cứu AI trong thập niên 1980 và 1990 đã thay đổi chiến lược tiếp cận như thế nào?",
    "options": [
      "Thay vì cố gắng chế tạo một cỗ máy AI tổng quát có thể làm mọi việc, họ chuyển sang tập trung giải quyết các bài toán và tác vụ cụ thể (specific tasks).",
      "Từ bỏ hoàn toàn máy tính điện tử để quay về nghiên cứu toán học thuần túy trên giấy.",
      "Cấm sử dụng mạng Internet trong các trường đại học để bảo vệ dữ liệu nghiên cứu.",
      "Tập trung chế tạo chip bán dẫn đồ chơi trẻ em thay vì phát triển thuật toán."
    ],
    "correct": 0,
    "explanation": "Theo trang 7 Chapter 2: 'Instead of trying to build a general AI computer that could do everything, researchers started focusing on specific tasks.'"
  },
  {
    "id": 46,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Khái niệm Thị giác Máy tính (Computer Vision - CV)",
    "question": "Thị giác máy tính (Computer Vision - CV) được định nghĩa như thế nào trong tài liệu Chapter 2?",
    "options": [
      "Một lĩnh vực của AI cho phép máy tính nhận thức và thấu hiểu thế giới xung quanh giống như con người bằng cách sử dụng máy ảnh, dữ liệu và thuật toán để mô phỏng thị giác.",
      "Kỹ thuật kiểm tra thị lực cho người làm việc văn phòng bằng bảng chữ cái điện tử.",
      "Hệ thống kính đeo mắt thông minh giúp người cận thị không cần phẫu thuật mắt.",
      "Phần mềm photoshop tự động chỉnh sửa mắt đỏ trong các bức ảnh chân dung."
    ],
    "correct": 0,
    "explanation": "Theo trang 7 Chapter 2: 'Computer vision (CV) is a field of artificial intelligence that allows computers to perceive and understand the world around them, just like a human, using cameras, data, and algorithms to replicate vision.'"
  },
  {
    "id": 47,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Ứng dụng sớm của Computer Vision trong công nghiệp",
    "question": "Trong thập niên 1980 - 1990, hệ thống Computer Vision ban đầu được ứng dụng thành công trong môi trường công nghiệp để thực hiện những công việc gì?",
    "options": [
      "Nhận diện các phụ tùng xe hơi, phân loại đồ vật cơ bản và phát hiện các khiếm khuyết trên bo mạch điện tử với camera độ phân giải thấp, giúp tiết kiệm thời gian và chi phí.",
      "Tự động lái xe buýt công cộng xuyên quốc gia trong điều kiện bão tuyết mịt mù.",
      "Phát hiện cảm xúc vui buồn của công nhân trên dây chuyền may mặc.",
      "Thay thế hoàn toàn giám đốc điều hành trong việc ký kết các hợp đồng kinh tế."
    ],
    "correct": 0,
    "explanation": "Theo trang 7-8 Chapter 2: Trong thập niên 1980-90, CV nhận diện vật thể cơ bản trong môi trường có kiểm soát, như nhận diện dòng xe, phụ tùng và phát hiện lỗi bo mạch, minh họa bước tiến sớm của AI robotics giúp tăng năng suất công nghiệp."
  },
  {
    "id": 48,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Bản chất của Học Sâu (Deep Learning)",
    "question": "Học sâu (Deep Learning) khác biệt và tiến bộ hơn như thế nào so với các phương pháp máy học truyền thống?",
    "options": [
      "Sử dụng các mạng nơ-ron sâu nhiều tầng phức tạp, được huấn luyện liên tục trên lượng dữ liệu khổng lồ (văn bản, hình ảnh, video) để tự động trích xuất các đặc trưng phân cấp tương tự cách học của não người.",
      "Chỉ cần nạp 5 dòng quy tắc logic đơn giản là có thể tự suy luận ra mọi hiện tượng vũ trụ.",
      "Hoạt động hoàn toàn không cần dữ liệu đầu vào mà tự sinh ra tri thức từ hư vô.",
      "Đòi hỏi máy tính phải được chôn sâu dưới lòng đất 100 mét để tránh nhiễu từ trường."
    ],
    "correct": 0,
    "explanation": "Theo trang 9 Chapter 2: 'Deep learning is like human learning, continuously practicing and improving the AI’s skills... researchers trained complex neural networks with massive amounts of data such as text, images, and videos.'"
  },
  {
    "id": 49,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Ví dụ nhận diện loài gấu trong Deep Learning",
    "question": "Ví dụ về việc phân biệt các loài gấu (gấu bắc cực, gấu nâu...) ở trang 9 Chapter 2 nhằm minh họa cho bước nhảy vọt nào của Deep Learning?",
    "options": [
      "Sự tiến bộ vượt bậc trong lĩnh vực nhận diện hình ảnh (image recognition) khi máy tính được cung cấp hàng nghìn bức ảnh để tự học phân biệt chi tiết tinh tế.",
      "Khả năng lai tạo giống gấu mới trong phòng thí nghiệm sinh học phân tử.",
      "Khả năng dự đoán tập tính săn mồi của động vật hoang dã qua vệ tinh GPS.",
      "Khả năng tạo ra các bộ phim hoạt hình 3D về loài gấu mà không cần diễn viên lồng tiếng."
    ],
    "correct": 0,
    "explanation": "Theo trang 9 Chapter 2: 'Early deep learning models advanced the field of image recognition. Imagine showing a computer thousands of pictures of every type of bear. Deep learning models became remarkably good at distinguishing between them, determining whether a bear was a polar bear, a brown bear, or another type of bear.'"
  },
  {
    "id": 50,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Đột phá phần cứng GPU cho Deep Learning",
    "question": "Đột phá phần cứng then chốt nào đã mở ra kỷ nguyên phát triển bùng nổ của việc huấn luyện mạng nơ-ron sâu?",
    "options": [
      "Bộ xử lý đồ họa (GPU - Graphics Processing Unit) có khả năng thực hiện song song khối lượng tính toán khổng lồ trên các tập dữ liệu lớn.",
      "Ổ đĩa mềm dung lượng 1.44 MB có tốc độ đọc ghi nhanh gấp 10 lần.",
      "Màn hình máy tính hiển thị chuẩn 4K siêu sắc nét.",
      "Bàn phím cơ có độ nảy cao giúp kỹ sư gõ mã lệnh nhanh hơn."
    ],
    "correct": 0,
    "explanation": "Theo trang 10 Chapter 2: 'GPUs can also be used to carry out similar computations in parallel on large datasets, which was a key breakthrough for training neural networks. GPUs turned out to be ideally suited to the computational challenges of training AI neural networks.'"
  },
  {
    "id": 51,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Giá trị và sự săn đón của các chip GPU chuyên dụng",
    "question": "Chi tiết nào trong Chapter 2 (trang 10) phản ánh mức độ quý giá và nhu cầu cực lớn đối với các chip GPU hiệu năng cao phục vụ huấn luyện AI?",
    "options": [
      "Một con chip GPU hiệu năng cao duy nhất có thể được bán với giá hơn 50.000 USD và được vận chuyển nghiêm ngặt bằng xe bọc thép (armored car).",
      "Mỗi sinh viên đại học được phát miễn phí 100 chip GPU khi nhập học.",
      "Các chip GPU được bán đại trà tại các quầy tạp hóa với giá rẻ hơn một hộp sữa.",
      "Các công ty sản xuất GPU đang phải đóng cửa vì không có ai mua linh kiện."
    ],
    "correct": 0,
    "explanation": "Theo trang 10 Chapter 2: 'GPU chips are now in such high demand for AI that a single high-performance GPU can sell for over $50,000 and is delivered in an armored car.'"
  },
  {
    "id": 52,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Đột phá kiến trúc mạng - Cơ chế Attention",
    "question": "Đột phá thứ hai về mặt kiến trúc mô hình đã thay thế cấu trúc 'tuần hoàn' (recurrence) truyền thống trong xử lý chuỗi dữ liệu là gì?",
    "options": [
      "Cơ chế chú ý (Attention mechanism) giúp mô hình xây dựng và nắm bắt các phụ thuộc ngữ cảnh trong dữ liệu hiệu quả vượt trội.",
      "Cơ chế gắp ngẫu nhiên từ khóa theo bảng chữ cái alphabet.",
      "Cơ chế xóa toàn bộ lịch sử trò chuyện sau mỗi dấu chấm câu.",
      "Cơ chế dịch từng từ một theo bảng mã ASCII đơn lẻ."
    ],
    "correct": 0,
    "explanation": "Theo trang 10 Chapter 2: 'A second development was a breakthrough in how neural networks can be expanded through new models of architecture. Instead of relying on what was called \"recurrence,\" these new models depend on an \"attention mechanism\" to develop the dependencies in the data.'"
  },
  {
    "id": 53,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Microsoft Copilot trong Microsoft Word",
    "question": "Trong ứng dụng Microsoft Word, Microsoft Copilot hỗ trợ người dùng nâng cao chất lượng văn bản bằng những tính năng nào?",
    "options": [
      "Kiểm tra ngữ pháp, gợi ý cải thiện bài viết, điều chỉnh giọng điệu chuyên nghiệp, tóm tắt và viết lại đoạn văn theo ngữ cảnh.",
      "Tự động in tài liệu ra giấy mỗi khi người dùng gõ sai chính tả.",
      "Tự động xóa toàn bộ file nếu người dùng không lưu bài trong 30 giây.",
      "Gửi tài liệu văn bản lên mạng xã hội công khai mà không hỏi ý kiến tác giả."
    ],
    "correct": 0,
    "explanation": "Theo trang 11 Chapter 2: 'In Microsoft Word, Copilot can check your grammar and suggest improvements to your writing, making your documents sound more polished and professional... Copilot considers the context and the details of your requested prompt and responds with a unique, creative response.'"
  },
  {
    "id": 54,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Tính độc đáo trong phản hồi của Microsoft Copilot",
    "question": "Khi bạn yêu cầu Microsoft Copilot trong Word xử lý cùng một câu lệnh prompt nhiều lần, điều gì sẽ xảy ra?",
    "options": [
      "Copilot sẽ đưa ra các phản hồi độc đáo, có thể lựa chọn cách diễn đạt khác hoặc thay đổi phong cách văn phong ở mỗi lần trả lời.",
      "Copilot sẽ sao chép y nguyên từng từ từ câu trả lời trước mà không đổi dù chỉ một dấu phẩy.",
      "Word sẽ lập tức bị đóng băng và yêu cầu khởi động lại máy tính.",
      "Hệ thống sẽ từ chối thực hiện và thông báo bạn đã hết số lần sử dụng trong năm."
    ],
    "correct": 0,
    "explanation": "Theo trang 11 Chapter 2: 'Even if you ask Copilot repeatedly to react to a certain prompt, you will receive different responses each time.'"
  },
  {
    "id": 55,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Tính năng Copilot Chat",
    "question": "Tính năng 'Copilot Chat' tích hợp trong các ứng dụng văn phòng có vai trò chính là gì?",
    "options": [
      "Cung cấp khung hội thoại tương tác để người dùng đặt câu hỏi, phân tích, tóm tắt hoặc yêu cầu trích xuất thông tin trực tiếp từ tài liệu đang mở.",
      "Phát trực tiếp các kênh truyền hình giải trí trong giờ làm việc.",
      "Kết nối điện thoại để gọi video quốc tế có tính cước viễn thông.",
      "Chặn tất cả các tin nhắn gửi đến hộp thư Outlook của đồng nghiệp."
    ],
    "correct": 0,
    "explanation": "Theo trang 11-13 Chapter 2: Khung hội thoại Copilot Chat cho phép người dùng đặt câu hỏi về tài liệu, chỉ định yêu cầu định dạng, phong cách và phân tích nội dung chuyên sâu."
  },
  {
    "id": 56,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Microsoft Copilot trong PowerPoint - Tạo bài thuyết trình",
    "question": "Microsoft Copilot trong ứng dụng PowerPoint có thể hỗ trợ tạo slide thuyết trình từ nguồn dữ liệu nào?",
    "options": [
      "Tự động tạo toàn bộ slide thuyết trình có cấu trúc hoàn chỉnh từ một chủ đề nhập vào hoặc từ một tài liệu Word có sẵn.",
      "Chỉ tạo slide nếu người dùng đã vẽ sẵn bản vẽ tay lên giấy và scan vào máy tính.",
      "Chỉ tạo slide khi người dùng đọc khẩu lệnh bằng tiếng Latin cổ.",
      "Tự động tải các video trên YouTube về chèn ngẫu nhiên vào slide mà không theo chủ đề."
    ],
    "correct": 0,
    "explanation": "Theo phần bài tập thực hành Prompt Along trong Chapter 2 (trang 14-23), Copilot trong PowerPoint có thể tạo cả slide deck từ prompt chủ đề hoặc chuyển đổi tài liệu Word (như Word document về Urban Rooftop Gardens) thành bài trình chiếu."
  },
  {
    "id": 57,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Thêm slide vào bài thuyết trình có sẵn (Urban Rooftop Gardens)",
    "question": "Trong ví dụ thực hành ở trang 23-24 (trang 51-52 giáo trình) về công ty 'Urban Rooftop Gardens', người dùng đã yêu cầu Copilot thêm slide về nội dung gì?",
    "options": [
      "Slide nêu bật các dịch vụ mà công ty cung cấp, bao gồm thiết kế, thi công lắp đặt và bảo trì định kỳ cho khu vườn trên sân thượng.",
      "Slide báo cáo phá sản và đóng cửa doanh nghiệp.",
      "Slide tuyển dụng lái xe tải đường dài cho chi nhánh nước ngoài.",
      "Slide công bố bảng giá mua bán bất động sản nghỉ dưỡng cao cấp."
    ],
    "correct": 0,
    "explanation": "Theo trang 23 (trang 51 giáo trình) Chapter 2: 'such as one highlighting the services that Urban Rooftop Gardens can provide. The company offers a range of services to suit each individual rooftop space, from design and installation to ongoing maintenance.'"
  },
  {
    "id": 58,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Tạo hiệu ứng động cho slide trong PowerPoint Copilot",
    "question": "Để thêm hiệu ứng chuyển động (animation) sinh động cho một slide thuyết trình bằng PowerPoint Copilot, người dùng chỉ cần nhập câu lệnh tự nhiên nào vào hộp thoại prompt?",
    "options": [
      "'Animate this slide' (Tạo hiệu ứng cho slide này)",
      "'Delete all graphics immediately' (Xóa hết đồ họa ngay lập tức)",
      "'Convert slide to Excel spreadsheet' (Chuyển slide sang bảng tính Excel)",
      "'Shutdown PowerPoint application' (Tắt ứng dụng PowerPoint)"
    ],
    "correct": 0,
    "explanation": "Theo trang 24 (trang 52 giáo trình) Chapter 2, bước 7: 'In the Copilot prompt box, type Animate this slide and click the Send button to add animation to the current slide for more interest.'"
  },
  {
    "id": 59,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Chèn hình ảnh vào slide với PowerPoint Copilot",
    "question": "Khi muốn bổ sung hình ảnh trực quan cho slide bằng Copilot, người dùng có thể thực hiện như thế nào theo hướng dẫn ở trang 24 Chapter 2?",
    "options": [
      "Gõ câu lệnh mô tả hình ảnh mong muốn vào hộp prompt (ví dụ: 'Add an image of a rooftop garden with creative design') để Copilot tự động gợi ý và chèn ảnh phù hợp.",
      "Phải tự cầm máy ảnh đi chụp và tải ảnh từ thẻ nhớ vào thư mục Windows.",
      "Bắt buộc phải vẽ tay hình ảnh trên phần mềm Paint trước khi chèn vào slide.",
      "Copilot không hỗ trợ bất kỳ thao tác nào liên quan đến hình ảnh."
    ],
    "correct": 0,
    "explanation": "Theo trang 24 Chapter 2, bước 6: 'In the Copilot prompt box, type Add an image of a rooftop garden with creative design and click the Send button. A new image is added to the slide.'"
  },
  {
    "id": 60,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Bảo vệ dữ liệu thương mại (Commercial Data Protection)",
    "question": "Khái niệm 'Bảo vệ dữ liệu thương mại' (Commercial Data Protection) được định nghĩa như thế nào trong Chapter 2 (trang 25)?",
    "options": [
      "Thực tiễn bảo vệ thông tin kinh doanh nhạy cảm như bí mật thương mại, danh sách khách hàng, số thẻ tín dụng và dữ liệu nội bộ khỏi bị truy cập hoặc tiết lộ trái phép.",
      "Việc bán dữ liệu khách hàng cho các công ty quảng cáo bên ngoài để thu thêm lợi nhuận.",
      "Việc công khai toàn bộ mật khẩu máy chủ lên trang web của công ty để nhân viên tiện đăng nhập.",
      "Biện pháp khóa cửa phòng làm việc của giám đốc bằng khóa vân tay cơ học."
    ],
    "correct": 0,
    "explanation": "Theo trang 25 (trang 53 giáo trình) Chapter 2: 'Commercial data protection is the practice of safeguarding sensitive business information such as trade secrets, customer names, credit card numbers, and other private information from unauthorized access or disclosure.'"
  },
  {
    "id": 61,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Phiên bản Doanh nghiệp (Enterprise Versions) của AI",
    "question": "Điểm ưu việt sống còn của phiên bản Enterprise (Doanh nghiệp) của các công cụ như Microsoft Copilot và ChatGPT so với các phiên bản tiêu dùng miễn phí là gì?",
    "options": [
      "Có các lớp bảo vệ nghiêm ngặt: dữ liệu công ty nhập vào không bị lưu giữ, không bị nhân viên hãng AI xem trộm và không bị sử dụng để huấn luyện các mô hình AI công khai.",
      "Cho phép tải miễn phí tất cả các bài hát có bản quyền trên mạng.",
      "Màn hình giao diện luôn hiển thị logo công ty với màu sắc vàng kim loại lấp lánh.",
      "Cung cấp quyền truy cập vào tài khoản ngân hàng của tất cả đối thủ cạnh tranh trên thị trường."
    ],
    "correct": 0,
    "explanation": "Theo trang 25 Chapter 2: 'Company versions of software are often called enterprise versions, which means that they have extra layers of protection... user and company data are protected, chat prompts and responses are not saved, the AI provider does not have direct access to your data, and your company data is not used to train the underlying AI models.'"
  },
  {
    "id": 62,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Ngôn ngữ COBOL và bối cảnh thập niên 1970",
    "question": "Trong thập niên 1970 (trang 6 Chapter 2), ngôn ngữ lập trình nào được nhắc đến như một công cụ phát triển mạnh mẽ cho các nghiệp vụ kinh doanh của ngân hàng nhưng không mang lại đột phá cho AI?",
    "options": [
      "COBOL",
      "Python",
      "Java",
      "C++"
    ],
    "correct": 0,
    "explanation": "Theo trang 6 Chapter 2: 'Computer coding languages such as COBOL had been developed for businesses like banks, but there were no significant breakthroughs in the field of AI.'"
  },
  {
    "id": 63,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "So sánh AI Ký hiệu (Symbolic AI) vs Machine Learning",
    "question": "Sự khác biệt căn bản giữa hướng tiếp cận Symbolic AI (thập niên 1950-1960) và Machine Learning là gì?",
    "options": [
      "Symbolic AI dựa trên việc lập trình thủ công các quy tắc logic cứng nhắc; còn Machine Learning cho phép hệ thống tự học các quy luật từ dữ liệu ví dụ mà không cần viết sẵn quy tắc cho từng trường hợp.",
      "Symbolic AI chỉ dùng cho máy giặt, còn Machine Learning chỉ dùng cho điện thoại bàn.",
      "Symbolic AI không dùng máy tính, còn Machine Learning chỉ chạy trên giấy vẽ đồ thị.",
      "Symbolic AI là sản phẩm của Microsoft, còn Machine Learning là độc quyền của Apple."
    ],
    "correct": 0,
    "explanation": "Theo trang 3 và trang 5 Chapter 2: Symbolic AI lập trình với các quy tắc và logic tường minh (explicit rules and logic), trong khi Machine Learning giúp máy tính nhận diện khuôn mẫu từ ví dụ mà không cần lập trình trước từng quy tắc."
  },
  {
    "id": 64,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Ý nghĩa lịch sử của bộ phim Hidden Figures",
    "question": "Bộ phim điện ảnh 'Hidden Figures' được đề cập trong Chapter 2 nhằm tôn vinh sự đóng góp của ai trong lịch sử tính toán của nhân loại?",
    "options": [
      "Các nữ toán học người Mỹ gốc Phi làm công việc tính toán quỹ đạo phóng tên lửa cho NASA trước khi máy tính điện tử trở nên phổ biến.",
      "Các điệp viên giải mã tín hiệu điện đàm trong Chiến tranh thế giới thứ hai.",
      "Những người thợ đào than vận hành máy hơi nước thời kỳ Cách mạng công nghiệp.",
      "Các kỹ sư lắp ráp dây chuyền nhà máy ô tô tại Detroit."
    ],
    "correct": 0,
    "explanation": "Theo trang 2 Chapter 2: Bộ phim Hidden Figures tái hiện câu chuyện có thật về các 'human computers' - nhóm các nhà toán học nữ (đặc biệt là phụ nữ Mỹ gốc Phi tại NASA) đã giải quyết những bài toán tính toán quỹ đạo phóng tên lửa cực khó."
  },
  {
    "id": 65,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Các học giả tại Hội thảo Dartmouth 1956",
    "question": "Nhóm bốn học giả lỗi lạc nào đã cùng tổ chức Hội thảo Dartmouth 1956 và đặt nền móng khai sinh cho ngành Trí tuệ Nhân tạo?",
    "options": [
      "John McCarthy, Marvin Minsky, Allen Newell, và Herbert Simon.",
      "Bill Gates, Steve Jobs, Mark Zuckerberg, và Elon Musk.",
      "Alan Turing, Arthur Samuel, Geoffrey Hinton, và Yann LeCun.",
      "Albert Einstein, Isaac Newton, Stephen Hawking, và Marie Curie."
    ],
    "correct": 0,
    "explanation": "Theo trang 3 Chapter 2: 'where a group of creative thinkers including John McCarthy, Marvin Minsky, Allen Newell, and Herbert Simon laid the foundation for the field of AI.'"
  },
  {
    "id": 66,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Hạn chế của Recurrence và ưu thế của Attention",
    "question": "Tại sao cơ chế Chú ý (Attention Mechanism) lại vượt trội hơn cơ chế Tuần hoàn (Recurrence) trong việc huấn luyện các mô hình ngôn ngữ lớn?",
    "options": [
      "Cơ chế Attention cho phép xử lý song song toàn bộ chuỗi dữ liệu cùng lúc và liên kết trực tiếp giữa các từ xa nhau, thay vì phải xử lý tuần tự từng từ một như Recurrence.",
      "Cơ chế Attention giúp giảm bộ nhớ RAM của máy tính xuống còn 1 KB.",
      "Cơ chế Attention bắt buộc máy tính phải nghỉ ngơi 5 phút sau mỗi câu văn.",
      "Cơ chế Attention chỉ dịch được các câu văn ngắn dưới 3 từ."
    ],
    "correct": 0,
    "explanation": "Theo trang 10 Chapter 2: Việc chuyển từ Recurrence sang Attention mechanism cho phép mạng nơ-ron mở rộng quy mô khổng lồ, xử lý các phụ thuộc dữ liệu phức tạp song song trên GPU mà không bị nghẽn cổ chai tuần tự."
  },
  {
    "id": 67,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Vai trò của dữ liệu huấn luyện lớn trong Deep Learning",
    "question": "Bên cạnh phần cứng GPU và kiến trúc Attention, yếu tố thứ ba nào đóng vai trò như 'nhiên liệu' thiết yếu cho sự thành công của Deep Learning?",
    "options": [
      "Khối lượng dữ liệu khổng lồ (văn bản, hình ảnh, âm thanh, video) được số hóa và thu thập qua Internet.",
      "Dòng điện xoay chiều 3 pha có điện áp cực cao.",
      "Việc sử dụng các loại mực in cao cấp để vẽ sơ đồ thuật toán.",
      "Số lượng các cuộc gọi điện thoại bàn giữa các nhà khoa học."
    ],
    "correct": 0,
    "explanation": "Theo trang 7-9 Chapter 2: Sự bùng nổ của Internet và dữ liệu số hóa khổng lồ đã cung cấp nguồn tài nguyên huấn luyện đồ sộ cho các mạng nơ-ron nhiều tầng, giúp mô hình học sâu đạt độ chính xác chưa từng có."
  },
  {
    "id": 68,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Lợi ích kinh tế của Computer Vision trong sản xuất",
    "question": "Hệ thống Computer Vision ban đầu trong công nghiệp đã mang lại lợi ích thiết thực gì cho các nhà máy sản xuất (trang 8 Chapter 2)?",
    "options": [
      "Phát hiện sớm các lỗi kỹ thuật và khiếm khuyết linh kiện ngay trên dây chuyền, giúp giảm phế phẩm, tiết kiệm chi phí và thời gian.",
      "Cho phép các công nhân nghỉ việc hưởng nguyên lương mà nhà máy vẫn tự động sản xuất 100%.",
      "Tự động tăng giá bán sản phẩm lên gấp 5 lần khi xuất xưởng.",
      "Ngăn chặn việc xuất khẩu hàng hóa ra thị trường quốc tế."
    ],
    "correct": 0,
    "explanation": "Theo trang 8 Chapter 2: Ngay cả với camera độ phân giải thấp thời kỳ đầu, CV đã giúp nhận diện sản phẩm và phát hiện khiếm khuyết bo mạch, tiết kiệm thời gian và tiền bạc đáng kể cho các doanh nghiệp."
  },
  {
    "id": 69,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Ứng dụng Copilot trong Excel (phân tích bảng tính)",
    "question": "Trong bộ ứng dụng văn phòng, Microsoft Copilot hỗ trợ người dùng làm việc với bảng tính Excel như thế nào?",
    "options": [
      "Phân tích dữ liệu, tạo công thức phức tạp, trích xuất thông tin chuyên sâu (insights) và tạo biểu đồ trực quan hóa dữ liệu tự động bằng các câu lệnh ngôn ngữ tự nhiên.",
      "Tự ý đổi đơn vị tiền tệ trên bảng lương của toàn bộ nhân viên sang điểm thưởng game.",
      "Tự động xóa tất cả các cột chứa số liệu tài chính nhạy cảm.",
      "Ép buộc người dùng phải gõ các lệnh bằng ngôn ngữ Assembly."
    ],
    "correct": 0,
    "explanation": "Theo Chapter 2: Copilot trong hệ sinh thái Microsoft 365 (Word, Excel, PowerPoint) cung cấp khả năng phân tích dữ liệu, gợi ý công thức và tạo biểu đồ tóm tắt xu hướng kinh doanh chỉ từ các prompt ngôn ngữ tự nhiên."
  },
  {
    "id": 70,
    "chapterId": "ch2",
    "chapterTitle": "Chương 2: Từ Phép Thử Turing Đến Học Sâu",
    "topic": "Tổng kết mục tiêu học tập Chương 2",
    "question": "Mục tiêu học tập nào sau đây KHÔNG PHẢI là nội dung cốt lõi của Chương 2 trong giáo trình?",
    "options": [
      "Lập trình thuật toán điều khiển tàu vũ trụ bay đổ bộ lên bề mặt Sao Hỏa bằng ngôn ngữ Pascal.",
      "Lần theo dấu vết tiến hóa từ khởi đầu của AI đến các ứng dụng thực tiễn ngày nay.",
      "So sánh mối quan hệ giữa phép thử Turing và trí thông minh của máy móc.",
      "Sử dụng năng lực AI của Microsoft Copilot trong Word và PowerPoint để tạo văn bản và slide thuyết trình sáng tạo."
    ],
    "correct": 0,
    "explanation": "Theo trang 1 Chapter 2 (Learning Objectives 2.1 đến 2.7), các mục tiêu gồm: tiến trình lịch sử AI, Phép thử Turing, ứng dụng Machine Learning, Deep Learning, sử dụng Copilot trong Word và PowerPoint. Việc lập trình tàu đổ bộ Sao Hỏa không thuộc nội dung chương này."
  },
  {
    "id": 71,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Tác giả và Nguồn gốc bài giảng",
    "question": "Chuyên đề bài giảng 'Prompt Engineering: CRISP và RCIFENI-O' được biên soạn và giảng dạy bởi giảng viên nào thuộc đơn vị nào?",
    "options": [
      "Tiến sĩ Trần Việt Tâm - Khoa Hệ thống Thông tin Quản lý.",
      "Giáo sư Geoffrey Hinton - Đại học Toronto.",
      "Tiến sĩ Andrew Ng - Đại học Stanford.",
      "Kỹ sư Sam Altman - Giám đốc điều hành OpenAI."
    ],
    "correct": 0,
    "explanation": "Theo trang bìa (trang 1) của slide bài giảng: 'Prompt Engineering: CRISP và RCIFENI-O... Tiến sĩ Trần Việt Tâm - Khoa Hệ thống Thông tin Quản lý.'"
  },
  {
    "id": 72,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Định nghĩa cốt lõi của Prompt Engineering",
    "question": "Theo định nghĩa trong slide bài giảng, Prompt Engineering là gì?",
    "options": [
      "Kỹ năng và kỷ luật tư duy giao việc có cấu trúc cho AI để nhận về kết quả chất lượng cao, đúng mục đích và hạn chế tối đa việc AI đoán mò.",
      "Việc bẻ khóa mã nguồn máy chủ để sử dụng tài khoản ChatGPT Plus miễn phí.",
      "Kỹ thuật sửa chữa phần cứng bàn phím máy tính để gõ phím nhanh hơn.",
      "Thuật toán ép buộc AI phải đồng ý với mọi ý kiến chủ quan của người dùng."
    ],
    "correct": 0,
    "explanation": "Theo slide bài giảng (trang 8 và 20): Prompt Engineering là ngôn ngữ giao việc cho cộng sự AI, là kỹ năng và kỷ luật tư duy giao việc rõ ràng, có cấu trúc để nhận kết quả tốt nhất."
  },
  {
    "id": 73,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Nguyên lý GIGO trong Prompting",
    "question": "Nguyên lý 'GIGO' được đề cập trong phần tác hại của việc viết prompt mơ hồ có nghĩa là gì?",
    "options": [
      "Garbage In, Garbage Out (Rác vào thì rác ra): Prompt nhập vào mơ hồ, cẩu thả thì kết quả AI trả về cũng chung chung và vô giá trị.",
      "Great Input, Great Output: Cứ nhập văn bản tiếng Anh là AI sẽ tự động trả lời xuất sắc.",
      "Google In, Google Out: Mọi câu hỏi gửi cho AI đều được chuyển tiếp lên công cụ tìm kiếm Google.",
      "General Intelligence Generated Online: Trí tuệ tổng quát được tự động sinh ra trên mạng."
    ],
    "correct": 0,
    "explanation": "Theo slide bài giảng (trang 11, mục 2.1.1): GIGO: Rác vào, rác ra. Prompt mơ hồ thì kết quả trả về là một đoạn văn bản chung chung, không dùng được."
  },
  {
    "id": 74,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Tác hại của việc tin nhầm câu trả lời của AI",
    "question": "Tại sao người dùng rất dễ mắc bẫy 'tin nhầm câu trả lời' khi đọc văn bản do AI sinh ra (mục 2.2.1)?",
    "options": [
      "Vì AI luôn viết với giọng điệu cực kỳ trôi chảy, mạch lạc và tự tin (confident tone) kể cả khi nó đang bịa đặt hoàn toàn số liệu và sự thật.",
      "Vì trên mỗi câu trả lời của AI đều có đóng dấu mộc đỏ công chứng của chính phủ.",
      "Vì AI luôn tự động gửi kèm số điện thoại của tác giả bài viết để người dùng gọi điện đối chiếu.",
      "Vì các mô hình AI không bao giờ mắc bất kỳ sai lầm nào trong tính toán."
    ],
    "correct": 0,
    "explanation": "Theo slide (trang 14): 'AI viết trôi chảy và tự tin, kể cả khi bịa số liệu. Người dùng dễ tin nhầm vì giọng điệu chắc nịch (hallucination tăng theo độ tự tin).'"
  },
  {
    "id": 75,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Tư duy nền tảng - Triết học Khắc kỷ (Stoicism)",
    "question": "Trường phái triết học nào được TS. Trần Việt Tâm vận dụng làm tư duy nền tảng cho Prompt Engineering ở mục 3.1.2?",
    "options": [
      "Triết học Khắc kỷ (Stoicism): Dồn toàn bộ sự tập trung và công sức vào những điều ta kiểm soát được (chất lượng câu hỏi, bối cảnh, tiêu chí), không kỳ vọng AI tự đoán ý mình.",
      "Triết học Hiện sinh (Existentialism): Để AI tự do lựa chọn mọi định dạng và nội dung trả lời.",
      "Chủ nghĩa Thực dụng (Pragmatism): Chỉ sử dụng AI khi có bài tập cần nộp gấp trong vòng 5 phút.",
      "Thuyết Hoài nghi tuyệt đối (Pyrrhonism): Từ chối hoàn toàn việc sử dụng máy tính trong học tập."
    ],
    "correct": 0,
    "explanation": "Theo trang 18 slide: 'Triết học Khắc kỷ (Stoicism): dồn sức vào điều ta kiểm soát được (chất lượng câu hỏi, bối cảnh, tiêu chí đánh giá), không phó mặc hay kỳ vọng AI tự hiểu tâm ý.'"
  },
  {
    "id": 76,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Ý nghĩa việc sử dụng ví dụ Tarot, Phong thủy, Cung hoàng đạo",
    "question": "Mục đích sư phạm của việc TS. Trần Việt Tâm lồng ghép các 'mồi' ví dụ như bài Tarot, Phong thủy Tết, Thần số học và Cung hoàng đạo vào bài giảng là gì?",
    "options": [
      "Biến các kỹ thuật công nghệ trừu tượng thành những ví dụ sinh động, gần gũi với sinh viên để dễ hiểu, dễ nhớ và luyện tập ráp khung prompt.",
      "Nhằm cổ vũ và định hướng sinh viên chuyển sang hành nghề bói toán chuyên nghiệp.",
      "Để chứng minh AI có năng lực tâm linh dự đoán tương lai loài người.",
      "Bắt buộc sinh viên phải xem bói trước khi bắt đầu mỗi buổi học trên lớp."
    ],
    "correct": 0,
    "explanation": "Theo slide bài giảng (trang 1 và 17, 37): Các ví dụ Tarot, Phong thủy, Thần số học, Cung hoàng đạo đóng vai trò là 'mồi kịch bản' trực quan để người học thực hành ráp các khối cấu trúc prompt vào tình huống cụ thể."
  },
  {
    "id": 77,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khung CRISP - 5 thành tố nền tảng",
    "question": "Khung CRISP bao gồm 5 thành tố nào và được áp dụng hiệu quả cho bao nhiêu phần trăm tình huống học tập?",
    "options": [
      "Context (Bối cảnh), Role (Vai trò), Input (Đầu vào), Specifics (Yêu cầu cụ thể), Performance criteria (Tiêu chí đánh giá) - Áp dụng cho 80% tình huống học tập.",
      "Create, Read, Inspect, Save, Print - Áp dụng cho 50% tình huống văn phòng.",
      "Customer, Revenue, Investment, Sales, Profit - Áp dụng cho 99% doanh nghiệp bán lẻ.",
      "Code, Review, Integrate, System, Performance - Áp dụng cho 100% dự án phần mềm."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 20 (mục 3.2.1): 'CRISP: 5 thành tố... Áp dụng cho 80% tình huống học tập. C: Context, R: Role, I: Input, S: Specifics, P: Performance criteria.'"
  },
  {
    "id": 78,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khung CRISP - Ý nghĩa của chữ P (Performance criteria)",
    "question": "Trong khung CRISP, chữ 'P' viết tắt của 'Performance criteria' mang ý nghĩa là gì?",
    "options": [
      "Tiêu chí đo lường chất lượng: Kết quả này ai sẽ đọc, dùng để làm gì và đạt chuẩn nào để được coi là thành công.",
      "Tốc độ phản hồi của đường truyền mạng Internet đo bằng mili-giây.",
      "Tỷ lệ phần trăm dung lượng pin còn lại của thiết bị khi đang chạy prompt.",
      "Chỉ số đánh giá độ phức tạp của ngôn ngữ lập trình Python."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 20: 'P: Performance criteria - Tiêu chí: ai đọc, dùng để làm gì, đạt chuẩn nào.'"
  },
  {
    "id": 79,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khung RCIFENI-O - Bản đồ 8 khối toàn diện",
    "question": "Khung toàn diện RCIFENI-O bao gồm đầy đủ 8 khối cấu trúc nào sau đây?",
    "options": [
      "Role (Vai trò), Context (Ngữ cảnh), Instructions (Hướng dẫn), Format (Trình bày), Example (Ví dụ), Notices (Lưu ý né tránh), Input (Đầu vào), OKR (Mục tiêu + Đo).",
      "Request, Command, Interface, File, Error, Network, IP, Output.",
      "Review, Check, Inspect, Fix, Edit, Note, Index, Organize.",
      "Record, Capture, Import, Filter, Export, Name, Install, Open."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 21 (mục 3.2.2): Bản đồ 8 khối RCIFENI-O gồm: Role (Vai trò), Context (Ngữ cảnh), Instructions (Hướng dẫn), Format (Trình bày), Example (Ví dụ mẫu), Notices (Lưu ý, né tránh), Input (Đầu vào), OKR (Mục tiêu + đo)."
  },
  {
    "id": 80,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Cách nhớ tiếng Việt của khung RCIFENI-O",
    "question": "Để dễ nhớ thứ tự 8 khối của khung RCIFENI-O bằng tiếng Việt, slide bài giảng đã đưa ra mẹo viết tắt chữ cái đầu là gì?",
    "options": [
      "V-N-H-T-V-N-Đ-O (Vai trò, Ngữ cảnh, Hướng dẫn, Trình bày, Ví dụ, Né tránh, Đầu vào, OKR)",
      "H-O-C-T-A-P-T-O-T (Học tập tốt, lao động tốt)",
      "A-B-C-D-E-F-G-H (Bảng chữ cái thông thường)",
      "P-R-O-M-P-T-E-R (Người viết prompt chuyên nghiệp)"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 21 và trang 47 (Phụ lục A.1): Cách nhớ tiếng Việt: V-N-H-T-V-N-Đ-O (Vai trò, Ngữ cảnh, Hướng dẫn, Trình bày, Ví dụ, Né tránh, Đầu vào, OKR)."
  },
  {
    "id": 81,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Phân biệt hai chữ 'I' trong khung RCIFENI-O",
    "question": "Trong từ viết tắt RCIFENI-O có hai chữ 'I'. Hai chữ 'I' này đại diện cho hai khối nào và khác nhau như thế nào?",
    "options": [
      "Chữ 'I' thứ nhất là Instructions (Hướng dẫn công việc cần làm); Chữ 'I' thứ hai là Input (Dữ liệu, văn bản hoặc số liệu đưa vào cho AI xử lý).",
      "Chữ 'I' thứ nhất là Internet; Chữ 'I' thứ hai là Image.",
      "Chữ 'I' thứ nhất là Introduction; Chữ 'I' thứ hai là Information.",
      "Chữ 'I' thứ nhất là Identity; Chữ 'I' thứ hai là Intelligence."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25: 'Có hai chữ I: I Instructions là việc cần làm, I Input là dữ liệu đưa vào.' Khối I1 hướng dẫn các bước thực thi, khối I2 chứa tài liệu/văn bản cần phân tích."
  },
  {
    "id": 82,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khối cốt lõi RCIF cho các việc đơn giản",
    "question": "Nhóm 4 khối đầu tiên (RCIF) trong khung 8 khối được gọi là gì và phù hợp cho những tác vụ nào?",
    "options": [
      "4 khối cốt lõi (Role, Context, Instructions, Format) - Đủ để tạo ra một prompt rõ ràng, chất lượng vượt trội cho hầu hết các công việc đơn giản thường ngày.",
      "4 khối phụ không quan trọng, có thể bỏ qua hoàn toàn.",
      "4 khối chỉ dành riêng cho các kỹ sư lập trình chip điện tử.",
      "4 khối chỉ dùng khi kết nối AI với máy bay không người lái."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 24 (mục 3.3.1): '4 khối đầu: RCIF... Với việc đơn giản, chỉ cần 4 khối này, prompt của bạn đã rõ hơn nhiều so với câu hỏi thông thường.'"
  },
  {
    "id": 83,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Điểm khác biệt độc đáo của khối Notices (N) và OKR (O)",
    "question": "Theo tác giả, hai khối Notices (Lưu ý/Né tránh) và OKR (Mục tiêu + Đo) trong bộ 4 khối sau (ENIO) mang lại giá trị khác biệt cốt lõi nào so với các cách hỏi thông thường?",
    "options": [
      "Dạy tư duy đạo đức AI (Notices: đặt ranh giới cấm đoán, chống bịa đặt) và tư duy mục tiêu đo lường kết quả (OKR: tiêu chuẩn thành công rõ ràng).",
      "Giúp AI tự động nạp tiền vào tài khoản ngân hàng của người dùng.",
      "Tự động dịch prompt sang 100 thứ tiếng khác nhau trên thế giới.",
      "Giúp máy tính không bao giờ bị nhiễm virus mã độc khi duyệt web."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25: 'Khối N và O là điểm khác biệt: dạy tư duy đạo đức AI và tư duy mục tiêu (OKR), thứ câu hỏi thông thường không có.'"
  },
  {
    "id": 84,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Kỹ thuật Few-shot trong khối Example (E)",
    "question": "Khối Example (Ví dụ mẫu) trong RCIFENI-O áp dụng kỹ thuật prompt nổi tiếng nào trong khoa học máy tính?",
    "options": [
      "Few-shot prompting: Cung cấp từ 1 đến vài mẫu đầu ra mong muốn để AI học theo khuôn mẫu định dạng và phong cách một cách chính xác.",
      "Zero-shot prompting: Không đưa ra bất kỳ thông tin nào và bắt AI tự đoán mò.",
      "One-click prompting: Tự động bấm chuột một lần trên màn hình máy tính.",
      "Random prompting: Nhập các ký tự ngẫu nhiên từ bàn phím."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25: 'Example (Ví dụ mẫu): Đưa 1 mẫu đầu ra mong muốn (few-shot). AI mô phỏng tốt khi có mẫu.'"
  },
  {
    "id": 85,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khối quan trọng nhất trong Prompt",
    "question": "Trong tất cả các khối của prompt, khối nào được nhấn mạnh là QUAN TRỌNG NHẤT, bởi vì nếu thiếu nó thì AI sẽ có xu hướng đoán mò và bịa đặt thông tin?",
    "options": [
      "Context (Ngữ cảnh)",
      "Format (Trình bày)",
      "Example (Ví dụ)",
      "Role (Vai trò)"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 48 (Phụ lục A.2): '3 nguyên tắc vàng: Context quan trọng nhất: thiếu ngữ cảnh thì AI bịa.' Khối Context giúp định vị chính xác ai đang hỏi, hoàn cảnh nào và mục đích ra sao."
  },
  {
    "id": 86,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Độ dài gợi ý cho một Prompt hiệu quả",
    "question": "Theo nguyên tắc vàng ở Phụ lục A.2 (trang 48), tổng phần người dùng tự viết trong prompt (không tính văn bản tài liệu dán vào Input) nên có độ dài như thế nào?",
    "options": [
      "Nhỏ hơn 300 từ cho hầu hết các công việc; nếu viết dài hơn thì lợi ích mang lại sẽ giảm dần.",
      "Bắt buộc phải dài trên 5.000 từ để AI thấy được sự kỳ công của người dùng.",
      "Chỉ được phép viết đúng 5 từ duy nhất.",
      "Càng dài càng tốt không giới hạn số lượng chữ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 48: 'Tổng phần bạn tự viết (không tính tài liệu dán vào Input) nhỏ hơn 300 từ cho hầu hết việc; dài hơn thì lợi ích giảm dần.'"
  },
  {
    "id": 87,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Vị trí đặt thông tin quan trọng trong khối Prompt",
    "question": "Nguyên tắc vàng thứ ba về vị trí đặt thông tin trong từng khối của prompt là gì?",
    "options": [
      "Đặt thông tin quan trọng ở đầu mỗi khối, vì mô hình AI có xu hướng chú ý phần đầu nhiều hơn.",
      "Giấu thông tin quan trọng ở giữa một đoạn văn dài để thử thách AI.",
      "Chỉ viết thông tin quan trọng bằng chữ in hoa ở dòng cuối cùng.",
      "Viết ngược các ký tự từ phải sang trái để AI tự giải mã."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 48: 'Đặt thông tin quan trọng ở đầu mỗi khối; AI chú ý phần đầu nhiều hơn.'"
  },
  {
    "id": 88,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Hiện tượng xảy ra khi thiếu từng khối trong Prompt",
    "question": "Theo bảng phân tích 'Thiếu khối nào thì hỏng' ở trang 30 của slide, nếu người dùng bỏ quên khối 'Format' (Trình bày), AI sẽ xử lý như thế nào?",
    "options": [
      "AI sẽ trả về dạng văn bản tự do, thường là các đoạn văn dài ngoằng, khó đọc, thiếu bảng biểu hay cấu trúc trực quan cần thiết.",
      "AI sẽ trả lời bằng giọng điệu thô lỗ và xúc phạm người dùng.",
      "AI sẽ tự động xóa tài liệu nguồn được dán vào Input.",
      "AI sẽ báo lỗi máy chủ sập nguồn và ngắt kết nối ngay lập tức."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 30 (mục 4.1.2): Thiếu khối Format thì AI sẽ tự ý chọn kiểu hiển thị ngẫu nhiên, sinh ra văn bản dài dòng, không đúng bảng biểu hay danh sách mong muốn."
  },
  {
    "id": 89,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Đo lường hiệu quả Prompt bằng 4 con số",
    "question": "Để đo lường một cách định lượng sự cải thiện khi áp dụng khung Prompt Engineering, slide bài giảng (trang 31) hướng dẫn theo dõi 4 chỉ số nào?",
    "options": [
      "1. Số lần hỏi lại (iterations); 2. Điểm hài lòng đầu ra (1-5); 3. Số khẳng định đã tự kiểm chứng; 4. Thời gian tới bản dùng được.",
      "1. Số like trên Facebook; 2. Tốc độ quạt tản nhiệt; 3. Giá vàng trong ngày; 4. Số trang giấy in.",
      "1. Số ký tự gõ phím; 2. Số lần nháy mắt; 3. Lượng calo tiêu thụ; 4. Số tiền điện.",
      "1. Phiên bản hệ điều hành; 2. Địa chỉ MAC; 3. Số lượng cookie trình duyệt; 4. Độ sáng màn hình."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 31 (mục 4.1.3 Đo bằng 4 con số): Bốn chỉ số gồm: Số lần hỏi lại (iterations giảm từ 3-4 lần xuống 1-2 lần), Điểm hài lòng (đạt 4-5/5), Số khẳng định đã tự kiểm chứng (mọi con số có ít nhất 1 nguồn thật), Thời gian tới bản dùng được (ngắn hơn hỏi mơ hồ)."
  },
  {
    "id": 90,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "3 nguyên tắc kỷ luật khi sử dụng AI",
    "question": "Trong phần kết luận (trang 38), ba nguyên tắc kỷ luật thép khi làm việc với AI mà người học bắt buộc phải ghi nhớ là gì?",
    "options": [
      "1. Nói rõ ý định; 2. Đọc và kiểm chứng; 3. Mọi số có bằng chứng.",
      "1. Gõ thật nhanh; 2. Tin tưởng tuyệt đối; 3. Nộp bài ngay lập tức.",
      "1. Dùng ẩn danh; 2. Không lưu lịch sử; 3. Xóa cache trình duyệt.",
      "1. Chỉ dùng tiếng Anh; 2. Không dùng dấu phẩy; 3. Tắt phần mềm diệt virus."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 38 (mục 4.3.2): 3 nguyên tắc kỷ luật: 1. Nói rõ ý định (viết trước OKR); 2. Đọc và kiểm chứng (đọc đầu ra, thử lại); 3. Mọi số có bằng chứng (AI nói '92%' thì kiểm tra, mở ít nhất 1 nguồn thật)."
  },
  {
    "id": 91,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Quy luật tương quan giữa Hallucination và độ tự tin",
    "question": "Một cảnh báo sống còn được TS. Trần Việt Tâm nhấn mạnh ở trang 38 về hiện tượng ảo giác (hallucination) là gì?",
    "options": [
      "AI càng khẳng định chắc nịch thì người dùng càng phải hoài nghi và kiểm chứng, vì hiện tượng ảo giác thường tăng tỷ lệ thuận với độ tự tin của câu trả lời.",
      "Chỉ khi AI ngập ngừng và xin lỗi thì câu trả lời mới bị sai số liệu.",
      "Nếu AI trích dẫn đường link thì đường link đó luôn luôn hoạt động 100%.",
      "Mọi con số do AI đưa ra đều đã được Hội đồng Khoa học quốc tế kiểm duyệt sẵn."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 38: 'Có khung rồi vẫn có thể tin nhầm và mất điểm. AI càng khẳng định chắc, càng phải nghi. Hallucination tăng theo độ tự tin của câu trả lời.'"
  },
  {
    "id": 92,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "So sánh RCIFENI-O với các khung khác (RTF, 5-Layer, CREATE)",
    "question": "Mối quan hệ giữa khung RCIFENI-O và các khung viết prompt phổ biến khác trên thế giới (như RTF, 5-Layer, CREATE) được đúc kết như thế nào tại Phụ lục A.3 (trang 49)?",
    "options": [
      "RTF, 5-Layer, CREATE đều là tập con của RCIFENI-O; khi đã nắm vững khung toàn diện 8 khối thì có thể áp dụng cho mọi tình huống, việc nhỏ thì linh hoạt bỏ bớt khối.",
      "Các khung trên hoàn toàn mâu thuẫn và xung đột lẫn nhau, không thể áp dụng chung.",
      "RCIFENI-O đã lỗi thời và bị thay thế hoàn toàn bởi khung RTF 3 chữ cái.",
      "Khung CREATE chỉ dùng được cho giáo viên mầm non, không dùng được cho sinh viên."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 49: 'RTF, 5-Layer, CREATE đều là tập con của RCIFENI-O. Học 1 khung đầy đủ thì dùng được mọi tình huống. Việc nhỏ thì bỏ bớt khối.'"
  },
  {
    "id": 93,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Công cụ gõ tắt 1 - Tiện ích Magical",
    "question": "Công cụ 'Magical' được giới thiệu ở Phụ lục A.8 (trang 54) là phần mềm gì và hỗ trợ người dùng viết prompt như thế nào?",
    "options": [
      "Là tiện ích mở rộng trên trình duyệt Chrome, cho phép lưu sẵn khung RCIFENI-O thành mẫu gõ tắt (ví dụ gõ 'rrr' sẽ tự động bung ra 8 khối) để điền thông tin nhanh trên các web AI.",
      "Là phần mềm giả lập chơi game bài Tarot 3D có lồng tiếng bản quyền.",
      "Là ứng dụng tự động kiểm tra số dư tài khoản ngân hàng của sinh viên.",
      "Là phần mềm chặn quảng cáo trên YouTube."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 54: 'Tiện ích Magical trên Chrome Web Store... Lưu khung RCIFENI-O thành 1 mẫu: gõ \"rrr\" thì bung ra đủ 8 khối, chỉ việc điền chỗ trống. Hợp khi dùng AI trên trình duyệt.'"
  },
  {
    "id": 94,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Công cụ gõ tắt 2 - Phần mềm Beeftext",
    "question": "Phần mềm mã nguồn mở 'Beeftext' được giới thiệu ở Phụ lục A.9 (trang 55) có ưu thế nổi bật gì so với các tiện ích trình duyệt?",
    "options": [
      "Cài đặt trực tiếp trên hệ điều hành Windows, hoạt động trong mọi ứng dụng của máy tính (Word, Notepad, Zalo, chat...) chứ không bị giới hạn trong trình duyệt web.",
      "Chỉ chạy được trên máy tính của Apple chạy hệ điều hành macOS.",
      "Bắt buộc người dùng phải trả phí bản quyền hàng tháng bằng tiền điện tử Bitcoin.",
      "Tự động gửi email bài tập về nhà cho giảng viên sau khi soạn thảo xong."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 55: 'Beeftext: Dễ nhớ: Beef = bò, Text = chữ... Mã nguồn mở, cho Windows desktop. Chạy trong mọi ứng dụng (Word, Notepad, app chat), không chỉ trình duyệt. Cài 1 lần, dùng khắp máy.'"
  },
  {
    "id": 95,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Phản biện ngược - Khi nào KHÔNG CẦN dùng đủ khung 8 khối",
    "question": "Trong phần Phản biện ngược (mục 5.2, trang 43-45), tình huống nào sau đây được coi là KHÔNG NHẤT THIẾT phải viết đầy đủ cả 8 khối prompt?",
    "options": [
      "Khi đang trò chuyện nhiều lượt (conversational), khám phá ý tưởng tự do (brainstorming), hoặc chỉ cần tra cứu nhanh định nghĩa của một thuật ngữ đơn giản.",
      "Khi đang làm bài tiểu luận tốt nghiệp cuối khóa chiếm 50% tổng số điểm.",
      "Khi soạn thảo bản báo cáo phân tích tài chính gửi Hội đồng Quản trị công ty.",
      "Khi thiết kế kịch bản marketing đa kênh cho một chiến dịch quảng cáo trị giá hàng tỷ đồng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 44-45 (mục 5.2.1 & 5.2.2): Khung đầy đủ phát huy sức mạnh nhất trong các bài toán lớn, cần kết quả chuẩn xác ngay (one-shot). Trong các tình huống trao đổi hội thoại nhiều lượt, động não tự do, hoặc tra cứu định nghĩa nhanh thì việc ép đủ 8 khối là rườm rà không cần thiết."
  },
  {
    "id": 96,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Ứng dụng vào trải bài Tarot Thập giá Celtic (Celtic Cross)",
    "question": "Trong kịch bản thực hành giải đoán bài Tarot ở Phụ lục A.4 (trang 50), kiểu trải bài cổ điển nào được đưa vào làm dữ liệu thực hành ráp khung RCIFENI-O?",
    "options": [
      "Trải bài Thập giá Celtic (Celtic Cross)",
      "Trải bài 1 lá duy nhất rút ngẫu nhiên",
      "Trải bài tam giác quỷ Bermuda",
      "Trải bài theo 64 quẻ Kinh Dịch"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 50 (Phụ lục A.4): 'Prompt cho trải Thập giá... ráp khung RCIFENI-O để phân tích trải bài Celtic Cross với đầy đủ các khối Vai trò, Ngữ cảnh, Hướng dẫn, Trình bày, Né tránh, Input và OKR.'"
  },
  {
    "id": 97,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Ráp prompt RCIFENI-O hoàn chỉnh - Ví dụ hướng nghiệp",
    "question": "Trong ví dụ ráp prompt hoàn chỉnh ở trang 26 của slide, vai trò [R] được chỉ định cho AI là gì?",
    "options": [
      "Chuyên viên tư vấn hướng nghiệp am hiểu tâm lý Gen Z.",
      "Giám đốc ngân hàng thế giới đang thẩm định hồ sơ vay vốn.",
      "Đầu bếp trưởng của một nhà hàng ẩm thực Pháp 3 sao Michelin.",
      "Phi hành gia đang thực hiện nhiệm vụ ngoài không gian vũ trụ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 26 (mục 3.3.3): '[R] Đóng vai chuyên viên tư vấn hướng nghiệp am hiểu tâm lý Gen Z. [C] Em là sinh viên năm 2... [I] Phân tích điểm mạnh, điểm yếu...'"
  },
  {
    "id": 98,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Độ dài gợi ý cho khối Role (Vai trò)",
    "question": "Theo bảng khuyến nghị độ dài ở Phụ lục A.2 (trang 48), khối Role (Vai trò) nên được viết ngắn gọn trong khoảng bao nhiêu từ?",
    "options": [
      "3 đến 8 từ",
      "50 đến 100 từ",
      "500 từ trở lên",
      "Chỉ đúng 1 chữ duy nhất"
    ],
    "correct": 0,
    "explanation": "Theo bảng Phụ lục A.2 (trang 48): Khối Role có độ dài gợi ý từ 3 đến 8 từ (ví dụ: 'chuyên viên tư vấn hướng nghiệp Gen Z')."
  },
  {
    "id": 99,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Độ dài gợi ý cho khối Context (Ngữ cảnh)",
    "question": "Theo bảng khuyến nghị độ dài ở Phụ lục A.2 (trang 48), khối Context (Ngữ cảnh) nên có độ dài trong khoảng bao nhiêu từ và xây dựng theo mô hình nào?",
    "options": [
      "25 đến 50 từ, xây dựng dựa trên mô hình 5W1H (Ai, Cái gì, Ở đâu, Khi nào, Tại sao, Như thế nào).",
      "Dưới 3 từ và chỉ nêu tên trường đại học.",
      "Khoảng 1.000 từ mô tả tiểu sử gia đình từ 3 đời trước.",
      "Không giới hạn số từ và bắt buộc phải viết bằng tiếng Latinh."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 24 và 48: Khối Context có độ dài gợi ý từ 25 đến 50 từ, trình bày súc tích theo cấu trúc 5W1H để định vị bối cảnh rõ ràng nhất cho AI."
  },
  {
    "id": 100,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Độ dài gợi ý cho khối Instructions (Hướng dẫn)",
    "question": "Khối Instructions (Hướng dẫn việc cần làm) nên có độ dài gợi ý là bao nhiêu từ và được trình bày theo hình thức nào tốt nhất (trang 24 và 48)?",
    "options": [
      "20 đến 40 từ, được đánh số thứ tự từng bước (step-by-step) cụ thể và rõ ràng.",
      "100 đến 200 từ viết thành một đoạn văn xuôi liền mạch không ngắt câu.",
      "1 đến 2 từ viết tắt.",
      "Chỉ sử dụng các biểu tượng cảm xúc emoji thay cho chữ viết."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 24 và 48: Khối Instructions có độ dài gợi ý 20 đến 40 từ; tốt nhất nên đánh số thứ tự từng bước thực hiện để AI xử lý mạch lạc theo trình tự logic."
  },
  {
    "id": 101,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Bản chất khối Notices (Lưu ý, né tránh)",
    "question": "Nội dung thường được đưa vào khối Notices (Né tránh/Lưu ý) trong một prompt chuẩn mực bao gồm những gì?",
    "options": [
      "Các điều cấm, cảnh báo, giới hạn phạm vi (ví dụ: không tiên đoán tiêu cực, không bịa đặt số liệu, bắt buộc trích dẫn nguồn, tuân thủ đạo đức).",
      "Mật khẩu tài khoản ngân hàng của tác giả câu hỏi.",
      "Lời khen ngợi tâng bốc mô hình AI để nó vui lòng.",
      "Danh sách các bộ phim hoạt hình yêu thích của người dùng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25: 'Notices: Cấm và cảnh báo. Ví dụ: Không tiên đoán cái chết, không phán xét định mệnh, không bịa số liệu, phải trích nguồn.'"
  },
  {
    "id": 102,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khái niệm OKR trong viết Prompt",
    "question": "Trong khối O (OKR - Objectives and Key Results), người dùng cần nói rõ cho AI biết điều gì?",
    "options": [
      "Mục tiêu cốt lõi của câu trả lời là gì và kết quả then chốt nào dùng để đo lường mức độ hoàn thành nhiệm vụ.",
      "Tên của công ty khởi nghiệp mà người dùng dự định thành lập trong tương lai.",
      "Tỷ lệ lạm phát mục tiêu của Ngân hàng Nhà nước trong năm tới.",
      "Mức lương kỳ vọng của người dùng sau khi ra trường."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25: 'O (OKR): Thành công là gì và đo bằng gì. Ví dụ: Mục tiêu rút 3 luận điểm; Đo: đủ để viết 1 đoạn tiểu luận 150 từ.'"
  },
  {
    "id": 103,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "So sánh Khung CRISP và Khung RCIFENI-O",
    "question": "Điểm tương đồng và khác biệt chính giữa khung CRISP (5 thành tố) và khung RCIFENI-O (8 khối) được tổng kết tại trang 22 là gì?",
    "options": [
      "Cả hai cùng chung một triết lý tư duy giao việc rõ ràng; RCIFENI-O chi tiết hơn khi tách Specifics thành Instructions & Format, đồng thời bổ sung thêm 3 khối chuyên biệt: Example, Notices (đạo đức) và OKR (đo lường).",
      "CRISP chỉ dùng cho máy tính bảng, còn RCIFENI-O chỉ dùng cho điện thoại thông minh.",
      "CRISP được sáng chế bởi OpenAI, còn RCIFENI-O là của Google.",
      "Hai khung này đối lập hoàn toàn về mặt triết lý và không thể chuyển đổi cho nhau."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 22 (mục 3.2.3): 'Cả hai cùng một ý... RCIFENI-O (8 khối) chi tiết hóa CRISP (5 thành tố), bổ sung thêm khối Example (ví dụ mẫu), Notices (lưu ý, né tránh/đạo đức) và OKR (tiêu chí đo lường cụ thể).'"
  },
  {
    "id": 104,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Kịch bản Marketing liên ngành",
    "question": "Trong kịch bản thực hành 'Marketing liên ngành' ở trang 34 của slide, các khối prompt được ứng dụng như thế nào?",
    "options": [
      "Ráp các khối để yêu cầu AI xây dựng chiến dịch truyền thông kết hợp văn hóa dân gian (Phong thủy Tết) với sản phẩm tiêu dùng, có quy định rõ ràng về thông điệp, đối tượng và điều cấm kỵ.",
      "Yêu cầu AI tự động mua quảng cáo trên Facebook bằng thẻ tín dụng ảo.",
      "Tạo ra các video deepfake lừa đảo người tiêu dùng trên TikTok.",
      "Gửi thư rác spam hàng loạt vào hòm thư điện tử của tất cả khách hàng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 34 (mục 4.2.2 Kịch bản Marketing liên ngành): Sử dụng các khối RCIFENI-O để lên chiến dịch truyền thông đa kênh kết hợp yếu tố văn hóa truyền thống một cách văn minh, chuyên nghiệp và đo lường được."
  },
  {
    "id": 105,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Bài học từ 4 'mồi' kịch bản",
    "question": "Thông điệp cốt lõi được rút ra từ '4 mồi kịch bản' (Tarot, Phong thủy, Thần số học, Cung hoàng đạo) ở mục 4.3.1 (trang 37) là gì?",
    "options": [
      "Dù là bất kỳ chủ đề nào, nếu có khung tư duy rõ ràng và cấu trúc chuẩn mực thì bạn đều có thể làm chủ và điều khiển AI tạo ra kết quả xuất sắc, có kiểm soát.",
      "Tất cả các mô hình AI đều có niềm tin vào chiêm tinh học phương Tây.",
      "Việc học công nghệ thông tin bắt buộc phải đi kèm với việc học bói toán cổ đại.",
      "Không thể áp dụng kỹ thuật prompt cho các môn học khoa học tự nhiên."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 37: 4 mồi, một bài học: Cốt lõi không nằm ở lá bài hay cung hoàng đạo, mà nằm ở kỹ năng làm chủ công cụ và kỷ luật tư duy cấu trúc hóa vấn đề khi làm việc với AI."
  },
  {
    "id": 106,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Tác hại của việc sửa đi sửa lại nhiều lần",
    "question": "Chu trình tiêu cực 'Hỏi lần 1 -> Nhận câu trả lời sai lệch -> Sửa lần 2 -> Vẫn lộn xộn' ở mục 2.1.2 (trang 12) dẫn đến hậu quả gì cho người dùng?",
    "options": [
      "Lãng phí thời gian, ức chế tinh thần, mất niềm tin vào công nghệ và tốn nhiều công sức hơn cả việc tự làm thủ công.",
      "Làm tăng tuổi thọ của pin máy tính xách tay lên gấp 2 lần.",
      "Giúp người dùng đạt điểm tuyệt đối trong tất cả các kỳ thi.",
      "Khiến máy chủ AI tự động gửi quà tri ân đến địa chỉ nhà riêng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 12: 'Sửa đi sửa lại: Hỏi lần 1 không ra ý, sửa lần 2 vẫn lan man, sửa lần 3 mất kiên nhẫn. Prompt mơ hồ gây lãng phí thời gian và làm giảm hiệu suất làm việc nghiêm trọng.'"
  },
  {
    "id": 107,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Một việc, 3 cách hỏi trong mở đầu bài giảng",
    "question": "Trong câu chuyện mở đầu 'Một việc, 3 cách hỏi' (trang 6 slide), Bạn C khác biệt với Bạn A và Bạn B ở điểm mấu chốt nào?",
    "options": [
      "Bạn C áp dụng câu hỏi có cấu trúc kỹ thuật rõ ràng (vai trò, bối cảnh, tiêu chí), nhờ đó nhận được bản thảo hoàn chỉnh dùng được ngay sau một lần hỏi duy nhất.",
      "Bạn C trả tiền thuê bao ChatGPT bản cao cấp nhất.",
      "Bạn C gọi điện trực tiếp cho giám đốc OpenAI để nhờ viết hộ.",
      "Bạn C gõ câu hỏi bằng thơ lục bát."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 6 (mục 1.1.2): Bạn A hỏi cụt lủn -> kết quả vô ích. Bạn B thêm chút bối cảnh -> kết quả tạm được. Bạn C hỏi có cấu trúc kỹ thuật -> kết quả chính xác, dùng được ngay lập tức."
  },
  {
    "id": 108,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Quy tắc kiểm chứng độc lập mọi khẳng định quan trọng",
    "question": "Khi AI đưa ra một số liệu thống kê hoặc một kết luận quan trọng (ví dụ: 'tỷ lệ đạt 92%'), nguyên tắc số 3 (trang 38) yêu cầu người học phải làm gì?",
    "options": [
      "Tự mở ít nhất một nguồn tài liệu thực tế đáng tin cậy (sách giáo trình, bài báo khoa học, trang dữ liệu chính thống) để đối chiếu và kiểm chứng số liệu.",
      "Chép ngay số liệu đó vào bài thi và khẳng định AI không bao giờ sai.",
      "Hỏi lại AI xem nó có chắc chắn không, nếu nó bảo chắc thì tin ngay.",
      "Đăng bài lên Facebook để hỏi ý kiến cộng đồng mạng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 38: '3. Mọi số có bằng chứng: AI nói \"92%\" thì kiểm tra. Khẳng định quan trọng thì tự mở 1 nguồn thật để kiểm lại. Mọi con số đều đã kiểm ít nhất 1 nguồn.'"
  },
  {
    "id": 109,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Mức độ ưu tiên của các khối trong RCIFENI-O",
    "question": "Trong bảng phân loại mức độ ở Phụ lục A.2 (trang 48), những khối nào được xếp vào nhóm 'Cốt lõi' (Core)?",
    "options": [
      "Role, Context, Instructions, Format",
      "Example, Notices, Input, OKR",
      "Chỉ duy nhất khối Example",
      "Chỉ duy nhất khối OKR"
    ],
    "correct": 0,
    "explanation": "Theo bảng Phụ lục A.2 (trang 48): Nhóm Cốt lõi gồm 4 khối đầu: Role (cốt lõi), Context (cốt lõi), Instructions (cốt lõi), Format (cốt lõi). Input, OKR, Notices thuộc nhóm 'nên có'; Example thuộc nhóm 'tùy chọn'."
  },
  {
    "id": 110,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Đặc điểm của khối Example (Ví dụ mẫu)",
    "question": "Khối Example được phân loại ở mức độ nào trong bảng thiết kế prompt và nên sử dụng khi nào (trang 48)?",
    "options": [
      "Mức độ 'Tùy chọn' (Optional), nên sử dụng khi muốn AI mô phỏng chính xác một cấu trúc đầu ra đặc biệt hoặc phong cách viết đặc thù khó diễn đạt bằng lời.",
      "Mức độ 'Bắt buộc tuyệt đối 100%', nếu thiếu prompt sẽ hoàn toàn vô giá trị.",
      "Mức độ 'Bị cấm hoàn toàn', không bao giờ được đưa ví dụ vào prompt.",
      "Chỉ được dùng cho các bài toán tính tích phân nâng cao."
    ],
    "correct": 0,
    "explanation": "Theo bảng Phụ lục A.2: Khối Example ở mức 'tùy chọn' (độ dài gợi ý 0-60 từ); đặc biệt hữu ích khi cần AI bắt chước mẫu cấu trúc cụ thể (few-shot learning)."
  },
  {
    "id": 111,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khung RTF (Role, Task, Format)",
    "question": "Khung RTF (Role, Task, Format) được đánh giá như thế nào tại bảng so sánh ở Phụ lục A.3?",
    "options": [
      "Là khung cơ bản nhất, phù hợp cho việc tra cứu nhanh, chuyển đổi định dạng tài liệu đơn giản.",
      "Là khung cao cấp nhất thế giới do NASA phát minh.",
      "Là khung chỉ dành riêng cho việc thiết kế mạch in điện tử.",
      "Là khung bị cấm sử dụng trong tất cả các trường đại học."
    ],
    "correct": 0,
    "explanation": "Theo Phụ lục A.3 (trang 49): 'RTF (Role, Task, Format): Bản chất là khung cơ bản: tra cứu nhanh, đổi định dạng.'"
  },
  {
    "id": 112,
    "chapterId": "ch3",
    "chapterTitle": "Chương 3: Kỹ Thuật Viết Prompt (CRISP & RCIFENI-O)",
    "topic": "Khung CREATE trong Marketing",
    "question": "Khung CREATE (Character, Request, Examples, Additions, Type, Extras) trong Phụ lục A.3 thường được ứng dụng chuyên sâu cho lĩnh vực nào?",
    "options": [
      "Lĩnh vực sáng tạo nội dung, marketing và viết bài truyền thông.",
      "Lĩnh vực kế toán kiểm toán và báo cáo thuế nhà nước.",
      "Lĩnh vực điều khiển vệ tinh thời tiết quỹ đạo thấp.",
      "Lĩnh vực khai thác mỏ than lộ thiên."
    ],
    "correct": 0,
    "explanation": "Theo Phụ lục A.3 (trang 49): 'CREATE (Character, Request, Examples, Additions, Type, Extras): Bản chất là Sáng tạo: marketing, nội dung.'"
  },
  {
    "id": 113,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Ảo tưởng 'Thu hẹp để chiến thắng' (The Myth of Shrinking to Win)",
    "question": "Theo quan điểm trong Chapter 4, tại sao chiến lược 'Cắt giảm chi phí và nhân sự để lên đỉnh' (cut their way to the top) lại là một ảo tưởng sai lầm đối với các tổ chức?",
    "options": [
      "Cắt giảm có thể cần thiết để sinh tồn trong ngắn hạn, nhưng để 'Thắng Lớn' (win big), tổ chức bắt buộc phải: Đầu tư (Invest), Đổi mới (Innovate) và Tăng trưởng (Grow).",
      "Vì cắt giảm nhân sự sẽ khiến công ty bị phạt thuế thu nhập doanh nghiệp ở mức tối đa.",
      "Vì các công cụ AI sẽ từ chối phục vụ những doanh nghiệp có quy mô dưới 100 nhân viên.",
      "Vì khi cắt giảm chi phí thì giá cổ phiếu của công ty luôn luôn giảm về 0."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 2 Chapter 4: 'The Myth of Shrinking to Win: Organizations often try to \"cut their way to the top\" by reducing fat and overhead. While essential for survival in some cases, it’s not a strategy for winning big. To win big, you must: Invest, Innovate, Grow.'"
  },
  {
    "id": 114,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "AI là Trí tuệ Tăng cường (Augmented Intelligence)",
    "question": "Các tổ chức chiến thắng trong tương lai nhìn nhận và định vị công nghệ AI theo góc nhìn nào (trang 3)?",
    "options": [
      "Nhìn nhận AI là Trí tuệ Tăng cường (Augmented Intelligence) nhằm giúp nhân viên trở nên tài năng, sáng tạo và năng suất hơn, thay vì chỉ là công cụ thay thế con người.",
      "Coi AI là công cụ duy nhất để sa thải toàn bộ nhân viên nhằm tối đa hóa lợi nhuận của ban giám đốc.",
      "Xem AI là một trò chơi giải trí dành riêng cho phòng công nghệ thông tin trong giờ nghỉ trưa.",
      "Coi AI là mối đe dọa quân sự cần phải bị cấm hoàn toàn trong kinh doanh."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 3 Chapter 4: 'The winners of tomorrow leverage AI today to make employees more capable and creative. They view AI as Augmented Intelligence rather than Artificial Intelligence.'"
  },
  {
    "id": 115,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Dự đoán của Geoffrey Hinton năm 2016",
    "question": "Năm 2016, nhà khoa học tiên phong Geoffrey Hinton đã đưa ra dự đoán gây tranh cãi nào về ngành y tế (trang 3)?",
    "options": [
      "Học sâu (Deep Learning) sẽ giỏi hơn các bác sĩ chẩn đoán hình ảnh (radiologists) trong vòng 5 năm, và do đó các trường y nên ngừng đào tạo bác sĩ X-quang.",
      "AI sẽ chữa khỏi hoàn toàn tất cả các bệnh nan y trong vòng 2 năm.",
      "Robot sẽ thay thế toàn bộ điều dưỡng viên tại tất cả bệnh viện vào năm 2018.",
      "Máy tính sẽ từ chối đọc phim X-quang nếu không được trả lương bằng tiền mặt."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 3 Chapter 4: 'In 2016, Geoffrey Hinton predicted that deep learning would be better than radiologists in 5 years, implying we should stop training them.'"
  },
  {
    "id": 116,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Nghịch lý Bác sĩ X-quang (The Radiologist Paradox)",
    "question": "Thực tế diễn ra 10 năm sau lời dự đoán của Geoffrey Hinton về các bác sĩ X-quang là gì (trang 4)?",
    "options": [
      "Bác sĩ X-quang không hề bị biến mất, thậm chí các trường y đang đào tạo nhiều bác sĩ X-quang hơn bao giờ hết vì nhu cầu chẩn đoán hình ảnh mở rộng bùng nổ.",
      "100% bác sĩ X-quang trên thế giới đã thất nghiệp và phải chuyển sang làm nghề khác.",
      "Các bệnh viện đã đập bỏ toàn bộ máy chụp X-quang và MRI để tiết kiệm điện.",
      "Công nghệ AI hoàn toàn thất bại và không thể đọc được bất kỳ tấm phim chụp nào."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 4 Chapter 4: '10 years later: Radiologists have not gone extinct. In fact, we are training more of them now. Did AI fail? No, it’s doing things we couldn’t imagine a decade ago. The answer lies in Jevons Paradox.'"
  },
  {
    "id": 117,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Nguồn gốc lịch sử của Nghịch lý Jevons (1865)",
    "question": "Nghịch lý Jevons (Jevons Paradox) được nhà kinh tế học William Stanley Jevons phát hiện vào năm 1865 dựa trên quan sát thực tế nào?",
    "options": [
      "Việc động cơ hơi nước sử dụng than hiệu quả hơn không làm giảm tiêu thụ than, mà trái lại đã làm tăng vọt tổng lượng than tiêu thụ trên toàn xã hội.",
      "Việc phát minh ra bóng đèn điện khiến cho số lượng nến sáp bán ra tăng gấp 10 lần.",
      "Việc xây dựng thêm đường cao tốc giúp loại bỏ hoàn toàn tình trạng tắc đường tại London.",
      "Việc trồng thêm lúa mì khiến cho giá bánh mì tăng vọt không kiểm soát."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 5 Chapter 4: 'Origin (1865): William Stanley Jevons observed that more efficient steam engines led to increased total coal consumption.'"
  },
  {
    "id": 118,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Quy luật cốt lõi của Nghịch lý Jevons",
    "question": "Mối quan hệ nhân quả cốt lõi giải thích cho Nghịch lý Jevons được thể hiện qua công thức nào ở trang 5 Chapter 4?",
    "options": [
      "Efficiency ↑ (Hiệu quả tăng) → Cost ↓ (Chi phí trên mỗi đơn vị giảm) → Demand ↑ (Nhu cầu tổng thể bùng nổ mạnh mẽ)",
      "Efficiency ↑ → Cost ↑ → Demand ↓",
      "Cost ↑ → Efficiency ↓ → Demand = 0",
      "Demand ↑ → Efficiency ↓ → Cost ↑"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 5 Chapter 4: 'Why? As efficiency goes up, costs go down, and demand increases. Cheap energy made previously cost-prohibitive use cases practical, increasing overall demand. Efficiency ↑ Cost ↓ Demand ↑.'"
  },
  {
    "id": 119,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Bài học lịch sử từ Phần mềm Bảng tính (Spreadsheets)",
    "question": "Khi phần mềm bảng tính điện tử (như VisiCalc, Lotus 1-2-3, Excel) ra đời tự động hóa các phép tính số học, thị trường việc làm của ngành kế toán đã biến chuyển như thế nào (trang 6)?",
    "options": [
      "Nhu cầu phân tích tài chính bùng nổ; kế toán viên được giải phóng để làm công việc phân tích chiến lược bậc cao, tạo ra thêm nhiều việc làm mới với yêu cầu kỹ năng cao hơn.",
      "Nghề kế toán bị xóa sổ hoàn toàn trên thế giới trong vòng 6 tháng.",
      "Các công ty không còn cần nộp báo cáo tài chính hàng quý cho cơ quan thuế nữa.",
      "Mọi người quay lại ghi chép sổ sách kế toán thủ công bằng bút lông trên giấy điệp."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 6 Chapter 4: 'Spreadsheets automated arithmetic. Initial thought: We won’t need accountants anymore. Reality: Demand for financial analysis exploded. Accountants were freed up to do higher-level thinking. Entirely new categories of work emerged, requiring more people with higher skill levels.'"
  },
  {
    "id": 120,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Nghịch lý Jevons trong Kỹ nghệ Phần mềm hiện nay",
    "question": "Trong làn sóng cách mạng mã nguồn với AI (như GitHub Copilot), Nghịch lý Jevons đang diễn ra như thế nào đối với các kỹ sư phần mềm (trang 7)?",
    "options": [
      "Xây dựng phần mềm trở nên rẻ hơn và nhanh hơn → Doanh nghiệp yêu cầu thêm nhiều tính năng phức tạp, tùy biến sâu và ứng dụng mới → Nhu cầu tuyển dụng kỹ sư phần mềm TĂNG LÊN để đáp ứng khối lượng công việc mới này.",
      "Lập trình viên bị sa thải hàng loạt vì AI tự viết mọi hệ điều hành trong 1 giây.",
      "Các trường đại học đóng cửa toàn bộ khoa Công nghệ thông tin.",
      "Chi phí mua phần mềm máy tính tăng lên gấp 1.000 lần khiến không ai dùng app nữa."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 7 Chapter 4: 'The AI Coding Revolution: The Expectation: We will need fewer software engineers. The Reality: Building software is now cheaper and faster. The Result: Businesses demand more complex features... Net Effect: The demand for software engineers and developers increases to meet this massive new workload.'"
  },
  {
    "id": 121,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Các nhóm ngành nghề mới xuất hiện trong thời đại AI",
    "question": "Những nhóm ngành nghề mới nào đang xuất hiện trong các tổ chức nhờ sự phát triển của AI theo trang 8 Chapter 4?",
    "options": [
      "AI Product Managers & Prompt Engineers, AI Ethicists & Safety Engineers, AI Integration Managers.",
      "Thợ cơ khí sửa chữa máy kéo hơi nước thế kỷ 19.",
      "Nhân viên sao chép văn bản bằng tay trong thư viện.",
      "Người gõ máy chữ cơ học chuyên nghiệp tại tòa án."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 4: Các vị trí mới xuất hiện gồm: AI Product Managers & Prompt Engineers; AI Ethicists & Safety Engineers; AI Integration Managers."
  },
  {
    "id": 122,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Sự mở rộng của các dịch vụ Đuôi dài (Long-Tail Services)",
    "question": "Khái niệm 'Sự mở rộng của các dịch vụ đuôi dài' (Expansion of Long-Tail Services) trong Chapter 4 mang ý nghĩa là gì?",
    "options": [
      "AI giúp giảm mạnh chi phí sản xuất dịch vụ chuyên sâu, biến các dịch vụ cao cấp vốn đắt đỏ (như gia sư cá nhân hóa, chăm sóc sức khỏe theo yêu cầu, tư vấn pháp lý ngách) trở nên phổ biến và tiếp cận được số đông khách hàng.",
      "Việc kéo dài thời gian bảo hành sản phẩm điện tử lên 50 năm.",
      "Việc nối thêm dây cáp mạng Internet ra các vùng đảo xa xôi.",
      "Dịch vụ cắt tỉa lông đuôi cho thú cưng bằng robot tự động."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 4: 'Expansion of Long-Tail Services: Custom tutoring and personalized healthcare; Niche legal analysis... services previously priced out of the market now become economically feasible.'"
  },
  {
    "id": 123,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Case study công ty tư vấn Incrementa",
    "question": "Ví dụ về công ty tư vấn Incrementa ở trang 8 minh họa cho việc AI giúp các doanh nghiệp tư vấn nhỏ đạt được điều gì?",
    "options": [
      "Sử dụng AI tự động hóa phân tích dữ liệu, giúp họ cung cấp dịch vụ tư vấn chiến lược cho các doanh nghiệp vừa và nhỏ (SMEs) - đối tượng trước đây không đủ khả năng tài chính thuê tư vấn truyền thống.",
      "Sa thải toàn bộ nhân viên tư vấn và chỉ để lại một giám đốc điều hành duy nhất.",
      "Chuyển từ tư vấn kinh doanh sang sản xuất chip vi xử lý máy tính.",
      "Tự động tăng giá dịch vụ tư vấn lên gấp 10 lần đối với các khách hàng nhỏ lẻ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 4: 'Example: Boutique consulting firms (e.g., Incrementa) use AI to automate data analysis, allowing them to serve Small and Medium Enterprises (SMEs) previously priced out of the market.'"
  },
  {
    "id": 124,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Kỳ vọng gia tăng (Raised Expectations) từ khách hàng",
    "question": "Theo trang 8 Chapter 4, khi AI nâng cao năng suất thì kỳ vọng của khách hàng thay đổi như thế nào và dẫn đến điều gì?",
    "options": [
      "Khách hàng đòi hỏi tốc độ nhanh hơn, chất lượng cao hơn và tính sẵn sàng liên tục, dẫn đến nhu cầu gia tăng về công việc tích hợp hệ thống, giám sát và bảo đảm niềm tin.",
      "Khách hàng sẵn sàng chờ đợi câu trả lời trong vòng 1 tháng mà không phàn nàn.",
      "Khách hàng không còn quan tâm đến tính chính xác của dữ liệu sản phẩm.",
      "Mọi người từ chối mua hàng qua Internet và chỉ mua tại chợ truyền thống."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 4: 'Raised Expectations: Demand for speed, quality, and availability leads to more work in integration, oversight, and trust.'"
  },
  {
    "id": 125,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Case Study Capital One - Trí tuệ Tăng cường",
    "question": "Tập đoàn tài chính ngân hàng Capital One đã ứng dụng Generative AI như thế nào và đạt được kết quả gì (trang 9)?",
    "options": [
      "Cung cấp thông tin theo thời gian thực cho nhân viên chăm sóc khách hàng, giúp họ xử lý các yêu cầu phức tạp nhanh hơn, tăng sự hài lòng của khách mà KHÔNG cắt giảm nhân sự.",
      "Thay thế 100% nhân viên tổng đài bằng máy trả lời tự động ghi âm sẵn.",
      "Tự động duyệt tất cả các khoản vay tín dụng không giới hạn mà không cần thẩm định.",
      "Chuyển đổi toàn bộ tiền gửi của khách hàng sang tiền ảo."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 9 Chapter 4: 'Capital One: Uses Generative AI to provide customer service agents with real-time information. Result: Agents resolve complex inquiries faster, increasing customer satisfaction without reducing headcount.'"
  },
  {
    "id": 126,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Case Study Chipotle - Tuyển dụng thông minh",
    "question": "Chuỗi nhà hàng Chipotle đã áp dụng AI trong khâu tuyển dụng mang lại lợi ích cụ thể gì cho các nhà quản lý (trang 9)?",
    "options": [
      "Tăng gấp đôi lượng ứng viên và cắt giảm 50% thời gian tuyển dụng, giúp các nhà quản lý được giải phóng khỏi việc giấy tờ hành chính để tập trung cố vấn, đào tạo và nâng cao trải nghiệm nhân viên.",
      "Tự động từ chối tất cả ứng viên nộp hồ sơ xin việc qua mạng.",
      "Thay thế toàn bộ đầu bếp trong bếp bằng cánh tay robot rán thịt.",
      "Buộc các nhân viên phải làm việc liên tục 24 giờ không nghỉ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 9 Chapter 4: 'Chipotle: Applied AI in recruitment to double applicant flow and cut hiring time by 50%. Result: Managers are freed from administrative tasks to focus on mentoring, training, and employee experience.'"
  },
  {
    "id": 127,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Sự dịch chuyển cơ cấu công việc (Shifting Job Landscape)",
    "question": "Trong bức tranh dịch chuyển việc làm do AI tạo ra (trang 10), nhóm vai trò nào sẽ giảm đi và nhóm vai trò nào sẽ gia tăng mạnh mẽ?",
    "options": [
      "Giảm các công việc lặp đi lặp lại, ít quyền tự quyết (routine, low-discretion); Tăng các vai trò đòi hỏi bối cảnh cao và trách nhiệm giải trình cao (high-context, high-accountability).",
      "Giảm các công việc cần tư duy phản biện; Tăng các công việc khuân vác thủ công.",
      "Giảm nhân sự cấp quản lý; Tăng số lượng thư ký đánh máy chữ.",
      "Không có bất kỳ sự thay đổi nào trong cơ cấu việc làm của xã hội."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 4: 'Fewer routine, low-discretion roles. More high-context, high-accountability roles (Problem framing, Human-in-the-loop decision making, Customer-facing requiring EQ, Cross-functional coordination).'"
  },
  {
    "id": 128,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Các vai trò High-Context, High-Accountability",
    "question": "Những nhiệm vụ then chốt nào sau đây thuộc về nhóm vai trò 'Bối cảnh cao & Trách nhiệm cao' mà con người bắt buộc phải dẫn dắt?",
    "options": [
      "Định hình vấn đề và đặt mục tiêu (Problem framing & goal setting), ra quyết định có con người giám sát (Human-in-the-loop governance), và tương tác cảm xúc với khách hàng.",
      "Nhập liệu các con số vào bảng biểu liên tục trong 8 tiếng.",
      "Quét mã vạch sản phẩm trên băng chuyền đóng gói hàng hóa.",
      "Khởi động lại modem phát wifi khi mất tín hiệu kết nối."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 4: Các vai trò High-Context do con người dẫn dắt gồm: Problem framing and goal setting; Human-in-the-loop decision making (supervision, governance); Customer-facing roles requiring emotional intelligence; Cross-functional coordination."
  },
  {
    "id": 129,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Tác động ròng của AI lên lực lượng lao động (The Net Gain)",
    "question": "Động lực cốt lõi (Core Dynamic) về tác động của AI lên thị trường lao động được đúc kết như thế nào tại trang 11 Chapter 4?",
    "options": [
      "AI làm giảm lượng lao động cần thiết trên mỗi tác vụ đơn lẻ, nhưng mở rộng mạnh mẽ quy mô của những việc khả thi về mặt kinh tế, từ đó làm TĂNG tổng lượng việc làm mà con người được tuyển dụng để hỗ trợ.",
      "AI làm tăng chi phí của từng công việc và thu hẹp toàn bộ nền kinh tế thế giới.",
      "AI khiến cho mọi doanh nghiệp đều phải ngừng sản xuất kinh doanh.",
      "AI chỉ tạo ra lợi nhuận cho các nhà sản xuất phần cứng máy tính."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 11 Chapter 4: 'The Core Dynamic: AI reduces the labor required per task, but dramatically expands what is economically feasible. It increases the total amount of work humans are employed to support.'"
  },
  {
    "id": 130,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Báo cáo của Diễn đàn Kinh tế Thế giới (WEF Insight)",
    "question": "Thông tin chi tiết từ Diễn đàn Kinh tế Thế giới (World Economic Forum - WEF) được trích dẫn tại trang 11 chỉ ra điều gì về các công ty chủ động áp dụng AI?",
    "options": [
      "Các công ty chủ động áp dụng AI thường ghi nhận mức tăng trưởng việc làm và doanh thu cao hơn, bởi vì năng suất gia tăng thúc đẩy doanh nghiệp mở rộng quy mô kinh doanh.",
      "Các công ty áp dụng AI thường phá sản trong vòng 3 tháng đầu tiên.",
      "Các công ty áp dụng AI bị các quỹ đầu tư mạo hiểm rút toàn bộ vốn.",
      "Các công ty áp dụng AI phải trả gấp đôi lương cho mọi nhân viên ngay lập tức."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 11 Chapter 4: 'World Economic Forum Insight: Companies that actively adopt AI often experience higher employment and revenue growth because increased productivity drives business expansion.'"
  },
  {
    "id": 131,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "4 kỹ năng thiết yếu cho nhân viên thời đại AI",
    "question": "Bộ 4 kỹ năng cốt lõi mà một nhân viên cần trau dồi để phát triển vượt bậc trong thời đại AI (trang 12) bao gồm những gì?",
    "options": [
      "Khả năng thích ứng & linh hoạt (Adaptability & Flexibility), Học tập suốt đời (Lifelong Learning), Tư duy phản biện (Critical Thinking), Sáng tạo (Creativity).",
      "Tốc độ gõ phím 10 ngón, Kỹ năng sửa máy in, Ghi nhớ bảng tuần hoàn, Lắp ráp thùng máy vi tính.",
      "Kỹ năng dịch chuyển tức thời, Khả năng đọc suy nghĩ người khác, Thôi miên, Tiên tri.",
      "Khả năng làm việc 72 giờ không ngủ, Không ăn uống, Chịu nhiệt độ đóng băng, Thở dưới nước."
    ],
    "correct": 0,
    "explanation": "Theo sơ đồ trang 12 Chapter 4 (Skills for the AI Era): 4 kỹ năng thiết yếu gồm: Adaptability & Flexibility; Lifelong Learning; Critical Thinking; Creativity."
  },
  {
    "id": 132,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Đặc trưng của Tổ chức 'Kém thông minh' (Not-So-Smart Organizations)",
    "question": "Theo tổng kết tại trang 13, đặc điểm điển hình của những tổ chức 'Kém thông minh' khi đối mặt với làn sóng AI là gì?",
    "options": [
      "Bận rộn tìm cách cắt giảm chi phí để lên đỉnh, chỉ tập trung vào việc sa thải nhân viên (reducing headcount) và kết quả là bỏ lỡ chuyến tàu phát triển của AI.",
      "Đầu tư quá nhiều ngân sách vào việc đào tạo và nâng cấp kỹ năng cho nhân viên.",
      "Liên tục đổi mới và tìm kiếm các bài toán thực tiễn mới cho công nghệ.",
      "Khuyến khích nhân viên chủ động sử dụng AI để sáng tạo nội dung."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 13 Chapter 4: 'Not-So-Smart Organizations: Busy trying to cut their way to the top. Focused on reducing headcount. Missing the AI train.'"
  },
  {
    "id": 133,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Đặc trưng của Tổ chức 'Thông minh' (Smart Organizations)",
    "question": "Ngược lại, các tổ chức và cá nhân 'Thông minh' (Smart Organizations & People) sẽ hành động như thế nào trong kỷ nguyên AI (trang 13)?",
    "options": [
      "Chủ động đổi mới, tìm kiếm các ca ứng dụng giá trị mới, tận dụng AI làm lợi thế cạnh tranh chiến lược và nâng cao kỹ năng cho đội ngũ nhân sự.",
      "Cấm toàn bộ nhân viên truy cập Internet trong giờ hành chính.",
      "Chờ đợi cho đến khi các đối thủ cạnh tranh áp dụng xong mới bắt đầu tìm hiểu.",
      "Bán lại toàn bộ bản quyền phần mềm máy tính cho các công ty thanh lý tài sản."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 13 Chapter 4: 'Smart Organizations & People: Innovating and finding new use cases. Using AI for competitive advantage. Employees are skilling up to leverage this new dynamic.'"
  },
  {
    "id": 134,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Công nghệ là Đòn bẩy Chiến lược (Strategic Enabler)",
    "question": "Quan điểm xem công nghệ như một 'Đòn bẩy chiến lược' (Strategic Enabler) ở trang 2 Chapter 4 có nghĩa là gì?",
    "options": [
      "Công nghệ không đơn thuần là chi phí cần cắt giảm, mà là công cụ kích hoạt và mở rộng khả năng tạo ra giá trị mới, mở ra các thị trường mới mà trước đây chưa thể chạm tới.",
      "Công nghệ là thứ chỉ dùng để trang trí văn phòng làm việc cho hiện đại.",
      "Công nghệ bắt buộc phải thay thế hoàn toàn ban giám đốc điều hành.",
      "Công nghệ chỉ có ích khi giá mua bản quyền phần mềm bằng 0 đồng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 2 Chapter 4: 'Smart organizations view technology as a strategic enabler' - đòn bẩy chiến lược giúp mở rộng năng lực tổ chức, đổi mới sáng tạo và tạo ra lợi thế cạnh tranh bền vững."
  },
  {
    "id": 135,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Human-in-the-loop trong quản trị",
    "question": "Khái niệm 'Human-in-the-loop' (Con người trong vòng lặp quyết định) trong quản trị doanh nghiệp ứng dụng AI đóng vai trò gì?",
    "options": [
      "Đảm bảo con người giữ vai trò giám sát, định hướng đạo đức, chịu trách nhiệm pháp lý và đưa ra phán đoán quyết định cuối cùng trong các trường hợp rủi ro hoặc phức tạp.",
      "Bắt buộc con người phải lặp đi lặp lại một thao tác thủ công giống như một con quay.",
      "Loại bỏ hoàn toàn con người ra khỏi mọi quy trình vận hành của công ty.",
      "Chỉ cho phép con người tham gia vào việc dọn dẹp vệ sinh phòng máy chủ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 4: 'Human-in-the-loop decision making (supervision, governance)' khẳng định con người giữ quyền quản trị, đạo đức và chịu trách nhiệm cho các quyết định trọng yếu."
  },
  {
    "id": 136,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Sự thông minh của công ty trong việc sử dụng nhân sự",
    "question": "Kết luận quan trọng của các công ty thông minh về nhu cầu nhân sự trong thời đại AI ở trang 11 là gì?",
    "options": [
      "Họ hiểu sâu sắc rằng họ sẽ cần NHIỀU HƠN và NHỮNG NHÂN VIÊN THÔNG MINH HƠN (more and smarter employees) để phát huy tối đa sức mạnh của AI.",
      "Họ nhận ra rằng họ không cần bất kỳ nhân viên nào có bằng đại học nữa.",
      "Họ tin rằng AI sẽ tự quản lý công ty mà không cần sự hiện diện của con người.",
      "Họ chỉ cần tuyển dụng những người biết gõ mã máy tính Assembly."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 11 Chapter 4: 'Smart companies understand they will need more and smarter employees to leverage AI.' Năng suất cao thúc đẩy kinh doanh mở rộng, dẫn đến nhu cầu nhân sự trình độ cao tăng lên."
  },
  {
    "id": 137,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Vai trò Trí tuệ Cảm xúc (EQ) trong giao tiếp khách hàng",
    "question": "Tại sao các vị trí tiếp xúc trực tiếp với khách hàng (customer-facing roles) đòi hỏi Trí tuệ Cảm xúc (EQ) lại ngày càng có giá trị cao trong thời đại AI?",
    "options": [
      "Vì AI chỉ có thể trả lời thông tin kỹ thuật, trong khi sự thấu cảm, khả năng an ủi, lắng nghe và kết nối cảm xúc chân thật giữa người với người là điều máy móc không thể thay thế.",
      "Vì khách hàng ghét việc nói chuyện bằng ngôn ngữ tự nhiên.",
      "Vì chỉ những người có EQ cao mới biết cách bấm chuột máy tính.",
      "Vì các công ty muốn tiết kiệm chi phí mua sắm bàn ghế văn phòng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 4: Các công việc routine bị tự động hóa, nhưng các vị trí tiếp xúc khách hàng đòi hỏi EQ, sự thấu hiểu và phán đoán bối cảnh sâu sắc lại ngày càng trở nên thiết yếu và được coi trọng."
  },
  {
    "id": 138,
    "chapterId": "ch4",
    "chapterTitle": "Chương 4: AI Trong Tổ Chức & Doanh Nghiệp",
    "topic": "Tổng kết mục tiêu chương AI trong Tổ chức",
    "question": "Thông điệp đúc kết quan trọng nhất gửi tới mỗi nhân viên trong kỷ nguyên AI từ Chapter 4 là gì?",
    "options": [
      "Đừng lo sợ bị AI thay thế, hãy chủ động nâng cao năng lực (skilling up), học cách làm việc cùng AI như một đòn bẩy gia tăng giá trị cá nhân và thích ứng linh hoạt.",
      "Hãy ngừng học tập vì AI đã biết mọi thứ trong vũ trụ.",
      "Hãy chuyển sang làm những công việc không sử dụng điện nước để tránh cạnh tranh với AI.",
      "Hãy cố gắng ghi nhớ thật nhiều văn bản để thi xem ai nhớ lâu hơn máy tính."
    ],
    "correct": 0,
    "explanation": "Theo toàn bộ Chapter 4 (đặc biệt trang 12-13): Thông điệp cốt lõi là AI đóng vai trò Trí tuệ Tăng cường; nhân viên cần chủ động nâng cấp kỹ năng (skilling up), tư duy phản biện và sáng tạo để đón đầu cơ hội mở rộng việc làm."
  },
  {
    "id": 139,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Tổng quan và Quy luật phát triển của Giới hạn AI",
    "question": "Quy luật lịch sử mang tính nhất quán về các giới hạn của AI được đúc kết ở phần mở đầu Chapter 5 là gì?",
    "options": [
      "Các chuyên gia từng nhiều lần tuyên bố 'AI sẽ không bao giờ làm được X', nhưng hầu hết đều sai vì AI đã phát triển theo cấp số nhân và liên tục vượt qua các giới hạn cũ.",
      "Các dự đoán bi quan của con người về việc AI thất bại đều đã trở thành sự thật.",
      "Trí tuệ nhân tạo đã hoàn toàn dừng phát triển kể từ năm 2020.",
      "AI chỉ có thể giải quyết được các bài toán số học đơn giản dành cho học sinh tiểu học."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 2 Chapter 5: 'Một quá trình nhất quán: Các chuyên gia từng nói \"AI sẽ không bao giờ làm được X.\" Hầu hết đều sai. AI đã phát triển theo cấp số nhân. Bài học chính: Đừng đặt cược chống lại AI — nhưng hãy hiểu AI vẫn cần con người ở đâu.'"
  },
  {
    "id": 140,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Kim tự tháp DIKW - 4 cấp độ",
    "question": "Kim tự tháp DIKW mô tả tiến trình chuyển đổi từ tầng thấp nhất đến tầng cao nhất theo thứ tự nào?",
    "options": [
      "Dữ liệu (Data) → Thông tin (Information) → Tri thức (Knowledge) → Trí tuệ (Wisdom)",
      "Thông tin → Dữ liệu → Trí tuệ → Tri thức",
      "Trí tuệ → Tri thức → Thông tin → Dữ liệu",
      "Dữ liệu → Tri thức → Thông tin → Trí tuệ"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 3-4 Chapter 5: Kim tự tháp DIKW gồm 4 cấp độ: Data (Dữ liệu), Information (Thông tin), Knowledge (Tri thức), và Wisdom (Trí tuệ)."
  },
  {
    "id": 141,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Ví dụ cụ thể về 4 cấp độ trong Kim tự tháp DIKW",
    "question": "Trong ví dụ cụ thể ở trang 4 Chapter 5, phát biểu nào sau đây thể hiện cấp độ 'Tri thức' (Knowledge)?",
    "options": [
      "Diễn giải: 'Hầu hết mọi người trong phòng đều dưới 21 tuổi.'",
      "Dữ kiện thô: '10, 6, 42, 8.'",
      "Ngữ cảnh: 'Đây là số tuổi của những người đang ở trong phòng.'",
      "Ứng dụng mục đích: 'Lên kế hoạch tổ chức các hoạt động sinh hoạt phù hợp cho thanh thiếu niên.'"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 4 Chapter 5: Dữ liệu (Data) là các số thô: 10, 6, 42, 8; Thông tin (+ ngữ cảnh) là tuổi người trong phòng; Tri thức (+ diễn giải) là hầu hết dưới 21 tuổi; Trí tuệ (+ ứng dụng, mục đích) là lên kế hoạch hoạt động phù hợp."
  },
  {
    "id": 142,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Ánh xạ các cấp độ DIKW sang Công nghệ",
    "question": "Theo bảng ánh xạ công nghệ ở trang 5 Chapter 5, cấp độ 'Tri thức' (Knowledge) tương ứng với công nghệ nào và hiện trạng của AI ra sao?",
    "options": [
      "Tương ứng với AI / Machine Learning (các quy luật được suy ra từ dữ liệu); AI hiện nay cực kỳ xuất sắc ở tầng Tri thức này.",
      "Tương ứng với Cơ sở dữ liệu thô (Database) chỉ dùng để lưu trữ số liệu.",
      "Tương ứng với hệ điều hành MS-DOS thập niên 1980.",
      "Tương ứng với máy tính cơ học dùng bánh răng của thế kỷ 18."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 5 Chapter 5: Cấp độ Tri thức ánh xạ sang công nghệ AI/ML (các quy luật suy ra từ dữ liệu). AI hiện tại xuất sắc ở tầng Tri thức — tìm quy luật, trả lời câu hỏi, tạo nội dung."
  },
  {
    "id": 143,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Biên giới cuối cùng của AI trong Kim tự tháp DIKW",
    "question": "Tầng nào trong Kim tự tháp DIKW được xác định là 'biên giới cuối cùng' mà AI hiện tại chưa thể chạm tới và vẫn là đặc quyền của con người?",
    "options": [
      "Trí tuệ (Wisdom) - Khả năng phán đoán, đánh giá giá trị, đạo đức và mục đích cuộc sống.",
      "Dữ liệu (Data) - Việc ghi nhớ các chuỗi ký tự thô.",
      "Thông tin (Information) - Việc thêm ngữ cảnh vào bảng tính.",
      "Bộ nhớ đệm (Cache) - Việc lưu tạm hình ảnh trên ổ cứng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 4-5 Chapter 5: 'Trí tuệ — khả năng đánh giá và mục đích — vẫn là biên giới cuối cùng... Thách thức: liệu nó có thể đạt đến Trí tuệ? Khung lý thuyết này sẽ dẫn dắt toàn bộ cuộc thảo luận về giới hạn của AI.'"
  },
  {
    "id": 144,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn đã giải quyết 1 - Suy luận & Cờ vua (Deep Blue)",
    "question": "Sự kiện lịch sử nào vào năm 1997 đã đánh dấu việc AI phá vỡ giới hạn về suy luận chiến lược trong cờ vua?",
    "options": [
      "IBM Deep Blue đánh bại Garry Kasparov - nhà vô địch cờ vua thế giới.",
      "AlphaGo đánh bại Lee Sedol trong giải đấu cờ vây tại Seoul.",
      "ChatGPT thi đỗ kỳ thi cấp chứng chỉ hành nghề luật sư tại Mỹ.",
      "Máy tính ENIAC tính toán thành công bảng quỹ đạo tên lửa pháo binh."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 7 Chapter 5: '1997: IBM Deep Blue đánh bại Garry Kasparov — nhà vô địch cờ vua thế giới. Cờ vua đòi hỏi khả năng tính toán trước, nhận diện khuôn mẫu và suy luận chiến lược.'"
  },
  {
    "id": 145,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn đã giải quyết 1 - AlphaGo và Cờ vây",
    "question": "Chiến thắng của AlphaGo năm 2016 được coi là kỳ tích chấn động của AI trong suy luận phức tạp vì không gian trạng thái của cờ vây lên tới con số khổng lồ nào?",
    "options": [
      "10^170 trạng thái (lớn hơn rất nhiều so với tổng số nguyên tử trong toàn bộ vũ trụ quan sát được)",
      "Chỉ khoảng 1.000 trạng thái",
      "Đúng 64 ô trạng thái giống như cờ tướng",
      "1 triệu trạng thái"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 7 Chapter 5: '2016: AlphaGo đánh bại vô địch cờ vây (Cờ vây = 10^170 trạng thái). Kết luận: Đã giải quyết. AI sánh ngang hoặc vượt con người trong suy luận ở nhiều lĩnh vực có cấu trúc.'"
  },
  {
    "id": 146,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn đã giải quyết 2 - Xử lý Ngôn ngữ Tự nhiên (NLP)",
    "question": "Tiến trình phát triển từ ELIZA (1965) qua IBM Watson (2011) đến ChatGPT (2022+) minh chứng cho việc AI đã giải quyết được thách thức gì trong ngôn ngữ tự nhiên?",
    "options": [
      "Từ chỗ chỉ khớp từ khóa theo quy tắc cứng nhắc chuyển sang thấu hiểu ngữ cảnh sâu sắc, chơi chữ, sự hài hước và suy luận ý định thực sự của người dùng.",
      "Biết cách phát âm chuẩn tiếng Anh giọng bản ngữ qua loa phát thanh công cộng.",
      "Tự động dịch tất cả các ngôn ngữ cổ đại đã bị thất truyền mà không cần tài liệu đối chiếu.",
      "Loại bỏ hoàn toàn nhu cầu giao tiếp bằng lời nói giữa con người với nhau."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 5: ELIZA (1965: khớp từ khóa) -> Watson (2011: thắng Jeopardy!, hiểu chơi chữ & hàm ý) -> ChatGPT (2022+: suy luận ý định, hiểu sự hài hước). Kết luận: Đã giải quyết."
  },
  {
    "id": 147,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn đã giải quyết 3 - Sự Sáng tạo (Creativity)",
    "question": "Trước luận điểm 'Máy tính không thể thực sự sáng tạo mà chỉ xào nấu lại tác phẩm có sẵn', phản biện được đưa ra ở trang 9 Chapter 5 là gì?",
    "options": [
      "Con người cũng học hỏi và chịu ảnh hưởng từ những người đi trước (nhạc sĩ nào cũng có thần tượng); con người kết hợp và biến đổi để tạo cái mới, và AI ngày nay cũng đang làm chính xác điều đó.",
      "Máy tính có thể tự sinh ra các ý tưởng nghệ thuật từ giấc mơ khi tắt nguồn.",
      "Các bức tranh của AI vẽ ra luôn đẹp hơn tranh của danh họa Leonardo da Vinci.",
      "Tất cả các nghệ sĩ con người đều đã ngừng sáng tác để nhường chỗ cho AI."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 9 Chapter 5: 'Phản biện: Các nghệ sĩ cũng bị ảnh hưởng bởi người đi trước. Nhạc sĩ nào cũng có thần tượng. Chúng ta kết hợp và biến đổi — AI cũng vậy.' AI đã giải quyết sáng tạo trong mỹ thuật, âm nhạc, văn học, code và khoa học."
  },
  {
    "id": 148,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Ứng dụng sáng tạo của AI trong Khoa học - AlphaFold",
    "question": "Công cụ AI nào được nhắc đến ở trang 9 và trang 23 đã tạo nên bước ngoặt lịch sử trong khoa học khi giải quyết bài toán dự đoán cấu trúc phân tử và protein?",
    "options": [
      "AlphaFold",
      "Midjourney",
      "Suno",
      "ELIZA"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 9 và trang 23 Chapter 5: 'Khoa học: cấu trúc protein (AlphaFold). 2024: AlphaFold 3 dự đoán cấu trúc phân tử & protein.'"
  },
  {
    "id": 149,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn đã giải quyết 4 - Nhận thức Thời gian thực",
    "question": "Minh chứng rõ ràng nhất cho thấy AI đã giải quyết thành công bài toán 'Nhận thức môi trường và ra quyết định trong thời gian thực' (trang 10) là gì?",
    "options": [
      "Công nghệ xe tự lái (cảm nhận xe xung quanh, dự đoán quỹ đạo mili-giây, phanh và chuyển làn) và robot công nghiệp hoạt động trong không gian không cấu trúc.",
      "Hệ thống đèn giao thông nhấp nháy theo đồng hồ hẹn giờ cố định 60 giây.",
      "Các camera an ninh chụp ảnh lưu vào thẻ nhớ để hôm sau xem lại.",
      "Máy bán nước ngọt tự động nhả lon khi nhét đồng xu vào khe."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 5: 'Giới hạn 4 (Đã giải quyết): Nhận thức Thời gian thực... Xe tự lái cảm nhận phương tiện, dự đoán quỹ đạo mili-giây, phanh chuyển làn; Robot công nghiệp gắp vật thể hình dáng bất kỳ, hợp tác an toàn.'"
  },
  {
    "id": 150,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn giải quyết một phần 1 - Trí tuệ Cảm xúc (EQ)",
    "question": "Tại sao Trí tuệ Cảm xúc (EQ) của AI chỉ được coi là 'ĐÃ GIẢI QUYẾT MỘT PHẦN' theo phân tích ở trang 12 Chapter 5?",
    "options": [
      "Vì AI có thể nhận diện giọng điệu tốt và giả lập sự thấu cảm qua từ ngữ, nhưng nó KHÔNG CÓ cảm xúc chân thật; nó chỉ suy luận từ quy luật ngôn ngữ chứ không có trải nghiệm sống.",
      "Vì các mô hình AI chỉ có thể nhận biết cảm xúc vui, không nhận biết được cảm xúc buồn.",
      "Vì người dùng không bao giờ cảm thấy gắn kết cảm xúc với chatbot.",
      "Vì AI chỉ có thể giao tiếp cảm xúc bằng tiếng Pháp."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 12 Chapter 5: 'Khoảng trống: AI chỉ giả lập nhận thức cảm xúc — nó không cảm nhận. Nó suy luận từ quy luật ngôn ngữ, không phải trải nghiệm sống... Nhận diện giọng điệu: Tốt; Thể hiện thấu cảm: Giả lập; Cảm xúc chân thật: Không có.'"
  },
  {
    "id": 151,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn giải quyết một phần 2 - Ảo giác (Hallucination)",
    "question": "Nguyên nhân gốc rễ gây ra hiện tượng 'Ảo giác' (Hallucination) trong các mô hình ngôn ngữ lớn (trang 13) là gì?",
    "options": [
      "Bản chất của LLM là dự đoán chuỗi từ hợp lý nhất theo phân phối xác suất, không phải truy xuất sự thật khách quan; khi không chắc chắn, chúng tự bịa chuyện thay vì nhận 'Tôi không biết'.",
      "Do người dùng gõ sai ngữ pháp tiếng Anh khi đặt câu hỏi.",
      "Do máy tính bị đứt dây cáp mạng khi đang sinh câu trả lời.",
      "Do các kỹ sư lập trình cài đặt tính năng nói dối để thử thách sự thông minh của con người."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 13 Chapter 5: 'Nguyên nhân: Dự đoán từ theo xác suất. Khi không chắc, chúng tự bịa chuyện thay vì thừa nhận \"Tôi không biết.\"'"
  },
  {
    "id": 152,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Các biện pháp giảm thiểu Ảo giác (Hallucination Mitigations)",
    "question": "Những giải pháp kỹ thuật nào sau đây đang được áp dụng hiệu quả để giảm thiểu hiện tượng ảo giác của AI (trang 13)?",
    "options": [
      "RAG (cung cấp ngữ cảnh thực), MoE (mô hình chuyên gia), Chuỗi suy luận (Chain-of-thought), và tích hợp công cụ hỗ trợ (tìm kiếm web, máy tính).",
      "Tắt màn hình máy tính trong 10 phút trước khi đọc câu trả lời.",
      "Xóa bỏ hoàn toàn mạng Internet và quay lại dùng từ điển giấy.",
      "Ép buộc người dùng chỉ được hỏi những câu có đáp án Đúng hoặc Sai."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 13 Chapter 5: 'Biện pháp giảm thiểu: RAG: cung cấp ngữ cảnh thực; MoE: sử dụng mô hình chuyên gia; Chuỗi suy luận: kiểm tra từng bước; Dùng công cụ: tìm kiếm, máy tính.'"
  },
  {
    "id": 153,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Phân biệt ANI, AGI và ASI",
    "question": "Sự khác biệt căn bản giữa ANI (Trí tuệ Nhân tạo Hẹp) và AGI (Trí tuệ Nhân tạo Tổng quát) theo trang 15 Chapter 5 là gì?",
    "options": [
      "ANI là chuyên gia xuất sắc trong một lĩnh vực cụ thể (AI ngày nay); còn AGI đạt trình độ trí tuệ ngang con người ở MỌI lĩnh vực và có khả năng thích nghi linh hoạt (chưa đạt được).",
      "ANI là phần mềm có phí, còn AGI là phần mềm hoàn toàn miễn phí.",
      "ANI chạy trên máy tính bàn, còn AGI chạy trên đồng hồ thông minh.",
      "ANI do con người chế tạo, còn AGI là sản phẩm của người ngoài hành tinh."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 15 Chapter 5: 'ANI (Trí tuệ Nhân tạo Hẹp): Chuyên gia ở một lĩnh vực - AI ngày nay. AGI (Trí tuệ Nhân tạo Tổng quát): Trình độ con người ở mọi lĩnh vực - Chưa đạt được. ASI (Siêu trí tuệ): Vượt con người ở mọi mặt - Viễn tưởng.'"
  },
  {
    "id": 154,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Vì sao LLM tốt nhất hiện nay vẫn chưa phải là AGI?",
    "question": "Chi tiết nào ở trang 15 chứng minh các mô hình LLM tiên tiến nhất hiện nay (dù biết rất nhiều kiến thức) vẫn CHƯA PHẢI là AGI?",
    "options": [
      "Chúng không thể tự buộc dây giày trong thế giới thực, không thể lập kế hoạch thực sự xuyên suốt nhiều tháng, và không thể chuyển đổi kỹ năng mượt mà giữa các miền khác nhau.",
      "Chúng không thể tính nhẩm phép cộng 2 con số đơn giản.",
      "Chúng từ chối trả lời câu hỏi bằng tiếng Anh.",
      "Chúng không biết cách hiển thị chữ viết trên màn hình vi tính."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 15 Chapter 5: 'Tại sao ANI != AGI: LLM tốt nhất hiện nay biết \"mọi thứ\" nhưng không thể: Tự buộc dây giày (thao tác thời gian thực); Lập kế hoạch thực sự xuyên suốt nhiều tháng; Chuyển đổi kỹ năng mượt mà giữa các lĩnh vực.'"
  },
  {
    "id": 155,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn Hiện tại 2 - Tính Bền vững & Năng lượng",
    "question": "Theo các chỉ số ước tính ở trang 16 Chapter 5, việc huấn luyện mô hình ngôn ngữ lớn Llama 3 405B tiêu tốn tổng chi phí khoảng bao nhiêu và 1 truy vấn LLM tốn điện gấp bao nhiêu lần so với tìm kiếm Google?",
    "options": [
      "Chi phí huấn luyện Llama 3 405B khoảng ~75 triệu USD; Một truy vấn LLM tiêu tốn điện năng gấp 10 lần một lần tìm kiếm Google thông thường.",
      "Chi phí 10.000 USD; tiêu tốn điện ngang một bóng đèn ngủ trong 1 giây.",
      "Chi phí 1 tỷ USD; tiêu tốn điện gấp 1.000.000 lần toàn bộ thành phố New York.",
      "Hoàn toàn không tốn bất kỳ chi phí hay năng lượng điện nào vì chạy bằng năng lượng mặt trời."
    ],
    "correct": 0,
    "explanation": "Theo bảng chỉ số ước tính trang 16 Chapter 5: 'Chi phí huấn luyện Llama 3 405B: Tổng ≈$75 triệu. Một truy vấn (LLM): Bằng 10 lần tìm kiếm Google. Năng lượng huấn luyện GPT-4: ~50 GWh. Nước làm mát: Hàng triệu lít/ngày.'"
  },
  {
    "id": 156,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Các giải pháp cho bài toán Bền vững và Năng lượng",
    "question": "Những giải pháp kỹ thuật nào đang được nghiên cứu để giải quyết bài toán tiêu thụ năng lượng khổng lồ của AI (trang 16)?",
    "options": [
      "Mô hình nhỏ chuyên biệt (SLM), Kỹ thuật lượng tử hóa (Quantization 4/8-bit), Kiến trúc mô hình thưa (MoE), Chip phỏng sinh học (Neuromorphic), và Năng lượng tái tạo.",
      "Tắt điều hòa phòng máy chủ và mở cửa sổ để gió tự nhiên thổi vào.",
      "Chuyển toàn bộ trung tâm dữ liệu lên Mặt trăng.",
      "Giảm số lượng phím bấm trên bàn phím của người dùng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 16 Chapter 5: 'Các giải pháp: Mô hình nhỏ chuyên biệt; Lượng tử hóa (4/8-bit); Mô hình thưa (MoE); Chip phỏng sinh học (Neuromorphic); Năng lượng tái tạo.'"
  },
  {
    "id": 157,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn Hiện tại 3 - Thí nghiệm Căn phòng tiếng Trung của John Searle",
    "question": "Thí nghiệm tư duy 'Căn phòng tiếng Trung' (Chinese Room) của triết gia John Searle (1980) được trích dẫn ở trang 17 nhằm chứng minh điều gì về AI?",
    "options": [
      "Một hệ thống có thể tra cứu và cho ra kết quả hoàn toàn chính xác theo quy tắc nhưng KHÔNG HỀ thực sự hiểu ý nghĩa của nội dung; AI có thể chỉ đang giả lập suy nghĩ và khớp khuôn mẫu.",
      "Người biết tiếng Trung Quốc luôn thông minh hơn máy vi tính.",
      "Máy tính chỉ có thể học được tiếng Anh, không thể học được tiếng Trung Quốc.",
      "Các phòng máy tính bắt buộc phải được sơn màu đỏ theo truyền thống Á Đông."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 17 Chapter 5: 'Căn phòng tiếng Trung (Searle): Hệ thống có thể xuất kết quả đúng mà không cần \"hiểu.\" AI có thể chỉ đang giả lập suy nghĩ... Hiểu biết vs. Khớp khuôn mẫu: Kết quả trông có vẻ là hiểu nhưng ngữ cảnh chỉ mang tính cục bộ.'"
  },
  {
    "id": 158,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn Hiện tại 4 - Sự Đánh giá, Trí tuệ & Đạo đức",
    "question": "Tại sao AI có thể sáng tác hàng nghìn bài hát nhưng lại KHÔNG THỂ đoán được bài hát nào sẽ trở thành bản Hit gây sốt toàn cầu (trang 18)?",
    "options": [
      "Vì yếu tố tạo nên bản hit và thị hiếu nghệ thuật gắn liền với trải nghiệm sống sâu sắc, bối cảnh văn hóa xã hội tinh tế - thứ không thể mã hóa đơn thuần bằng thuật toán.",
      "Vì các đài truyền thanh từ chối phát nhạc do máy tính tạo ra.",
      "Vì AI bị cấm nghe các bài hát phát hành sau năm 2020.",
      "Vì các ca sĩ con người luôn kiện bản quyền đối với tất cả bài hát của AI."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 18 Chapter 5: 'Thứ gì tạo nên bài hát hit? Không thể mã hóa. AI làm nhạc, nhưng không đoán được hit. Thách thức: Đạo đức mang tính tương đối về văn hóa; \"Lẽ thường\" không hề thông thường; AI thiếu trải nghiệm sống để hình thành khả năng đánh giá chân thực.'"
  },
  {
    "id": 159,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Constitutional AI và Reward Models trong kiểm duyệt",
    "question": "Những kỹ thuật như 'Constitutional AI' (AI tuân thủ hiến pháp nguyên tắc) và 'Reward Models' (mô hình điểm thưởng) ở trang 18 thực chất làm được điều gì?",
    "options": [
      "Giúp gắn cờ các vi phạm đạo đức rõ ràng, áp dụng các bộ lọc nguyên tắc đã định sẵn và bắt chước phán đoán của chuyên gia, nhưng chưa phải là năng lực thấu hiểu đạo đức tự thân.",
      "Tự động cấp chứng chỉ luật sư quốc tế cho phần mềm máy tính.",
      "Tự động trừng phạt những người dùng có hành vi xúc phạm AI.",
      "Cho phép AI tham gia bầu cử quốc hội tại các quốc gia dân chủ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 18 Chapter 5: 'Những gì AI có thể làm: Gắn cờ vi phạm đạo đức rõ ràng; Áp dụng nguyên tắc \"Constitutional AI\"; Xếp hạng bằng điểm thưởng (reward models); Bắt chước phán đoán của chuyên gia.'"
  },
  {
    "id": 160,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn Hiện tại 5 - Lẽ thường (Common Sense)",
    "question": "Khái niệm 'Lẽ thường' (Common Sense) mà AI vẫn thường xuyên mắc lỗi ngớ ngẩn (trang 19) bao gồm những điều hiển nhiên nào trong cuộc sống con người?",
    "options": [
      "Các quy luật vật lý hiển nhiên biết mà không cần học: Các vật thể rắn không thể đi xuyên qua nhau; Lửa thì nóng; Nước thì ướt.",
      "Khả năng đọc thuộc lòng bảng cửu chương từ 1 đến 9.",
      "Việc nhớ chính xác ngày sinh của tất cả các vị vua trong lịch sử.",
      "Tốc độ truyền ánh sáng trong môi trường chân không."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 19 Chapter 5: 'Lẽ thường (Common Sense): Những điều con người biết mà không cần học: Các vật rắn không đi xuyên qua nhau; Lửa thì nóng; nước thì ướt. AI vẫn mắc những lỗi trẻ con — do thiếu mô hình thế giới thực.'"
  },
  {
    "id": 161,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Đặt mục tiêu: Vi mô (Micro) vs Vĩ mô (Macro)",
    "question": "Trong việc đặt mục tiêu (Goal Setting) ở trang 19, trạng thái của AI đối với Mục tiêu Vi mô và Mục tiêu Vĩ mô khác nhau như thế nào?",
    "options": [
      "Mục tiêu vi mô (lập kế hoạch cho các tác vụ con): AI ĐÃ GIẢI QUYẾT cực giỏi; Mục tiêu vĩ mô (trả lời câu hỏi 'Tại sao?', sứ mệnh, ý nghĩa cuộc đời): Vẫn là GIỚI HẠN của AI và bắt buộc cần con người định nghĩa.",
      "AI tự đặt được mục tiêu vĩ mô nhưng không biết chia nhỏ thành mục tiêu vi mô.",
      "Cả hai loại mục tiêu đều đã được AI giải quyết hoàn hảo 100%.",
      "Con người không còn quyền can thiệp vào bất kỳ mục tiêu nào của AI."
    ],
    "correct": 0,
    "explanation": "Theo bảng trang 19 Chapter 5: 'Mục tiêu vi mô: Đã giải quyết — lập kế hoạch cho tác vụ con. Mục tiêu vĩ mô: Giới hạn — Câu hỏi \"Tại sao?\" cần con người. Kết luận: Agent cực giỏi ở như thế nào (How). Con người phải xác định làm cái gì và tại sao (What & Why).'"
  },
  {
    "id": 162,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Giới hạn Hiện tại 6 - Cảm giác thể chất & Cảm xúc sâu sắc",
    "question": "Tại sao AI chưa thể có 'Cảm giác và Cảm xúc sâu sắc' chân thực (trang 20)?",
    "options": [
      "AI chỉ có thể xử lý hình ảnh và âm thanh nhưng hoàn toàn thiếu xúc giác, vị giác, khứu giác thể chất; nó có thể mô tả cảm xúc qua từ ngữ nhưng không hề có hiện diện vật chất và trải nghiệm chủ quan để thực sự cảm nhận niềm vui hay mất mát.",
      "Vì các cảm biến camera trên máy tính có độ phân giải quá thấp.",
      "Vì người dùng không bao giờ kể chuyện buồn cho AI nghe.",
      "Vì AI chỉ được phép hoạt động vào ban ngày."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 20 Chapter 5: 'Cảm giác: Con người tích hợp ngũ quan... AI có thể nhìn và nghe; Vị/mùi/xúc giác: không có. Thiếu trải nghiệm thể chất. Cảm xúc sâu sắc: Có thể mô tả cảm xúc, giả lập phản ứng, Không thể cảm nhận. Đòi hỏi hiện diện vật chất và trải nghiệm chủ quan.'"
  },
  {
    "id": 163,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Phân công lao động Con người vs AI (The Division of Labor)",
    "question": "Sự phân chia lao động mới giữa Con người và AI Agents được tổng kết ở trang 22 như thế nào?",
    "options": [
      "Con người sở hữu 'Cái gì & Tại sao' (What & Why, mục tiêu vĩ mô, đạo đức, mục đích, trách nhiệm); AI Agents sở hữu 'Làm như thế nào' (How, lập kế hoạch tác vụ con, tốc độ, quy mô, tối ưu hóa).",
      "Con người làm các công việc lặp đi lặp lại; AI làm lãnh đạo chiến lược cấp cao.",
      "Con người phụ trách việc nhập mã số thuế; AI phụ trách việc dọn dẹp vệ sinh phòng làm việc.",
      "AI sở hữu 100% tất cả các quyền quyết định trong xã hội."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 22 Chapter 5 (The Division of Labor): Humans: \"What\" and \"Why\", Macro-goals, Purpose & Values, Judgment & Ethics, Accountability. AI Agents: \"How\", Micro-goal planning, Task execution, Speed & Optimization, Scale, Consistency."
  },
  {
    "id": 164,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Thế mạnh vượt trội của Con người (Humans Excel At)",
    "question": "Trong bảng so sánh ở trang 22, những năng lực nào được khẳng định là thế mạnh độc quyền vượt trội của CON NGƯỜI?",
    "options": [
      "Định nghĩa mục đích và ý nghĩa cuộc sống; Phán đoán đạo đức và luân lý; Tầm nhìn sáng tạo và giám tuyển nghệ thuật; Trách nhiệm giải trình (Accountability).",
      "Tốc độ xử lý hàng triệu phép tính trong 1 mili-giây.",
      "Khả năng làm việc liên tục 24/7 suốt 365 ngày không bao giờ biết mệt mỏi.",
      "Khả năng lưu trữ hàng triệu cuốn sách vào bộ nhớ não bộ."
    ],
    "correct": 0,
    "explanation": "Theo bảng trang 22 Chapter 5: 'Humans Excel At: Defining purpose and meaning; Ethical and moral judgment; Creative vision and curation; Accountability.'"
  },
  {
    "id": 165,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Thế mạnh vượt trội của AI (AI Excels At)",
    "question": "Ngược lại, AI vượt trội con người ở những khía cạnh nào trong bảng so sánh ở trang 22?",
    "options": [
      "Tốc độ thực thi (Speed); Quy mô xử lý (Scale - hàng triệu tác vụ); Tính nhất quán không mệt mỏi (Consistency); Nhận diện khuôn mẫu phức tạp (Pattern recognition).",
      "Khả năng tự đặt ra mục đích sống cho nhân loại.",
      "Trực giác tâm linh và sự thấu cảm tâm hồn con người.",
      "Tự chịu trách nhiệm pháp lý trước tòa án khi xảy ra sai sót."
    ],
    "correct": 0,
    "explanation": "Theo bảng trang 22 Chapter 5: 'AI Excels At: Speed of execution; Scale (millions of tasks); Consistency (no fatigue); Pattern recognition.'"
  },
  {
    "id": 166,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Quy luật lịch sử của những cột mốc 'Bất khả thi'",
    "question": "Quy luật lịch sử được rút ra từ bảng niên biểu các mốc phát triển (1965 ELIZA, 1997 Deep Blue, 2011 Watson, 2016 AlphaGo, 2020 GPT-3, 2022 ChatGPT, 2024 AlphaFold 3) ở trang 23 là gì?",
    "options": [
      "Cứ mỗi thập kỷ, một điều từng bị coi là 'bất khả thi' lại trở nên bình thường; do đó hãy giả định AI sẽ tiếp tục giải quyết được các thách thức kỹ thuật và lên kế hoạch phù hợp.",
      "Sau mỗi 5 năm các phần mềm AI đều tự động bị xóa sổ khỏi lịch sử.",
      "Sự phát triển của AI luôn dừng lại sau mỗi lần đánh bại kỳ thủ cờ vua thế giới.",
      "Mỗi thập kỷ công nghệ AI lại thụt lùi về thời kỳ đồ đá."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 23 Chapter 5: 'Quy luật: Cứ mỗi thập kỷ, một điều \"bất khả thi\" lại trở nên bình thường. Hãy giả định AI sẽ giải quyết được và lên kế hoạch phù hợp.'"
  },
  {
    "id": 167,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Bảng tổng kết tình trạng hiện tại của các giới hạn AI",
    "question": "Trong bảng tổng kết tình trạng hiện tại ở trang 24, những năng lực nào được xếp vào nhóm 'ĐÃ GIẢI QUYẾT'?",
    "options": [
      "Suy luận & Giải quyết vấn đề; Ngôn ngữ tự nhiên; Sự sáng tạo; Nhận thức thời gian thực.",
      "AGI; Ý thức tự thân; Trí tuệ cảm xúc chân thật; Lẽ thường.",
      "Khả năng bay lượn; Dự đoán chính xác xổ số; Đi xuyên tường.",
      "Chữa khỏi lão hóa; Chế tạo máy du hành thời gian."
    ],
    "correct": 0,
    "explanation": "Theo bảng tổng kết trang 24 Chapter 5: Nhóm ĐÃ GIẢI QUYẾT gồm: Suy luận & Giải quyết (Cờ vua, cờ vây, toán); Ngôn ngữ tự nhiên (ChatGPT, Watson); Sự sáng tạo (Mỹ thuật, nhạc, code); Nhận thức thời gian thực (Xe tự lái)."
  },
  {
    "id": 168,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Bảng tổng kết các giới hạn CHƯA GIẢI QUYẾT",
    "question": "Những năng lực nào sau đây vẫn đang ở trạng thái 'CHƯA GIẢI QUYẾT' hoặc 'BỎ NGỎ' trong bảng tổng kết trang 24?",
    "options": [
      "AGI (chưa có hệ thống đa dụng); Tính bền vững (ngốn năng lượng); Nhận thức bản thân; Sự đánh giá & Trí tuệ; Lẽ thường; Cảm xúc sâu sắc.",
      "Chơi cờ vây và cờ vua.",
      "Nhận diện khuôn mặt người quen qua camera điện thoại.",
      "Tạo ảnh minh họa nghệ thuật bằng câu lệnh chữ."
    ],
    "correct": 0,
    "explanation": "Theo bảng tổng kết trang 24 Chapter 5: Các năng lực Chưa giải quyết/Bỏ ngỏ gồm: AGI, Tính bền vững, Nhận thức bản thân, Sự đánh giá & Trí tuệ, Lẽ thường, Cảm xúc sâu sắc."
  },
  {
    "id": 169,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Những việc KHÔNG NÊN LÀM khi nghĩ về giới hạn AI",
    "question": "Theo lời khuyên ở trang 25 Chapter 5, điều nào sau đây thuộc danh sách 'NHỮNG VIỆC KHÔNG NÊN LÀM' khi tư duy về giới hạn của AI?",
    "options": [
      "Coi giới hạn hiện tại là vĩnh viễn; Quá tin tưởng AI trong đánh giá; Đợi 'AI hoàn hảo' mới sử dụng; Đặt cược chống lại AI.",
      "Dùng AI cho công việc 'như thế nào'.",
      "Giữ quyền quyết định 'cái gì và tại sao'.",
      "Đầu tư vào phát triển năng lực phán đoán của con người."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25 Chapter 5: 'Những việc KHÔNG NÊN làm: Coi giới hạn hiện tại là vĩnh viễn; Quá tin tưởng AI trong đánh giá; Đợi \"AI hoàn hảo\" mới sử dụng; Đặt cược chống lại AI.'"
  },
  {
    "id": 170,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Những việc NÊN LÀM khi làm việc với AI",
    "question": "Ngược lại, 'NHỮNG VIỆC NÊN LÀM' được tác giả khuyến nghị tại trang 25 Chapter 5 là gì?",
    "options": [
      "Dùng AI cho việc 'như thế nào' (How); Giữ quyền quyết định 'cái gì & tại sao' (What & Why); Kiểm chứng khi rủi ro cao; Đầu tư vào phán đoán con người; Luôn giữ sự tò mò.",
      "Phó thác hoàn toàn các quyết định tài chính và sinh mạng cho chatbot.",
      "Tẩy chay tất cả các công cụ công nghệ thông tin trong trường học.",
      "Chỉ sử dụng AI khi nó đạt đến trình độ Siêu trí tuệ ASI."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25 Chapter 5: 'Những việc NÊN làm: Dùng AI cho việc thế nào; giữ quyền quyết định cái gì & tại sao; Kiểm chứng khi rủi ro cao; Đầu tư vào phán đoán con người; Giữ sự tò mò.'"
  },
  {
    "id": 171,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Thông điệp chốt lại của Chapter 5",
    "question": "Câu kết luận chốt lại toàn bộ nội dung của Chapter 5 về giới hạn của AI là gì?",
    "options": [
      "'Đừng đặt cược chống lại AI. Hãy biết con người không thể thay thế ở đâu.'",
      "'Hãy đặt cược rằng AI sẽ sớm thất bại hoàn toàn.'",
      "'Con người sẽ sớm bị máy móc thay thế 100% trong vòng 1 năm tới.'",
      "'Trí tuệ nhân tạo là một trò lừa đảo lớn nhất lịch sử công nghệ.'"
    ],
    "correct": 0,
    "explanation": "Theo dòng chốt cuối cùng tại trang 25 Chapter 5: 'Chốt lại: Đừng đặt cược chống lại AI. Hãy biết con người không thể thay thế ở đâu.'"
  },
  {
    "id": 172,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Nhận thức bản thân (Self-awareness) trong triết học AI",
    "question": "Vấn đề 'AI có nhận thức bản thân hay có ý thức (consciousness) không?' được phân loại vào nhóm vấn đề nào theo trang 17 Chapter 5?",
    "options": [
      "Vấn đề triết học và tâm trí học, hiện tại chưa có bài kiểm tra thực nghiệm nào có thể khẳng định chắc chắn và vẫn là câu hỏi bỏ ngỏ.",
      "Bài toán cộng trừ số học đã được giải quyết xong từ năm 1950.",
      "Quy tắc đã được các kỹ sư OpenAI đóng dấu chứng nhận khẳng định AI có linh hồn.",
      "Định lý toán học đã được chứng minh bằng hình học Euclid phẳng."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 17 Chapter 5: 'Nhận thức Bản thân: AI có biết nó tồn tại? Có ý thức không? Đây là triết học, chưa có bài kiểm tra nào khẳng định... Kết luận: Câu hỏi bỏ ngỏ.'"
  },
  {
    "id": 173,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Mô hình thưa (MoE - Mixture of Experts)",
    "question": "Kiến trúc 'Mô hình thưa' (Mixture of Experts - MoE) đóng góp vào giải pháp nào cho AI theo trang 13 và trang 16 Chapter 5?",
    "options": [
      "Vừa hỗ trợ giảm thiểu ảo giác bằng cách định tuyến câu hỏi cho mạng nơ-ron chuyên gia, vừa giảm điện năng tính toán vì chỉ kích hoạt một phần nhỏ các tham số khi chạy truy vấn.",
      "Giúp tăng dung lượng bộ nhớ máy chủ lên gấp 100 lần.",
      "Tự động đổi mật khẩu wifi sau mỗi lần người dùng đặt câu hỏi.",
      "Ép buộc mô hình phải trả lời bằng giọng nói tiếng địa phương."
    ],
    "correct": 0,
    "explanation": "Theo trang 13 và 16 Chapter 5: MoE (Mixture of Experts) vừa là giải pháp giảm thiểu ảo giác (sử dụng mô hình chuyên gia), vừa là giải pháp tối ưu hóa năng lượng (mô hình thưa chỉ kích hoạt các chuyên gia phù hợp thay vì toàn bộ mạng)."
  },
  {
    "id": 174,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Chip phỏng sinh học (Neuromorphic chips)",
    "question": "Công nghệ phần cứng 'Chip phỏng sinh học' (Neuromorphic chips) được nhắc đến ở trang 16 có đặc điểm gì nổi bật?",
    "options": [
      "Thiết kế mô phỏng trực tiếp cấu trúc và cơ chế hoạt động điện hóa của các nơ-ron sinh học trong não người, giúp xử lý tín hiệu cực nhanh với mức tiêu thụ năng lượng siêu tiết kiệm.",
      "Được làm hoàn toàn từ gỗ cây tự nhiên để bảo vệ môi trường rừng.",
      "Chỉ có thể chạy được khi ngâm trong nước đá lạnh 0 độ C.",
      "Không sử dụng bất kỳ linh kiện bán dẫn nào mà chỉ dùng nam châm vĩnh cửu."
    ],
    "correct": 0,
    "explanation": "Theo trang 16 Chapter 5: 'Chip phỏng sinh học (Neuromorphic)' là một trong những giải pháp phần cứng đột phá thế hệ mới giúp giải quyết bài toán tiêu thụ năng lượng khổng lồ của AI bằng cách mô phỏng cách thức xử lý năng lượng hiệu quả của não bộ."
  },
  {
    "id": 175,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Kỹ thuật Lượng tử hóa (Quantization 4/8-bit)",
    "question": "Kỹ thuật 'Lượng tử hóa' (Quantization 4-bit / 8-bit) ở trang 16 mang lại lợi ích gì cho việc vận hành các mô hình ngôn ngữ lớn?",
    "options": [
      "Giảm độ chính xác số học của trọng số mô hình (từ 16-bit/32-bit xuống 4-bit hoặc 8-bit), giúp giảm đáng kể dung lượng bộ nhớ RAM/VRAM và tiết kiệm điện năng tính toán mà vẫn giữ được độ chính xác gần như tương đương.",
      "Biến máy tính thông thường thành máy tính lượng tử trong nháy mắt.",
      "Tự động xóa bỏ toàn bộ mã nguồn của mô hình để tăng tốc độ khởi động.",
      "Bắt buộc người dùng phải học ngành vật lý lượng tử mới được sử dụng AI."
    ],
    "correct": 0,
    "explanation": "Theo trang 16 Chapter 5: 'Lượng tử hóa (4/8-bit)' là giải pháp nén mô hình hàng đầu giúp chạy các LLM khổng lồ trên phần cứng nhỏ hơn và tiêu tốn ít năng lượng hơn."
  },
  {
    "id": 176,
    "chapterId": "ch5",
    "chapterTitle": "Chương 5: Giới Hạn Của Trí Tuệ Nhân Tạo",
    "topic": "Vai trò Giám tuyển (Curation) của con người",
    "question": "Trong bối cảnh AI có thể tự động tạo ra hàng triệu hình ảnh, văn bản và bài hát trong chớp mắt, tại sao vai trò 'Giám tuyển' (Curation) của con người lại trở nên vô cùng đắt giá (trang 22)?",
    "options": [
      "Vì con người có gu thẩm mỹ, sự nhạy cảm văn hóa và lợi thế ngữ cảnh để chọn lọc ra tác phẩm nào thực sự có giá trị, chạm đến cảm xúc và phù hợp với đạo đức xã hội.",
      "Vì chỉ con người mới biết cách bấm nút in tranh ra giấy ảnh.",
      "Vì luật pháp cấm AI lưu trữ file ảnh trên ổ cứng máy chủ.",
      "Vì các bảo tàng nghệ thuật chỉ nhận các bức tranh vẽ bằng sơn dầu truyền thống."
    ],
    "correct": 0,
    "explanation": "Theo trang 22 Chapter 5: 'Humans Excel At: Creative vision and curation' (Tầm nhìn sáng tạo và giám tuyển) - trong kỷ nguyên dư thừa nội dung do AI sinh ra, năng lực giám tuyển, chọn lọc và định hình ý nghĩa của con người là yếu tố quyết định giá trị tác phẩm."
  },
  {
    "id": 177,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Chủ đề và Tác giả góc nhìn trong Chapter 6",
    "question": "Chuyên đề 'Tương lai của AI: Những Đồn Đoán, Thực Tế và Ứng Dụng Thực Tiễn' phản ánh góc nhìn toàn diện của chuyên gia AI hàng đầu thế giới nào?",
    "options": [
      "Tiến sĩ Andrew Ng (Đồng sáng lập Coursera, cựu lãnh đạo Google Brain và Baidu AI)",
      "Sam Altman (CEO OpenAI)",
      "Bill Gates (Đồng sáng lập Microsoft)",
      "Yann LeCun (Giám đốc khoa học AI tại Meta)"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 1 Chapter 6: 'Tương lai của AI: Những Đồn Đoán, Thực Tế và Ứng Dụng Thực Tiễn - Góc nhìn Toàn diện từ Andrew Ng.'"
  },
  {
    "id": 178,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Giải mã tin đồn - So sánh sai lệch AI với Vũ khí hạt nhân",
    "question": "Theo Andrew Ng ở trang 3 Chapter 6, tại sao việc so sánh AI nguy hiểm giống như 'Vũ khí hạt nhân' lại là một sự so sánh sai lệch và độc hại?",
    "options": [
      "Vì những phép ẩn dụ cực đoan này làm bóp méo nhận thức đúng đắn của công chúng và tạo ra nỗi sợ hãi hoang mang không cần thiết đối với một công nghệ mang tính kiến tạo.",
      "Vì vũ khí hạt nhân không sử dụng mạng Internet.",
      "Vì các trung tâm dữ liệu AI được xây dựng dưới đáy đại dương.",
      "Vì các kỹ sư lập trình AI đều là những người yêu chuộng hòa bình."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 3 Chapter 6: 'Sự so sánh sai lệch: AI và Vũ khí: Có một sự so sánh sai lầm cho rằng AI nguy hiểm giống như vũ khí hạt nhân. Những phép ẩn dụ cực đoan này làm bóp méo nhận thức của công chúng và tạo ra nỗi sợ hãi không cần thiết.'"
  },
  {
    "id": 179,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Giải mã tin đồn về tiêu thụ tài nguyên",
    "question": "Một trong những thông tin sai lệch thường bị thổi phồng trên truyền thông về tác động môi trường của AI (trang 3) là gì?",
    "options": [
      "Lan truyền thông tin phóng đại rằng các trung tâm dữ liệu AI tiêu thụ lượng nước làm mát lớn hơn rất nhiều so với thực tế.",
      "Tin đồn rằng máy chủ AI hút cạn khí oxy trong bầu khí quyển.",
      "Tin đồn rằng sóng wifi từ AI làm ngừng quá trình quang hợp của cây xanh.",
      "Tin đồn rằng các mô hình AI làm tăng tốc độ quay của Trái đất."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 3 Chapter 6: 'Tin đồn về tiêu thụ tài nguyên: Các tin đồn thường phóng đại tác động môi trường của AI. Người ta thường lan truyền thông tin sai lệch rằng các trung tâm dữ liệu AI tiêu thụ lượng nước lớn hơn rất nhiều so với thực tế.'"
  },
  {
    "id": 180,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Hoang đường về 'Ngày Tận Thế Việc Làm' (Job Apocalypse)",
    "question": "Tại sao câu chuyện bi quan về 'Ngày tận thế việc làm' (cho rằng AI sẽ cướp đi 50% việc làm và mọi người biểu tình trên phố) lại rất có hại theo Andrew Ng (trang 4)?",
    "options": [
      "Vì nó khiến con người dễ bề buông xuôi, bỏ cuộc và sợ hãi thay vì chủ động học hỏi và thích nghi; trong khi thực tế thị trường việc làm đang TIẾN HÓA chứ không biến mất.",
      "Vì nó làm giảm doanh thu bán vé xem phim tại các rạp chiếu bóng.",
      "Vì nó khiến các hãng sản xuất ô tô phải đóng cửa nhà máy.",
      "Vì các công ty công nghệ sẽ bị cấm tuyển dụng nhân sự mới."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 4 Chapter 6: 'Sự Thật: Những câu chuyện phóng đại này rất có hại vì chúng khiến con người dễ bề từ bỏ thay vì thích nghi. Thực tế, thị trường việc làm đang tiến hóa chứ không hề biến mất.'"
  },
  {
    "id": 181,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Sự mở rộng vai trò của Lập trình viên Full-Stack",
    "question": "AI đã tạo ra bước chuyển dịch to lớn nào đối với các kỹ sư phần mềm theo phân tích ở trang 6 Chapter 6?",
    "options": [
      "Nhờ AI hỗ trợ viết code, lập trình viên không còn bị bó hẹp chuyên biệt (chỉ Front-end hoặc chỉ Back-end) mà chuyển dịch mạnh mẽ sang vai trò Full-Stack, có thể làm chủ và xử lý toàn bộ hệ thống.",
      "Số lượng việc làm kỹ sư phần mềm giảm về 0 vì AI tự lập trình toàn bộ.",
      "Các lập trình viên bị cấm sử dụng bàn phím máy tính trong giờ làm việc.",
      "Mọi kỹ sư bắt buộc phải chuyển sang học ngành khảo cổ học."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 6 Chapter 6: 'Mặc dù AI viết code rất giỏi, nhưng số lượng việc làm trong ngành kỹ nghệ phần mềm vẫn tiếp tục tăng lên... Nhờ có AI hỗ trợ, một lập trình viên giờ đây có thể xử lý toàn bộ hệ thống. Kết quả: Một sự dịch chuyển khổng lồ sang vai trò Full-Stack.'"
  },
  {
    "id": 182,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Vai trò 'Toàn chu kỳ' (Full-Cycle) trong Marketing & Tuyển dụng",
    "question": "Hiện tượng vai trò 'Toàn chu kỳ' (Full-cycle) lan rộng sang các lĩnh vực phi kỹ thuật (trang 7) được minh họa qua ví dụ nào?",
    "options": [
      "Một nhân viên Marketing có thể dùng AI thực thi toàn bộ chiến dịch (Full-cycle marketing); Nhân viên tìm nguồn tuyển dụng (Sourcers) có thể tự thực hiện toàn bộ quy trình từ tìm ứng viên đến phỏng vấn và tuyển chọn.",
      "Các bác sĩ ngoại khoa tự lái xe cứu thương đi đón bệnh nhân.",
      "Giáo viên tự xây dựng trường học bằng gạch vữa trước giờ lên lớp.",
      "Phi công tự phục vụ suất ăn và dọn dẹp khoang máy bay trên chuyến bay."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 7 Chapter 6: 'Vai trò \"Toàn chu kỳ\" ở các lĩnh vực khác... Marketing: thực thi toàn bộ vòng đời marketing (Full-cycle marketing). Tuyển dụng: nhân viên sourcers nay dùng AI thực hiện quy trình end-to-end từ tìm kiếm đến phỏng vấn và tuyển dụng.'"
  },
  {
    "id": 183,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Sự trỗi dậy của thế hệ 'AI Native'",
    "question": "Ví dụ về 'Thực tập sinh trung học' (High School Intern) ở trang 8 Chapter 6 nhằm chứng minh cho điều gì?",
    "options": [
      "Một bạn trẻ 'AI Native' (thành thạo AI từ trong máu) kết hợp sự tò mò có thể đạt năng suất phi thường và mang lại kết quả mà trước đây đòi hỏi nhiều năm kinh nghiệm chuyên môn.",
      "Học sinh trung học không cần học chữ hay làm toán nữa.",
      "Các trường đại học nên đóng cửa vì học sinh cấp 3 đã thông minh hơn giáo sư.",
      "AI chỉ phục vụ cho lứa tuổi thanh thiếu niên dưới 18 tuổi."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 Chapter 6: 'Sự trỗi dậy của thế hệ \"AI Native\": Năng suất của Thực tập sinh Trung học... có thể mang lại những kết quả tuyệt vời mà trước đây đòi hỏi nhiều năm kinh nghiệm chuyên môn. Điều này nhấn mạnh sức mạnh của việc kết hợp sự tò mò và kỹ năng sử dụng AI.'"
  },
  {
    "id": 184,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Động não (Brainstorming) - Ý tưởng tốt vs Ý tưởng tồi",
    "question": "Trong quá trình động não (Brainstorming) với AI ở trang 10 Chapter 6, hiện tượng gì thường xảy ra đối với các ý tưởng do AI đưa ra?",
    "options": [
      "AI có thể đưa ra 1 hoặc 2 ý tưởng thực sự rất xuất sắc, nhưng kèm theo đó là 4 ý tưởng vô cùng tồi tệ; con người sở hữu lợi thế ngữ cảnh để lọc bỏ ngay lập tức những ý tưởng vô lý.",
      "100% ý tưởng của AI đều hoàn hảo tuyệt đối không cần chỉnh sửa.",
      "AI không thể sinh ra bất kỳ ý tưởng nào trong các buổi họp.",
      "Mọi ý tưởng của AI đều giống hệt nhau từng chữ một."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 10 Chapter 6: 'AI Sinh Ý Tưởng: Trong quá trình \"động não\", AI có thể đưa ra 1 hoặc 2 ý tưởng thực sự rất tốt, và 4 ý tưởng vô cùng tồi tệ. Bộ Lọc Con Người ngay lập tức nhận ra ý tưởng nào là vô lý nhờ lợi thế ngữ cảnh (context) mà AI không có.'"
  },
  {
    "id": 185,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Lợi thế Ngữ cảnh & Tri thức ngầm (Tacit Knowledge)",
    "question": "Ví dụ về việc 'Đọc vị biểu cảm khuôn mặt kỳ lạ của khách hàng' hay 'Thấu hiểu ý định thực sự của người quản lý' (trang 11) chứng minh cho khoảng trống nào của AI?",
    "options": [
      "AI thiếu hệ thống cảm giác và kinh nghiệm sống trong thế giới thực để thu thập những tri thức ngầm tinh tế (tacit knowledge) như con người.",
      "AI không có đủ dung lượng ổ cứng để lưu ảnh chụp chân dung.",
      "Camera của máy tính bị mờ không thể nhận diện nụ cười.",
      "Các nhà quản lý luôn dùng ngôn ngữ ký hiệu bí mật để giao tiếp."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 11 Chapter 6: 'Đọc Tình Huống: Thấu Hiểu Sự Tinh Tế: Phán đoán và \"gu\" của con người được xây dựng dựa trên nhiều năm quan sát... Đọc vị khách hàng, thấu hiểu ý định... AI không có bộ máy cảm giác hay kinh nghiệm sống để thu thập những kiến thức ngầm sâu sắc này.'"
  },
  {
    "id": 186,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Ứng dụng AI tại công ty của Host - Podcast Operations",
    "question": "Công ty sản xuất Podcast của người dẫn chương trình (Host) đã ứng dụng AI vào việc chấm điểm khách mời như thế nào (trang 13)?",
    "options": [
      "Chấm điểm khách mời tham gia podcast theo thang điểm 40 dựa trên phân tích các chỉ số tương tác và dữ liệu quá khứ, đồng thời gợi ý mẹo phỏng vấn tốt nhất.",
      "Từ chối phỏng vấn tất cả khách mời có điểm dưới 100.",
      "Tự động tạo khách mời bằng giọng đọc máy tính mà không cần người thật.",
      "Yêu cầu khách mời phải nộp phí tham gia bằng tiền điện tử."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 13 Chapter 6: 'Vận hành Podcast: Chấm điểm Khách mời: Sử dụng AI để chấm điểm khách mời podcast theo thang điểm 40, dựa trên các chỉ số phân tích trong quá khứ; Chuẩn bị phỏng vấn: phân tích từng tập trước để đưa ra mẹo đặt câu hỏi phù hợp nhất.'"
  },
  {
    "id": 187,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Persona AI cá nhân hóa & Bot quét tin nhắn Telegram",
    "question": "Để quản lý mạng xã hội cá nhân một cách tự nhiên và liên tục, công ty của Host đã huấn luyện AI như thế nào (trang 14)?",
    "options": [
      "Huấn luyện AI bắt chước chuẩn xác phong cách và giọng văn của host; tạo một bot tùy chỉnh liên tục quét tin nhắn Telegram của anh ấy để học hỏi và cập nhật 'gu' cũng như sở thích.",
      "Tự động tải về các câu chuyện cười trên mạng xã hội để đăng lại.",
      "Chỉ đăng tải các đường link tin tức thời sự tiếng Anh.",
      "Thuê một nhóm sinh viên thay phiên nhau trực điện thoại 24/7."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 14 Chapter 6: 'Tạo Persona AI Cá nhân hóa: Quản lý Mạng Xã Hội: Huấn luyện AI để bắt chước hoàn hảo giọng văn cá nhân của host; Học hỏi Liên tục: Một bot tùy chỉnh liên tục quét tin nhắn Telegram của host để học hỏi và cập nhật \"gu\" cũng như sở thích.'"
  },
  {
    "id": 188,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Ứng dụng AI tại công ty của Andrew Ng - Marketer viết app Mac",
    "question": "Câu chuyện về nhân viên Marketing tại công ty của Andrew Ng ở trang 15 là minh chứng tuyệt vời cho điều gì?",
    "options": [
      "Một nhân viên Marketing hoàn toàn không có nền tảng về công nghệ phần mềm đã dùng AI để tự lập trình một ứng dụng chạy trên máy Mac giúp tự động cào web và chat với dữ liệu.",
      "Mọi nhân viên Marketing đều bị chuyển sang làm kỹ thuật viên máy tính.",
      "Công ty của Andrew Ng đã sa thải toàn bộ kỹ sư phần mềm.",
      "Máy Mac là loại máy vi tính duy nhất có thể chạy được AI."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 15 Chapter 6: 'Marketer Biết Viết Code: Một nhân viên Marketing không có kiến thức nền về phần mềm đã dùng AI tự lập trình một ứng dụng cho máy Mac. Ứng dụng này tự động cào dữ liệu web, tìm kiếm, đánh dấu bài viết và chat trực tiếp với dữ liệu đã tinh lọc.'"
  },
  {
    "id": 189,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Tự động hóa tài chính và Đối soát dữ liệu của đội ngũ CFO",
    "question": "Đội ngũ tài chính (CFO team) tại doanh nghiệp của Andrew Ng đã tận dụng AI để thay đổi công việc hàng ngày ra sao (trang 16)?",
    "options": [
      "Tự viết các tập lệnh (script) tự động mở tài liệu, kiểm tra đối soát dữ liệu chéo và cảnh báo lỗi, loại bỏ hàng giờ đồng hồ ngồi copy-paste thủ công.",
      "Giao toàn bộ quyền chuyển tiền cho một mô hình chatbot tự động.",
      "Ngừng việc lập báo cáo tài chính hàng tháng để tiết kiệm giấy in.",
      "Đóng cửa tài khoản ngân hàng và chuyển sang dùng tiền mặt."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 16 Chapter 6: 'Tự động hóa Tài chính: Đội ngũ Giám đốc Tài chính (CFO) tự viết các tập lệnh tự động mở tài liệu, kiểm tra dữ liệu chéo và cảnh báo lỗi — loại bỏ hàng giờ đồng hồ ngồi copy-paste thủ công.'"
  },
  {
    "id": 190,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Kỹ sư tuyển dụng (Recruiting Engineers) ngồi trong HR",
    "question": "Mô hình tổ chức nhân sự sáng tạo nào được công ty của Andrew Ng áp dụng trong tuyển dụng ở trang 16?",
    "options": [
      "Thuê những 'Kỹ sư tuyển dụng' (Recruiting Engineers) ngồi trực tiếp bên trong phòng nhân sự (HR) để xây dựng các công cụ tuyển dụng thông minh chuyên sâu.",
      "Yêu cầu các kỹ sư phần mềm kiêm nhiệm luôn việc nấu ăn trưa cho nhân viên.",
      "Tất cả ứng viên phải qua kỳ thi chạy việt dã 10 km.",
      "Sử dụng AI bói chỉ tay để chọn lọc hồ sơ ứng viên."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 16 Chapter 6: 'Kỹ sư Tuyển dụng (Recruiting Engineers): Họ thuê những kỹ sư chuyên biệt ngồi trực tiếp bên trong bộ phận nhân sự để xây dựng các công cụ tuyển dụng phức tạp.'"
  },
  {
    "id": 191,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Andrew Ng phân tích dữ liệu kinh doanh cuối tuần",
    "question": "Ví dụ về việc đích thân Andrew Ng dùng mô hình AI phân tích các chỉ số kinh doanh vào dịp cuối tuần (trang 16) phản ánh sự thay đổi gì trong quy trình làm việc?",
    "options": [
      "Nhà lãnh đạo có thể tự mình tương tác và khai phá dữ liệu kinh doanh ngay lập tức với sự hỗ trợ của AI mà không cần phải chờ đợi nhiều ngày để chuyên viên dữ liệu lập báo cáo.",
      "Andrew Ng không còn tin tưởng các nhân viên trong công ty nữa.",
      "Chuyên ngành khoa học dữ liệu đã hoàn toàn bị xóa sổ.",
      "Các mô hình AI chỉ hoạt động chính xác vào những ngày cuối tuần."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 16 Chapter 6: 'Phân tích Dữ liệu Cuối Tuần: Đích thân Andrew Ng dành dịp cuối tuần dùng mô hình AI để phân tích các chỉ số kinh doanh, bỏ qua việc phải chờ đợi chuyên gia dữ liệu.'"
  },
  {
    "id": 192,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Nghịch lý của AI trong Giáo dục - Cognitive Offloading",
    "question": "Nghịch lý lớn nhất của việc sinh viên lạm dụng AI trong giáo dục được chỉ ra ở trang 18 Chapter 6 là gì?",
    "options": [
      "Hiện tượng 'Sự phụ thuộc nhận thức' (Cognitive Offloading): Sinh viên dùng ChatGPT có thể đạt điểm bài tập về nhà cao hơn, nhưng khả năng ghi nhớ kiến thức dài hạn lại kém đi rất nhiều do não bộ không trực tiếp vận động xử lý.",
      "Học phí đại học tăng gấp đôi khi sinh viên dùng máy tính xách tay.",
      "Giáo viên từ chối cho sinh viên sử dụng bảng phấn trong giờ giảng.",
      "Điểm số bài kiểm tra trên lớp luôn luôn bằng 0."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 18 Chapter 6: 'Nghịch Lý Của AI Trong Giáo Dục: Sự Phụ Thuộc Nhận Thức: Sinh viên sử dụng ChatGPT đạt điểm bài tập về nhà cao hơn, nhưng khả năng ghi nhớ dài hạn lại kém đi rất nhiều do mắc phải \"sự phụ thuộc nhận thức\" (cognitive offloading).'"
  },
  {
    "id": 193,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Bài học cá nhân của Andrew Ng về việc quên code sau 6 tháng",
    "question": "Câu chuyện cá nhân của Andrew Ng khi dùng AI viết code Front-end / Back-end rất nhanh nhưng 6 tháng sau không nhớ gì (trang 19) đưa ra kết luận cốt lõi nào?",
    "options": [
      "AI (theo cách sử dụng hiện nay) là một công cụ xuất sắc để LÀM (doing), nhưng KHÔNG PHẢI là công cụ hiệu quả để HỌC (learning).",
      "Andrew Ng đã quá già để tiếp tục học ngôn ngữ lập trình.",
      "Mọi đoạn code do AI viết ra đều tự động bị xóa sau 6 tháng.",
      "Người lập trình viên chỉ nên dùng bút chì để viết code trên giấy."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 19 Chapter 6: 'Ví Dụ Cá Nhân Về Việc Quên Viết Code... Ông dùng AI viết code rất nhanh, nhưng 6 tháng sau không nhớ gì về cách nó hoạt động. AI (như cách sử dụng hiện nay) là công cụ để làm, không phải để học.'"
  },
  {
    "id": 194,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Cấu trúc Prompting trong khóa học của HubSpot",
    "question": "Khóa học Prompt Engineering có cấu trúc của HubSpot (trang 20 Chapter 6) nhấn mạnh ba thành phần cốt lõi nào trong một câu lệnh chất lượng?",
    "options": [
      "Vai trò (Role), Ngữ cảnh (Context), và Định dạng (Format).",
      "Mã số định danh, Tên ngân hàng, Mật khẩu truy cập.",
      "Số trang, Kích thước font chữ, Màu nền màn hình.",
      "Địa chỉ IP, Cổng kết nối, Giao thức TCP/UDP."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 20 Chapter 6: 'Thành Phần Cốt Lõi: Một câu lệnh tốt phải xác định rõ Vai trò (Role), Ngữ cảnh (Context), và Định dạng (Format). Nó dạy cách xây dựng các \"Persona AI\" có thể tái sử dụng nhất quán cho nhiều tác vụ khác nhau.'"
  },
  {
    "id": 195,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Cân bằng Tiện ích và Bảo mật - Quyền truy cập Chỉ đọc (Read-only)",
    "question": "Trong ví dụ ở trang 22, người dẫn chương trình kết nối AI Perplexity với tài khoản đầu tư chứng khoán Fidelity như thế nào để vừa tiện theo dõi danh mục vừa đảm bảo an toàn tuyệt đối?",
    "options": [
      "Chỉ cấp quyền truy cập 'Chỉ đọc' (Read-only) để AI phân tích theo dõi chỉ số, kiểm soát nghiêm ngặt và tuyệt đối KHÔNG cấp quyền thực hiện giao dịch mua bán tiền bạc.",
      "Cấp toàn quyền thực hiện lệnh chuyển tiền tự động cho AI mỗi khi giá cổ phiếu giảm.",
      "Giao toàn bộ mã bảo mật OTP cho chatbot lưu trữ trên máy chủ.",
      "Không cho phép máy tính kết nối Internet khi kiểm tra danh mục đầu tư."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 22 Chapter 6: 'Quyền Truy Cập Chỉ Đọc: Người dẫn chương trình cấp quyền cho Perplexity quét tài khoản đầu tư Fidelity để theo dõi danh mục, nhưng kiểm soát nghiêm ngặt không cho phép thực hiện giao dịch.'"
  },
  {
    "id": 196,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Bảo mật Doanh nghiệp - Chạy mô hình mã nguồn mở trên VPC/Local",
    "question": "Khi xử lý dữ liệu tài chính ngân hàng tối mật, các doanh nghiệp như AI Aspire (trang 22) áp dụng giải pháp kiến trúc nào để dữ liệu không bao giờ bị rò rỉ ra ngoài?",
    "options": [
      "Chạy các mô hình AI mã nguồn mở (như Llama của Meta hay Qwen) trên máy chủ cục bộ (local) hoặc trong các đám mây ảo riêng biệt (VPC - Virtual Private Cloud) hoàn toàn cô lập.",
      "Tải toàn bộ file Excel tài chính lên các nhóm chat Facebook công khai.",
      "Sử dụng các tài khoản ChatGPT dùng thử miễn phí để xử lý dữ liệu.",
      "In toàn bộ dữ liệu ra giấy và cất vào két sắt không dùng máy tính nữa."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 22 Chapter 6: 'Bảo Mật Doanh Nghiệp (AI Aspire): Khi xử lý dữ liệu tài chính tuyệt mật từ các ngân hàng lớn: Các công ty chạy các mô hình AI mã nguồn mở (như Llama của Meta hay Qwen) cục bộ (local) hoặc trên các đám mây ảo riêng (VPC) để đảm bảo dữ liệu không bao giờ bị lọt ra ngoài.'"
  },
  {
    "id": 197,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Phép ẩn dụ về Máy bay và việc Kiểm soát AI",
    "question": "Phép ẩn dụ về việc 'Lái máy bay' ở trang 23 Chapter 6 được dùng để so sánh với vấn đề kiểm soát an toàn AI như thế nào?",
    "options": [
      "Con người không thể điều khiển máy bay hoàn hảo 100% trước mọi cơn gió tạt và những chiếc máy bay đầu tiên từng rơi; nhưng qua thời gian, con người đã kỹ thuật hóa để kiểm soát chúng đủ an toàn; quản lý AI cũng cần cách tiếp cận thực tế tương tự.",
      "Máy bay và AI đều chạy bằng xăng phản lực.",
      "Lập trình AI khó hơn lái máy bay chở khách gấp 10 lần.",
      "Nên cấm sử dụng máy bay và cấm sử dụng AI trên toàn cầu."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 23 Chapter 6: 'Phép Ẩn Dụ Máy Bay: Kiểm soát AI cũng giống như việc lái máy bay: Con người không thể điều khiển máy bay hoàn hảo 100% trước những cơn gió tạt, và những chiếc đầu tiên đã từng rơi. Nhưng qua thời gian, chúng ta đã kỹ thuật hóa để kiểm soát chúng đủ an toàn.'"
  },
  {
    "id": 198,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Mặt trái đáng sợ nhất của AI hiện nay",
    "question": "Theo cảnh báo tại trang 23 Chapter 6, một trong những sự lạm dụng AI đáng sợ và gây tổn hại nghiêm trọng nhất đến danh dự con người hiện nay là gì?",
    "options": [
      "Việc tạo ra các hình ảnh và video giả mạo sâu (deepfakes) mang nội dung nhạy cảm hoặc lừa đảo mà không có sự đồng thuận của nạn nhân.",
      "Việc AI gửi tin nhắn chúc mừng sinh nhật muộn 1 ngày.",
      "Việc AI tạo ra những bản vẽ hình tròn không tròn tuyệt đối.",
      "Việc AI không thể chơi cờ caro giỏi bằng trẻ em lớp 1."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 23 Chapter 6: 'Mặt Trái Đáng Sợ: Một trong những sự lạm dụng AI đáng sợ nhất hiện nay là việc tạo ra các hình ảnh/video giả mạo sâu (deep fakes) mang nội dung nhạy cảm mà không có sự đồng thuận.'"
  },
  {
    "id": 199,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Giáo dục con cái - Phản xạ của trẻ em thế hệ mới",
    "question": "Phản xạ tự nhiên của cô con gái 5 tuổi của Host khi gặp bất kỳ câu hỏi khó nào trong cuộc sống (trang 25) phản ánh điều gì?",
    "options": [
      "Câu trả lời tức thì: 'Hỏi ChatGPT đi' - minh họa cho thấy thế hệ trẻ em mới lớn lên đã coi AI là một phần tự nhiên trong cách tiếp cận thế giới.",
      "Bé luôn chạy đi tìm cuốn bách khoa toàn thư in trên giấy để tra cứu.",
      "Bé từ chối giao tiếp và chỉ im lặng nhìn trần nhà.",
      "Bé yêu cầu bố mẹ bật tivi xem phim hoạt hình."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25 Chapter 6: 'Giải Pháp Của Cô Bé 5 Tuổi: Phản xạ tự nhiên của cô con gái 5 tuổi của Host trước bất kỳ câu hỏi khó nào là: \"Hỏi ChatGPT đi.\"' Minh họa sự hiện diện tự nhiên của AI đối với thế hệ tương lai."
  },
  {
    "id": 200,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Phương pháp giáo dục của Andrew Ng với con gái 7 tuổi",
    "question": "Để xây dựng tư duy nền tảng vững chắc cho con gái 7 tuổi và tránh sự phụ thuộc sớm vào công cụ (trang 25), Andrew Ng đã áp dụng phương pháp nào?",
    "options": [
      "Tự tay viết riêng ứng dụng dạy gõ phím cho con gái và yêu cầu con học toán KHÔNG DÙNG máy tính cầm tay hay AI.",
      "Bắt con gái phải thuộc lòng toàn bộ mã nguồn của mạng nơ-ron Transformer.",
      "Cho con nghỉ học văn hóa để tập trung kinh doanh tiền ảo.",
      "Cấm con không được nhìn vào bất kỳ màn hình điện tử nào cho đến năm 30 tuổi."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 25 Chapter 6: 'Cách Tiếp Cận Của Andrew (Con Gái 7 Tuổi): Ông tự tay viết riêng một ứng dụng dạy gõ phím cho con gái. Ông yêu cầu con học toán không dùng máy tính để xây dựng kỹ năng nền tảng và tránh sự phụ thuộc sớm vào công cụ.'"
  },
  {
    "id": 201,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Định nghĩa lại AGI - Bài kiểm tra Tiến sĩ (PhD Test)",
    "question": "Trong bài kiểm tra mang tên 'Bài kiểm tra Tiến sĩ' (PhD Test) do Andrew Ng đề xuất để định nghĩa lại AGI thực thụ (trang 26), tiêu chí đặt ra là gì?",
    "options": [
      "Liệu AI có năng lực tự mình dành trọn 5 năm nghiên cứu độc lập để tự hoàn thành một luận án Tiến sĩ thực thụ giống như một nhà khoa học con người hay không.",
      "Liệu AI có thể trả lời đúng 100% câu hỏi trắc nghiệm sau 10 giây.",
      "Liệu AI có thể in bằng tiến sĩ giả bằng máy in màu.",
      "Liệu AI có thể chụp ảnh mặc áo cử nhân đẹp mắt trên mạng xã hội."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 26 Chapter 6: 'Bài Kiểm Tra Tiến Sĩ: Liệu AI có khả năng dành trọn 5 năm nghiên cứu để tự viết một luận án Tiến sĩ?' AGI không chỉ là giải đề thi trắc nghiệm trong vài giây mà là khả năng nghiên cứu bền bỉ, thích nghi và kiên trì như người."
  },
  {
    "id": 202,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Định nghĩa lại AGI - Bài kiểm tra Lái xe tải xuyên rừng",
    "question": "Bài kiểm tra thứ hai mang tên 'Bài kiểm tra Lái xe' (Truck Driving Test) ở trang 26 đặt ra thách thức thích nghi nào cho AGI?",
    "options": [
      "Khả năng học lái một chiếc xe tải băng qua đường rừng hiểm trở chưa từng thấy chỉ sau vài chục phút thực hành trực tiếp giống như khả năng thích nghi linh hoạt của con người.",
      "Khả năng điều khiển xe tải chạy trên một đường ray sắt thẳng tắp có gắn định vị vệ tinh.",
      "Khả năng rửa xe tải tự động trong vòng 2 phút.",
      "Khả năng ghi nhớ biển số xe của tất cả các phương tiện trên đường cao tốc."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 26 Chapter 6: 'Bài Kiểm Tra Lái Xe: Liệu AI có thể học lái xe tải xuyên rừng rậm chỉ với vài chục phút thực hành giống như con người?' Thách thức cốt lõi của AGI nằm ở khả năng thích nghi nhanh chóng với hoàn cảnh hoàn toàn mới."
  },
  {
    "id": 203,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Lời khuyên về ngành học tốt nhất kỷ nguyên AI",
    "question": "Câu trả lời nổi tiếng và đầy cảm hứng của Andrew Ng cho câu hỏi 'Bạn nên học ngành gì trong thời đại AI?' ở trang 27 là gì?",
    "options": [
      "'Ngành học tốt nhất thế giới là thứ mà bạn đam mê; hãy theo đuổi đam mê sâu sắc của bạn và kết hợp nó với các công cụ AI.'",
      "'Mọi người bắt buộc phải bỏ hết các ngành khác để học viết mã phần mềm.'",
      "'Chỉ có ngành ngân hàng và bất động sản mới tồn tại được trong thời đại AI.'",
      "'Không nên học ngành nào nữa vì AI sẽ làm thay tất cả mọi công việc.'"
    ],
    "correct": 0,
    "explanation": "Theo slide trang 27 Chapter 6: 'Kết Luận: Bạn Nên Học Ngành Gì? \"Ngành nào là tốt nhất thế giới? Là thứ mà bạn đam mê.\" Hãy theo đuổi đam mê, dù đó là khoa học máy tính, nhân văn, hay trở thành phi hành gia... Kết hợp hiểu biết chuyên môn sâu của bạn với các công cụ AI. Những người dám tiến lên và học hỏi sẽ là người tỏa sáng.'"
  },
  {
    "id": 204,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Sự kết hợp giữa Chuyên môn sâu và Công cụ AI",
    "question": "Theo Andrew Ng, công thức vàng để một cá nhân trở nên không thể thay thế và tỏa sáng trong sự nghiệp thời đại AI là gì?",
    "options": [
      "Hiểu biết chuyên môn sâu sắc trong lĩnh vực của mình + Khả năng làm chủ và ứng dụng thành thạo các công cụ AI hiện đại.",
      "Chỉ cần biết gõ câu lệnh prompt chung chung mà không cần hiểu kiến thức ngành.",
      "Từ bỏ chuyên môn và chỉ học cách mua đi bán lại các mô hình AI trên mạng.",
      "Học thuộc lòng bảng chữ cái và các từ viết tắt công nghệ."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 27 Chapter 6: 'Kết hợp hiểu biết chuyên môn sâu của bạn với các công cụ AI. Những người dám tiến lên và học hỏi sẽ là người tỏa sáng.'"
  },
  {
    "id": 205,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Bản chất thích nghi của thị trường lao động",
    "question": "Khi đối mặt với sự thay đổi của công nghệ AI, thị trường lao động vận động theo quy luật nào theo Andrew Ng (trang 4)?",
    "options": [
      "Thị trường việc làm đang TIẾN HÓA (evolving) liên tục: các tác vụ đơn điệu chuyển hóa thành các vai trò có giá trị cao hơn, tạo điều kiện cho người biết thích nghi phát triển.",
      "Thị trường lao động sẽ đóng băng hoàn toàn và ngừng trả lương.",
      "Toàn bộ nền kinh tế sẽ quay về thời kỳ săn bắn và hái lượm nguyên thủy.",
      "Tất cả công ty trên thế giới đều sẽ thuộc quyền sở hữu của một con robot duy nhất."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 4 Chapter 6: 'Thực tế, thị trường việc làm đang tiến hóa chứ không hề biến mất.' Nỗi sợ mất việc làm hàng loạt là phi thực tế vì nhu cầu công việc mới liên tục xuất hiện."
  },
  {
    "id": 206,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Sức mạnh của Sự tò mò kết hợp kỹ năng AI",
    "question": "Yếu tố tâm lý bên trong nào được Andrew Ng nhấn mạnh là động lực quan trọng nhất giúp thế hệ trẻ bứt phá cùng AI (trang 8 và 27)?",
    "options": [
      "Sự tò mò (Curiosity) và tinh thần dám tiến lên, dám thử nghiệm những điều mới mẻ.",
      "Nỗi sợ hãi thất bại và sự né tránh tiếp xúc công nghệ.",
      "Mong muốn làm giàu siêu tốc trong vòng một tuần mà không cần bỏ công sức.",
      "Thói quen ỷ lại hoàn toàn vào câu trả lời có sẵn của máy tính."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 8 và trang 27 Chapter 6: 'Điều này nhấn mạnh sức mạnh của việc kết hợp sự tò mò và kỹ năng sử dụng AI... Những người dám tiến lên và học hỏi sẽ là người tỏa sáng.'"
  },
  {
    "id": 207,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Ước mơ của con gái Andrew Ng",
    "question": "Ước mơ thời thơ ấu của con gái Andrew Ng được ông tự hào chia sẻ ở trang 27 là gì?",
    "options": [
      "Trở thành một phi hành gia (astronaut) bay vào không gian vũ trụ.",
      "Trở thành một nhà lập trình viên chatbot.",
      "Trở thành một chuyên viên tiếp thị truyền thông mạng xã hội.",
      "Trở thành một người chuyên đi mua bán thẻ cào điện thoại."
    ],
    "correct": 0,
    "explanation": "Theo slide trang 27 Chapter 6: 'Hãy theo đuổi đam mê, dù đó là khoa học máy tính, nhân văn, hay trở thành phi hành gia (như mơ ước của con gái Andrew).'"
  },
  {
    "id": 208,
    "chapterId": "ch6",
    "chapterTitle": "Chương 6: Tương Lai Của AI (Góc Nhìn Andrew Ng)",
    "topic": "Thông điệp hành động gửi người học",
    "question": "Hành động đúng đắn và khôn ngoan nhất của một sinh viên sau khi hoàn thành khóa học Ứng dụng AI là gì?",
    "options": [
      "Tự tin tiến lên phía trước, nắm vững kiến thức nền tảng, thực hành thành thạo các khung prompt và công nghệ AI để gia tăng năng lực cho chuyên môn đam mê của mình.",
      "Xóa bỏ hoàn toàn tài khoản AI và ngừng đọc tài liệu công nghệ.",
      "Chỉ học thuộc lòng các câu hỏi mà không áp dụng vào bài tập thực tế nào.",
      "Chờ đợi đến khi có người cầm tay chỉ việc mới bắt đầu tìm hiểu."
    ],
    "correct": 0,
    "explanation": "Theo toàn bộ giáo trình và slide Chapter 6: Lời khuyên cuối cùng là chủ động làm chủ công nghệ, dám tiến lên, học hỏi liên tục và biến AI thành công cụ nâng tầm đam mê của chính mình."
  }
];

if (typeof module !== 'undefined') {
    module.exports = { CHAPTERS_DATA, QUESTIONS_BANK };
}
