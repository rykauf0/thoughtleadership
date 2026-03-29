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

      {/* Metrics */}
      <section className="py-20 border-t border-navy-700/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/20">
            <div className="bg-navy-950">
              <MetricCard value="96%" label="Enterprise AI Adoption" />
            </div>
            <div className="bg-navy-950">
              <MetricCard value="~1M" label="Prompts per Quarter" />
            </div>
            <div className="bg-navy-950">
              <MetricCard value="2,200+" label="Hackathon Participants" />
            </div>
            <div className="bg-navy-950">
              <MetricCard value="550+" label="Solutions Generated" />
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
              At CPP Investments — one of the world&apos;s largest institutional
              investors managing over $700 billion — I designed and now lead a
              multipronged AI enablement model that has achieved what most
              enterprises still consider aspirational: 96% adoption across
              approximately 2,000 employees, with usage patterns shifting
              measurably toward daily and power-level engagement.
            </p>
            <p>
              Every major capability I&apos;ve built — from enterprise hackathons
              and immersive sprint programs to an executive coaching function and
              cross-business governance council — was created from zero, without
              precedent or playbook. My path through digital product management,
              data and analytics, design thinking, and organizational change gave
              me something most AI leaders lack: a human-centered, systems-level
              understanding of what it actually takes to move an entire
              organization from experimentation to scaled, governed adoption.
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
                A weekly briefing on the developments that matter in AI —
                curated and analyzed through the lens of enterprise adoption and
                organizational impact.
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
    </>
  );
}
