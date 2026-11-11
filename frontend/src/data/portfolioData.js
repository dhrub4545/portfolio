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
    location: "Nepal / Bengaluru, India",
    github: "https://github.com/dhrub4545",
    linkedin: "https://www.linkedin.com",
    leetcode: "https://leetcode.com/u/Dhrub417183/",
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

  certifications: [
    {
      id: "nec-licensure",
      title: "General Registered Computer Engineer",
      issuer: "Nepal Engineering Council (NEC)",
      issueDate: "October 2026",
      credentialId: "Reg No: 102299",
      category: "Government & Licensure",
      badge: "Govt. Licensed Engineer",
      isTopValued: true,
      priorityRank: 1,
      image: "/assets/certificates/nec-license.jpg",
      pdf: null,
      desc: "Official statutory engineering license granted under the Nepal Engineering Council Act, 1999 (2055) and Regulations 2000, certifying Dhrub Pandit as a legally recognized Professional Computer Engineer.",
      verifiedSkills: ["Computer Engineering", "System Architecture", "Professional Engineering Ethics", "Statutory Licensure"]
    },
    {
      id: "iitm-nptel-dsa",
      title: "Elite Certification — Programming, Data Structures & Algorithms Using Python",
      issuer: "IIT Madras & NPTEL (MoE, Govt. of India)",
      issueDate: "Jul - Sep 2023",
      credentialId: "Roll No: NPTEL23CS95S14643889",
      category: "Algorithms & Core CS",
      badge: "Elite • IIT Madras",
      isTopValued: true,
      priorityRank: 2,
      image: "/assets/certificates/iitm-nptel-dsa-elite.jpg",
      pdf: "/assets/certificates/iitm-nptel-dsa-elite.pdf",
      desc: "Rigorous 8-week proctored national certification from the Indian Institute of Technology Madras (IIT Madras) covering asymptotic analysis, searching/sorting, graph theory, dynamic programming, and data structures with a 25/25 assignment record.",
      verifiedSkills: ["Data Structures & Algorithms", "Python", "Dynamic Programming", "Graph Algorithms", "Asymptotic Analysis"]
    },
    {
      id: "karunadu-internship-cert",
      title: "Python Programming & Applied Machine Learning Internship",
      issuer: "Karunadu Technologies Private Limited",
      issueDate: "May 2026",
      credentialId: "KTPT/INT/2026/1338",
      category: "Industry Experience",
      badge: "Production ML Internship",
      isTopValued: true,
      priorityRank: 3,
      image: "/assets/certificates/karunadu-internship-full.jpg",
      pdf: "/assets/certificates/karunadu-internship-full.pdf",
      desc: "Comprehensive industry internship focused on developing and deploying production machine learning classification models, integrating diagnostic pipelines into Django web backends, and feature extraction engineering.",
      verifiedSkills: ["Python", "Applied Machine Learning", "Django", "Scikit-Learn", "Model Deployment", "Feature Scaling"]
    },
    {
      id: "google-cloud-genai",
      title: "Gen AI Exchange Hackathon 2025 Prototype Submission",
      issuer: "Google Cloud & Hack2Skill",
      issueDate: "January 2026",
      credentialId: "2025H2S08GH-P1000338",
      category: "AI & Data Science",
      badge: "Google Cloud AI",
      isTopValued: true,
      priorityRank: 4,
      image: "/assets/certificates/google-cloud-genai.jpg",
      pdf: null,
      desc: "Engineered and submitted an AI prototype for 'Personalized Career and Skills Advisor' at the national Gen AI Exchange Hackathon powered by Google Cloud, leveraging generative AI models and intelligent embeddings.",
      verifiedSkills: ["Google Cloud", "Generative AI", "LLM Prototypes", "Prompt Engineering", "AI Career Advisor"]
    },
    {
      id: "rbih-iiitb-codeathon",
      title: "24-Hour AI & Data Science Codeathon 2024",
      issuer: "Reserve Bank Innovation Hub (RBIH), IIIT Bangalore & Canara Bank",
      issueDate: "November 2024",
      credentialId: "Team Veda",
      category: "AI & Data Science",
      badge: "RBI Innovation Hub",
      isTopValued: true,
      priorityRank: 5,
      image: "/assets/certificates/rbih-iiitb-codeathon.jpg",
      pdf: "/assets/certificates/rbih-iiitb-codeathon.pdf",
      desc: "24-hour high-intensity AI & Data Science codeathon organized by Reserve Bank Innovation Hub (RBIH) in collaboration with IIIT Bangalore Innovation Centre and Canara Bank, developing predictive intelligence solutions.",
      verifiedSkills: ["Data Science", "Machine Learning", "Fintech AI", "High-Velocity Prototyping", "Team Veda Lead"]
    },
    {
      id: "icdies-research-paper",
      title: "Research Paper: 'QUIZZY- Automated Question Generator Using LLM'",
      issuer: "7th International Conference on Digital Intelligence & Engineered Systems (ICDIES-2026)",
      issueDate: "May 2026",
      credentialId: "P-ISBN: 978-93-7837-204-9",
      category: "Research & Publications",
      badge: "International Conference",
      isTopValued: false,
      priorityRank: 6,
      image: "/assets/certificates/icdies-conference-paper.jpg",
      pdf: "/assets/certificates/icdies-conference-paper.pdf",
      desc: "Presented peer-reviewed research paper on automated LLM question generation architectures at the 7th International Conference (ICDIES-2026) at RRIT Bengaluru under VTU Belgaum (NAAC A+, NBA accredited).",
      verifiedSkills: ["LLM Architectures", "Academic Research", "Automated Assessment", "Natural Language Processing"]
    },
    {
      id: "rrit-excellence-award",
      title: "Certificate of Excellence in Computer Science & Engineering",
      issuer: "R.R. Institute of Technology (VTU)",
      issueDate: "Academic Year 2024-2026",
      credentialId: "1RI22CS034",
      category: "Academic & Hackathons",
      badge: "Department Honor",
      isTopValued: false,
      priorityRank: 7,
      image: "/assets/certificates/rrit-certificate-of-excellence.jpg",
      pdf: null,
      desc: "Awarded by the Department of Computer Science & Engineering, RR Institute of Technology in recognition of enthusiastic involvement, high academic standing (8.94 CGPA), and leadership among engineering peers.",
      verifiedSkills: ["Academic Excellence", "Computer Science", "Peer Leadership", "VTU Distinction"]
    },
    {
      id: "ieee-tech-tarang",
      title: "Inter-Collegiate Project Exhibition — Tech Tarang 2025",
      issuer: "IEEE Bangalore Section & City Engineering College",
      issueDate: "November 2025",
      credentialId: "IEEE Student Branch",
      category: "Academic & Hackathons",
      badge: "IEEE Bangalore",
      isTopValued: false,
      priorityRank: 8,
      image: "/assets/certificates/ieee-tech-tarang.png",
      pdf: null,
      desc: "Demonstrated and exhibited an advanced software engineering project at the IEEE-affiliated 'Tech Tarang 2025' inter-collegiate technical competition organized in association with the IEEE Bangalore Section.",
      verifiedSkills: ["Project Exhibition", "IEEE Bangalore", "Technical Presentation", "Software Prototyping"]
    },
    {
      id: "openai-academy-genai",
      title: "Generative AI Mastery — India's Biggest GenAI Buildathon",
      issuer: "OpenAI Academy Learning Community & NxtWave",
      issueDate: "August 2025",
      credentialId: "NxtWave / OpenAI Academy",
      category: "AI & Data Science",
      badge: "OpenAI Community",
      isTopValued: false,
      priorityRank: 9,
      image: "/assets/certificates/openai-academy-genai.jpg",
      pdf: null,
      desc: "Participated in the Generative AI Mastery Workshop and Buildathon hosted by NxtWave as part of the OpenAI Academy Learning Community, mastering multimodal prompts and agentic workflows.",
      verifiedSkills: ["Generative AI", "OpenAI Workflows", "Prompt Engineering", "Multimodal Agents"]
    },
    {
      id: "rrit-web-design-3rd",
      title: "3rd Place Award — Web Design (PRAUDYOGIK-2k24)",
      issuer: "Dept. of CSE, RRIT & Pro-Greeks",
      issueDate: "February 2024",
      credentialId: "PRAUDYOGIK-2k24",
      category: "Academic & Hackathons",
      badge: "Podium Finish (3rd)",
      isTopValued: false,
      priorityRank: 10,
      image: "/assets/certificates/rrit-web-design-award.jpg",
      pdf: null,
      desc: "Secured Third Place in the competitive Web Design Hackathon during PRAUDYOGIK-2k24 organized by Department of Computer Science & Engineering in association with Pro-Greeks.",
      verifiedSkills: ["Web Design", "UI/UX", "Modern CSS", "Frontend Engineering", "Rapid Prototyping"]
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
