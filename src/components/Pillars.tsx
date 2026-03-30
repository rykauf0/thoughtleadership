const lenses = [
  {
    number: "01",
    title: "Empathy Before Architecture",
    description:
      "Every failed AI program I've studied started with the technology and worked backward to the human. Design thinking inverts this: start with the employee who's afraid their job is changing, the manager who doesn't know what to reinforce, the executive who can't distinguish signal from vendor noise. Understand the human system first. Then design the intervention.",
  },
  {
    number: "02",
    title: "Reframe the Problem",
    description:
      "\"We need AI training\" is almost always the wrong problem statement. The real problem is usually: \"Our organizational environment doesn't support new ways of working.\" Training addresses a skill gap. But most people aren't blocked by skill — they're blocked by ambiguity, risk aversion, unchanged incentives, and absent permission. Reframing the problem changes everything about the solution.",
  },
  {
    number: "03",
    title: "Trust as Infrastructure",
    description:
      "Governance isn't a brake. Clear boundaries, responsible AI frameworks, and explicit permission structures are the trust infrastructure that lets people move faster, not slower. When people know what's safe, what's endorsed, and what the path from prototype to production looks like — they stop hesitating and start building. Trust is the unlocking mechanism.",
  },
  {
    number: "04",
    title: "Systems, Not Programs",
    description:
      "Point solutions produce point results. A hackathon without follow-through is theater. Training without environmental change decays in weeks. The interventions that sustain behavioral change are interlocking systems — where each component creates the conditions for the next to succeed. Design the system. Not the program.",
  },
];

export default function Pillars() {
  return (
    <section id="lens" className="py-24 border-t border-navy-700/30 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
            The Lens
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Design thinking applied to organizational transformation
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            These aren&apos;t abstract principles. They&apos;re the mental
            models I use to diagnose why AI programs stall, design interventions
            that produce behavioral change, and build the organizational
            infrastructure that makes adoption sustain.
          </p>
        </div>

        <div className="space-y-px bg-navy-700/20">
          {lenses.map((lens) => (
            <div
              key={lens.number}
              className="bg-navy-950 p-8 md:p-10 group"
            >
              <div className="flex gap-6 md:gap-10">
                <span className="font-mono text-sm text-gold/40 pt-1 shrink-0">
                  {lens.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">
                    {lens.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {lens.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
