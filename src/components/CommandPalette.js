import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Moon, Sun, Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { theme, toggleTheme } = useTheme();
    const [copied, setCopied] = useState(false);

    // Toggle open/close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const actions = [
        {
            id: 'home',
            label: 'Go to Home',
            icon: Home,
            action: () => { window.location.href = '#home'; setIsOpen(false); }
        },
        {
            id: 'about',
            label: 'Go to About',
            icon: User,
            action: () => { window.location.href = '#about'; setIsOpen(false); }
        },
        {
            id: 'skills',
            label: 'Go to Skills',
            icon: Code,
            action: () => { window.location.href = '#skills'; setIsOpen(false); }
        },
        {
            id: 'projects',
            label: 'Go to Projects',
            icon: Briefcase,
            action: () => { window.location.href = '#projects'; setIsOpen(false); }
        },
        {
            id: 'contact',
            label: 'Go to Contact',
            icon: Mail,
            action: () => { window.location.href = '#contact'; setIsOpen(false); }
        },
        {
            id: 'theme',
            label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
            icon: theme === 'dark' ? Sun : Moon,
            action: () => { toggleTheme(); setIsOpen(false); }
        },
        {
            id: 'email',
            label: 'Copy Email Address',
            icon: copied ? Check : Copy,
            action: () => {
                navigator.clipboard.writeText('mrsarthak825@gmail.com');
                setCopied(true);
                setTimeout(() => { setCopied(false); setIsOpen(false); }, 1000);
            }
        },
        {
            id: 'github',
            label: 'Open GitHub',
            icon: Github,
            action: () => { window.open('https://github.com/sarthak-bhuptani', '_blank'); setIsOpen(false); }
        },
        {
            id: 'linkedin',
            label: 'Open LinkedIn',
            icon: Linkedin,
            action: () => { window.open('https://linkedin.com/in/sarthak-bhuptani', '_blank'); setIsOpen(false); }
        },
        {
            id: 'twitter',
            label: 'Open Twitter',
            icon: Twitter,
            action: () => { window.open('https://x.com/Sarthak00125445', '_blank'); setIsOpen(false); }
        },
    ];

    // Filter actions
    const filteredActions = actions.filter(action =>
        action.label.toLowerCase().includes(query.toLowerCase())
    );

    // Arrow key navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    filteredActions[selectedIndex].action();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredActions, selectedIndex]);

    // Reset selected index on query change
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Palette Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="w-full max-w-lg relative z-10 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                            <Search className="w-5 h-5 text-slate-400 mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 text-lg h-8"
                            />
                            <div className="hidden sm:flex gap-1 text-xs font-medium text-slate-400">
                                <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd>
                                <span>to close</span>
                            </div>
                        </div>

                        {/* Results List */}
                        <div className="max-h-[60vh] overflow-y-auto py-2">
                            {filteredActions.length === 0 ? (
                                <div className="px-4 py-8 text-center text-slate-500">
                                    <p>No results found.</p>
                                </div>
                            ) : (
                                <div className="px-2">
                                    <div className="text-xs font-semibold text-slate-400 px-2 py-1 mb-1 uppercase tracking-wider">
                                        Commands
                                    </div>
                                    {filteredActions.map((action, index) => (
                                        <motion.button
                                            key={action.id}
                                            onClick={action.action}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-colors duration-200 ${index === selectedIndex
                                                    ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
                                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            <action.icon
                                                className={`w-5 h-5 mr-3 ${index === selectedIndex ? 'text-cyan-500' : 'text-slate-400'
                                                    }`}
                                            />
                                            <span className="flex-grow font-medium">{action.label}</span>
                                            {index === selectedIndex && (
                                                <motion.span
                                                    layoutId="action-arrow"
                                                    className="text-cyan-500"
                                                >
                                                    ↵
                                                </motion.span>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 flex justify-between items-center">
                            <div className="flex gap-2">
                                <span>Pro Tip: Navigate with arrows</span>
                            </div>
                            <span>Dev by Sarthak</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
