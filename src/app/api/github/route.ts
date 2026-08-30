import { NextResponse } from "next/server";

const GITHUB_USERNAME = "jaiswalabhishek377";

// Cache for 1 hour (standard rate-limit safe)
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-website",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const data = await res.json();

    // Fetch starred repos count (stars received) by summing stargazers_count
    let totalStars = 0;
    try {
      const reposRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=stargazers_count`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "portfolio-website",
          },
          next: { revalidate: 3600 },
        }
      );
      if (reposRes.ok) {
        const repos = await reposRes.json();
        totalStars = repos.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + repo.stargazers_count,
          0
        );
      }
    } catch {
      // Fallback: stars will be 0
    }

    return NextResponse.json({
      repos: data.public_repos,
      stars: totalStars,
      followers: data.followers,
      following: data.following,
      name: data.name || GITHUB_USERNAME,
      bio: data.bio || "",
      avatarUrl: data.avatar_url,
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      {
        repos: 0,
        stars: 0,
        followers: 0,
        following: 0,
        name: "Abhishek Jaiswal",
        bio: "",
        avatarUrl: `https://avatars.githubusercontent.com/${GITHUB_USERNAME}`,
      },
      { status: 500 }
    );
  }
}
