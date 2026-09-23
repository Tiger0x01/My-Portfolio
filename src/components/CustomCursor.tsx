import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';

export const CustomCursor: React.FC = () => {
  const { cursorEnabled, cursorVariant, cursorText, isRtl, theme } = usePortfolio();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === 'dark';

  const springX = useSpring(-100, { stiffness: 550, damping: 35 });
  const springY = useSpring(-100, { stiffness: 550, damping: 35 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const checkDevice = () => setIsTouchDevice(mediaQuery.matches);
    checkDevice();
    mediaQuery.addEventListener('change', checkDevice);
    return () => mediaQuery.removeEventListener('change', checkDevice);
  }, []);

  useEffect(() => {
    if (!cursorEnabled || isTouchDevice || cursorVariant === 'hidden') {
      setIsHovered(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) {
        setIsHovered(false);
        return;
      }
      const interactiveElement = target.closest(
        'a, button, [data-interactive="true"], [role="button"]'
      );
      setIsHovered(!!interactiveElement);
    };

    const handleWindowBlur = () => {
      setIsHovered(false);
    };

    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('blur', handleWindowBlur);
      document.body.style.cursor = '';
    };
  }, [cursorEnabled, isTouchDevice, cursorVariant, springX, springY]);

  if (!cursorEnabled || isTouchDevice || cursorVariant === 'hidden') {
    return null;
  }

  const isProject = cursorVariant === 'project';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-colors shadow-sm ${
          isProject
            ? isDark
              ? 'bg-white text-black font-semibold'
              : 'bg-black text-white font-semibold'
            : isDark
            ? 'border-2 border-white bg-white/15'
            : 'border-2 border-black bg-black/15'
        }`}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProject ? 64 : isHovered ? 20 : 10,
          height: isProject ? 64 : isHovered ? 20 : 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 520,
          damping: 32,
        }}
      >
        {isProject && (
          <span className="text-[9px] font-mono font-extrabold tracking-widest uppercase select-none">
            {cursorText || (isRtl ? 'عرض' : 'VIEW')}
          </span>
        )}
      </motion.div>
    </div>
  );
};