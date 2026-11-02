import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, User, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AiAssistantModal({ isOpen, onClose, initialQuery }) {
  const { sampleAiQuestions } = portfolioData;

  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hello! I am Dhrub Pandit's AI Assistant. Ask me anything about Dhrub's software systems, AUDEX AI, tech stack, or engineering experience!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      sendMessage(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const sendMessage = async (queryText) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim()) return;

    const userMsg = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages
        })
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: data.reply || "I'm ready to answer any questions about Dhrub's portfolio!"
        }
      ]);
    } catch (error) {
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Dhrub is a Full Stack & AI Engineer specializing in React 19, Node.js, Express, MongoDB, and AI platforms like AUDEX AI. Feel free to contact him directly at panditdhrub0@gmail.com!`
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'color-mix(in srgb, var(--accent-primary) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              <Bot size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Dhrub AI Assistant
              </div>
              <div style={{ fontSize: '0.78rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                Online & Ready
              </div>
            </div>
          </div>

          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Chat message stream */}
        <div className="chat-messages-container">
          {messages.map((m, idx) => (
            <div key={idx} className={`chat-bubble ${m.role}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontSize: '0.75rem', opacity: 0.8 }}>
                {m.role === 'ai' ? <Sparkles size={12} color="var(--accent-primary)" /> : <User size={12} />}
                <span>{m.role === 'ai' ? 'Dhrub AI' : 'You'}</span>
              </div>
              <div style={{ whiteSpace: 'pre-line' }}>{m.text}</div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble ai" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 16px' }}>
              <span className="status-dot" style={{ width: '6px', height: '6px' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompt suggestions */}
        <div style={{ padding: '8px 20px', background: 'var(--card-bg)', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '6px', overflowX: 'auto' }}>
          {sampleAiQuestions.slice(0, 3).map((q, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(q)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)',
                fontSize: '0.74rem',
                padding: '4px 10px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question about Dhrub..."
            className="chat-input-field"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!inputText.trim()}
            className="chat-send-btn"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
