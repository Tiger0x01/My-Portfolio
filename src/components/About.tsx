import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].about;
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`py-24 sm:py-32 relative border-b ${
        isDark ? 'border-white/10' : 'border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.22em] opacity-50 uppercase">
              <span>01</span>
              <span className="opacity-40">/</span>
              <span>{t.sectionTitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-balance">
              {t.subtitle}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="space-y-6 max-w-2xl"
            >
              <p
                className={`text-lg sm:text-xl leading-[1.6] font-normal ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {language === 'ar'
                  ? 'طالب علوم حاسب بجامعة المنصورة، ببني بايبرلاينز تعلم آلة وRAG ورؤية حاسوبية بتطلع نتايج حقيقية مش مجرد تجارب نوت بوك.'
                  : 'CS undergrad at Mansoura University. Building production-oriented ML, RAG, and CV pipelines that actually ship.'}
              </p>
              <p
                className={`text-base sm:text-lg leading-[1.65] ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                {language === 'ar'
                  ? 'عديت على تدريبات DEPI (مايكروسوفت) و ITI، وأركز على ربط النماذج بـ Backends سريعة و UI واضحة.'
                  : 'Trained through DEPI (Microsoft) & ITI. Focused on connecting models to clean backends and practical user interfaces.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: 'easeInOut' }}
              className={`border-t ${
                isDark ? 'border-white/15' : 'border-black/15'
              } divide-y ${isDark ? 'divide-white/10' : 'divide-black/10'}`}
            >
              <div className="py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-baseline">
                <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-45">
                  {language === 'ar' ? 'التعليم' : 'Education'}
                </span>
                <div className="sm:col-span-3 space-y-1">
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {t.educationDegree}
                  </p>
                  <p className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.educationSchool} — {language === 'ar' ? 'السنة الرابعة' : 'Final Year'}
                  </p>
                </div>
              </div>

              <div className="py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-baseline">
                <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-45">
                  {language === 'ar' ? 'التركيز' : 'Focus'}
                </span>
                <p
                  className={`sm:col-span-3 text-xs sm:text-sm font-mono leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  Python · PyTorch · RAG · FAISS · FastAPI · Computer Vision
                </p>
              </div>

              <div className="py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-baseline">
                <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-45">
                  {language === 'ar' ? 'الموقع' : 'Location'}
                </span>
                <p
                  className={`sm:col-span-3 text-xs sm:text-sm font-mono ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  {language === 'ar'
                    ? 'المنصورة، مصر · متاح للعمل عن بُعد / هجين'
                    : 'Mansoura, Egypt · Open to Remote / Hybrid'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};