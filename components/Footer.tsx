export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-zinc-500 text-sm">
            © 2018 Nasir Musa. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            Built with Engineering Precision & React
          </p>
        </div>
        
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
