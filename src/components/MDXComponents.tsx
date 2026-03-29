import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mt-12 mb-4 leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mt-10 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-300 leading-relaxed mb-6 text-lg" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-gold pl-6 my-8 italic text-gray-400" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="text-gray-300 mb-6 pl-6 space-y-2 text-lg list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="text-gray-300 mb-6 pl-6 space-y-2 text-lg list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-300" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  hr: () => <hr className="border-navy-700 my-12" />,
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-custom">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
