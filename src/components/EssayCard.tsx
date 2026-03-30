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
    <Link href={`/essays/${slug}`} className="group block py-8 first:pt-0 last:pb-0">
      <article>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {category}
          </span>
          <span className="text-slate-300">&middot;</span>
          <span className="text-xs text-slate-400">{readTime}</span>
        </div>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 group-hover:text-accent transition-colors mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-3 text-[15px]">{summary}</p>
        <time className="text-xs text-slate-400">{date}</time>
      </article>
    </Link>
  );
}
