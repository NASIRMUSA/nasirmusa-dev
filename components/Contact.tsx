"use client";

import { useState } from "react";
import { Mail, Send, Briefcase, Code2, FileText } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const whatsappNumber = "2347069924612";
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6 italic tracking-tight">Let&apos;s Work Together</h2>
        <p className="text-zinc-500 text-lg">Currently open to international remote roles and high-impact project collaborations.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl flex items-center gap-6 group hover:border-primary transition-colors">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Email</p>
              <p className="text-lg font-bold text-white">nasirmusanigeria@gmail.com</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/nasirmusa-dev" className="flex-1 p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center justify-center gap-2 hover:text-primary hover:border-primary transition-all">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
            </a>
            <a href="https://github.com/NASIRMUSA" className="flex-1 p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center justify-center gap-2 hover:text-primary hover:border-primary transition-all">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
            </a>
          </div>

          <a 
            href="/resume.pdf" 
            target="_blank"
            className="w-full py-5 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all"
          >
            <FileText className="w-5 h-5" />
            Download Resume (PDF)
          </a>
        </div>
        
        <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-[2rem]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-primary text-sm text-white"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-primary text-sm text-white"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-primary text-sm text-white resize-none"
            />
            <button 
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
