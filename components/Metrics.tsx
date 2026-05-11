const metrics = [
  {
    value: "40%",
    label: "Performance Improvement",
    desc: "Achieved through critical rendering path optimization and asset minification.",
  },
  {
    value: "< 2s",
    label: "Average Load Time",
    desc: "Consistently delivering fast initial loads for complex web applications.",
  },
  {
    value: "10k+",
    label: "Real Users Served",
    desc: "Experience managing products with active user bases and real-world traffic.",
  },
  {
    value: "100/100",
    label: "Lighthouse Score",
    desc: "Committed to perfect accessibility, SEO, and performance standards.",
  },
];

export default function Metrics() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-5xl font-black text-white mb-4 italic tracking-tighter">{metric.value}</p>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{metric.label}</p>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px] mx-auto">{metric.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
