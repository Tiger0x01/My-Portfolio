import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Send } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language, theme } = usePortfolio();
  const t = translations[language].contact;
  const isDark = theme === 'dark';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const directEmailAddress = 'malnemr0@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${directEmailAddress}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    setSentSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-28 lg:py-40 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Header */}
        <div className="space-y-4 mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] opacity-45 uppercase">
            <span>06</span>
            <span>—</span>
            <span>{t.sectionTitle}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance"
          >
            {language === 'ar' ? 'عندك فكرة مشروع، فرصة، أو حابب ندردش؟' : 'Have a project or opportunity? Let’s talk.'}
          </motion.h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Split layout: Direct contact + Editorial form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Direct meta (4 cols) */}
          <div className="md:col-span-4 space-y-12 text-sm">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-45">
                {t.directEmail}
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={`mailto:${directEmailAddress}`}
                  className="font-mono text-sm sm:text-base underline underline-offset-4 decoration-current/30 hover:decoration-current transition-colors break-all"
                >
                  {directEmailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email"
                  className="p-1.5 rounded-lg border border-current/15 hover:bg-current/5 transition-all opacity-60 hover:opacity-100 shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              {copied && (
                <span className="text-[11px] font-mono text-emerald-500 block">
                  {t.copied}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-45">
                {language === 'ar' ? 'الشبكات المهنية' : 'Network'}
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'GitHub', href: 'https://github.com/Tiger0x01', icon: <Github className="w-4 h-4" /> },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tiger0x01/', icon: <Linkedin className="w-4 h-4" /> }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between py-3 border-b border-current/10 opacity-75 hover:opacity-100 transition-opacity group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Editorial Form (8 cols) */}
          <div className="md:col-span-8">
            {sentSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className={`py-16 px-8 rounded-2xl border space-y-3 ${
                  isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'
                }`}
              >
                <p className="text-xl sm:text-2xl font-bold tracking-tight">
                  {language === 'ar' ? 'تم فتح تطبيق البريد وجاهز لإرسال رسالتك.' : 'Email client opened with your message.'}
                </p>
                <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {t.successMsg}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider opacity-60">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                      className={`w-full pb-3 bg-transparent border-b text-sm outline-none transition-colors ${
                        isDark ? 'border-white/20 focus:border-white text-white placeholder:text-neutral-600' : 'border-black/20 focus:border-black text-black placeholder:text-neutral-400'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider opacity-60">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full pb-3 bg-transparent border-b text-sm outline-none transition-colors ${
                        isDark ? 'border-white/20 focus:border-white text-white placeholder:text-neutral-600' : 'border-black/20 focus:border-black text-black placeholder:text-neutral-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider opacity-60">
                    {t.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === 'ar' ? 'موضوع الرسالة (اختياري)' : 'Subject (optional)'}
                    className={`w-full pb-3 bg-transparent border-b text-sm outline-none transition-colors ${
                      isDark ? 'border-white/20 focus:border-white text-white placeholder:text-neutral-600' : 'border-black/20 focus:border-black text-black placeholder:text-neutral-400'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider opacity-60">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'ar' ? 'تفاصيل المشروع أو الاستفسار...' : 'Project details or inquiry...'}
                    className={`w-full pb-3 bg-transparent border-b text-sm outline-none transition-colors resize-none ${
                      isDark ? 'border-white/20 focus:border-white text-white placeholder:text-neutral-600' : 'border-black/20 focus:border-black text-black placeholder:text-neutral-400'
                    }`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    className={`px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 ${
                      isDark
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{t.sendButton}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};