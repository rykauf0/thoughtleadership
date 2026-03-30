import Link from "next/link";

const arguments_ = [
  {
    id: "leverage-inversion",
    title: "The Leverage Inversion",
    subtitle: "Why organizations work hardest on what matters least",
    essay: "/essays/the-leverage-inversion",
    description:
      "In every failing AI transformation, there's a pattern: 80% of effort goes to tools, platforms, and training — the lowest-leverage interventions. The highest-leverage work (redesigning decision rights, changing incentive structures, rethinking how information flows) gets almost no investment — because it's politically uncomfortable and hard to put on a roadmap.",
    visual: [
      { label: "Tools & platforms", effort: 35, leverage: 5 },
      { label: "Training programs", effort: 30, leverage: 10 },
      { label: "Process redesign", effort: 20, leverage: 25 },
      { label: "Information flows", effort: 10, leverage: 30 },
      { label: "Decision rights & incentives", effort: 5, leverage: 60 },
    ],
  },
  {
    id: "orientation-debt",
    title: "Orientation Debt",
    subtitle: "The hidden liability AI exposes",
    essay: "/essays/orientation-debt",
    description:
      "Every organization carries orientation debt — the gap between how the world actually works and how the organization's assumptions say it works. Like technical debt, it compounds silently. Unlike technical debt, it's invisible until something forces a reckoning. AI is that reckoning. It exposes decades of accumulated misalignment between what organizations believe and what's actually true.",
    layers: [
      { label: "What we see", sublabel: "Tools & artifacts", depth: "Surface" },
      { label: "What we say we believe", sublabel: "Espoused strategy", depth: "Shallow" },
      { label: "What we actually believe", sublabel: "Implicit assumptions", depth: "Deep" },
      { label: "What we can't question", sublabel: "Identity & paradigm", depth: "Bedrock" },
    ],
  },
  {
    id: "trust-stack",
    title: "The Trust Stack",
    subtitle: "Adoption scales in the order trust is built",
    essay: "/essays/the-trust-stack",
    description:
      "Trust isn't a feeling — it's infrastructure. Five layers, built in sequence. Each enables the next. Skip a layer and the whole thing collapses. Most organizations try to drive adoption at the top without establishing the conditions at the bottom. The result is compliance theater: people use the tools but don't change how they work.",
    stack: [
      { layer: "5", label: "Scaled Confidence", desc: "Organization-wide behavioral change" },
      { layer: "4", label: "Demonstrated Competence", desc: "Visible proof that new approaches work" },
      { layer: "3", label: "Governance Clarity", desc: "Clear boundaries that enable, not constrain" },
      { layer: "2", label: "Organizational Permission", desc: "Explicit signals that experimentation is endorsed" },
      { layer: "1", label: "Psychological Safety", desc: "It's safe to fail, to not know, to be wrong" },
    ],
  },
];

function LeverageChart({ data }: { data: typeof arguments_[0]["visual"] }) {
  if (!data) return null;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 mb-1 text-xs text-slate-400">
        <span className="w-36" />
        <span className="flex-1 text-center">% of organizational effort</span>
        <span className="flex-1 text-center">% of actual leverage</span>
      </div>
      {data.map((row) => (
        <div key={row.label} className="flex items-center gap-4">
          <span className="text-xs text-slate-600 w-36 shrink-0 text-right">
            {row.label}
          </span>
          <div className="flex-1 h-5 bg-slate-100 rounded-sm overflow-hidden">
            <div
              className="h-full bg-slate-300 rounded-sm"
              style={{ width: `${row.effort}%` }}
            />
          </div>
          <div className="flex-1 h-5 bg-slate-100 rounded-sm overflow-hidden">
            <div
              className="h-full bg-accent/70 rounded-sm"
              style={{ width: `${row.leverage}%` }}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-4 mt-2 text-xs">
        <span className="w-36" />
        <div className="flex-1 flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-300 rounded-sm" />
          <span className="text-slate-500">Effort</span>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <div className="w-3 h-3 bg-accent/70 rounded-sm" />
          <span className="text-slate-500">Leverage</span>
        </div>
      </div>
    </div>
  );
}

function TrustStackViz({ stack }: { stack: typeof arguments_[2]["stack"] }) {
  if (!stack) return null;
  return (
    <div className="space-y-0">
      {stack.map((item, i) => (
        <div
          key={item.layer}
          className="border border-slate-200 first:rounded-t-lg last:rounded-b-lg -mt-px px-5 py-4 flex items-start gap-4"
          style={{ backgroundColor: `rgba(37, 99, 235, ${0.03 + i * 0.025})` }}
        >
          <span className="text-xs font-mono text-accent/60 pt-0.5">{item.layer}</span>
          <div>
            <p className="text-sm font-semibold text-slate-900">{item.label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
          </div>
        </div>
      ))}
      <p className="text-xs text-slate-400 mt-3 text-center">
        &uarr; Build from the bottom. Skip a layer and the stack collapses.
      </p>
    </div>
  );
}

function OrientationLayers({ layers }: { layers: typeof arguments_[1]["layers"] }) {
  if (!layers) return null;
  return (
    <div className="space-y-0">
      {layers.map((item, i) => (
        <div
          key={item.label}
          className="border border-slate-200 first:rounded-t-lg last:rounded-b-lg -mt-px px-5 py-4 flex items-start justify-between gap-4"
          style={{ backgroundColor: `rgba(100, 116, 139, ${0.02 + i * 0.04})` }}
        >
          <div>
            <p className="text-sm font-semibold text-slate-900">{item.label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{item.sublabel}</p>
          </div>
          <span className="text-xs font-mono text-slate-400 shrink-0 pt-0.5">
            {item.depth}
          </span>
        </div>
      ))}
      <p className="text-xs text-slate-400 mt-3 text-center">
        Most change efforts target the surface. The debt lives at the bottom.
      </p>
    </div>
  );
}

export default function Frameworks() {
  return (
    <section id="arguments" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
            Core Arguments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Three structural problems most AI programs ignore
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Drawn from building enterprise AI adoption at scale — and
            watching where it breaks. Each argument is backed by a
            full essay with diagnostics you can apply immediately.
          </p>
        </div>

        <div className="space-y-20">
          {arguments_.map((arg) => (
            <div key={arg.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                  {arg.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{arg.subtitle}</p>
                <p className="text-slate-600 leading-relaxed text-[15px] mb-5">
                  {arg.description}
                </p>
                <Link
                  href={arg.essay}
                  className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  Read the full essay &rarr;
                </Link>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                {arg.visual && <LeverageChart data={arg.visual} />}
                {arg.stack && <TrustStackViz stack={arg.stack} />}
                {arg.layers && <OrientationLayers layers={arg.layers} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
