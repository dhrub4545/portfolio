import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import SkillsEdu from './components/SkillsEdu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidCursor from './components/LiquidCursor';
import ScrollToTop from './components/ScrollToTop';
import AiAssistantModal from './components/AiAssistantModal';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dhrub_theme') || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [aiInitialQuery, setAiInitialQuery] = useState('');
  const [certificateModal, setCertificateModal] = useState({
    isOpen: false,
    imageSrc: '',
    pdfSrc: '',
    title: ''
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dhrub_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenAiChat = (query = '') => {
    setAiInitialQuery(query);
    setIsAiChatOpen(true);
  };

  const handleOpenCertificate = (imageSrc, pdfSrc, title) => {
    setCertificateModal({
      isOpen: true,
      imageSrc,
      pdfSrc,
      title
    });
  };

  return (
    <div className={`App ${theme}`}>
      <LiquidCursor />
      
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAiChat={handleOpenAiChat}
        />

        <About />

        <Experience onOpenCertificate={handleOpenCertificate} />

        <Projects />

        <Certifications onOpenCertificate={handleOpenCertificate} />

        <SkillsEdu onOpenTranscript={(img, title) => handleOpenCertificate(img, null, title)} />

        <Contact />
      </main>

      <Footer />

      <ScrollToTop />

      {/* Interactive Modals */}
      <AiAssistantModal
        isOpen={isAiChatOpen}
        onClose={() => {
          setIsAiChatOpen(false);
          setAiInitialQuery('');
        }}
        initialQuery={aiInitialQuery}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CertificateModal
        isOpen={certificateModal.isOpen}
        onClose={() => setCertificateModal({ ...certificateModal, isOpen: false })}
        imageSrc={certificateModal.imageSrc}
        pdfSrc={certificateModal.pdfSrc}
        title={certificateModal.title}
      />
    </div>
  );
}
