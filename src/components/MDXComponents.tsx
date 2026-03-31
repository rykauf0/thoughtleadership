import { MDXRemote } from "next-mdx-remote/rsc";
import {
  JudgmentPipeline,
  MeasurementLayers,
  CopilotComparison,
  RatchetCycle,
  GovernanceGap,
  ComplexityComparison,
  AnxietyBalance,
} from "./Diagrams";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-14 mb-5 leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-700 leading-[1.8] mb-6 text-[17px]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent hover:text-accent-dark underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-[3px] border-slate-900 pl-6 my-10" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="text-slate-700 mb-6 pl-6 space-y-2 text-[17px] list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="text-slate-700 mb-6 pl-6 space-y-2 text-[17px] list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-700 leading-[1.8]" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-slate-900 font-semibold" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-slate-600" {...props} />
  ),
  hr: () => <hr className="border-slate-200 my-14" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b-2 border-slate-200" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left py-3 pr-4 font-semibold text-slate-900" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-3 pr-4 text-slate-600 border-b border-slate-100" {...props} />
  ),
  JudgmentPipeline,
  MeasurementLayers,
  CopilotComparison,
  RatchetCycle,
  GovernanceGap,
  ComplexityComparison,
  AnxietyBalance,
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
