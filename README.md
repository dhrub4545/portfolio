# Dhrub Pandit — Full-Stack & AI Engineer Portfolio 🚀

[![Live Production](https://img.shields.io/badge/Live_SaaS-Audex_AI-blue?style=for-the-badge&logo=google-chrome)](https://www.audexai.in)
[![GitHub Repos](https://img.shields.io/badge/GitHub_Repos-18_Active-emerald?style=for-the-badge&logo=github)](https://github.com/dhrub4545)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com)
[![Email](https://img.shields.io/badge/Email-panditdhrub0@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:panditdhrub0@gmail.com)

> A modern, award-winning interactive developer portfolio website inspired by [Yash Ahire's portfolio](https://yashahire.info/) from [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios). Built with a decoupled **React.js** frontend and **Node.js / Express** REST API backend.

---

## 🌟 Key Features

* **Liquid Custom Cursor**: Physics-based circular cursor with smooth inertia (`lerp`), expanding magnetic hover on interactive elements, and mousedown feedback (auto-disabled on touch devices).
* **Interactive Dhrub AI Assistant Modal**: Powered by an intelligent reasoning engine and optional Google Gemini API integration (`/api/chat`). Visitors can query Dhrub's skills, AUDEX AI platform, academic background (8.94 CGPA), Karunadu Technologies internship, and contact information with sample prompt chips and streaming chat bubbles.
* **Sloshing Liquid Theme Toggle**: Dynamic Dark (`#0d0d12`) / Light (`#f8fafc`) theme switcher featuring an interactive water-droplet wave animation and `localStorage` persistence.
* **3D Holographic Hero Card**: Floating tech badges (React 19, Node.js & Redis, Gemini AI) and animated status indicator.
* **Featured Projects Showcase**: Filterable portfolio tabs (AI & Full Stack, Web Applications, Machine Learning) covering:
  * **AUDEX AI** — Enterprise LLM Spend Auditing & Optimization Platform (React 19, Redis, MongoDB, Razorpay).
  * **MovieTV** — Cinematic video streaming & 800+ live IPTV channels with custom AES-128 stream decryption.
  * **fshare** — Zero-storage browser-to-browser file transfer over WebRTC DataChannels.
  * **LLM Quiz Generator** — Automated quiz generation platform using Google Gemini API.
  * **YPSS** — Enterprise school management ERP with AI question engine.
  * **Real-Time AI Chat** — Instant messaging application with relational schema design.
* **Experience & Verified Credentials**:
  * Professional experience at **Karunadu Technologies Private Limited** (Python Programming & Applied Machine Learning Intern).
  * Interactive modal viewer for the official **Internship Certificate** and **RRIT VTU Degree Transcript** with high-resolution preview and PDF download options.
* **Sticky Note Contact System**: Interactive contact form with real-time field validation, server persistence (`/api/contact`), 1-click email copy button with toast notification, and an animated Spotify coding soundtrack visualizer.
* **Live Analytics & System Status**: Real-time page view counter (`/api/stats`), visitor metrics, and operational health checks.

---

## 🏗️ Architecture & Project Structure

```
portfolio/
├── backend/
│   ├── assets/                      # Resume PDF & official documents
│   ├── data/                        # JSON storage for messages & analytics
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── chatController.js    # AI Assistant NLP & Gemini API handler
│   │   │   └── contactController.js # Contact form validation & analytics
│   │   ├── data/
│   │   │   └── dhrubContext.js      # Structured knowledge base for Dhrub Pandit
│   │   ├── routes/
│   │   │   └── api.js               # REST endpoints (/profile, /chat, /contact, /stats, /resume)
│   │   └── server.js                # Express app setup, CORS, static serving
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── assets/                  # Profile pictures, certificates, transcripts, resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Fluid navigation bar with active section indicator
│   │   │   ├── Hero.jsx             # Intro, dynamic typewriter, AI prompt bar, 3D card
│   │   │   ├── About.jsx            # Engineering story, VTU/NEC badge, stats counters
│   │   │   ├── Experience.jsx       # Karunadu Technologies timeline & certificate view
│   │   │   ├── Projects.jsx         # Filterable projects grid with expand/collapse
│   │   │   ├── SkillsEdu.jsx        # Categorized skills pills & VTU degree showcase
│   │   │   ├── Contact.jsx          # Sticky note form, 1-click copy email, Spotify widget
│   │   │   ├── Footer.jsx           # Live impressions counter, social links, signature
│   │   │   ├── LiquidCursor.jsx     # Inertia-based fluid custom cursor
│   │   │   ├── ScrollToTop.jsx      # Launching rocket scroll button
│   │   │   ├── ThemeToggle.jsx      # Sloshing water theme toggle
│   │   │   ├── AiAssistantModal.jsx # Conversational AI modal
│   │   │   ├── ResumeModal.jsx      # Interactive PDF resume reader
│   │   │   └── CertificateModal.jsx # High-res credential zoom modal
│   │   ├── data/
│   │   │   └── portfolioData.js     # Client-side cached portfolio facts
│   │   ├── styles/
│   │   │   └── portfolio.css        # Full CSS variables, animations, glassmorphism
│   │   ├── App.jsx                  # Root state & modal management
│   │   └── main.jsx                 # Vite React entry point
│   ├── index.html                   # Fonts (Plus Jakarta Sans, Sacramento, Space Grotesk)
│   ├── vite.config.js               # Vite configuration with /api backend proxy
│   └── package.json
│
├── .gitignore
├── package.json                     # Monorepo scripts (concurrent execution)
└── README.md
```

---

## ⚡ Quick Start & Local Development

### 1. Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)

### 2. Install Dependencies
```bash
# In the portfolio root directory:
npm run install:all
```
*(Or install inside `backend` and `frontend` separately: `cd backend && npm install`, then `cd ../frontend && npm install`)*

### 3. Configure Environment (Optional)
In `backend/`:
```bash
cp .env.example .env
```
To enable live Google Gemini API generative answers in the AI Assistant:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```
*(If no API key is provided, the built-in intelligent intent reasoning engine automatically answers all questions with high fidelity!)*

### 4. Run the Full Stack Application
```bash
# Starts both Backend (port 5000) and Frontend (port 3000) concurrently:
npm run dev
```

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend API:** [http://localhost:5000/api](http://localhost:5000/api)
* **Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service uptime and status |
| `GET` | `/api/profile` | Full structured profile data |
| `POST` | `/api/chat` | AI Assistant query (`{ message, history }`) |
| `POST` | `/api/contact` | Submits contact message (`{ name, email, subject, message }`) |
| `GET` | `/api/stats` | Returns total impressions, repos, and status |
| `POST` | `/api/stats/view` | Increments total impression counter |
| `GET` | `/api/resume/download` | Downloads `Dhrub_ResumeNP.pdf` |

---

## 👨‍💻 About Dhrub Pandit

* **Title**: Full Stack & AI Engineer
* **Education**: B.E. Computer Science & Engineering (VTU) — R.R. Institute of Technology, Bengaluru (8.94 / 10 CGPA)
* **Certification**: Nepal Engineering Council (NEC) Licensed Computer Science Engineer
* **Email**: [panditdhrub0@gmail.com](mailto:panditdhrub0@gmail.com)
* **GitHub**: [@dhrub4545](https://github.com/dhrub4545)
* **Live SaaS**: [www.audexai.in](https://www.audexai.in)
