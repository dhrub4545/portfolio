import React from 'react';
import { Layers, GraduationCap, Code, Database, Brain, Cloud, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsEdu({ onOpenTranscript }) {
  const { skillCategories, education } = portfolioData;

  const getIcon = (name) => {
    switch (name) {
      case 'Languages': return <Code size={18} color="var(--accent-primary)" />;
      case 'Frameworks & Web Tech': return <Layers size={18} color="var(--accent-primary)" />;
      case 'Databases & Dev Tools': return <Database size={18} color="var(--accent-primary)" />;
      case 'AI & Methodologies': return <Brain size={18} color="var(--accent-primary)" />;
      default: return <Cloud size={18} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="skills" className="section-wrap">
      <div className="section-pill">
        <Layers size={14} />
        <span>Skills & Academic Credentials</span>
      </div>

      <h2 className="section-title">Technical Expertise & Academic Rigor</h2>
      <p className="section-subtitle">
        A deep inventory of software engineering tools, distributed paradigms, AI APIs, and formal computer science education.
      </p>

      <div className="skills-edu-grid">
        {/* Left: Skills Categories */}
        <div>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-category-card">
              <h3 className="skills-cat-title">
                {getIcon(cat.name)}
                <span>{cat.name}</span>
              </h3>

              <div className="skill-pills-row">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="interactive-skill-pill">
                    <span>{skill.name}</span>
                    <span className="skill-level-tag">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Education Showcase */}
        <div>
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <GraduationCap size={28} color="var(--accent-primary)" />
                <span className="section-pill" style={{ margin: 0 }}>Verified Degree</span>
              </div>

              <h3 className="edu-school">{edu.school}</h3>
              <p className="edu-degree">{edu.degree} in {edu.field}</p>
              <p className="edu-period">{edu.period} • {edu.location}</p>

              <div className="edu-grade-badge">{edu.grade}</div>

              <div style={{ margin: '18px 0' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Key Honors & Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="#10b981" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Relevant Coursework
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.coursework.map((c, cIdx) => (
                    <span key={cIdx} className="tech-pill" style={{ background: 'rgba(255,212,96,0.08)', borderColor: 'rgba(255,212,96,0.2)' }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {edu.transcriptPreview && (
                <button
                  onClick={() => onOpenTranscript(edu.transcriptPreview, 'RRIT VTU Official Degree Transcript')}
                  className="btn-secondary"
                  style={{ width: '100%', marginTop: '24px', justifyContent: 'center' }}
                >
                  <FileText size={16} />
                  <span>View Transcript Preview</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
