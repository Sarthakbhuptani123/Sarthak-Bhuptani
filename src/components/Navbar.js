import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react or use alternatives
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
    
    // Height of navbar for offset
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

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- Logo --- */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3 group"
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
              
              {/* Hover Glow Effect */}
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
          
          {/* Resume Button (Optional) */}
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
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden bg-slate-900 border-b border-white/10 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-4 p-6">
              {menuItems.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block text-lg font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
               <motion.li variants={itemVariants} className="pt-4">
                  <a 
                    href="/Bhuptani_Sarthak.pdf"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold"
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