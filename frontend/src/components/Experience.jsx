import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-wrap">
      <div className="section-pill">
        <Briefcase size={14} />
        <span>Professional Experience</span>
      </div>

      <h2 className="section-title">Industry Impact & Applied Engineering</h2>
      <p className="section-subtitle">
        Hands-on experience developing production-grade machine learning pipelines and integrating ML models with scalable web backends.
      </p>

      {experience.map((exp) => (
        <div key={exp.id} className="experience-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-company">{exp.company}</h3>
              <p className="exp-role">{exp.role}</p>
            </div>
            <div className="exp-meta">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                <Calendar size={14} color="var(--accent-primary)" />
                <span>{exp.period}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', justifyContent: 'flex-end' }}>
                <MapPin size={14} color="var(--accent-primary)" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <ul className="exp-bullets">
            {exp.bullets.map((b, idx) => (
              <li key={idx} className="exp-bullet-item">{b}</li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
            <div className="exp-tags">
              {exp.technologies.map((t, idx) => (
                <span key={idx} className="exp-tag">{t}</span>
              ))}
            </div>

            {exp.certificate && (
              <button
                onClick={() => onOpenCertificate(exp.certificate, exp.certificatePdf, `${exp.company} Internship Certificate`)}
                className="btn-primary"
                style={{ fontSize: '0.88rem', padding: '10px 20px' }}
              >
                <FileCheck size={16} />
                <span>View Verified Certificate</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
