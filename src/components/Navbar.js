// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download, Home, User, Briefcase, Cpu, Mail } from "lucide-react";
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define menu items with icons for mobile
  const menuItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Journey", href: "#experience", icon: Briefcase }, // Updated to match Timeline ID
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  // Handle Scroll to shrink navbar or change style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100; // Account for floating nav height
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
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} // Delay to wait for preloader
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-2 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
      >
        {/* Logo Avatar */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 mr-2 hover:scale-110 transition-transform">
          <img src={profileImg} alt="Sarthak" className="w-full h-full object-cover" />
        </a>

        {/* Links */}
        <ul className="flex items-center">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2"></div>

        {/* Action Button */}
        <a
          href="/Bhuptani_Sarthak.pdf"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
        >
          Resume <Download size={14} />
        </a>
      </motion.nav>


      {/* Mobile Top Bar (Simplified) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-[2px]">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <img src={profileImg} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-white">Sarthak.</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-full bg-white/10 border border-white/10 text-white active:scale-95 transition-transform"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-center gap-4"
                  >
                    <item.icon className="text-slate-600" size={28} />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="/Bhuptani_Sarthak.pdf"
                target="_blank"
                className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Download size={20} /> Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;