'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md border-b border-border bg-bg/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        {/* Left: Brand link */}
        <Link
          href="#hero"
          className="text-sm font-medium text-text transition-colors hover:text-accent"
        >
          Abhishek
        </Link>

        {/* Right: Desktop nav links */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile: Hamburger menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden flex items-center justify-center p-1.5 text-text-muted hover:text-text focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-bg/95 backdrop-blur-md px-6 py-4 animate-fade-up">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link text-sm py-1"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link text-sm py-1"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
