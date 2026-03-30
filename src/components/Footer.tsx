import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ryan Kaufman
          </p>
          <div className="flex gap-6">
            <Link href="/essays" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Essays
            </Link>
            <Link href="/third-take" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Third Take
            </Link>
            <a
              href="https://www.linkedin.com/in/rkaufman2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
