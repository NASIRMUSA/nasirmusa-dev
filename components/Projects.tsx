import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NasFon Online Marketplace",
    problem: "Need for a scalable, high-performance marketplace architecture for large inventories.",
    tech: "Next.js, TailwindCSS",
    role: "Lead Full-Stack Developer",
    impact: "Built a production-ready web application with a focus on scalable architecture and SEO.",
    link: "https://nasfon.netlify.app",
  },
  {
    title: "ANEMASALE",
    problem: "Small shop owners needed a simple, friction-less way to sell single products online without complex overhead.",
    tech: "React.js, TailwindCSS",
    role: "Product Creator & Developer",
    impact: "Increased sales simplicity for local businesses through optimized UX and minimal setup.",
    link: "https://anemasell.netlify.app",
  },
  {
    title: "BIZTAP (Enterprise)",
    problem: "Large enterprises struggled with manual invoice management and fragmented credit book tracking.",
    tech: "React Native, Node.js",
    role: "Mobile Solutions Architect",
    impact: "Streamlined customer management and debt tracking for enterprise-level operations.",
    link: "https://biztap.app",
  },
  {
    title: "FlexNeatAndClean",
    problem: "Client needed a high-performance landing page to professionalize their cleaning service brand.",
    tech: "HTML, TailwindCSS, JS",
    role: "Frontend Developer",
    impact: "Delivered a pixel-perfect, SEO-optimized landing page that converted visitors into clients.",
    link: "https://flexneatandclean.com.ng",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4 italic">Impact-Focused Projects</h2>
        <p className="text-zinc-500 max-w-xl">Real-world products solving actual business problems with measurable results.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-primary/50 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <a href={project.link} className="p-2 bg-zinc-900 rounded-lg hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">The Problem</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">Tech Stack</p>
                  <p className="text-zinc-300 text-xs">{project.tech}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">My Role</p>
                  <p className="text-zinc-300 text-xs">{project.role}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-zinc-900">
                <p className="text-xs font-mono text-secondary uppercase tracking-widest mb-2">Business Impact</p>
                <p className="text-zinc-400 text-sm italic">{project.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
