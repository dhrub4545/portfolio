export const portfolioData = {
  personal: {
    name: "Dhrub Pandit",
    first: "Dhrub",
    last: "Pandit",
    title: "Full Stack & AI Engineer",
    roleVariants: [
      "Full Stack & AI Engineer",
      "React.js & Node.js Specialist",
      "Distributed Systems Architect",
      "NEC Licensed Computer Engineer",
      "AI-Powered SaaS Builder"
    ],
    status: "Available for Full-Time Roles & AI Projects",
    email: "panditdhrub0@gmail.com",
    phone: "+9779803862836",
    location: "Bengaluru, India / Nepal",
    github: "https://github.com/dhrub4545",
    linkedin: "https://www.linkedin.com",
    leetcode: "https://leetcode.com/u/panditdhrub0/",
    avatar: "/assets/dhrub-profile.png",
    signature: "/assets/dhrub-signature.jpg",
    resumePdf: "/assets/Dhrub_ResumeNP.pdf",
    resumePreview: "/assets/resume_preview.png",
    summary:
      "Nepal Engineering Council (NEC) licensed Computer Science Engineer with hands-on experience building scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in authentication systems (OAuth 2.0, JWT), REST API development, AI API integrations, and cloud deployment. Passionate about backend engineering, distributed systems, and building AI-powered SaaS products."
  },

  stats: [
    { label: "Public Repositories", value: "18+", detail: "Full stack, AI, WebRTC & microservices" },
    { label: "B.E. CGPA", value: "8.94 / 10", detail: "VTU First Class with Distinction" },
    { label: "LeetCode Solved", value: "200+", detail: "Data Structures & Algorithms" },
    { label: "AI Models Audited", value: "579+", detail: "Benchmarked on AUDEX AI" }
  ],

  aboutParagraphs: [
    "I am a Nepal Engineering Council (NEC) licensed Computer Science Engineer with a strong foundation in building production-ready, distributed web architectures. Having graduated with an 8.94/10 CGPA in Computer Science and Engineering from R.R. Institute of Technology (VTU), Bengaluru, I blend rigorous engineering theory with high-velocity product execution.",
    "My core focus lies at the intersection of modern full-stack systems and Artificial Intelligence. I specialize in designing scalable Node.js and Express REST APIs, resilient microservices, stateless JWT/OAuth 2.0 authentication flows, and dynamic React 19 web interfaces. From real-time WebRTC peer-to-peer data streaming with zero server storage to low-latency media players with AES-128 decryption, I love tackling challenging systems problems.",
    "Recently, I engineered AUDEX AI—an enterprise SaaS platform that benchmarks token spend, pricing, and latency across 579+ AI models. Whether developing autonomous AI quiz engines, distributed caching layers with Redis, or predictive machine learning models, I am driven by creating high-impact software that solves real enterprise needs."
  ],

  experience: [
    {
      id: "karunadu-internship",
      company: "Karunadu Technologies Private Limited",
      role: "Python Programming & Applied Machine Learning Intern",
      period: "Feb 2026 – May 2026",
      location: "Bengaluru, India",
      type: "Internship",
      certificate: "/assets/internship-certificate.jpg",
      certificatePdf: "/assets/internship-certificate.pdf",
      technologies: ["Python", "Django", "Machine Learning", "Scikit-Learn", "Feature Scaling", "Supervised Learning"],
      bullets: [
        "Completed a professional internship focusing on Python software development and applied machine learning models.",
        "Engineered a Lung Cancer Prediction platform using supervised classification algorithms and integrated it into a Django web backend.",
        "Developed a Dry Bean Classification model to analyze and categorize bean species, performing feature scaling, extraction, and comparison of multiple classification algorithms.",
        "Applied data preprocessing, model selection, evaluation metrics (accuracy, precision, recall, F1-score), and deployment workflows to build end-to-end solutions."
      ]
    }
  ],

  education: [
    {
      id: "rrit-vtu",
      school: "R. R. Institute of Technology (VTU)",
      location: "Bengaluru, India",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      period: "Sep 2022 – May 2026",
      grade: "CGPA: 8.94 / 10",
      transcriptPreview: "/assets/transcript-preview.jpg",
      highlights: [
        "Nepal Engineering Council (NEC) Licensed Computer Engineer",
        "VTU First Class with Distinction",
        "200+ LeetCode Data Structures & Algorithms problems solved",
        "Active contributor to full-stack open-source ecosystems"
      ],
      coursework: [
        "Distributed Systems",
        "Object Oriented Programming (C++, Java)",
        "Database Management Systems & SQL",
        "Cloud Computing & Virtualization",
        "Artificial Intelligence & Machine Learning",
        "Computer Networks & Web Protocols"
      ]
    }
  ],

  projects: [
    {
      id: "audex-ai",
      name: "AUDEX AI",
      title: "LLM Spend Auditing & Optimization Platform",
      category: "AI & Full Stack",
      featured: true,
      badge: "Production SaaS",
      liveUrl: "https://www.audexai.in",
      githubUrl: "https://github.com/dhrub4545/Audex_AI_frontend",
      backendUrl: "https://github.com/dhrub4545/Audex_AI_backend",
      desc: "An enterprise AI cost intelligence platform analyzing 579+ AI models, benchmarking token pricing, latencies, and output quality to optimize enterprise LLM spend.",
      techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Redis", "Razorpay", "JWT", "OAuth 2.0", "Axios"],
      bullets: [
        "Engineered full-stack SaaS platform to optimize enterprise LLM spend by auditing subscription allocations, user seats, and API token volumes.",
        "Built interactive React interfaces featuring dynamic token calculators, side-by-side subscription vs. API savings comparisons, and visual status indicators.",
        "Integrated Google and GitHub OAuth 2.0 authentication flows directly via API routes, managing sessions using stateless JSON Web Tokens (JWT).",
        "Implemented robust credit-based tier restriction system (Starter, Pro, ProMax) with prioritized credit deduction logic, Redis caching, and Razorpay billing."
      ]
    },
    {
      id: "movietv",
      name: "MovieTV",
      title: "Cinematic Video Streaming & 800+ Live IPTV",
      category: "Web Applications",
      featured: true,
      badge: "Streaming Platform",
      githubUrl: "https://github.com/dhrub4545/movieTV-web",
      backendUrl: "https://github.com/dhrub4545/movieTV-backend",
      desc: "High-performance multimedia streaming platform with 100% Android TV / Web parity, custom AES-128 stream decryption, and low-latency HLS player.",
      techStack: ["React", "Node.js", "Express", "HLS.js", "AES-128 Decryption", "Web Audio DSP"],
      bullets: [
        "High-performance media streaming platform with 100% Android TV / Web parity.",
        "Engineered stream decryptor (AES-128-CBC), IPTV M3U parser, and low-latency reverse proxy.",
        "Integrated custom low-latency HLS player with +12dB Web Audio DSP gain boost."
      ]
    },
    {
      id: "fshare",
      name: "fshare & P2P Tunnel",
      title: "Zero-Storage WebRTC File Streaming",
      category: "Web Applications",
      featured: true,
      badge: "P2P WebRTC",
      githubUrl: "https://github.com/dhrub4545/fshare",
      backendUrl: "https://github.com/dhrub4545/p2p_file-transfer",
      desc: "High-speed browser-to-browser file transfer platform operating over WebRTC DataChannels with 0 MB server storage and QR code matchmaking.",
      techStack: ["WebRTC", "PeerJS", "React", "Node.js", "Socket.IO"],
      bullets: [
        "Engineered browser-to-browser file transfer with 0 MB server storage over WebRTC DataChannels.",
        "Implemented 64KB chunking, backpressure pacing, and instant QR code matchmaking.",
        "Built ephemeral 6-digit PIN signaling server for ultra-fast peer discovery."
      ]
    },
    {
      id: "quiz-generator",
      name: "LLM Quiz Generator",
      title: "Automated AI Quiz Generation Platform",
      category: "AI & Full Stack",
      featured: true,
      badge: "AI Platform",
      githubUrl: "https://github.com/dhrub4545/quiz-Generator--main",
      desc: "Full-stack platform that synthesizes interactive quizzes from user-provided topics using large language models, supporting creation, taking, and result analytics.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "REST APIs"],
      bullets: [
        "Built dynamic AI quiz creation pipeline that synthesizes topic-specific questions with multiple difficulty modes.",
        "Developed responsive React.js interfaces and Node.js REST APIs for real-time quiz evaluation.",
        "Modeled quizzes, user profiles, and test score analytics in MongoDB Atlas."
      ]
    },
    {
      id: "ypss",
      name: "YPSS School ERP",
      title: "Enterprise School ERP & Bilingual AI Question Engine",
      category: "Full Stack",
      featured: true,
      badge: "Enterprise ERP",
      githubUrl: "https://github.com/dhrub4545/YPSS",
      desc: "Comprehensive school management platform featuring automated Nepali fee schedules, bilingual Gemini AI question generation, and dynamic PDF/DOCX marks cards.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini API", "PDFKit"],
      bullets: [
        "Flagship educational management platform with automated Nepali fee schedules.",
        "Bilingual Gemini AI question generator with educator review workflows.",
        "Dynamic DOCX/PDF marks card overlays and school-wide walkie-talkie broadcasting."
      ]
    },
    {
      id: "chat-application",
      name: "Real-Time AI Chat",
      title: "Web-Based Real-Time & AI Chat Application",
      category: "Web Applications",
      featured: false,
      badge: "Real-Time Chat",
      githubUrl: "https://github.com/dhrub4545/Web-Based-Real-Time-AI-Chat-Application",
      desc: "Web chat application supporting instant user-to-user messaging alongside a conversational AI interface with custom chat history persistence.",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Python"],
      bullets: [
        "Engineered web chat application supporting user-to-user and user-to-AI conversations with instant delivery.",
        "Developed conversational AI workflows and intuitive responsive interface.",
        "Designed MySQL relational database for efficient messaging logs and user profiles."
      ]
    },
    {
      id: "lung-cancer",
      name: "Lung Cancer Prediction",
      title: "Supervised Clinical ML Diagnostic Platform",
      category: "Machine Learning",
      featured: false,
      badge: "Applied ML",
      desc: "Clinical diagnostic classification platform integrated into a Django backend to predict lung cancer risk with high recall and precision metrics.",
      techStack: ["Python", "Django", "Scikit-Learn", "Machine Learning", "Supervised Learning"],
      bullets: [
        "Trained supervised classification algorithms on clinical datasets.",
        "Integrated model inference pipeline into a Django web backend with user diagnostic interface."
      ]
    },
    {
      id: "dry-bean",
      name: "Dry Bean Classification",
      title: "Multi-Class Computer Vision Feature Extraction",
      category: "Machine Learning",
      featured: false,
      badge: "Applied ML",
      desc: "Computer vision and machine learning model that extracts geometric features to classify bean species with rigorous evaluation metrics.",
      techStack: ["Python", "Scikit-Learn", "Feature Scaling", "Pandas", "NumPy"],
      bullets: [
        "Performed feature scaling, extraction, and multiclass algorithm comparison.",
        "Achieved high precision, recall, and F1-score across distinct bean species."
      ]
    }
  ],

  skillCategories: [
    {
      name: "Languages",
      icon: "Code",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "Python", level: "Advanced" },
        { name: "C / C++", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "PHP", level: "Intermediate" },
        { name: "HTML5 & CSS3", level: "Advanced" }
      ]
    },
    {
      name: "Frameworks & Web Tech",
      icon: "Layers",
      skills: [
        { name: "React.js (v19)", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "OAuth 2.0 (Google/GitHub)", level: "Advanced" },
        { name: "JWT (jsonwebtoken)", level: "Advanced" },
        { name: "Socket.IO", level: "Proficient" },
        { name: "WebRTC (PeerJS)", level: "Proficient" },
        { name: "Django", level: "Intermediate" },
        { name: "Lenis Smooth Scroll", level: "Proficient" }
      ]
    },
    {
      name: "Databases & Dev Tools",
      icon: "Database",
      skills: [
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "MongoDB Atlas", level: "Advanced" },
        { name: "Redis (ioredis)", level: "Proficient" },
        { name: "MySQL", level: "Proficient" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Vite", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Rate Limiting & Locking", level: "Proficient" }
      ]
    },
    {
      name: "AI & Methodologies",
      icon: "Brain",
      skills: [
        { name: "Applied Machine Learning", level: "Proficient" },
        { name: "LLM Benchmarking", level: "Advanced" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Google Gemini API", level: "Advanced" },
        { name: "xAI / Grok 4.5", level: "Proficient" },
        { name: "OpenAI & Groq APIs", level: "Proficient" },
        { name: "Data Structures (200+ LC)", level: "Advanced" }
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: "Cloud",
      skills: [
        { name: "Docker & Volumes", level: "Intermediate" },
        { name: "Vercel Deployment", level: "Advanced" },
        { name: "Render Cloud", level: "Proficient" },
        { name: "Razorpay Gateway", level: "Proficient" },
        { name: "ESLint", level: "Proficient" },
        { name: "Node-Cron", level: "Proficient" }
      ]
    }
  ],

  sampleAiQuestions: [
    "What are Dhrub's top technical skills?",
    "Tell me about AUDEX AI and how it works",
    "Where did Dhrub study and what is his CGPA?",
    "What was Dhrub's role at Karunadu Technologies?",
    "How can I contact or hire Dhrub?"
  ]
};
