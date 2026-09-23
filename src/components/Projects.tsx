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
    <section id="projects" className="py-32 lg:py-48 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
          >
            {t.sectionTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mt-8 text-xl sm:text-2xl font-medium tracking-tight ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Premium Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => {
            // Pattern: Full width, Half, Half, Full width
            const isFullWidth = idx % 3 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => {
                  setCursorVariant('project');
                  setCursorText(language === 'ar' ? 'اكتشف' : 'View');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer bg-neutral-900 aspect-[4/5] sm:aspect-auto ${
                  isFullWidth ? 'md:col-span-2 sm:h-[600px] lg:h-[700px]' : 'md:col-span-1 sm:h-[500px] lg:h-[600px]'
                }`}
              >
                {/* Background Image with Parallax Hover */}
                <div className="absolute inset-0 w-full h-full transform transition-transform duration-1000 group-hover:scale-105">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#111] flex items-center justify-center">
                      <span className="text-white/10 font-mono text-4xl font-bold tracking-tighter">No Media</span>
                    </div>
                  )}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between text-white">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between overflow-hidden">
                    <span className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/10 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[1.1]">
                      {project.title[language]}
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-neutral-300 max-w-2xl mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.shortDescription[language]}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full text-xs font-mono border border-white/20 bg-black/40 backdrop-blur-md text-white">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-4 py-2 rounded-full text-xs font-mono border border-white/20 bg-black/40 backdrop-blur-md text-white">
                          +{project.technologies.length - 5}
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
          <div className="mt-40 pt-24 border-t border-current/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">
                {language === 'ar' ? 'أرشيف المشاريع' : 'Project Archive'}
              </h3>
            </div>
            
            <div className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              {archiveProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-8 sm:py-10 border-b cursor-pointer transition-colors ${
                    isDark ? 'border-white/10 hover:bg-white/[0.02]' : 'border-black/10 hover:bg-black/[0.02]'
                  }`}
                >
                  <div className="flex-1 max-w-4xl">
                    <h4 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {project.title[language]}
                    </h4>
                    <p className={`text-base sm:text-lg mt-3 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {project.shortDescription[language]}
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-sm font-mono opacity-60">
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={`px-3 py-1 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`}>{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 border-l pl-6 border-current/20">
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>}
                      {project.liveDemoUrl && <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors"><ExternalLink className="w-5 h-5" /></a>}
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