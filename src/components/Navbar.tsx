import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, theme, toggleTheme, isRtl } = usePortfolio();
  const t = translations[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#skills', label: t.skills },
    { href: '#experience', label: t.experience },
    { href: '#projects', label: t.projects },
    { href: '#contact', label: t.contact }
  ];

  const isDark = theme === 'dark';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`flex items-center justify-between gap-4 px-5 py-2.5 rounded-full transition-all duration-300 ${
            isDark
              ? scrolled ? 'bg-neutral-900/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.7)]' : 'bg-neutral-900/50 backdrop-blur-md border border-white/5'
              : scrolled ? 'bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)]' : 'bg-white/60 backdrop-blur-md border border-black/5'
          }`}>
            {/* الشعار بوزن خط متناسق ومستقر */}
            <a 
              href="#home" 
              className={`text-sm sm:text-base font-bold tracking-tight shrink-0 transition-opacity hover:opacity-75 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {language === 'ar' ? 'محـــــمد النـــــمر' : 'Mohamed Elnemr'}
            </a>

            {/* روابط التنقل للشاشات الكبيرة */}
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-xs font-medium tracking-wide">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors relative py-1 group ${
                    isDark 
                      ? 'text-neutral-400 hover:text-white' 
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 w-0 h-px bg-current transition-all duration-200 group-hover:w-full mx-auto" />
                </a>
              ))}
            </div>

            {/* أزرار التحكم */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button 
                onClick={toggleLanguage} 
                aria-label="Switch Language" 
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-neutral-700'
                }`}
              >
                <Globe className="w-3.5 h-3.5 opacity-70" />
                <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              <button 
                onClick={toggleTheme} 
                aria-label={t.toggleTheme} 
                className={`p-2 rounded-full transition-all ${
                  isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-neutral-700'
                }`}
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label="Toggle navigation menu" 
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-neutral-700'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.2, ease: 'easeOut' }} 
            className={`fixed inset-0 z-30 lg:hidden flex flex-col justify-between p-6 pt-28 backdrop-blur-2xl ${
              isDark ? 'bg-neutral-950/95 text-white' : 'bg-white/98 text-black'
            }`}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.href} 
                  href={link.href} 
                  initial={{ opacity: 0, x: isRtl ? 15 : -15 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: idx * 0.05, duration: 0.3 }} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-xl font-bold tracking-tight py-2.5 border-b ${
                    isDark ? 'border-white/10 text-neutral-200' : 'border-black/10 text-neutral-800'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};