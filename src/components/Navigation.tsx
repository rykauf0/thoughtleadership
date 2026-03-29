"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl text-white hover:text-gold transition-colors"
          >
            Ryan Kaufman
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="/essays"
              className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              Essays
            </Link>
            <Link
              href="/third-take"
              className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              Third Take
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-navy-700/50 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
              >
                About
              </Link>
              <Link
                href="/essays"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
              >
                Essays
              </Link>
              <Link
                href="/third-take"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
              >
                Third Take
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
