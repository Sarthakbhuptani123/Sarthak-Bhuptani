import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll + close menu on link click
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;

      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerOffset = document.querySelector("nav")?.offsetHeight || 0;

      if (targetElement) {
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - headerOffset - 10,
          behavior: "smooth",
        });
      }

      // 👇 Reset menu and animations
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://placehold.co/40x40/2d3748/ffffff?text=SB"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-teal-400"
          />
          <span className="text-xl font-bold text-teal-400">
            Sarthak Bhuptani
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition font-medium text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile) */}
        <div className="md:hidden">
          <button
            className="z-50 relative"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="flex flex-col gap-1 "
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-1 bg-teal-400 rounded origin-left"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
                className="w-8 h-1 bg-teal-400 rounded"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-1 bg-teal-400 rounded origin-left"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md px-6 py-6 z-40 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-6 text-center">
              {menuItems.map((item) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    className="text-white text-lg font-medium hover:text-teal-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
