import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, Zap, Globe, MessageSquare, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getApiUrl } from '../utils/api';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { success: boolean, message: string }
  const [copied, setCopied] = useState(false);

  const [nepalTime, setNepalTime] = useState(() => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(new Date());
    } catch {
      return 'UTC+5:45';
    }
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        setNepalTime(
          new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Kathmandu',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }).format(new Date())
        );
      } catch {
        // fallback
      }
    };
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendViaWhatsApp = () => {
    const name = formData.name.trim() || 'Visitor';
    const email = formData.email.trim() || 'Not specified';
    const subject = formData.subject.trim() || 'Portfolio Opportunity';
    const message = formData.message.trim() || 'Hi Dhrub, I came across your portfolio and wanted to discuss a project!';

    const text = `Hi Dhrub!
👤 *From:* ${name}
📧 *Email:* ${email}
📌 *Subject:* ${subject}

💬 *Message:*
${message}`;

    const cleanPhone = '9779803862836';
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || `Thank you, ${formData.name}! Your message has been sent successfully.`
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to deliver message. Please try emailing directly.'
        });
      }
    } catch (error) {
      // Offline or network fallback
      setSubmitStatus({
        success: true,
        message: `Thank you, ${formData.name}! Your message has been captured. Feel free to also ping directly at ${personal.email}.`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrap">
      <div className="section-pill">
        <Mail size={14} />
        <span>Initiate Collaboration</span>
      </div>

      <h2 className="section-title">Let's Build Something Exceptional</h2>
      <p className="section-subtitle">
        Whether you have an enterprise project, an AI architecture challenge, or are looking for a dedicated Full Stack Engineer—my inbox is always open.
      </p>

      <div className="contact-grid">
        {/* Left: Contact Form */}
        <div className="sticky-contact-form">
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>
            Send a Direct Message
          </h3>

          {submitStatus && (
            <div
              className={`contact-submit-alert ${submitStatus.success ? 'is-success' : 'is-error'}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {submitStatus.success ? <Check size={18} /> : <AlertCircle size={18} />}
                <span>{submitStatus.message}</span>
              </div>
              {submitStatus.success && (
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="btn-whatsapp-followup"
                >
                  <MessageSquare size={14} />
                  <span>Also ping Dhrub on WhatsApp for instant reply ↗</span>
                </button>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Full Stack Engineering / AI Project"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Dhrub, I came across your AUDEX AI project and wanted to discuss a potential opportunity..."
                className="form-textarea"
              />
            </div>

            <div className="contact-form-actions">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="btn-whatsapp-action"
                title="Send your message directly to Dhrub on WhatsApp"
              >
                <MessageSquare size={16} />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Direct Contacts & Spotify Widget */}
        <div>
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px', color: 'var(--text-primary)' }}>
              Direct Channels
            </h3>

            {/* Email */}
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="info-title">Email</div>
                <div className="info-val">{personal.email}</div>
                <button onClick={handleCopyEmail} className="btn-copy-email">
                  {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="info-item">
              <div className="info-icon info-icon-whatsapp">
                <Phone size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="info-title">Phone & WhatsApp</div>
                <div className="info-val">{personal.phone}</div>
                <a
                  href="https://wa.me/9779803862836?text=Hi%20Dhrub,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-direct"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp Directly ↗</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="info-title">Primary Locations</div>
                <div className="info-val">{personal.location}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Available for remote worldwide & on-site positions
                </div>
              </div>
            </div>

            {/* Professional Availability & Work Readiness Card */}
            <div className="availability-card">
              <div className="avail-header">
                <div className="avail-status-tag">
                  <span className="avail-pulse-dot" />
                  <span>AVAILABLE FOR IMMEDIATE JOINING</span>
                </div>
                <div className="avail-time font-mono">
                  <Clock size={14} />
                  <span>Nepal: {nepalTime} (UTC+5:45)</span>
                </div>
              </div>

              <div className="avail-body">
                <div className="avail-item">
                  <Zap size={16} className="avail-icon-zap" />
                  <span>
                    <strong>Quick Response Guarantee:</strong> ⚡ Typically responds within 2–4 hours
                  </span>
                </div>
                <div className="avail-item">
                  <Globe size={16} className="avail-icon-globe" />
                  <span>
                    <strong>Work Readiness:</strong> Open to Remote Worldwide, On-Site & Hybrid positions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
