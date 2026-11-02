import React from 'react';
import { Award, Github, Linkedin, Mail, ExternalLink, Code2, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, stats, aboutParagraphs } = portfolioData;

  return (
    <section id="about" className="section-wrap">
      <div className="section-pill">
        <GraduationCap size={14} />
        <span>About The Engineer</span>
      </div>

      <h2 className="section-title">Bridging Full-Stack Systems & AI Intelligence</h2>
      <p className="section-subtitle">
        Licensed Computer Science Engineer building robust distributed systems, low-latency streaming pipelines, and AI SaaS applications.
      </p>

      <div className="about-grid">
        {/* Left Photo & Licensing Card */}
        <div className="about-photo-wrap">
          <img
            src="/assets/dhrub-profile.png"
            alt="Dhrub Pandit"
            className="about-photo"
          />
          <div className="about-badge">
            <Award size={28} color="var(--accent-primary)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Nepal Engineering Council (NEC)
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Certified & Licensed Computer Science Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Right Narrative Content */}
        <div className="about-text-content">
          {aboutParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Key Stats Grid */}
          <div className="stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-val">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
                <div className="stat-sub">{s.detail}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="about-social-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <Github size={16} />
              <span>GitHub (18+ Repos)</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <Code2 size={16} />
              <span>LeetCode (200+)</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="social-pill"
            >
              <Mail size={16} />
              <span>{personal.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
