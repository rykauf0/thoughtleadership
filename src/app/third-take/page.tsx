import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Take — Ryan Kaufman",
  description:
    "A weekly briefing on the AI developments that matter — analyzed through the lens of enterprise adoption and organizational transformation. Coming soon.",
};

export default function ThirdTakePage() {
  return (
    <div className="pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-6 pt-16">
        <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
          Coming Soon
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Third Take
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-3">
          A weekly briefing on the AI developments that matter — analyzed not
          for what happened, but for what it means for the organizations trying
          to make adoption real.
        </p>
        <p className="text-slate-500 leading-relaxed mb-10">
          Three to five stories. One synthesis. The organizational implications
          that nobody else is writing about. Every week.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-10">
          <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
            The format
          </h3>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Each edition curates the week&apos;s most significant AI
            developments and analyzes them through the lens of leverage,
            orientation debt, and trust architecture. Not what the technology
            can do — what it means for the humans and organizations trying to
            absorb it.
          </p>
        </div>

        <a
          href="mailto:ryan.michael.kaufman@gmail.com?subject=Subscribe%20to%20Third%20Take"
          className="inline-block text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded transition-colors"
        >
          Get Notified at Launch
        </a>
      </div>
    </div>
  );
}
