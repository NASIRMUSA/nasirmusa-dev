import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="relative z-10 text-center max-w-4xl px-6 hero-entrance will-change-transform">
        <div className="mb-10 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <Image 
                src="/profile.jpg" 
                alt="Nasir Musa"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-primary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to International & Remote Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white text-balance">
          Nasir Musa
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8 text-balance">
          Full-Stack Developer & Co-Founder of Digital Solution Academy
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          Building high-performance, scalable digital products for businesses globally. Focused on clean code, system thinking, and measurable business impact.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact"
            className="px-8 py-4 bg-primary text-white rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Let&apos;s Work Together
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-lg font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
