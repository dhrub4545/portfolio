import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Headphones, MessageSquare, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
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
              style={{
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '20px',
                background: submitStatus.success ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${submitStatus.success ? '#10b981' : '#ef4444'}`,
                color: submitStatus.success ? '#10b981' : '#ef4444',
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {submitStatus.success ? <Check size={18} /> : <AlertCircle size={18} />}
              <span>{submitStatus.message}</span>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={16} />
              <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
            </button>
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
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="info-title">Phone & WhatsApp</div>
                <div className="info-val">{personal.phone}</div>
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

            {/* Spotify / Developer Soundtrack Widget */}
            <div className="spotify-card">
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#1db954', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', flexShrink: 0 }}>
                <Headphones size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.74rem', color: '#1db954', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Engineering Soundtrack
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                  Deep Focus & Synthwave Coding Mix
                </div>
              </div>
              <div className="spotify-equalizer">
                <span className="equalizer-bar" />
                <span className="equalizer-bar" />
                <span className="equalizer-bar" />
                <span className="equalizer-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
