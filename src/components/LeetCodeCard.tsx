"use client";

import { useEffect, useState } from "react";
import leetcodeSnapshot from "@/lib/leetcodeSnapshot.json";

interface LeetCodeStats {
  contestRating?: number;
  totalSolved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  totalSubmissions?: number;
  streak?: number;
  totalActiveDays?: number;
  submissionCalendar?: Record<string, number>;
}

// Exact colors sampled directly from user's LeetCode heatmap screenshot
const LC_COLORS = [
  "#282828", // Level 0: Inactive / 0 submissions
  "#016620", // Level 1: 1-3 submissions (dark forest green)
  "#109932", // Level 2: 4-7 submissions (medium green)
  "#28C244", // Level 3: 8-11 submissions (bright green)
  "#7FE18B", // Level 4: 12+ submissions (exact lightest mint/pastel green)
];

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CELL_SIZE = 10;
const CELL_GAP = 2.5;
const STEP = CELL_SIZE + CELL_GAP;
const MONTH_GAP = 10;
const SVG_HEIGHT = 7 * STEP + 20;

// Pure deterministic helper function to build month-grouped heatmap from last September to current date
function generateCalendar(
  submissionCalendar?: Record<string, number>,
  fallbackTotal = 2494
) {
  const dateCountMap: Record<string, number> = {};
  let totalCount = 0;

  if (submissionCalendar) {
    for (const [ts, count] of Object.entries(submissionCalendar)) {
      const d = new Date(Number(ts) * 1000);
      const year = d.getUTCFullYear();
      const month = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      const key = `${year}-${month}-${day}`;
      dateCountMap[key] = (dateCountMap[key] || 0) + count;
      totalCount += count;
    }
  }

  if (totalCount === 0) {
    totalCount = fallbackTotal;
  }

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed

  // Permanently start from September 2025 (month index 8)
  const startYear = 2025;
  const startMonth = 8; // September

  const totalMonths =
    (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;

  const monthsList: Array<{
    year: number;
    month: number;
    label: string;
    weeks: Array<
      Array<{
        key: string;
        count: number;
        level: number;
        isFuture: boolean;
      } | null>
    >;
    width: number;
    xOffset: number;
  }> = [];

  let currentX = 0;

  // Iterate from September of previous year through current month
  for (let i = 0; i < totalMonths; i++) {
    const d = new Date(startYear, startMonth + i, 1);
    const year = d.getFullYear();
    const month = d.getMonth();
    const monthName = MONTH_NAMES[month];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: Array<
      Array<{
        key: string;
        count: number;
        level: number;
        isFuture: boolean;
      } | null>
    > = [];
    let currentWeek: Array<{
      key: string;
      count: number;
      level: number;
      isFuture: boolean;
    } | null> = [];

    // First day of week (0=Sun to 6=Sat)
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    for (let pad = 0; pad < firstDayOfWeek; pad++) {
      currentWeek.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const count = dateCountMap[key] || 0;

      // Color mapping: 12+ submissions = #7FE18B (lightest mint green)
      let level = 0;
      if (count === 0) level = 0;
      else if (count <= 3) level = 1;
      else if (count <= 7) level = 2;
      else if (count <= 11) level = 3;
      else level = 4;

      const dayObj = new Date(year, month, day);
      const isFuture = dayObj > today;

      currentWeek.push({
        key,
        count,
        level,
        isFuture,
      });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }

    const mWidth = weeks.length * (CELL_SIZE + CELL_GAP) - CELL_GAP;

    monthsList.push({
      year,
      month,
      label: monthName,
      weeks,
      width: mWidth,
      xOffset: currentX,
    });

    currentX += mWidth + MONTH_GAP;
  }

  return {
    months: monthsList,
    totalSubmissions: totalCount,
    totalSvgWidth: Math.max(currentX, 700),
  };
}

export default function LeetCodeCard() {
  const [stats, setStats] = useState<LeetCodeStats>({
    contestRating: 1761,
    totalSolved: 698,
    easySolved: 163,
    mediumSolved: 459,
    hardSolved: 76,
    streak: 123,
    totalActiveDays: 335,
    submissionCalendar: leetcodeSnapshot as Record<string, number>,
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode");
        if (!res.ok) {
          throw new Error(`Failed to fetch LeetCode stats: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setStats(data);
        }
      } catch (err) {
        console.error("LeetCode stats fetch error:", err);
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

  const username = "ic5DzrEttY";
  const profileUrl = `https://leetcode.com/u/${username}/`;

  const { months, totalSubmissions, totalSvgWidth } = generateCalendar(
    stats?.submissionCalendar,
    stats?.totalSubmissions || 2494
  );

  const statItems = [
    {
      label: "Contest rating",
      value: stats?.contestRating
        ? Math.round(stats.contestRating).toString()
        : "1761",
    },
    {
      label: "Total",
      value: stats?.totalSolved ? stats.totalSolved.toString() : "694",
    },
    {
      label: "Medium",
      value: stats?.mediumSolved ? stats.mediumSolved.toString() : "459",
    },
    {
      label: "Hard",
      value: stats?.hardSolved ? stats.hardSolved.toString() : "72",
    },
  ];

  return (
    <section className="section-wrap !pt-0">
      <div className="mx-auto max-w-3xl">
        <div className="interactive-card p-5">
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div>
              <span className="text-sm font-medium text-text block">LeetCode</span>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent link-hover font-mono block mt-0.5"
              >
                @{username}
              </a>
            </div>
            <a
              href={profileUrl}
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
                    <div className="h-6 w-16 bg-border/80 rounded animate-pulse mx-auto mb-1.5" />
                    <div className="h-3.5 w-20 bg-border/50 rounded animate-pulse mx-auto mt-0.5" />
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

          {/* Exact LeetCode Activity Heatmap Block */}
          <div className="rounded-lg border border-border bg-[#181818] p-4">
            {/* Header: Submissions Count */}
            <div className="mb-3 px-0.5">
              <span className="font-mono text-text text-sm font-medium">
                {totalSubmissions.toLocaleString()} submissions in the past year
              </span>
            </div>

            <div className="overflow-x-auto pb-1">
              <svg
                width={totalSvgWidth}
                height={SVG_HEIGHT}
                className="select-none block mx-auto"
              >
                {months.map((m, mIdx) => (
                  <g key={mIdx} transform={`translate(${m.xOffset}, 0)`}>
                    {/* Week columns inside this month */}
                    {m.weeks.map((week, wIdx) => (
                      <g key={wIdx} transform={`translate(${wIdx * STEP}, 0)`}>
                        {week.map((day, dIdx) => {
                          if (!day) return null;
                          const fill = day.isFuture
                            ? "transparent"
                            : LC_COLORS[day.level];

                          return (
                            <rect
                              key={day.key}
                              x={0}
                              y={dIdx * STEP}
                              width={CELL_SIZE}
                              height={CELL_SIZE}
                              rx={2.5}
                              ry={2.5}
                              fill={fill}
                              className="transition-colors duration-150"
                            />
                          );
                        })}
                      </g>
                    ))}

                    {/* Month label centered beneath month's block */}
                    <text
                      x={m.width / 2}
                      y={7 * STEP + 14}
                      textAnchor="middle"
                      fill="#8b8ba0"
                      fontSize={10}
                      fontFamily="system-ui, sans-serif"
                    >
                      {m.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Heatmap Legend */}
            <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-text-muted font-mono">
              <span>Less</span>
              {LC_COLORS.map((color, i) => (
                <span
                  key={i}
                  className="inline-block w-2.5 h-2.5 rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
