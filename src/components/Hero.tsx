import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-6 animate-fade-up opacity-0">
          AI Transformation, Honestly
        </p>
        <h1 className="font-serif text-4xl md:text-[3.5rem] md:leading-[1.12] font-bold text-slate-900 mb-8 animate-fade-up opacity-0 animation-delay-100 text-balance">
          95% of enterprise AI pilots produce zero measurable P&amp;L impact.
          The problem isn&apos;t the technology.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-10 animate-fade-up opacity-0 animation-delay-200 max-w-2xl">
          It&apos;s the organizational assumptions, misaligned incentives, and
          human dynamics that nobody wants to talk about in the strategy deck.
          This site is about those things.
        </p>
        <div className="flex flex-wrap items-center gap-4 animate-fade-up opacity-0 animation-delay-300">
          <Link
            href="/essays"
            className="text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded transition-colors"
          >
            Read the Essays
          </Link>
          <Link
            href="#arguments"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            See the evidence &darr;
          </Link>
        </div>
      </div>
    </section>
  );
}
