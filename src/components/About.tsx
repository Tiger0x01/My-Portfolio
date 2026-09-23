import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].about;
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden border-b border-current/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* التخطيط التحريري غير المتماثل (Swiss Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* العمود الأول: التصنيف، العنوان، ومؤشر التوافر (5 أعمدة - ثابت أثناء التصفح) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] opacity-50 uppercase">
              <span>01</span>
              <span>/</span>
              <span>{t.sectionTitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-balance">
              {t.subtitle}
            </h2>
          </div>

          {/* العمود الثاني: السرد القصدي وجدول المواصفات الهندسية (7 أعمدة) */}
          <div className="lg:col-span-7 space-y-14">
            
            {/* فقرات التعريف المهنية */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className={`text-xl sm:text-2xl leading-relaxed font-medium ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                {language === 'ar'
                  ? 'مهندس ذكاء اصطناعي وتعلم آلة وطالب علوم حاسب، أركز على تحويل النماذج النظرية إلى أنظمة ذكية قابلة للإنتاج.'
                  : 'AI & Machine Learning engineer and CS student focused on bridging theoretical research and production-grade intelligent systems.'}
              </p>
              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {language === 'ar'
                  ? 'اكتسبت خبرة عملية عبر مسارات ومبادرات مكثفة مثل Microsoft DEPI، وITI، وتدريبات متقدمة في الذكاء الاصطناعي التوليدي، مع بناء تطبيقات حقيقية تعتمد على RAG والرؤية الحاسوبية والخدمات الخلفية الموثوقة.'
                  : 'Backed by hands-on engineering tracks including Microsoft DEPI, ITI, and Generative AI bootcamps, building practical RAG pipelines, computer vision utilities, and resilient backend systems.'}
              </p>
            </motion.div>

            {/* صفائح المواصفات الهندسية (Spec Sheet Grid) بدون صناديق مزدحمة */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'} divide-y ${isDark ? 'divide-white/10' : 'divide-black/10'}`}
            >
              {/* التعليم */}
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-baseline">
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">
                  {language === 'ar' ? 'التعليم' : 'Education'}
                </span>
                <div className="sm:col-span-2 space-y-0.5">
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {t.educationDegree}
                  </p>
                  <p className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.educationSchool} · 83.0% (Very Good)
                  </p>
                </div>
              </div>

              {/* التخصص والتركيز الهندسي */}
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-baseline">
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">
                  {language === 'ar' ? 'التركيز الهندسي' : 'Specialization'}
                </span>
                <p className={`sm:col-span-2 text-xs sm:text-sm font-mono leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Machine Learning · Generative AI · RAG · LLMs · Computer Vision · MLOps
                </p>
              </div>

              {/* القاعدة الجغرافية ونطاق العمل */}
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-baseline">
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">
                  {language === 'ar' ? 'الموقع' : 'Location'}
                </span>
                <p className={`sm:col-span-2 text-xs sm:text-sm font-mono ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {language === 'ar' ? 'المنصورة، مصر · متاح للعمل عن بُعد / هجين' : 'Mansoura, Egypt · Open to Remote / Hybrid'}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};