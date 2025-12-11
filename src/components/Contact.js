// src/components/Contact.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  ExternalLink, 
  ArrowUp, 
  CheckCircle,
  Send,
  MessageSquare
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// --- ANIMATED ICON COMPONENT ---
const RadarIcon = ({ icon: Icon, color }) => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 group">
      {/* Ripples */}
      <motion.div 
        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full border border-white/20"
        style={{ borderColor: color }}
      />
      <motion.div 
        animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        className="absolute inset-0 rounded-full border border-white/40"
        style={{ borderColor: color }}
      />
      
      {/* Main Icon Box */}
      <div 
        className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}20`, borderColor: `${color}40`, color: color }}
      >
        <Icon size={24} />
      </div>
    </div>
  );
};

export default function Contact() {
  const EMAIL = "mrsarthak825@gmail.com";
  const PHONE = "+91 74360 59291";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Background floating particles
  const particleVariants = {
    float: (i) => ({
      y: [0, -50, 0],
      x: [0, 20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="contact" className="relative pt-32 pb-10 bg-transparent overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="float"
            className="absolute rounded-full bg-cyan-500/10 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/10 mb-6 backdrop-blur-md"
          >
            <MessageSquare className="text-white" size={28} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            I'm currently available for freelance work or full-time roles. 
            <br />Drop me a line and let's create something amazing together.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* 1. EMAIL CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
          >
            {/* Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <RadarIcon icon={Mail} color="#22d3ee" /> {/* Cyan */}
              
              <h3 className="text-2xl font-bold text-white mt-6 mb-2">Email</h3>
              <p className="text-slate-400 text-sm mb-8">{EMAIL}</p>
              
              <div className="flex gap-3 w-full">
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all group/btn"
                >
                  Write Me <Send size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
                <button 
                  onClick={() => copyToClipboard(EMAIL)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  title="Copy"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 2. PHONE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             <div className="relative z-10 flex flex-col items-center text-center">
              <RadarIcon icon={Phone} color="#a855f7" /> {/* Purple */}
              
              <h3 className="text-2xl font-bold text-white mt-6 mb-2">Phone</h3>
              <p className="text-slate-400 text-sm mb-8">{PHONE}</p>
              
              <div className="flex gap-3 w-full">
                <a 
                  href={`tel:${PHONE}`} 
                  className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                   Call Now <Phone size={16} />
                </a>
                <button 
                  onClick={() => copyToClipboard(PHONE)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  title="Copy"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 3. SOCIAL CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             <div className="relative z-10 flex flex-col items-center text-center">
              <RadarIcon icon={MapPin} color="#3b82f6" /> {/* Blue */}
              
              <h3 className="text-2xl font-bold text-white mt-6 mb-2">Location</h3>
              <p className="text-slate-400 text-sm mb-8">Gandhinagar, Gujarat</p>
              
              <div className="flex gap-4 w-full mt-auto">
                <a 
                  href="https://github.com/Sarthakbhuptani123" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-black border border-slate-700 hover:border-white text-white flex items-center justify-center gap-2 transition-all"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center gap-2 transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-black/20 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-white tracking-tight mb-1">
              Sarthak<span className="text-cyan-500">.</span>
            </h4>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Sarthak Bhuptani. <br className="md:hidden"/> All rights reserved.
            </p>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-slate-300 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </motion.button>
        </div>
      </footer>

      {/* --- TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-50 bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 shadow-lg shadow-cyan-500/20 text-white px-6 py-4 rounded-2xl flex items-center gap-3"
          >
            <div className="p-1 bg-cyan-500/20 rounded-full">
               <CheckCircle className="text-cyan-400" size={20} />
            </div>
            <div>
               <h5 className="font-bold text-sm">Success!</h5>
               <p className="text-xs text-slate-400">Copied to clipboard</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}