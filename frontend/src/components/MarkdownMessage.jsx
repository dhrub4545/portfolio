import React from 'react';

/**
 * Parses inline markdown elements:
 * - Markdown links: [label](url)
 * - Bare URLs: https://...
 * - Bold: **text**
 * - Inline Code: `code`
 * - Italic: *text*
 */
function renderInline(text) {
  if (!text) return null;

  const parts = [];
  let remaining = text;
  let keyIndex = 0;

  // Regex matching:
  // 1: [label](url) -> group 2: label, group 3: url
  // 4: **bold** -> group 5: content
  // 6: `code` -> group 7: content
  // 8: *italic* -> group 9: content
  // 10: bare URL -> group 10
  const tokenRegex = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\*([^*]+)\*)|(https?:\/\/[^\s,)]+)/;

  while (remaining) {
    const match = remaining.match(tokenRegex);
    if (!match) {
      parts.push(remaining);
      break;
    }

    const matchIndex = match.index;
    if (matchIndex > 0) {
      parts.push(remaining.substring(0, matchIndex));
    }

    if (match[1]) {
      // Markdown Link [text](url)
      parts.push(
        <a
          key={`link-${keyIndex++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
        >
          {match[2]}
          <span className="chat-link-icon">↗</span>
        </a>
      );
    } else if (match[4]) {
      // Bold **text**
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="chat-strong">
          {match[5]}
        </strong>
      );
    } else if (match[6]) {
      // Code `code`
      parts.push(
        <code key={`code-${keyIndex++}`} className="chat-code font-mono">
          {match[7]}
        </code>
      );
    } else if (match[8]) {
      // Italic *text*
      parts.push(
        <em key={`italic-${keyIndex++}`} className="chat-em">
          {match[9]}
        </em>
      );
    } else if (match[10]) {
      // Bare URL
      const url = match[10];
      const display = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
      parts.push(
        <a
          key={`bare-url-${keyIndex++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
        >
          {display}
          <span className="chat-link-icon">↗</span>
        </a>
      );
    }

    remaining = remaining.substring(matchIndex + match[0].length);
  }

  return parts;
}

/**
 * High-fidelity, zero-dependency Markdown Renderer for Chat Messages
 * Handles paragraphs, headings, bullet/numbered lists, dividers, code blocks, and blockquotes.
 */
export default function MarkdownMessage({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let currentList = null;
  let listType = null; // 'ul' or 'ol'
  let inCodeBlock = false;
  let codeBlockLines = [];
  let codeBlockLang = '';
  let keyCounter = 0;

  const flushList = () => {
    if (currentList && currentList.length > 0) {
      if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${keyCounter++}`} className="chat-list ol-list">
            {currentList}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${keyCounter++}`} className="chat-list ul-list">
            {currentList}
          </ul>
        );
      }
      currentList = null;
      listType = null;
    }
  };

  const flushCodeBlock = () => {
    if (inCodeBlock) {
      elements.push(
        <div key={`codeblock-${keyCounter++}`} className="chat-codeblock-wrapper">
          {codeBlockLang && (
            <div className="chat-codeblock-header">
              <span>{codeBlockLang}</span>
            </div>
          )}
          <pre className="chat-pre font-mono">
            <code>{codeBlockLines.join('\n')}</code>
          </pre>
        </div>
      );
      inCodeBlock = false;
      codeBlockLines = [];
      codeBlockLang = '';
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Check for fenced code blocks ```lang
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        flushList();
        inCodeBlock = true;
        codeBlockLang = trimmed.substring(3).trim();
        codeBlockLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(rawLine);
      continue;
    }

    // Empty line separates blocks
    if (!trimmed) {
      flushList();
      continue;
    }

    // Horizontal Divider: --- or ***
    if (trimmed === '---' || trimmed === '***') {
      flushList();
      elements.push(<hr key={`hr-${keyCounter++}`} className="chat-divider" />);
      continue;
    }

    // Blockquote: > text
    if (trimmed.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={`quote-${keyCounter++}`} className="chat-blockquote">
          {renderInline(trimmed.substring(2))}
        </blockquote>
      );
      continue;
    }

    // Headings: ###, ##, #
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={`h4-${keyCounter++}`} className="chat-heading chat-h4">
          {renderInline(trimmed.substring(4))}
        </h4>
      );
      continue;
    }
    if (trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
      flushList();
      const headingText = trimmed.replace(/^#+\s*/, '');
      elements.push(
        <h3 key={`h3-${keyCounter++}`} className="chat-heading chat-h3">
          {renderInline(headingText)}
        </h3>
      );
      continue;
    }

    // Bullet list item: *, -, •
    const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
    if (bulletMatch) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
        currentList = [];
      }
      currentList.push(
        <li key={`li-${keyCounter++}`} className="chat-list-item">
          {renderInline(bulletMatch[1])}
        </li>
      );
      continue;
    }

    // Numbered list item: 1., 2., 1), etc.
    const numMatch = trimmed.match(/^(\d+)[\.\)]\s+(.*)$/);
    if (numMatch) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
        currentList = [];
      }
      currentList.push(
        <li key={`oli-${keyCounter++}`} className="chat-list-item">
          <span className="chat-list-index">{numMatch[1]}.</span>
          <span>{renderInline(numMatch[2])}</span>
        </li>
      );
      continue;
    }

    // Normal paragraph
    flushList();
    elements.push(
      <p key={`p-${keyCounter++}`} className="chat-paragraph">
        {renderInline(trimmed)}
      </p>
    );
  }

  flushCodeBlock();
  flushList();

  return <div className="chat-markdown-body">{elements}</div>;
}
