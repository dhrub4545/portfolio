import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, FileText, Send, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenAiChat }) {
  const { personal, sampleAiQuestions } = portfolioData;
  const [promptText, setPromptText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personal.roleVariants[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        if (displayedRole.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roleVariants.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, personal.roleVariants]);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (promptText.trim()) {
      onOpenAiChat(promptText.trim());
      setPromptText('');
    }
  };

  const handleChipClick = (question) => {
    onOpenAiChat(question);
  };

  return (
    <section id="home" className="hero-section">
      {/* Left Column */}
      <div className="hero-left">
        <div className="section-pill">
          <span className="status-dot" />
          <span>{personal.status}</span>
        </div>

        <h3 className="hero-greeting">Hey there, I'm</h3>
        <h1 className="hero-name">{personal.name}</h1>

        <div className="hero-typewriter-wrap">
          <span className="hero-typewriter">{displayedRole}</span>
        </div>

        <p className="hero-summary">{personal.summary}</p>

        {/* Action Buttons */}
        <div className="hero-action-btns">
          <a href="#projects" className="btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </a>

          <button className="btn-secondary" onClick={onOpenResume}>
            <FileText size={18} />
            <span>View Resume</span>
          </button>

          <a href="#contact" className="btn-secondary">
            <Send size={18} />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* AI Prompt Search Bar */}
        <div className="ai-prompt-bar">
          <form onSubmit={handlePromptSubmit} className="ai-prompt-input-row">
            <Sparkles size={20} className="ai-sparkle-icon" />
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ask AI anything about Dhrub (skills, AUDEX AI, CGPA, etc.)..."
              className="ai-prompt-input"
            />
            <button type="submit" className="ai-prompt-btn">
              <span>Ask AI</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Sample prompt chips */}
          <div className="ai-prompt-chips">
            {sampleAiQuestions.slice(0, 3).map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(q)}
                className="ai-prompt-chip"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column 3D Visual */}
      <div className="hero-right">
        <div className="hero-avatar-card">
          {/* Floating tech badges */}
          <div className="floating-chip chip-1">
            <span style={{ color: '#61DAFB' }}>⚛️</span> React 19
          </div>
          <div className="floating-chip chip-2">
            <span style={{ color: '#68A063' }}>🟢</span> Node.js & Redis
          </div>
          <div className="floating-chip chip-3">
            <span style={{ color: '#ffd460' }}>🤖</span> Gemini AI
          </div>

          <img
            src="/assets/dhrub-profile.png"
            alt="Dhrub Pandit"
            className="hero-avatar-img"
          />

          <div className="hero-card-meta">
            <h4 className="hero-card-name">Dhrub Pandit</h4>
            <p className="hero-card-role">Full Stack & AI Engineer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '6px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>NEC Licensed Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
