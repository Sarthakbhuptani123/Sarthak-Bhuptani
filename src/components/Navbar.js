// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Logic
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href;
    const targetElement = document.querySelector(targetId);
    const navHeight = 80; 

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      y: -20, 
      pointerEvents: "none",
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0, 
      pointerEvents: "auto",
      transition: { duration: 0.3 } 
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        
        {/* --- Logo --- */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3 group relative z-50"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors">
            <img
              src={profileImg}
              alt="Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
            Sarthak<span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* --- Desktop Menu --- */}
        <ul className="hidden md:flex items-center gap-2">
          {menuItems.map((item, index) => (
            <li 
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="relative z-10 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-white/10 rounded-full -z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </li>
          ))}
          <li className="ml-4">
              <a 
               href="/Bhuptani_Sarthak.pdf"
               target="_blank"
               className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
              >
                Resume
              </a>
          </li>
        </ul>

        {/* --- Mobile Toggle --- */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown (Fixed) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-xl shadow-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center justify-center gap-6 py-10">
              {menuItems.map((item) => (
                <motion.li 
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-xl font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
               <motion.li whileHover={{ scale: 1.05 }} className="pt-4">
                  <a 
                    href="/Bhuptani_Sarthak.pdf"
                    target="_blank"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg"
                  >
                    Download Resume
                  </a>
               </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;