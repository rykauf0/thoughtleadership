import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] rounded-full border border-navy-700/20" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full border border-navy-700/15" />
        <div className="absolute top-1/3 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-6 animate-fade-up opacity-0">
          AI Enablement Architect
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 animate-fade-up opacity-0 animation-delay-100">
          Ryan Kaufman
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-up opacity-0 animation-delay-200 text-balance">
          I design the organizational systems that make AI adoption stick.
        </p>

        {/* Proof point — visible in the hero */}
        <p className="mt-6 text-sm text-gray-500 animate-fade-up opacity-0 animation-delay-300">
          <span className="text-gold font-semibold">96% enterprise adoption</span>
          {" "}across ~2,000 employees at a $700B+ global institutional investor.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 animate-fade-up opacity-0 animation-delay-300">
          <span className="text-sm text-gray-500">
            Managing Director, Digital &amp; AI Enablement
          </span>
          <span className="text-gray-700">|</span>
          <span className="text-sm text-gray-500">CPP Investments</span>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-6 animate-fade-up opacity-0 animation-delay-400">
          <Link
            href="/essays"
            className="text-sm text-white border border-navy-700 hover:border-gold px-6 py-3 tracking-wide uppercase transition-colors"
          >
            Read the Essays
          </Link>
          <Link
            href="#contact"
            className="text-sm text-gold hover:text-gold-light px-6 py-3 tracking-wide uppercase transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 animation-delay-400">
          <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
