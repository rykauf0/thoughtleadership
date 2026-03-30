import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Take — Ryan Kaufman",
  description:
    "A weekly briefing on the AI developments that matter — analyzed through the lens of enterprise adoption and organizational transformation. Coming soon.",
};

export default function ThirdTakePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
          Coming Soon
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Third Take
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          A weekly briefing on the AI developments that matter — analyzed not
          for what happened, but for what it means for the organizations trying
          to make AI adoption real.
        </p>
        <p className="text-gray-500 text-base leading-relaxed mb-4">
          Beyond the news. Beyond the hot take. The organizational implications.
        </p>
        <p className="text-gray-500 text-base mb-10">
          Three stories. One synthesis. Every week.
        </p>

        <div className="p-8 border border-navy-700/30 mb-12">
          <h3 className="font-serif text-xl font-bold text-white mb-3">
            The format
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Each edition curates 3&ndash;5 of the week&apos;s most significant
            AI developments and analyzes them through the lens of enterprise
            adoption, organizational design, and trust infrastructure. Not what
            happened — what it means for someone trying to make AI work at
            scale.
          </p>
        </div>

        <a
          href="mailto:ryan.michael.kaufman@gmail.com?subject=Subscribe%20to%20Third%20Take"
          className="inline-block text-sm text-white border border-navy-700 hover:border-gold px-8 py-3 tracking-wide uppercase transition-colors"
        >
          Get Notified at Launch
        </a>
      </div>
    </div>
  );
}
