import { getAllThirdTakes, getThirdTakeBySlug } from "@/lib/third-take";
import MDXContent from "@/components/MDXComponents";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const takes = getAllThirdTakes();
  return takes.map((take) => ({ slug: take.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const take = getThirdTakeBySlug(params.slug);
  if (!take) return {};
  return {
    title: `${take.title} — Third Take — Ryan Kaufman`,
    description: take.summary,
  };
}

export default function ThirdTakePage({ params }: Props) {
  const take = getThirdTakeBySlug(params.slug);
  if (!take) notFound();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-reading mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/third-take"
          className="font-mono text-sm text-gray-500 hover:text-gold transition-colors mb-8 block"
        >
          &larr; Back to Third Take
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-gold tracking-wide uppercase">
              Third Take
            </span>
            <span className="text-navy-700">|</span>
            <span className="font-mono text-xs text-gray-500">
              {take.storyCount} stories
            </span>
          </div>
          <time className="font-mono text-sm text-gray-500 block mb-4">
            {take.date}
          </time>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {take.title}
          </h1>
        </header>

        <article>
          <MDXContent source={take.content} />
        </article>

        <footer className="mt-16 pt-8 border-t border-navy-700/30">
          <Link
            href="/third-take"
            className="font-mono text-sm text-gray-500 hover:text-gold transition-colors"
          >
            &larr; Back to Third Take
          </Link>
        </footer>
      </div>
    </div>
  );
}
