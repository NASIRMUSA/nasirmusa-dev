import { CheckCircle2, Shield, Zap, Package, Users, Lightbulb } from "lucide-react";

const valueProps = [
  {
    title: "Full Product Lifecycle",
    desc: "Ability to build full products from initial idea to production deployment.",
    icon: <Package className="w-5 h-5 text-primary" />,
  },
  {
    title: "Clean Code Practices",
    desc: "Maintaining maintainable, readable, and scalable codebases using best practices.",
    icon: <Shield className="w-5 h-5 text-secondary" />,
  },
  {
    title: "Performance-First Mindset",
    desc: "Optimizing every layer of the stack for maximum speed and efficiency.",
    icon: <Zap className="w-5 h-5 text-accent-blue" />,
  },
  {
    title: "Client-Centric Experience",
    desc: "Extensive experience working directly with real-world clients to deliver value.",
    icon: <Users className="w-5 h-5 text-accent-purple" />,
  },
  {
    title: "Entrepreneurial Thinking",
    desc: "Thinking like a founder to align technical decisions with business growth.",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
  },
  {
    title: "Problem Solving",
    desc: "Strong analytical skills to tackle complex technical and business challenges.",
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
  },
];

export default function WhatIBring() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 italic">What I Bring to a Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {valueProps.map((prop) => (
            <div key={prop.title} className="flex gap-5">
              <div className="mt-1 w-10 h-10 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                {prop.icon}
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">{prop.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
