import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import EssayCard from "@/components/EssayCard";
import Link from "next/link";
import { getAllEssays } from "@/lib/essays";

export default function Home() {
  const essays = getAllEssays().slice(0, 3);

  return (
    <>
      <Hero />

      <Pillars />

      {/* Central thesis */}
      <section className="py-24 border-t border-navy-700/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <blockquote className="border-l-2 border-gold pl-8">
            <p className="font-serif text-2xl md:text-3xl text-white leading-snug mb-6">
              &ldquo;The organizations that will capture the most value from AI
              are the ones that treat trust — not technology — as their primary
              infrastructure investment.&rdquo;
            </p>
          </blockquote>
          <p className="text-gray-400 text-lg leading-relaxed mt-8">
            This isn&apos;t a theory. I&apos;ve built and led the AI enablement
            architecture at one of the world&apos;s largest institutional
            investors — designing every major intervention from scratch, without
            precedent. The frameworks on this site come from that work: what
            it actually takes to move an enterprise from &ldquo;we have AI
            tools&rdquo; to &ldquo;AI has changed how we work.&rdquo;
          </p>
          <p className="text-gray-500 text-base mt-4">
            My background spans digital product management, data and analytics,
            MIT design thinking methodology, and organizational change — the
            combination that makes it possible to see AI transformation as a
            human systems problem, not a technology deployment problem.
          </p>
        </div>
      </section>

      {/* Essays */}
      <section className="py-24 border-t border-navy-700/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
                Frameworks &amp; Essays
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Thinking in Public
              </h2>
            </div>
            <Link
              href="/essays"
              className="text-sm text-gray-400 hover:text-gold transition-colors hidden md:block"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-navy-700/20">
            {essays.map((essay) => (
              <div key={essay.slug} className="bg-navy-950">
                <EssayCard
                  slug={essay.slug}
                  title={essay.title}
                  summary={essay.summary}
                  date={essay.date}
                  readTime={essay.readTime}
                  category={essay.category}
                />
              </div>
            ))}
          </div>
          <Link
            href="/essays"
            className="text-sm text-gray-400 hover:text-gold transition-colors mt-8 block md:hidden"
          >
            View all essays &rarr;
          </Link>
        </div>
      </section>

      {/* Third Take — coming soon */}
      <section className="py-24 border-t border-navy-700/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
            Coming Soon
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Third Take
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            A weekly briefing on the AI developments that matter — analyzed not
            for what happened, but for what it means for the organizations
            trying to make AI adoption real. Beyond the news. Beyond the hot
            take. The organizational implications.
          </p>
          <p className="text-gray-500 text-base mb-8">
            Three stories. One synthesis. Every week.
          </p>
          <a
            href="mailto:ryan.michael.kaufman@gmail.com?subject=Subscribe%20to%20Third%20Take"
            className="inline-block text-sm text-white border border-navy-700 hover:border-gold px-8 py-3 tracking-wide uppercase transition-colors"
          >
            Get Notified at Launch
          </a>
        </div>
      </section>

      {/* Contact — minimal */}
      <section id="contact" className="py-24 border-t border-navy-700/30 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
            If these ideas resonate, let&apos;s talk.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            I work with executive teams navigating the shift from AI
            experimentation to organizational transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ryan.michael.kaufman@gmail.com"
              className="text-sm text-white border border-navy-700 hover:border-gold px-8 py-3 tracking-wide uppercase transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/rkaufman2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gold px-8 py-3 tracking-wide uppercase transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
