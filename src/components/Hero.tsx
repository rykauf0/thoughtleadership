import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-8 animate-fade-up opacity-0">
          A design thinking lens on AI transformation
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-up opacity-0 animation-delay-100">
          The organizations adopting AI fastest aren&apos;t the ones with the
          best technology.{" "}
          <span className="text-gold">
            They&apos;re the ones that built trust first.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed animate-fade-up opacity-0 animation-delay-200">
          Most enterprise AI programs fail because they treat transformation as
          a technology deployment problem. It&apos;s not. It&apos;s a trust
          problem — and trust is a design problem. This site explores the
          frameworks, mental models, and design thinking principles that make
          organizational AI adoption actually work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-up opacity-0 animation-delay-300">
          <Link
            href="/essays"
            className="text-sm text-white border border-navy-700 hover:border-gold px-6 py-3 tracking-wide uppercase transition-colors"
          >
            Explore the Frameworks
          </Link>
          <Link
            href="#lens"
            className="text-sm text-gray-400 hover:text-gold tracking-wide uppercase transition-colors"
          >
            How I think about this &darr;
          </Link>
        </div>
      </div>
    </section>
  );
}
