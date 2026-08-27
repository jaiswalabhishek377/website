import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "ic5DzrEttY";

export interface LeetCodeStats {
  contestRating: number;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  streak?: number;
  totalActiveDays?: number;
  submissionCalendar?: Record<string, number>;
}

export async function GET() {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          userCalendar {
            streak
            totalActiveDays
            submissionCalendar
          }
        }
        userContestRanking(username: $username) {
          rating
          globalRanking
          topPercentage
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`LeetCode API responded with ${res.status}`);
    }

    const data = await res.json();

    const submitStats =
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
    const contestRating = Math.round(
      data?.data?.userContestRanking?.rating || 1761
    );

    const userCalendar = data?.data?.matchedUser?.userCalendar || {};
    let submissionCalendar: Record<string, number> = {};
    try {
      if (userCalendar.submissionCalendar) {
        submissionCalendar = JSON.parse(userCalendar.submissionCalendar);
      }
    } catch {
      submissionCalendar = {};
    }

    const stats: LeetCodeStats = {
      contestRating,
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      streak: userCalendar.streak || 0,
      totalActiveDays: userCalendar.totalActiveDays || 0,
      submissionCalendar,
    };

    for (const stat of submitStats) {
      switch (stat.difficulty) {
        case "All":
          stats.totalSolved = stat.count;
          break;
        case "Easy":
          stats.easySolved = stat.count;
          break;
        case "Medium":
          stats.mediumSolved = stat.count;
          break;
        case "Hard":
          stats.hardSolved = stat.count;
          break;
      }
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error("LeetCode API error:", error);

    // Fallback with live known stats
    return NextResponse.json(
      {
        contestRating: 1761,
        totalSolved: 694,
        easySolved: 163,
        mediumSolved: 459,
        hardSolved: 72,
        streak: 123,
        totalActiveDays: 329,
        submissionCalendar: {},
      } as LeetCodeStats,
      { status: 200 }
    );
  }
}
