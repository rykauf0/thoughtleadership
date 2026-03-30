import { getAllEssays, getEssayBySlug } from "@/lib/essays";
import MDXContent from "@/components/MDXComponents";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const essay = getEssayBySlug(params.slug);
  if (!essay) return {};
  return {
    title: `${essay.title} — Ryan Kaufman`,
    description: essay.summary,
  };
}

export default function EssayPage({ params }: Props) {
  const essay = getEssayBySlug(params.slug);
  if (!essay) notFound();

  return (
    <div className="pt-12 pb-20">
      <div className="max-w-reading mx-auto px-6 pt-8">
        <Link
          href="/essays"
          className="text-sm text-slate-400 hover:text-slate-900 transition-colors mb-10 block"
        >
          &larr; Essays
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">
              {essay.category}
            </span>
            <span className="text-slate-300">&middot;</span>
            <span className="text-xs text-slate-400">{essay.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-[2.75rem] md:leading-[1.15] font-bold text-slate-900 mb-4">
            {essay.title}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-4">
            {essay.summary}
          </p>
          <time className="text-xs text-slate-400">{essay.date}</time>
        </header>

        <article>
          <MDXContent source={essay.content} />
        </article>

        <footer className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/essays"
            className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
          >
            &larr; Back to Essays
          </Link>
        </footer>
      </div>
    </div>
  );
}
