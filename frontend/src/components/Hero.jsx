import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, FileText, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Dynamic skill items with brand colors, icons and categories
const dynamicSkillsList = [
  { name: 'React 19', icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
  { name: 'Node.js & Express', icon: '🟢', color: '#68A063', category: 'Backend API' },
  { name: 'Gemini AI & Grok', icon: '🤖', color: '#ffd460', category: 'LLM Systems' },
  { name: 'MongoDB Atlas', icon: '🍃', color: '#10b981', category: 'NoSQL Database' },
  { name: 'Redis Caching', icon: '⚡', color: '#ef4444', category: 'Distributed Cache' },
  { name: 'WebRTC & PeerJS', icon: '🌐', color: '#a855f7', category: 'P2P Streaming' },
  { name: 'Python & Applied ML', icon: '🐍', color: '#fbbf24', category: 'Machine Learning' },
  { name: 'Docker & DevOps', icon: '🐳', color: '#38bdf8', category: 'Containers' },
  { name: 'OAuth 2.0 & JWT', icon: '🔐', color: '#ec4899', category: 'Authentication' },
  { name: 'TypeScript', icon: '🔷', color: '#3b82f6', category: 'Typed JavaScript' },
  { name: 'HLS.js Streaming', icon: '🎬', color: '#f97316', category: 'Media Player' },
  { name: '200+ LeetCode DSA', icon: '💡', color: '#f59e0b', category: 'Algorithms' }
];

// Curated concise quick prompts with icons for hero bar
const quickAiPrompts = [
  { label: 'AUDEX AI', query: 'Tell me about AUDEX AI and how it works', icon: '⚡' },
  { label: 'Core Stack', query: "What are Dhrub's top technical skills?", icon: '🛠️' },
  { label: '8.94 CGPA / VTU', query: 'Where did Dhrub study and what is his CGPA?', icon: '🎓' },
  { label: 'NEC Licensure', query: "Tell me about Dhrub's engineering license and certifications", icon: '📜' }
];

export default function Hero({ onOpenResume, onOpenAiChat }) {
  const { personal, sampleAiQuestions } = portfolioData;
  const [promptText, setPromptText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic skill slots around the photo card: 3 slots that change one by one in sequence
  const [slotIndices, setSlotIndices] = useState([0, 1, 2]); // Initial: React 19, Node.js, Gemini AI
  const [exitingSlot, setExitingSlot] = useState(null);
  const [enteringSlot, setEnteringSlot] = useState(null);
  const [activeSlotTarget, setActiveSlotTarget] = useState(0);
  const [isHoveredOnCard, setIsHoveredOnCard] = useState(false);

  const nextSkillIndexRef = useRef(3);

  // Typewriter effect for roles
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

  // Dynamic Skill rotation: changes ONE badge at a time in changing order (Slot 0 -> Slot 1 -> Slot 2 -> Slot 0 ...)
  useEffect(() => {
    if (isHoveredOnCard) return;

    const interval = setInterval(() => {
      const slotToUpdate = activeSlotTarget;
      const nextSkill = nextSkillIndexRef.current % dynamicSkillsList.length;
      nextSkillIndexRef.current += 1;

      // 1. Trigger exit animation on the chosen slot
      setExitingSlot(slotToUpdate);

      setTimeout(() => {
        // 2. Update the skill in that slot
        setSlotIndices((prev) => {
          const updated = [...prev];
          updated[slotToUpdate] = nextSkill;
          return updated;
        });

        // 3. Trigger enter animation
        setExitingSlot(null);
        setEnteringSlot(slotToUpdate);

        setTimeout(() => {
          setEnteringSlot(null);
        }, 400);
      }, 260);

      // Advance to the next slot for the subsequent tick
      setActiveSlotTarget((prev) => (prev + 1) % 3);
    }, 2200);

    return () => clearInterval(interval);
  }, [activeSlotTarget, isHoveredOnCard]);

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

  const skill1 = dynamicSkillsList[slotIndices[0]];
  const skill2 = dynamicSkillsList[slotIndices[1]];
  const skill3 = dynamicSkillsList[slotIndices[2]];

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
            <div className="ai-sparkle-wrap">
              <Sparkles size={18} className="ai-sparkle-icon" />
            </div>
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ask AI anything about Dhrub (skills, AUDEX AI, CGPA, certs)..."
              className="ai-prompt-input"
            />
            <button type="submit" className="ai-prompt-btn" aria-label="Ask AI">
              <span>Ask AI</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Sample prompt chips */}
          <div className="ai-prompt-chips-wrapper">
            <span className="ai-prompt-chips-label">Quick:</span>
            <div className="ai-prompt-chips">
              {quickAiPrompts.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChipClick(item.query)}
                  className="ai-prompt-chip"
                  title={item.query}
                >
                  <span className="ai-chip-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column 3D Visual with Dynamic Cycling Floating Badges */}
      <div className="hero-right">
        <div
          className="hero-avatar-wrap"
          onMouseEnter={() => setIsHoveredOnCard(true)}
          onMouseLeave={() => setIsHoveredOnCard(false)}
        >
          {/* Slot 1: Top Left */}
          <div
            className={`dynamic-floating-chip chip-slot-1 ${exitingSlot === 0 ? 'is-exiting' : ''} ${enteringSlot === 0 ? 'is-entering' : ''}`}
            style={{
              '--chip-color': skill1.color,
              '--chip-glow': `${skill1.color}40`,
              '--chip-border': `${skill1.color}60`
            }}
          >
            <div className="chip-icon-circle" style={{ background: `${skill1.color}22` }}>
              <span className="chip-icon">{skill1.icon}</span>
            </div>
            <div className="chip-text-content">
              <span className="chip-title" style={{ color: skill1.color }}>{skill1.name}</span>
              <span className="chip-category">{skill1.category}</span>
            </div>
            <span
              className="chip-live-dot"
              style={{ background: skill1.color, boxShadow: `0 0 8px ${skill1.color}` }}
            />
          </div>

          {/* Slot 2: Mid Right */}
          <div
            className={`dynamic-floating-chip chip-slot-2 ${exitingSlot === 1 ? 'is-exiting' : ''} ${enteringSlot === 1 ? 'is-entering' : ''}`}
            style={{
              '--chip-color': skill2.color,
              '--chip-glow': `${skill2.color}40`,
              '--chip-border': `${skill2.color}60`
            }}
          >
            <div className="chip-icon-circle" style={{ background: `${skill2.color}22` }}>
              <span className="chip-icon">{skill2.icon}</span>
            </div>
            <div className="chip-text-content">
              <span className="chip-title" style={{ color: skill2.color }}>{skill2.name}</span>
              <span className="chip-category">{skill2.category}</span>
            </div>
            <span
              className="chip-live-dot"
              style={{ background: skill2.color, boxShadow: `0 0 8px ${skill2.color}` }}
            />
          </div>

          {/* Slot 3: Bottom Left */}
          <div
            className={`dynamic-floating-chip chip-slot-3 ${exitingSlot === 2 ? 'is-exiting' : ''} ${enteringSlot === 2 ? 'is-entering' : ''}`}
            style={{
              '--chip-color': skill3.color,
              '--chip-glow': `${skill3.color}40`,
              '--chip-border': `${skill3.color}60`
            }}
          >
            <div className="chip-icon-circle" style={{ background: `${skill3.color}22` }}>
              <span className="chip-icon">{skill3.icon}</span>
            </div>
            <div className="chip-text-content">
              <span className="chip-title" style={{ color: skill3.color }}>{skill3.name}</span>
              <span className="chip-category">{skill3.category}</span>
            </div>
            <span
              className="chip-live-dot"
              style={{ background: skill3.color, boxShadow: `0 0 8px ${skill3.color}` }}
            />
          </div>

          {/* Main 3D Card */}
          <div className="hero-avatar-card">
            <div className="hero-card-sheen" />

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
      </div>
    </section>
  );
}
