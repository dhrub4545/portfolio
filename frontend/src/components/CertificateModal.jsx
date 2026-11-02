import React from 'react';
import { X, Download, Award, ExternalLink } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, imageSrc, pdfSrc, title }) {
  if (!isOpen || !imageSrc) return null;

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
            <Award size={22} color="var(--accent-primary)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {title || 'Verified Credential'}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Official Verification Document
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {pdfSrc && (
              <a
                href={pdfSrc}
                download
                className="btn-primary"
                style={{ fontSize: '0.85rem', padding: '8px 18px' }}
              >
                <Download size={15} />
                <span>Download Document</span>
              </a>
            )}

            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Image View */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', justifyContent: 'center', background: '#0b0d13' }}>
          <img
            src={imageSrc}
            alt={title || 'Certificate'}
            style={{
              width: '100%',
              maxWidth: '750px',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
