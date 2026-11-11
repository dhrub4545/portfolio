import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Download, Eye, Sparkles, Star, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ onOpenCertificate }) {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    '⭐ Top Job Assets',
    'Hackathons & Competitions',
    'Academic & Hackathons',
    'AI & Data Science',
    'Government & Licensure'
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (filter === 'All') return true;
    if (filter === '⭐ Top Job Assets' || filter === 'Top Job Assets') return cert.isTopValued;

    // Direct match against categories array
    if (cert.categories && cert.categories.includes(filter)) return true;

    // Academic & Hackathons tab: shows both all hackathons and academic honors
    if (filter === 'Academic & Hackathons') {
      return (
        cert.categories?.includes('Academic & Hackathons') ||
        cert.categories?.includes('Hackathons & Competitions') ||
        cert.categories?.includes('Academic & Honors') ||
        cert.category === 'Hackathons & Competitions' ||
        cert.category === 'Academic & Honors'
      );
    }

    // Hackathons & Competitions tab
    if (filter === 'Hackathons & Competitions') {
      return (
        cert.categories?.includes('Hackathons & Competitions') ||
        cert.category === 'Hackathons & Competitions'
      );
    }

    return cert.category === filter;
  });

  return (
    <section id="certifications" className="section-wrap">
      {/* Section Pill */}
      <div className="section-pill">
        <Award size={14} />
        <span>Verified Credentials & Honors</span>
      </div>

      <h2 className="section-title">Certifications & Industry Credentials</h2>
      <p className="section-subtitle">
        Statutory government licensure, premier IIT Madras algorithms accreditation, production machine learning experience, and national hackathon achievements.
      </p>

      {/* Top Value Banner */}
      <div className="cert-highlight-banner">
        <div className="cert-banner-icon">
          <ShieldCheck size={28} />
        </div>
        <div className="cert-banner-text">
          <div className="cert-banner-heading">
            <span className="font-mono">VERIFIED COMPETENCY STACK</span>
            <span className="cert-banner-badge">10 Official Credentials</span>
          </div>
          <p className="cert-banner-desc">
            Ranked with top hiring priorities first: <strong>Nepal Engineering Council License</strong> (Statutory Charter #102299), <strong>IIT Madras Elite DSA</strong> (Top National 64% with 25/25 assignments), <strong>Karunadu Tech ML Internship</strong>, <strong>Google Cloud GenAI Prototype</strong>, and <strong>RBI Innovation Hub / IIIT Bangalore Codeathon</strong>.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters" style={{ marginBottom: '32px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat === 'Top Job Assets' ? '⭐ Top Job Assets' : cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="cert-grid">
        {filteredCerts.map((cert) => {
          return (
            <div
              key={cert.id}
              className={`cert-card ${cert.isTopValued ? 'cert-card-top-valued' : ''}`}
            >
              {/* Top Valued Priority Banner */}
              {cert.isTopValued && (
                <div className="cert-top-pill">
                  <Star size={12} fill="currentColor" />
                  <span>Top Job Asset • Rank #{cert.priorityRank}</span>
                </div>
              )}

              {/* Certificate Image Thumbnail with Hover Overlay */}
              <div
                className="cert-img-container"
                onClick={() => onOpenCertificate(cert.image, cert.pdf, cert.title)}
                title="Click to view full credential"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-img-thumb"
                  loading="lazy"
                />
                <div className="cert-img-overlay">
                  <Eye size={22} />
                  <span>Inspect Document</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="cert-content">
                <div className="cert-header-meta">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-date">{cert.issueDate}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-issuer">
                  <span className="cert-issuer-name">{cert.issuer}</span>
                  {cert.credentialId && (
                    <span className="cert-cred-id font-mono">{cert.credentialId}</span>
                  )}
                </div>

                <p className="cert-desc">{cert.desc}</p>

                {/* Verified Skills Tags */}
                {cert.verifiedSkills && cert.verifiedSkills.length > 0 && (
                  <div className="cert-skills-wrap">
                    <span className="cert-skills-label">Verified Competencies:</span>
                    <div className="cert-skills-list">
                      {cert.verifiedSkills.map((skill, sIdx) => (
                        <span key={sIdx} className="cert-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="cert-actions">
                  <button
                    onClick={() => onOpenCertificate(cert.image, cert.pdf, cert.title)}
                    className="btn-cert-inspect"
                    aria-label={`Inspect ${cert.title}`}
                  >
                    <Eye size={15} />
                    <span>View Certificate</span>
                  </button>

                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      download
                      className="btn-cert-download"
                      title="Download Official Verification PDF"
                    >
                      <Download size={15} />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
