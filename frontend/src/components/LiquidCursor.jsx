import React, { useEffect, useState, useRef } from 'react';

export default function LiquidCursor() {
  const cursorRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);
    const onMouseLeave = () => setIsHidden(true);

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, .interactive-skill-pill, .filter-btn, .project-card');
      setIsHover(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', checkHover);

    // Smooth inertia loop (lerp)
    const animate = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', checkHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`liquid-cursor ${isHover ? 'hover' : ''} ${isPressed ? 'pressed' : ''} ${isHidden ? 'hidden' : ''}`}
    />
  );
}
