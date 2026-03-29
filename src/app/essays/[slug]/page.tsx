import { getAllEssays, getEssayBySlug } from "@/lib/essays";
import MDXContent from "@/components/MDXComponents";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((essay) => ({ slug: essay.slug }));
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
    <div className="pt-24 pb-16">
      <div className="max-w-reading mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/essays"
          className="font-mono text-sm text-gray-500 hover:text-gold transition-colors mb-8 block"
        >
          &larr; Back to Essays
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-gold tracking-wide uppercase">
              {essay.category}
            </span>
            <span className="text-navy-700">|</span>
            <span className="font-mono text-xs text-gray-500">
              {essay.readTime}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {essay.title}
          </h1>
          <time className="font-mono text-sm text-gray-500">{essay.date}</time>
        </header>

        <article>
          <MDXContent source={essay.content} />
        </article>

        <footer className="mt-16 pt-8 border-t border-navy-700/30">
          <Link
            href="/essays"
            className="font-mono text-sm text-gray-500 hover:text-gold transition-colors"
          >
            &larr; Back to Essays
          </Link>
        </footer>
      </div>
    </div>
  );
}
