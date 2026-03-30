import Hero from "@/components/Hero";
import Frameworks from "@/components/Frameworks";
import EssayCard from "@/components/EssayCard";
import Link from "next/link";
import { getAllEssays } from "@/lib/essays";

const frameworkSlugs = new Set([
  "the-leverage-inversion",
  "orientation-debt",
  "the-trust-stack",
]);

export default function Home() {
  const essays = getAllEssays().filter((e) => !frameworkSlugs.has(e.slug));

  return (
    <>
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-slate-200" />
      </div>

      <Frameworks />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-slate-200" />
      </div>

      {/* Essays */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
                Essays
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                The Human Side of Transformation
              </h2>
            </div>
          </div>
          <div className="divide-y divide-slate-200">
            {essays.map((essay) => (
              <EssayCard
                key={essay.slug}
                slug={essay.slug}
                title={essay.title}
                summary={essay.summary}
                date={essay.date}
                readTime={essay.readTime}
                category={essay.category}
              />
            ))}
          </div>
          <Link
            href="/essays"
            className="text-sm font-medium text-accent hover:text-accent-dark transition-colors mt-8 block"
          >
            All essays &rarr;
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-slate-200" />
      </div>

      {/* Third Take teaser */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
            Coming Soon
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Third Take
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            A weekly briefing on the AI developments that matter — what
            actually changed, who it affects, and what the strategy deck
            won&apos;t tell you. Not what happened. What it means.
          </p>
          <a
            href="mailto:ryan.michael.kaufman@gmail.com?subject=Subscribe%20to%20Third%20Take"
            className="inline-block text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded transition-colors"
          >
            Get Notified at Launch
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-slate-200" />
      </div>

      {/* About — minimal, at the bottom */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug">
            I build AI enablement at enterprise scale — not advise on it.
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4 text-[15px]">
            <p>
              I lead Digital &amp; AI Enablement at one of the world&apos;s
              largest institutional investors. I designed and built the
              organization&apos;s entire approach to AI adoption — from
              governance architecture to the behavioral change that makes
              it stick. Before that: digital product management, data
              strategy, and organizational change.
            </p>
            <p>
              I write about the gap between what organizations say they
              want from AI and what they&apos;re actually willing to change
              to get it. The technology is the easy part. The hard part is
              everything else.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="mailto:ryan.michael.kaufman@gmail.com"
              className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/rkaufman2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
