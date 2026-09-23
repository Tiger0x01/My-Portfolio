import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';

export const CustomCursor: React.FC = () => {
  const {
    cursorEnabled,
    cursorVariant,
    cursorText,
    isRtl,
    theme,
  } = usePortfolio();

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const hasMovedRef = useRef(false);

  const isDark = theme === 'dark';
  const isProject = cursorVariant === 'project';

  // Direct mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Small smooth hover animation
  const scaleSpring = useSpring(1, {
    stiffness: 800,
    damping: 35,
    mass: 0.2,
  });

  // Detect touch devices
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const updateDevice = () => setIsTouchDevice(mediaQuery.matches);
    updateDevice();
    mediaQuery.addEventListener('change', updateDevice);
    return () => mediaQuery.removeEventListener('change', updateDevice);
  }, []);

  // Cursor events
  useEffect(() => {
    if (!cursorEnabled || isTouchDevice || cursorVariant === 'hidden') {
      setIsHovered(false);
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setHasMoved(true);
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest(
        'a, button, [data-interactive="true"], [role="button"], input, textarea, select'
      );
      setIsHovered(Boolean(interactiveElement));
    };

    const handleWindowBlur = () => {
      setIsHovered(false);
    };

    // Hide native cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('blur', handleWindowBlur);

      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, [cursorEnabled, isTouchDevice, cursorVariant, mouseX, mouseY]);

  // Hover scaling
  useEffect(() => {
    scaleSpring.set(isHovered && !isProject ? 2.5 : 1);
  }, [isHovered, isProject, scaleSpring]);

  if (!cursorEnabled || isTouchDevice || cursorVariant === 'hidden') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        className={`fixed left-0 top-0 flex items-center justify-center rounded-full select-none transition-opacity duration-150 ${
          hasMoved ? 'opacity-100' : 'opacity-0'
        } ${
          isProject
            ? isDark
              ? 'bg-white text-neutral-950 shadow-[0_0_25px_rgba(255,255,255,0.25)]'
              : 'bg-neutral-950 text-white shadow-[0_0_25px_rgba(0,0,0,0.25)]'
            : isDark
            ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]'
            : 'bg-neutral-950 shadow-[0_0_12px_rgba(0,0,0,0.35)]'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={
          isProject
            ? { width: 76, height: 76, scale: 1 }
            : { width: 8, height: 8 }
        }
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 35,
          mass: 0.25,
        }}
      >
        {isProject ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="text-[10px] font-mono font-black tracking-[0.2em] uppercase text-center select-none"
          >
            {cursorText || (isRtl ? 'عرض' : 'VIEW')}
          </motion.span>
        ) : (
          <motion.div
            className="w-full h-full rounded-full bg-inherit"
            style={{ scale: scaleSpring }}
          />
        )}
      </motion.div>
    </div>
  );
};