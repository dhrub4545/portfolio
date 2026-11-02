import React, { useEffect, useState } from 'react';
import { Eye, Github, Linkedin, Code2, Heart, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getApiUrl } from '../utils/api';

export default function Footer() {
  const { personal } = portfolioData;
  const [stats, setStats] = useState({ views: 1420 });

  useEffect(() => {
    // Record page view
    fetch(getApiUrl('/api/stats/view'), { method: 'POST' }).catch(() => {});

    // Fetch latest stats
    fetch(getApiUrl('/api/stats'))
      .then((res) => res.json())
      .then((data) => {
        if (data && data.views) {
          setStats(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="footer-wrap">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="status-dot" style={{ width: '7px', height: '7px' }} />
          <span style={{ fontSize: '0.84rem', color: '#10b981', fontWeight: 600 }}>All Systems Operational</span>
        </div>
        <div>
          © {new Date().getFullYear()} Dhrub Pandit. Designed with modern React & Node.js architecture.
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="footer-views">
          <Eye size={16} />
          <span>{stats.views.toLocaleString()} Total Impressions</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            title="LeetCode"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
