import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronDown, FileText } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';
import { heroPortrait } from '../data/initialData';
import cvFile from '../assets/cv/Mohamed_Elnemr_Resume_ca.pdf';

export const Hero: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].hero;
  const isDark = theme === 'dark';

  // إعدادات حركة الماوس (بارالاكس 3D أوسع وأوضح)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    // 1. فتح في تاب جديدة للعرض
    window.open(cvFile, '_blank');
    
    // 2. تحميل الملف في نفس اللحظة
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Mohamed_Elnemr_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle monochrome ambient light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-40 ${
          isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Typography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-6"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-balance">
                <span className={`block font-light text-2xl sm:text-3xl lg:text-4xl mb-2 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {t.greeting}
                </span>
                <span className={isDark ? 'text-white' : 'text-black'}>
                  {t.name}
                </span>
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl font-medium tracking-tight pt-2 ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {t.role}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-10 ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.02]'
                    : 'bg-black text-white hover:bg-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02]'
                }`}
              >
                <span>{t.ctaProjects}</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a
                href="#cv"
                onClick={handleDownloadCV}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{t.ctaDownloadCv}</span>
              </a>
            </motion.div>
          </div>

          {/* Portrait Showcase Column (5 cols) with Stronger 3D Parallax */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative rounded-3xl p-5 sm:p-6 overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-neutral-900/60 backdrop-blur-2xl border border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]'
                    : 'bg-white/85 backdrop-blur-2xl border border-black/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)]'
                }`}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center p-3"
                >
                  <motion.div
                    style={{ translateZ: '40px' }}
                    className="w-full h-full rounded-xl overflow-hidden relative shadow-2xl"
                  >
                    <img
                      src={heroPortrait}
                      alt={t.name}
                      className="w-full h-full object-cover object-top scale-95 grayscale contrast-110 filter transition-transform duration-500"
                      loading="eager"
                    />
                    {/* Subtle glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};