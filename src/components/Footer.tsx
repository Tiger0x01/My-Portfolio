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
    <footer className={`py-12 border-t ${isDark ? 'border-white/10' : 'border-black/10'} relative`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono opacity-60">
          <p className="text-center sm:text-start">
            {t.copyright}
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-1.5 rounded-lg border border-current/15 hover:bg-current/5 transition-all opacity-70 hover:opacity-100"
              aria-label="Admin Console"
              title="Admin"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:opacity-100 transition-opacity"
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