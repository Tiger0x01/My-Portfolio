import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const Projects: React.FC = () => {
  const { language, theme, projects, setSelectedProject, setCursorVariant, setCursorText } = usePortfolio();
  const t = translations[language].projects;
  const isDark = theme === 'dark';

  const publishedProjects = projects.filter((p) => p.published);
  const featuredProjects = publishedProjects.filter(p => p.featured);
  const archiveProjects = publishedProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-28 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] opacity-45 uppercase">
            <span>04</span>
            <span>—</span>
            <span>{language === 'ar' ? 'المشاريع' : 'WORK'}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-balance"
          >
            {t.sectionTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className={`text-lg sm:text-xl font-normal max-w-2xl leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Premium Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => {
            const isFullWidth = idx % 3 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeInOut' }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => {
                  setCursorVariant('project');
                  setCursorText(language === 'ar' ? 'اكتشف' : 'View');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer bg-neutral-900 border ${
                  isDark ? 'border-white/10' : 'border-black/10'
                } aspect-[4/5] sm:aspect-auto ${
                  isFullWidth ? 'md:col-span-2 sm:h-[580px] lg:h-[660px]' : 'md:col-span-1 sm:h-[480px] lg:h-[560px]'
                }`}
              >
                {/* Background Image with Parallax Hover */}
                <div className="absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#111] flex items-center justify-center">
                      <span className="text-white/10 font-mono text-3xl font-bold tracking-tighter">No Media</span>
                    </div>
                  )}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-7 sm:p-10 flex flex-col justify-between text-white">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between overflow-hidden">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/15 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      {project.category}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 leading-[1.1]">
                      {project.title[language]}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-neutral-300 max-w-xl mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2">
                      {project.shortDescription[language]}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-155">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/20 bg-black/50 backdrop-blur-md text-white/90">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/20 bg-black/50 backdrop-blur-md text-white/90">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elite Minimalist Archive List */}
        {archiveProjects.length > 0 && (
          <div className="mt-32 pt-20 border-t border-current/10">
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                {language === 'ar' ? 'أرشيف المشاريع' : 'Project Archive'}
              </h3>
            </div>
            
            <div className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              {archiveProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-7 sm:py-9 border-b cursor-pointer transition-colors ${
                    isDark ? 'border-white/10 hover:bg-white/[0.02]' : 'border-black/10 hover:bg-black/[0.02]'
                  }`}
                >
                  <div className="flex-1 max-w-3xl">
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                      {project.title[language]}
                    </h4>
                    <p className={`text-sm sm:text-base mt-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {project.shortDescription[language]}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 text-xs font-mono opacity-70">
                    <div className="flex flex-wrap gap-1.5 lg:justify-end">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={`px-2.5 py-1 rounded-md border ${isDark ? 'border-white/15 bg-white/[0.02]' : 'border-black/15 bg-black/[0.02]'}`}>{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 ps-5 border-s border-current/15">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          className="p-1.5 hover:text-emerald-500 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a 
                          href={project.liveDemoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          className="p-1.5 hover:text-emerald-500 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};