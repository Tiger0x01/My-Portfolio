import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { initialExperience } from '../data/initialData';
import { translations } from '../data/translations';

export const Experience: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].experience;
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden border-b border-current/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شريط التصنيف العلوي */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.2em] opacity-40 uppercase">03 / {t.sectionTitle}</span>
          <div className="h-px flex-1 bg-current opacity-10" />
        </div>

        {/* صفوف الخبرات */}
        <div className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'} divide-y ${isDark ? 'divide-white/10' : 'divide-black/10'}`}>
          {initialExperience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
            >
              {/* العمود الجانبي: الوقت والموقع */}
              <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28">
                <span className="text-xs font-mono tabular-nums opacity-60 block tracking-wider">
                  {exp.period[language]}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono opacity-50">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location[language]}</span>
                </div>
              </div>

              {/* العمود الرئيسي: التفاصيل */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-current mb-2">
                    {exp.role[language]}
                  </h3>
                  <p className="text-sm font-mono opacity-75">
                    {exp.company[language]}
                  </p>
                </div>

                <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {exp.description[language]}
                </p>

                {/* الإنجازات العملية */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-widest opacity-40">
                    {t.keyAchievements}
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements[language].map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0 opacity-40" />
                        <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                          {ach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* التك Stacks */}
                <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono opacity-60">
                  {exp.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="hover:opacity-100 transition-opacity">{tech}</span>
                      {tIdx < exp.technologies.length - 1 && <span className="opacity-30">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};