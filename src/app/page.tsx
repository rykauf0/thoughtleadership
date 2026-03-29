import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import Pillars from "@/components/Pillars";
import EssayCard from "@/components/EssayCard";
import ThirdTakeCard from "@/components/ThirdTakeCard";
import Link from "next/link";
import { getAllEssays } from "@/lib/essays";
import { getAllThirdTakes } from "@/lib/third-take";

export default function Home() {
  const essays = getAllEssays().slice(0, 3);
  const thirdTakes = getAllThirdTakes().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Metrics — with context */}
      <section className="py-20 border-t border-navy-700/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/20">
            <div className="bg-navy-950">
              <MetricCard
                value="96%"
                label="Enterprise AI Adoption"
                context="Across ~2,000 employees with 61% daily user stickiness"
              />
            </div>
            <div className="bg-navy-950">
              <MetricCard
                value="~1M"
                label="Prompts per Quarter"
                context="Sustained volume indicating real workflow integration"
              />
            </div>
            <div className="bg-navy-950">
              <MetricCard
                value="2,200+"
                label="Hackathon Participants"
                context="Single flagship event — the largest AI hackathon in the firm's history"
              />
            </div>
            <div className="bg-navy-950">
              <MetricCard
                value="550+"
                label="Solutions Generated"
                context="10%+ progressed from prototype to production"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-6">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            The hardest problem in enterprise AI isn&apos;t the technology.
            <br />
            <span className="text-gold">
              It&apos;s getting an entire organization to change how it works.
            </span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              At CPP Investments, I took a $700B+ global institutional investor
              from AI experimentation to 96% adoption across ~2,000 employees —
              not by deploying better tools, but by designing the organizational
              systems that make adoption stick: enterprise hackathons that shift
              culture, immersive sprints that build real capability, a
              cross-business council that aligns leadership, and governed
              pathways that scale what works.
            </p>
            <p>
              Every one of these capabilities was built from zero — no
              precedent, no playbook. My career through digital product
              management, data and analytics, MIT design thinking, and
              enterprise change management gave me something most AI leaders
              lack: a human-centered, systems-level understanding of what it
              takes to move an entire organization from &ldquo;we have AI
              tools&rdquo; to &ldquo;AI has changed how we work.&rdquo;
            </p>
            <p>
              I&apos;m not selling tools. I&apos;m not reciting vendor talking
              points. I&apos;ve built the organizational machinery — and I write
              about what I&apos;ve learned doing it.
            </p>
          </div>
        </div>
      </section>

      <Pillars />

      {/* Recent Essays */}
      <section className="py-24 border-t border-navy-700/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
                Essays
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Thought Leadership
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

      {/* Recent Third Takes */}
      <section className="py-24 border-t border-navy-700/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
                Weekly Briefing
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Third Take
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl">
                Beyond the news. Beyond the hot take. Weekly analysis of AI
                developments through the lens of someone who builds enterprise
                adoption for a living.
              </p>
            </div>
            <Link
              href="/third-take"
              className="text-sm text-gray-400 hover:text-gold transition-colors hidden md:block"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-navy-700/20">
            {thirdTakes.map((take) => (
              <div key={take.slug} className="bg-navy-950">
                <ThirdTakeCard
                  slug={take.slug}
                  title={take.title}
                  date={take.date}
                  summary={take.summary}
                  storyCount={take.storyCount}
                />
              </div>
            ))}
          </div>
          <Link
            href="/third-take"
            className="text-sm text-gray-400 hover:text-gold transition-colors mt-8 block md:hidden"
          >
            View all editions &rarr;
          </Link>
        </div>
      </section>

      {/* Contact / Advisory */}
      <section id="contact" className="py-24 border-t border-navy-700/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-6">
            Connect
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Let&apos;s talk about what AI adoption
            <br />
            actually looks like at scale.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            I advise executive teams on AI enablement architecture,
            organizational transformation, and the governance frameworks that
            accelerate — not constrain — adoption. If your organization is
            navigating the shift from AI experimentation to scaled adoption,
            I&apos;d welcome the conversation.
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
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
