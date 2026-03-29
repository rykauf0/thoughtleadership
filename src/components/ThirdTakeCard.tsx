import Link from "next/link";

interface ThirdTakeCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  storyCount: number;
}

export default function ThirdTakeCard({
  slug,
  title,
  date,
  summary,
  storyCount,
}: ThirdTakeCardProps) {
  return (
    <Link href={`/third-take/${slug}`} className="group block">
      <article className="p-8 border border-navy-700/30 hover:border-gold/30 bg-navy-900/30 hover:bg-navy-900/50 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-gold tracking-wide uppercase">
            Third Take
          </span>
          <span className="text-navy-700">|</span>
          <span className="font-mono text-xs text-gray-500">
            {storyCount} stories
          </span>
        </div>
        <time className="font-mono text-xs text-gray-600 block mb-3">
          {date}
        </time>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{summary}</p>
      </article>
    </Link>
  );
}
