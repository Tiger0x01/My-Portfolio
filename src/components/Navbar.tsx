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
          <nav className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 ${
            isDark
              ? scrolled ? 'bg-black/75 backdrop-blur-xl border border-white/10' : 'bg-black/40 backdrop-blur-md border border-white/5'
              : scrolled ? 'bg-white/85 backdrop-blur-xl border border-black/10' : 'bg-white/50 backdrop-blur-md border border-black/5'
          }`}>
            <a href="#home" className={`text-sm md:text-base font-semibold tracking-tight transition-opacity hover:opacity-75 ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'ar' ? 'محـــــمد النـــــمر' : 'Mohamed Elnemr'}
            </a>

            <div className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={`transition-colors relative py-1 hover:text-white group ${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={toggleLanguage} aria-label="Switch Language" className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-neutral-700'}`}>
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              <button onClick={toggleTheme} aria-label={t.toggleTheme} className={`p-1.5 rounded-full transition-all ${isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-neutral-700'}`}>
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu" className={`lg:hidden p-1.5 rounded-full transition-colors ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`fixed inset-0 z-30 lg:hidden flex flex-col justify-between p-6 pt-28 backdrop-blur-2xl ${isDark ? 'bg-black/92 text-white' : 'bg-white/95 text-black'}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a key={link.href} href={link.href} initial={{ opacity: 0, x: isRtl ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04 }} onClick={() => setMobileMenuOpen(false)} className={`text-xl font-medium py-2 border-b ${isDark ? 'border-white/15 text-neutral-300' : 'border-black/15 text-neutral-700'}`}>
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