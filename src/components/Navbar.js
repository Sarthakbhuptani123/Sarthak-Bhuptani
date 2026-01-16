// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download, Home, User, Briefcase, Cpu, Mail, Sun, Moon, Github, Linkedin } from "lucide-react";
import profileImg from '../assets/profile.jpg';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Define menu items
  const menuItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Journey", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center gap-0.5 p-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 max-w-[95vw] ${isScrolled ? "scale-90" : "scale-100"}`}
      >
        {/* Logo Avatar */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/10 mr-1 hover:scale-110 transition-transform flex-shrink-0">
          <img src={profileImg} alt="Sarthak" className="w-full h-full object-cover" />
        </a>

        {/* Links */}
        <ul className="flex items-center gap-0.5">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="relative px-2 lg:px-3 py-1.5 lg:py-2 text-[11px] lg:text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-px h-5 bg-slate-200 dark:bg-white/10 mx-1"></div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 lg:p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors mr-0.5 flex-shrink-0"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Action Button */}
        <a
          href="/Bhuptani_Sarthak.pdf"
          target="_blank"
          className="flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
        >
          <span className="hidden xl:inline">Resume</span> <Download size={14} />
        </a>
      </motion.nav>


      {/* Mobile Top Bar - Floating Pill */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:hidden fixed top-4 left-4 right-4 z-[100] flex justify-between items-center p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg"
      >
        <a href="#hero" className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-white/20">
            <img src={profileImg} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-slate-800 dark:text-slate-100">Sarthak.</span>
        </a>

        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="w-px h-5 bg-slate-200 dark:bg-white/10"></div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 active:scale-95 transition-all outline-none"
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {/* Sidebar Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[115] bg-black/20 dark:bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] z-[120] bg-white dark:bg-slate-900 shadow-2xl flex flex-col md:hidden border-l border-slate-100 dark:border-white/5"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xl font-bold text-slate-800 dark:text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links List */}
              <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4, ease: "easeOut" }}
                    className="group flex items-center gap-3 px-5 py-3.5 rounded-xl text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  >
                    <item.icon size={20} className="text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400" />
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Footer / Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-black/20"
              >
                <p className="text-center text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
                  Downloads
                </p>
                <a
                  href="/Bhuptani_Sarthak.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all hover:opacity-90"
                >
                  <Download size={18} /> Download Resume
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;