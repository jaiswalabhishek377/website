'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function HeroBanner() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="pb-12 sm:pb-16">
      {/* Banner Container */}
      <div className="mx-auto mb-8 max-w-4xl px-4 pt-20 animate-fade-up">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition:
              tilt.x === 0 && tilt.y === 0
                ? 'transform 0.5s ease-out'
                : 'transform 0.1s ease-out',
          }}
          className="banner-frame relative w-full h-56 sm:h-72 md:h-80 lg:h-[340px] overflow-hidden rounded-xl border border-border shadow-2xl"
        >
          {/* Subtle Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="banner-glow absolute inset-0 z-10" aria-hidden="true" />
          <div className="banner-scan absolute inset-0 z-10" aria-hidden="true" />

          {/* Banner Graphic Typography (Site A inspired quote) */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 z-20 select-none pointer-events-none max-w-xs sm:max-w-md">
            <p className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-[0.25em] uppercase font-semibold mb-1.5 opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {"// ULTRA INSTINCT"}
            </p>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Pushing past the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                limits.
              </span>
            </h2>
          </div>

          {/* Banner Image */}
          <Image
            src="/banner.png"
            alt="Ultra Instinct Banner"
            fill
            priority={true}
            className="w-full h-full object-cover object-[right_25%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 1200px"
          />

          {/* Profile Info Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-bg via-bg/85 to-transparent flex items-center gap-3 sm:gap-3.5 z-30">
            {/* Small Goku Avatar next to Full Stack & AI Engineer */}
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-border/80 avatar-glow overflow-hidden flex-shrink-0 bg-surface shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/goku.jpg"
                alt="Goku Ultra Instinct Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-medium text-text text-sm sm:text-base leading-tight">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-text-muted mt-0.5 font-normal">
                {siteConfig.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Below Banner */}
      <div className="mx-auto w-full max-w-3xl px-6">
        {/* Bio Paragraph */}
        <p className="animate-fade-up-d3 text-text-muted text-base leading-relaxed mb-6">
          {siteConfig.bio}
        </p>

        {/* CTA Buttons Row */}
        <div className="animate-fade-up-d4 flex flex-wrap items-center gap-3">
          <Link href="#projects" className="btn-primary">
            View projects
          </Link>
          <a
            href={`https://github.com/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
          <a
            href={`https://leetcode.com/u/${siteConfig.leetcode}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}
