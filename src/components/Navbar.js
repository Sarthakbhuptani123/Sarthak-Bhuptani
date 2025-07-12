import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Profile */}
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Sarthak"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold w-8 h-8">Sarthak</span>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
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
        <ul className="hidden lg:flex gap-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0, scale: 0.95 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-black px-6 py-4 z-40"
          >
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-blue-400 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
