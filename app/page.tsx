import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhatIBring from "@/components/WhatIBring";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen text-zinc-300 selection:bg-primary/30">
      <Header />
      <Hero />
      <div className="section-visible"><About /></div>
      <div className="section-visible"><Skills /></div>
      <div className="section-visible"><Projects /></div>
      <div className="section-visible"><WhatIBring /></div>
      <div className="section-visible"><Metrics /></div>
      <div className="section-visible"><Contact /></div>
      <Footer />
      
      {/* Subtle Background Grain/Texture */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      {/* Very Subtle Accent Glows */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f605,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#8b5cf605,transparent_50%)]" />
      </div>
    </main>
  );
}
