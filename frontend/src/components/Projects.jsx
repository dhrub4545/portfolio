import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState({});

  const categories = ['All', 'AI & Full Stack', 'Web Applications', 'Machine Learning'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="section-wrap">
      <div className="section-pill">
        <FolderGit2 size={14} />
        <span>Featured Engineering Projects</span>
      </div>

      <h2 className="section-title">Built for Scale, Performance & Real Users</h2>
      <p className="section-subtitle">
        A curated showcase of full-stack ecosystems, distributed architectures, real-time protocols, and AI cost intelligence platforms.
      </p>

      {/* Filter Tabs */}
      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = !!expandedProjects[project.id];

          return (
            <div key={project.id} className="project-card">
              <div>
                <div className="project-card-header">
                  <span className="project-badge">{project.badge}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.78rem',
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                      title={`Visit ${project.name} live`}
                    >
                      <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                      Live Demo ↗
                    </a>
                  )}
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-subtitle">{project.title}</p>
                <p className="project-desc">{project.desc}</p>

                {/* Bullets (expandable or default 2) */}
                <ul className="project-bullets">
                  {(isExpanded ? project.bullets : project.bullets.slice(0, 2)).map((b, idx) => (
                    <li key={idx} className="project-bullet">{b}</li>
                  ))}
                </ul>

                {project.bullets.length > 2 && (
                  <button
                    onClick={() => toggleExpand(project.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-primary)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginBottom: '16px'
                    }}
                  >
                    {isExpanded ? (
                      <>Show Less <ChevronUp size={14} /></>
                    ) : (
                      <>Read More Features <ChevronDown size={14} /></>
                    )}
                  </button>
                )}

                {/* Tech Stack Pills */}
                <div className="project-tech-pills">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <ExternalLink size={15} />
                    <span>Live Production</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <Github size={15} />
                    <span>Client Code</span>
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <Github size={15} />
                    <span>API Backend</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
