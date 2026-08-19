import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive');
        
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || isHidden) return;

    let animationFrame;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrame = requestAnimationFrame(updateTrail);
    };

    animationFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isMobile, isHidden]);

  if (isMobile || isHidden) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-primary-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${
          isHovered ? 'scale-75 bg-purple-500' : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`fixed top-0 left-0 w-9 h-9 border border-primary-500/60 dark:border-primary-400/60 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isHovered ? 'scale-150 bg-primary-500/10 border-primary-500' : ''
        }`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
    </>
  );
}
