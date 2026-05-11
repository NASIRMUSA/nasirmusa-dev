import { Layout, Cpu, Smartphone, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    icon: <Cpu className="w-5 h-5 text-secondary" />,
    skills: ["Node.js", "Firebase", "Supabase"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5 text-accent-blue" />,
    skills: ["React Native"],
  },
  {
    title: "Optimization",
    icon: <Zap className="w-5 h-5 text-accent-purple" />,
    skills: ["SEO", "Performance Optimization", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-zinc-500 max-w-xl">Structured for technical recruiters and high-performance engineering teams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                {category.icon}
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider text-sm">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-zinc-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
