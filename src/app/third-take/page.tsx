import { getAllThirdTakes } from "@/lib/third-take";
import ThirdTakeCard from "@/components/ThirdTakeCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Take — Ryan Kaufman",
  description:
    "A weekly briefing on the developments that matter in AI — curated and analyzed through the lens of enterprise adoption and organizational impact.",
};

export default function ThirdTakePage() {
  const takes = getAllThirdTakes();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 pt-8">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
            Weekly Briefing
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Third Take
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond the news. Beyond the hot take. The organizational
            implications of the week&apos;s most important AI developments —
            analyzed through the lens of someone who builds enterprise adoption
            for a living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-navy-700/20">
          {takes.map((take) => (
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
      </div>
    </div>
  );
}
