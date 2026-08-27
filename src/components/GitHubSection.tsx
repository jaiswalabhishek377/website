"use client";

import { useEffect, useState } from "react";
import { ossContributions } from "@/lib/data";

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatarUrl: string;
}

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedOrg, setExpandedOrg] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) {
          throw new Error(`Failed to fetch GitHub stats: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setStats(data);
        }
      } catch (err) {
        console.error("GitHub stats fetch error:", err);
        if (isMounted) {
          setStats({
            repos: 24,
            stars: 12,
            followers: 18,
            following: 22,
            name: "Abhishek Jaiswal",
            bio: "Full Stack & AI Engineer",
            avatarUrl: "/avatar.png",
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleOrg = (orgName: string) => {
    setExpandedOrg((prev) => (prev === orgName ? null : orgName));
  };

  const statItems = [
    { label: "Repos", value: stats?.repos ?? 0 },
    { label: "Stars", value: stats?.stars ?? 0 },
    { label: "Followers", value: stats?.followers ?? 0 },
    { label: "Following", value: stats?.following ?? 0 },
  ];

  return (
    <section id="github" className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-8">
          <span className="section-label">{"// GITHUB"}</span>
          <h2 className="section-title mt-1">GitHub</h2>
          <p className="section-subtitle mt-1">Contributions and activity</p>
        </div>

        {/* Glass Card */}
        <div className="glass-card p-5 sm:p-6 mb-8">
          {/* Profile row with sharp Goku Avatar */}
          <div className="flex items-center justify-between border-b border-border pb-5 mb-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full avatar-glow border border-border overflow-hidden bg-surface flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/goku.jpg"
                  alt={stats?.name || "Abhishek Jaiswal"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-text text-base leading-tight">
                  {stats?.name || "Abhishek Jaiswal"}
                </h3>
                <a
                  href="https://github.com/jaiswalabhishek377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent link-hover font-mono mt-0.5 inline-block"
                >
                  @jaiswalabhishek377
                </a>
              </div>
            </div>
            <a
              href="https://github.com/jaiswalabhishek377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent link-hover flex items-center gap-1"
            >
              Profile →
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
            {loading
              ? Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="stat-card rounded-lg border border-border bg-surface px-3 py-3 text-center"
                  >
                    <div className="h-6 w-12 bg-border/80 rounded animate-pulse mx-auto mb-1.5" />
                    <div className="h-3.5 w-16 bg-border/50 rounded animate-pulse mx-auto mt-0.5" />
                  </div>
                ))
              : statItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="stat-card rounded-lg border border-border bg-surface px-3 py-3 text-center"
                  >
                    <div className="text-xl font-medium text-text">
                      {item.value}
                    </div>
                    <div className="mt-0.5 text-xs text-text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
          </div>

          {/* GitHub contribution heatmap in Green */}
          <div className="overflow-x-auto rounded-lg border border-border bg-black/40 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/39d353/jaiswalabhishek377"
              alt="GitHub Contributions for jaiswalabhishek377"
              loading="lazy"
              className="w-full min-w-[640px] select-none block"
            />
          </div>
        </div>

        {/* Open Source Contributions */}
        <div>
          <h3 className="text-base font-semibold text-text mb-4">
            Open source contributions
          </h3>
          <div className="space-y-3">
            {ossContributions.map((org) => {
              const isExpanded = expandedOrg === org.org;
              return (
                <div
                  key={org.org}
                  className="glass-card overflow-hidden border border-border"
                >
                  <div className="org-row w-full flex items-center justify-between p-4 cursor-pointer hover:bg-surface/50 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleOrg(org.org)}
                      className="flex items-center gap-3 flex-1 text-left"
                    >
                      <div className="relative w-8 h-8 rounded-md overflow-hidden border border-border bg-surface shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={org.logo || "/nao.png"}
                          alt={org.org}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-text text-sm">
                          {org.org}
                        </span>
                      </div>
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-muted">
                        {org.count}{" "}
                        {org.count === 1 ? "contribution" : "contributions"}
                      </span>

                      {org.orgUrl && (
                        <a
                          href={org.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:underline link-hover font-mono"
                          onClick={(e) => e.stopPropagation()}
                        >
                          repo ↗
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleOrg(org.org)}
                        className="text-text-muted hover:text-text p-1"
                        aria-label="Toggle details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 text-text-muted transition-transform duration-200 shrink-0 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 space-y-4 border-t border-border/50 bg-black/25">
                      {org.prs.map((pr, prIdx) => (
                        <a
                          key={prIdx}
                          href={pr.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <div className="flex items-center gap-2 text-xs mb-1.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8957e5]/20 text-[#a371f7] border border-[#8957e5]/40 shrink-0">
                              <svg
                                className="w-3 h-3 fill-current"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                              </svg>
                              {pr.status}
                            </span>
                            <span className="text-text-muted font-normal text-xs">
                              {pr.date}
                            </span>
                          </div>
                          <p className="text-sm text-text-muted group-hover:text-text transition-colors pl-0.5 leading-relaxed">
                            {pr.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
