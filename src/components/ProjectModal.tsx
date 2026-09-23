import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, language, theme } = usePortfolio();
  const t = translations[language].caseStudyModal;
  const isDark = theme === 'dark';
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  if (!selectedProject) return null;
  const { caseStudy } = selectedProject;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 text-start">
        
        {/* Scrim Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Window Container */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ type: 'spring', damping: 30, stiffness: 260 }}
          className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[2rem] border shadow-2xl z-[110] transition-colors ${
            isDark ? 'bg-[#0a0a0a] border-white/15 text-white' : 'bg-[#FAFAFA] border-black/15 text-neutral-900'
          }`}
        >
          {/* Sticky Top Bar with Close Button */}
          <div className={`sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 backdrop-blur-xl border-b ${
            isDark ? 'bg-[#0a0a0a]/85 border-white/10' : 'bg-[#FAFAFA]/85 border-black/10'
          }`}>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-50">
              {selectedProject.category} // CASE STUDY
            </span>
            <button
              onClick={() => setSelectedProject(null)}
              aria-label={t.close}
              className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-105 ${
                isDark 
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white' 
                  : 'border-black/15 bg-black/5 hover:bg-black/10 text-neutral-900'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Media Header Banner */}
          {selectedProject.image && (
            <div className="w-full h-56 sm:h-72 lg:h-88 overflow-hidden bg-neutral-900 border-b border-current/10 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          )}

          {/* Content Body */}
          <div className="p-6 sm:p-10 lg:p-14 space-y-12">
            
            {/* Title & Actions Row */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-current/10">
              <div className="space-y-4 max-w-2xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08]">
                  {selectedProject.title[language]}
                </h1>
                <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {selectedProject.fullDescription[language] || selectedProject.shortDescription[language]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${
                      isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{t.openDemo}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-colors ${
                      isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>{t.openGithub}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-45 block">
                {t.techStack}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                      isDark ? 'border-white/15 bg-white/[0.03] text-neutral-300' : 'border-black/15 bg-black/[0.03] text-neutral-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architectural Grid (Problem / Solution / Architecture / Features) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-4">
              
              {/* Left/Main Column: Problem & Solution (7 cols) */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-45">
                    <span>// 01</span>
                    <span>{t.problem}</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
                    {caseStudy.problem[language]}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-45">
                    <span>// 02</span>
                    <span>{t.solution}</span>
                  </div>
                  <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {caseStudy.solution[language]}
                  </p>
                </div>
              </div>

              {/* Right Column: Architecture & Features (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
                  <span className="text-[11px] font-mono uppercase tracking-widest opacity-45 block mb-2.5">
                    {t.architecture}
                  </span>
                  <p className="text-sm sm:text-base font-medium leading-relaxed font-mono">
                    {caseStudy.architecture[language]}
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest opacity-45 block">
                    {t.keyFeatures}
                  </span>
                  <ul className="space-y-3">
                    {caseStudy.features[language].map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-current mt-2.5 shrink-0 opacity-40" />
                        <span className={`leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};