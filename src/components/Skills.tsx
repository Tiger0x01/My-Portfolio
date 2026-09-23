import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Code2, Layout, Server, Cloud, Cpu } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { initialSkills } from '../data/initialData';
import { translations } from '../data/translations';

export const Skills: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].skills;
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<string>(initialSkills[0].id);

const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cat-languages': return <Code2 className="w-4 h-4" />;
      case 'cat-ml': return <Cpu className="w-4 h-4" />;
      case 'cat-genai': return <Brain className="w-4 h-4" />;
      case 'cat-cv': return <Layout className="w-4 h-4" />;
      case 'cat-backend': return <Server className="w-4 h-4" />;
      case 'cat-data': return <Cpu className="w-4 h-4" />;
      case 'cat-cloud': return <Cloud className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };


  const activeCategory = initialSkills.find(cat => cat.id === activeTab) || initialSkills[0];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden border-b border-current/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شريط التصنيف العلوي الهادئ */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.2em] opacity-40 uppercase">02 / {t.sectionTitle}</span>
          <div className="h-px flex-1 bg-current opacity-10" />
        </div>

        {/* توزيع تحريري: 4 أعمدة للقائمة الجانبية + 8 أعمدة للبطاقات */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* العمود الجانبي (4 أعمدة): العنوان وأزرار التصنيفات */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-28">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.12] mb-4 text-balance">
                {t.subtitle}
              </h2>

            </div>

            {/* أزرار التصنيفات (رأسية في الشاشات الكبيرة، أفقية في الموبايل) */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
              {initialSkills.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap text-start ${
                      isActive
                        ? isDark
                          ? 'bg-white text-black shadow-lg shadow-white/5'
                          : 'bg-black text-white shadow-lg shadow-black/5'
                        : isDark
                        ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                        : 'text-neutral-600 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    <span className={isActive ? 'opacity-100' : 'opacity-60'}>{getCategoryIcon(cat.id)}</span>
                    <span>{cat.title[language]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* عمود عرض المهارات (8 أعمدة) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* رأس القسم النشط (الوصف وعدد المهارات) */}
                <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <p className={`text-lg sm:text-xl font-medium max-w-md leading-relaxed ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {activeCategory.description[language]}
                  </p>
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50 shrink-0">
                    {activeCategory.skills.length} {language === 'ar' ? 'مهارات متخصصة' : 'Competencies'}
                  </span>
                </div>

                {/* شبكة البطاقات الهندسية */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategory.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`group p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[180px] ${
                        isDark
                          ? 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                          : 'bg-black/[0.02] border-black/10 hover:border-black/30 hover:bg-black/[0.04]'
                      }`}
                    >
                      <div>
                        {/* مستوى المهارة والنقطة */}
                        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-6 opacity-60">
                          <span>{skill.level}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover:bg-emerald-500 group-hover:opacity-100 transition-colors duration-300" />
                        </div>
                        
                        {/* اسم المهارة */}
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-balance text-current">
                          {skill.name}
                        </h3>
                      </div>

                      {/* نطاق التركيز الهندسي */}
                      <div className={`pt-5 mt-5 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        <p className={`text-xs font-mono leading-relaxed transition-opacity duration-300 ${
                          isDark ? 'text-neutral-400 group-hover:text-neutral-200' : 'text-neutral-600 group-hover:text-neutral-900'
                        }`}>
                          {skill.focus[language]}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};