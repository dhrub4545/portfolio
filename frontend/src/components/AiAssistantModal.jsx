import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, User, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getApiUrl } from '../utils/api';
import MarkdownMessage from './MarkdownMessage';

export default function AiAssistantModal({ isOpen, onClose, initialQuery }) {
  const { sampleAiQuestions } = portfolioData;

  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hello! I am **Dhrub Pandit's AI Assistant**.\n\nAsk me anything about Dhrub's production software systems, **AUDEX AI**, full-stack architecture, or verified certifications!",
      model: 'adaptive',
      source: 'init'
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
      const response = await fetch(getApiUrl('/api/chat'), {
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
          text: data.reply || "I'm ready to answer any questions about Dhrub's portfolio!",
          model: data.model,
          source: data.source
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Dhrub is a **Full Stack & AI Engineer** specializing in **React 19, Node.js, Express, MongoDB**, and AI platforms like **AUDEX AI**. Feel free to contact him directly at [panditdhrub0@gmail.com](mailto:panditdhrub0@gmail.com)!`,
          model: 'local-fallback',
          source: 'local'
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

  const formatModelBadge = (model) => {
    if (!model || model === 'init') return 'Adaptive AI';
    if (model === 'local-fallback' || model === 'local') return 'Verified Engine';
    return model
      .replace('models/', '')
      .replace('gemini-', '')
      .replace('-latest', ' ⚡');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container chat-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header chat-header">
          <div className="modal-title-group">
            <div className="chat-avatar-glow">
              <Bot size={22} />
            </div>
            <div>
              <div className="chat-header-title">
                <span>Dhrub AI Assistant</span>
                <span className="chat-badge-verified">Verified</span>
              </div>
              <div className="chat-header-status">
                <span className="status-dot-pulse" />
                <span>Online & Ready</span>
                <span className="chat-model-indicator">• Dynamic LLM</span>
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
              <div className="chat-bubble-header">
                <div className="chat-role-info">
                  {m.role === 'ai' ? (
                    <>
                      <Sparkles size={12} className="chat-sparkle-icon" />
                      <span className="chat-role-label">Dhrub AI</span>
                      <span className="chat-model-badge">
                        {formatModelBadge(m.model)}
                      </span>
                    </>
                  ) : (
                    <>
                      <User size={12} />
                      <span className="chat-role-label">You</span>
                    </>
                  )}
                </div>
              </div>

              {m.role === 'ai' ? (
                <MarkdownMessage content={m.text} />
              ) : (
                <div className="chat-user-text">{m.text}</div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble ai chat-typing-bubble">
              <div className="chat-typing-indicator">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
              <span className="chat-typing-text">Synthesizing verified response...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompt suggestions */}
        <div className="chat-suggestions-bar">
          <span className="chat-suggestions-label">Try asking:</span>
          <div className="chat-suggestions-scroll">
            {sampleAiQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => sendMessage(q)}
                className="chat-suggestion-chip"
              >
                <span>{q}</span>
                <ArrowRight size={11} className="chip-arrow" />
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about AUDEX AI, tech stack, certifications..."
            className="chat-input-field"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!inputText.trim()}
            className="chat-send-btn"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
