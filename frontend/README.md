# Dhrub Pandit — Portfolio Frontend 🎨

[![React 19](https://img.shields.io/badge/React-19.0-61dafb.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Live SaaS](https://img.shields.io/badge/Live_Projects-Audex_AI-blue?style=for-the-badge&logo=google-chrome)](https://www.audexai.in)
[![License](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

> Interactive, high-performance developer portfolio website for **Dhrub Pandit** (Full Stack & AI Engineer). Designed after [Yash Ahire's portfolio](https://yashahire.info/) from [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios). Built with **React 19**, **Vite**, and **Lucide React**.

---

## 🌟 Interactive Features

* **Dynamic Rotating Skill Badges**: Sequential, staggered skill badges cycling around the 3D avatar card one by one (React 19, Node.js & Express, Gemini AI, MongoDB Atlas, Redis, WebRTC, Python ML, Docker, OAuth 2.0, TypeScript, HLS.js, 200+ LeetCode DSA) with custom glowing aura and pulsing radar dots.
* **Liquid Custom Cursor**: Trailing physics cursor with magnetic hover detection on interactive elements and mousedown scale down.
* **Sloshing Liquid Theme Toggle**: Dark (`#0d0d12`) / Light (`#f8fafc`) theme switcher with water-droplet wave animation and `localStorage` persistence.
* **Interactive AI Assistant Modal**: Built-in conversational AI chatbot modal answering visitor queries about Dhrub's background, AUDEX AI, and technical skills with quick prompt chips.
* **Featured Projects Showcase**: Category-filtered tabs (AI & Full Stack, Web Applications, Machine Learning) covering AUDEX AI, MovieTV, fshare P2P, LLM Quiz Generator, and YPSS School ERP.
* **Verified Credentials & Resume Viewer**: Modal viewer for the official Karunadu Technologies Internship Certificate, VTU degree transcript, and downloadable PDF resume.
* **Sticky Note Contact System**: Interactive form with live submission, 1-click email copy button with toast notification, and Spotify coding visualizer.

---

## 📁 Directory Structure

```
portfolio_frontend/
├── public/
│   └── assets/                      # Photos, verified certificates, and resume PDF
│       ├── dhrub-profile.png        # Official portrait
│       ├── dhrub-signature.jpg      # Hand signature
│       ├── internship-certificate.jpg
│       ├── internship-certificate.pdf
│       ├── resume_preview.png
│       ├── transcript-preview.jpg
│       └── Dhrub_ResumeNP.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Floating glass bar with active indicator
│   │   ├── Hero.jsx                 # Dynamic typewriter & rotating skill badges
│   │   ├── About.jsx                # Story, NEC badge & engineering stats
│   │   ├── Experience.jsx           # Karunadu Technologies timeline & cert modal
│   │   ├── Projects.jsx             # Filterable projects showcase
│   │   ├── SkillsEdu.jsx            # Categorized skill pills & VTU degree
│   │   ├── Contact.jsx              # Sticky note form & Spotify widget
│   │   ├── Footer.jsx               # Impressions counter & status indicator
│   │   ├── LiquidCursor.jsx         # Inertia fluid custom cursor
│   │   ├── ScrollToTop.jsx          # Launching rocket scroll button
│   │   ├── ThemeToggle.jsx          # Sloshing liquid water theme toggle
│   │   ├── AiAssistantModal.jsx     # Conversational assistant modal
│   │   ├── ResumeModal.jsx          # Interactive PDF resume reader
│   │   └── CertificateModal.jsx     # Credential preview & download modal
│   ├── data/
│   │   └── portfolioData.js         # Client-side cached portfolio facts
│   ├── styles/
│   │   └── portfolio.css            # Dark/Light design system & animations
│   ├── App.jsx                      # App root state & modal controller
│   └── main.jsx                     # Vite React entry point
├── index.html                       # Google fonts (Plus Jakarta Sans, Space Grotesk, Sacramento)
├── vite.config.js                   # Vite configuration with /api backend proxy
├── package.json
└── README.md
```

---

## ⚡ Quick Start & Development

### 1. Prerequisites
* **Node.js** v18+ (tested on v22)
* **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

App runs locally on: **`http://localhost:3000`**

### 4. Build for Production
```bash
npm run build
```
Production assets are generated in `dist/`.

---

## 🔌 Backend Integration

The frontend automatically proxies API calls (`/api/*`) to the backend server running on `http://localhost:5000` via `vite.config.js`:
* `POST /api/chat` — Conversational AI Assistant
* `POST /api/contact` — Contact form submission
* `GET /api/stats` & `POST /api/stats/view` — Visitor analytics
* `GET /api/resume/download` — Direct resume PDF download

---

## 🚀 Vercel Deployment

This frontend is pre-configured with `vercel.json` for single-page application (SPA) client-side rewrites and asset caching.

### Deploying via Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new) and import the **`portfolio_frontend`** repository.
2. Framework Preset will be automatically detected as **Vite**.
3. In **Environment Variables**, add:
   * `VITE_API_URL`: `https://your-backend-project.vercel.app` *(Replace with your deployed backend URL from `portfolio_backend`)*
4. Click **Deploy**.

---

## 👨‍💻 Author
**Dhrub Pandit**
* Full Stack & AI Engineer
* Email: [panditdhrub0@gmail.com](mailto:panditdhrub0@gmail.com)
* GitHub: [@dhrub4545](https://github.com/dhrub4545)
