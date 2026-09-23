import React from 'react';
import { Lock, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const Footer: React.FC = () => {
  const { language, theme, setIsAdminOpen } = usePortfolio();
  const t = translations[language].footer;
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 dark:border-white/5 border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
          <p className="text-center sm:text-start">
            {t.copyright}
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-current transition-colors"
            >
              <span>{language === 'ar' ? 'للأعلى' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>


          </div>
        </div>
      </div>
    </footer>
  );
};
