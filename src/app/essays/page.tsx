import { getAllEssays } from "@/lib/essays";
import EssayCard from "@/components/EssayCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essays — Ryan Kaufman",
  description:
    "Frameworks and mental models for organizational AI transformation — grounded in design thinking, systems theory, and the human factors that determine whether change sticks.",
};

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="pt-12 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-14 pt-8">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-3">
            Essays
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Frameworks &amp; Essays
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            On leverage, mental models, trust architectures, and the human
            factors that determine whether AI transformation produces real
            change or just compliance theater.
          </p>
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
      </div>
    </div>
  );
}
