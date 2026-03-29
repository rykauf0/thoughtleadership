import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-serif text-lg text-white">Ryan Kaufman</p>
            <p className="text-sm text-gray-500 mt-1">
              AI Enablement Architect
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/essays"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Essays
            </Link>
            <Link
              href="/third-take"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Third Take
            </Link>
            <a
              href="https://www.linkedin.com/in/rkaufman2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy-700/30">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ryan Kaufman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
