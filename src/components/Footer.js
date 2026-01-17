import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/sarthak-bhuptani", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/sarthak-bhuptani", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/Sarthak00125445", label: "Twitter" },
        { icon: Mail, href: "mailto:mrsarthak825@gmail.com", label: "Email" },
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-20 pb-10 border-t border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm z-10 transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                            Sarthak Bhuptani
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                            Crafting immersive digital experiences with code and creativity.
                            Let's build something extraordinary together.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                Open to work
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Navigation</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-500 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 shadow-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-500 pt-2">
                            Based in India 🇮🇳
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1">
                        © {currentYear} Sarthak Bhuptani. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                    >
                        Back to Top
                        <span className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                            <ChevronUp size={16} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
