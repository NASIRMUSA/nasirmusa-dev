import { Rocket, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Full-Stack Expertise & Leadership</h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            I am a Full-Stack Developer with a proven track record of building real-world products from idea to deployment. As the Co-Founder of **Digital Solution Academy**, I lead technical strategy and product development, bridging the gap between business goals and high-performance engineering.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="mt-1 w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Product Building</h4>
                <p className="text-zinc-500">Experienced in creating scalable architectures for startups and established businesses.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
                <Rocket className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">System Thinking</h4>
                <p className="text-zinc-500">Approaching development with a holistic view of performance, SEO, and user experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-white border-b border-zinc-900 pb-4 italic">Experience Summary</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-3xl font-bold text-primary mb-1">8+</p>
              <p className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Years Experience</p>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-3xl font-bold text-primary mb-1">Academy</p>
              <p className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Co-Founder</p>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-3xl font-bold text-white mb-1">Mobile</p>
              <p className="text-xs text-zinc-500 uppercase font-mono tracking-wider">React Native</p>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-3xl font-bold text-white mb-1">Full Stack</p>
              <p className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Next.js & Node</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
