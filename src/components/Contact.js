// src/components/Contact.js
import React, { useState, useRef } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, Github, Linkedin, Smartphone, Copy } from "lucide-react";

export default function Contact() {
  const EMAIL = "mrsarthak825@gmail.com";
  const PHONE = "+917436059291"; // Remove spaces for API
  const DISPLAY_PHONE = "+91 74360 59291";

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('subject') || "Portfolio Inquiry";
    const message = formData.get('message');

    // Construct WhatsApp Message
    const text = `*New Portfolio Inquiry* 🚀\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:* ${message}`;

    const encodeText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${PHONE}?text=${encodeText}`;

    // Simulate loading for better UX
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setLoading(false);
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 flex items-center justify-center">

      <div className="max-w-5xl w-full px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400">Send me a message directly on WhatsApp!</p>
        </div>

        {/* Main Split Card */}
        <div className="flex flex-col md:flex-row bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

          {/* LEFT SIDE: Contact Info (Darker) */}
          <div className="md:w-5/12 bg-slate-800 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                I'm open for freelance opportunities and full-time roles. Feel free to reach out via WhatsApp or Email.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-700/50 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <a href={`mailto:${EMAIL}`} className="text-white font-medium hover:text-cyan-400 transition-colors text-sm break-all">{EMAIL}</a>
                      <button onClick={() => copyToClipboard(EMAIL, 'email')} className="text-slate-500 hover:text-white">
                        {copied === 'email' ? <CheckCircle size={14} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-700/50 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${DISPLAY_PHONE}`} className="text-white font-medium hover:text-green-400 transition-colors">{DISPLAY_PHONE}</a>
                      <button onClick={() => copyToClipboard(DISPLAY_PHONE, 'phone')} className="text-slate-500 hover:text-white">
                        {copied === 'phone' ? <CheckCircle size={14} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-700/50 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-medium">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-white hover:bg-[#0077b5] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form (Lighter) */}
          <div className="md:w-7/12 bg-slate-900/50 p-8 md:p-12 relative">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 icon-pulse">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Redirected to WhatsApp!</h3>
                <p className="text-slate-400 mb-6">You can now hit send in your WhatsApp app.</p>
                <button onClick={() => setSuccess(false)} className="text-sm text-green-400 hover:text-green-300 font-bold">Write Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSendWhatsApp} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600"
                    placeholder="Project Proposal"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-green-500/20"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <>Send via WhatsApp <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Sarthak Bhuptani. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
}