import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-900">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Nasir Musa</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 bg-white text-black rounded font-bold hover:bg-zinc-200 transition-all text-[10px]"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
