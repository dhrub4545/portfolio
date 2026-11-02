import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal } = portfolioData;

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '850px', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <FileText size={22} color="var(--accent-primary)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Dhrub Pandit — Official Resume
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Full Stack & AI Engineer • NEC Licensed
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={personal.resumePdf}
              download="Dhrub_Pandit_Resume.pdf"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '8px 18px' }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body Preview */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', justifyContent: 'center', background: '#0b0d13' }}>
          <img
            src={personal.resumePreview}
            alt="Dhrub Pandit Resume Preview"
            style={{
              width: '100%',
              maxWidth: '750px',
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
