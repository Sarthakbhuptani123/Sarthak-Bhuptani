import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// IMPORTANT: The local import for profile.jpg has been removed as it causes compilation errors in this environment.
// Please replace the placeholder URL below with a public URL to your hosted profile image.
// import profile from "./assets/profile.jpg"; // Original problematic import

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menu items for navigation
  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Effect to handle smooth scrolling for internal links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Adjust scroll position to account for fixed header
            const headerOffset = document.querySelector('nav').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 20; // Added extra padding

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            setIsMobileMenuOpen(false); // Close mobile menu on click
          }
        }
      });
    });
  }, []); // Run once on component mount

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Profile */}
        <div className="flex items-center gap-3">
          {/* IMPORTANT: Replace this placeholder image URL with your actual hosted profile.jpg URL */}
          <img
            src="https://placehold.co/40x40/2d3748/ffffff?text=SB" // Placeholder for Sarthak Bhuptani
            alt="Sarthak Bhuptani"
            className="w-10 h-10 rounded-full object-cover border-2 border-teal-400 shadow-md"
          />
          <span className="text-xl md:text-2xl font-bold text-teal-400">Sarthak Bhuptani</span>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-teal-400 hover:text-teal-300 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-gray-300 hover:text-teal-400 font-medium transition duration-300 transform hover:scale-105 relative
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md px-6 py-4 z-40 shadow-lg"
          >
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * menuItems.indexOf(item) }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl text-gray-200 hover:text-teal-400 transition-colors duration-200 py-2 px-3 rounded-md
                               hover:bg-gray-800"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind CSS Custom Styles for Navbar (add these to your main App.js or a global CSS file) */}
      <style>{`
        /* Desktop Navigation Link Underline Hover Effect */
        .relative.after\\:absolute.after\\:left-0.after\\:bottom-0.after\\:h-\\[2px\\].after\\:w-0.after\\:bg-teal-400.after\\:transition-all.after\\:duration-300.hover\\:after\\:w-full {
          position: relative;
        }
        .relative.after\\:absolute.after\\:left-0.after\\:bottom-0.after\\:h-\\[2px\\].after\\:w-0.after\\:bg-teal-400.after\\:transition-all.after\\:duration-300.hover\\:after\\:w-full::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px; /* Adjust as needed */
          height: 2px;
          width: 0;
          background-color: #2dd4bf; /* Teal color */
          transition: all 0.3s ease-in-out;
        }
        .relative.after\\:absolute.after\\:left-0.after\\:bottom-0.after\\:h-\\[2px\\].after\\:w-0.after\\:bg-teal-400.after\\:transition-all.after\\:duration-300.hover\\:after\\:w-full:hover::after {
          width: 100%;
        }

        /* Responsive adjustments for hidden/shown elements */
        @media (max-width: 767px) { /* Use max-width for md breakpoint */
          .md\\:hidden {
            display: block !important;
          }
          .hidden.md\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
