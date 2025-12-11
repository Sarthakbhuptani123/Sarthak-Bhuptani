// src/components/Contact.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, ArrowUpRight, Copy, CheckCircle, MapPin, 
  Github, Linkedin, ArrowUp, Phone, Smartphone 
} from "lucide-react";

// --- COMPONENTS ---

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.01 }}
    className={`relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
  >
    {/* Hover Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

export default function Contact() {
  const EMAIL = "mrsarthak825@gmail.com";
  const PHONE = "+91 74360 59291"; // Added Phone Number
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-32 bg-slate-950 overflow-hidden text-white">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to Opportunities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-medium tracking-tight leading-none"
            >
              Let's work <br />
              <span className="text-slate-500">together.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-right hidden md:block"
          >
            <ArrowUpRight size={64} className="text-slate-600" />
          </motion.div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* 1. Main Email Card (Span 7) */}
          <BentoCard className="md:col-span-7 min-h-[300px]" delay={0.1}>
            <div>
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-3xl font-medium mb-2">Have an idea?</h3>
              <p className="text-slate-400">I'm just one email away. Let's discuss your next project.</p>
            </div>
            
            <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href={`mailto:${EMAIL}`} 
                className="flex-1 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Send Email <ArrowUpRight size={20} />
              </a>
              <button 
                onClick={() => copyToClipboard(EMAIL, 'email')}
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all font-medium flex items-center justify-center gap-2"
              >
                {copiedEmail ? <CheckCircle size={20} className="text-green-400" /> : <Copy size={20} />}
                {copiedEmail ? "Copied" : "Copy"}
              </button>
            </div>
          </BentoCard>

          {/* 2. Socials & Phone (Span 5) */}
          <BentoCard className="md:col-span-5" delay={0.2}>
            <div>
              <h3 className="text-xl font-medium text-slate-300 mb-6">Connect with me</h3>
              <div className="flex flex-col gap-3">
                
                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all group">
                  <span className="flex items-center gap-3 font-medium text-green-400">
                    <Smartphone size={20} /> {PHONE}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => copyToClipboard(PHONE, 'phone')}
                      className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Copy Number"
                    >
                      {copiedPhone ? <CheckCircle size={18} /> : <Copy size={18} />}
                    </button>
                    <a 
                      href={`tel:${PHONE}`}
                      className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Call Now"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Social Items */}
                <a href="https://github.com/Sarthakbhuptani123" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-black/20 hover:bg-white/10 border border-white/5 transition-all group">
                  <span className="flex items-center gap-3 font-medium"><Github size={20} /> GitHub</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 transition-all group">
                  <span className="flex items-center gap-3 font-medium text-blue-400"><Linkedin size={20} /> LinkedIn</span>
                  <ArrowUpRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

              </div>
            </div>
          </BentoCard>

          {/* 3. Location & Time (Span 4) */}
          <BentoCard className="md:col-span-4" delay={0.3}>
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400"><MapPin size={24} /></div>
                <div className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-slate-400">IST</div>
              </div>
              <div>
                <h4 className="text-4xl font-light mb-1">{time}</h4>
                <p className="text-slate-400">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </BentoCard>

          {/* 4. Quick Nav (Span 8) */}
          <BentoCard className="md:col-span-8 flex-row items-center !p-0" delay={0.4}>
             <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                <div>
                   <h3 className="text-2xl font-medium mb-1">Portfolio 2025</h3>
                   <p className="text-slate-400 text-sm">Designed & Built by Sarthak</p>
                </div>
                
                <button 
                  onClick={scrollToTop} 
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-slate-800 border border-white/10 hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-3 group"
                >
                  Back to Top
                  <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                </button>
             </div>
          </BentoCard>

        </div>

        {/* --- GIANT FOOTER BRANDING --- */}
        <div className="relative pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Sarthak Bhuptani. All rights reserved.
          </p>
          
          <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-950 select-none">
            SARTHAK
          </h1>
        </div>

      </div>

      {/* --- TOAST --- */}
      <AnimatePresence>
        {(copiedEmail || copiedPhone) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-50 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3"
          >
            <CheckCircle className="text-green-600" size={20} />
            {copiedPhone ? "Number Copied!" : "Email Copied!"}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}