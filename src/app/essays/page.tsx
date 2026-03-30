import { getAllEssays } from "@/lib/essays";
import EssayCard from "@/components/EssayCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essays — Ryan Kaufman",
  description:
    "Thought leadership on AI enablement, enterprise transformation, organizational design, and governance.",
};

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 pt-8">
          <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
            Essays
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Frameworks &amp; Essays
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Mental models, diagnostic frameworks, and design thinking principles
            for organizational AI transformation — written to be applied, not
            just read.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-navy-700/20">
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
      </div>
    </div>
  );
}
