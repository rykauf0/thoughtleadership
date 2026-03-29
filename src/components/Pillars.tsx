const pillars = [
  {
    number: "01",
    title: "Broad-Base Activation",
    subtitle: "Enterprise Hackathons",
    description:
      "All-company and targeted hackathons that lift AI confidence and generate hundreds of solutions — with governed pathways from prototype to production.",
  },
  {
    number: "02",
    title: "Deep-Skill Intensives",
    subtitle: "AI Problem-Solving Sprints",
    description:
      "Week-long immersive sprints with 1:1 expert coaching, where high-performers solve real business challenges and build AI-native capability.",
  },
  {
    number: "03",
    title: "Leadership Alignment",
    subtitle: "Council + Executive Coaching",
    description:
      "A cross-business enablement council and 1:1 executive coaching — the connective tissue that links functions horizontally and levels vertically.",
  },
  {
    number: "04",
    title: "Scaling Pathways",
    subtitle: "Governance & Vendor Ecosystem",
    description:
      "End-to-end product lifecycle governance connecting AI products, vendor partnerships, and Responsible AI guardrails to scale what works.",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 border-t border-navy-700/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
            The Enablement Model
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Four Interlocking Pillars
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Each built from zero, without existing precedent — designed to create
            reinforcing loops of awareness, capability, leadership alignment, and
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/30">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-navy-950 p-8 group hover:bg-navy-900/50 transition-colors"
            >
              <span className="font-mono text-sm text-gold/60 mb-4 block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                {pillar.title}
              </h3>
              <p className="font-mono text-xs text-gold tracking-wide uppercase mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting line visual */}
        <div className="hidden lg:flex items-center justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-48 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-48 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-48 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
          </div>
        </div>
        <p className="hidden lg:block text-center text-xs text-gray-600 mt-3 tracking-wide uppercase">
          Interlocking &mdash; not siloed
        </p>
      </div>
    </section>
  );
}
