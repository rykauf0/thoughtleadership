import Link from "next/link";

interface EssayCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
}

export default function EssayCard({
  slug,
  title,
  summary,
  date,
  readTime,
  category,
}: EssayCardProps) {
  return (
    <Link href={`/essays/${slug}`} className="group block">
      <article className="p-8 border border-navy-700/30 hover:border-navy-700/60 bg-navy-900/30 hover:bg-navy-900/50 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-gold tracking-wide uppercase">
            {category}
          </span>
          <span className="text-navy-700">|</span>
          <span className="font-mono text-xs text-gray-500">{readTime}</span>
        </div>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4">{summary}</p>
        <time className="font-mono text-xs text-gray-600">{date}</time>
      </article>
    </Link>
  );
}
