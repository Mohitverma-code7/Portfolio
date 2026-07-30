import { useState, useEffect } from "react";

const GITHUB_USERNAME = "Mohitverma-code7";
const GITHUB_API = "https://api.github.com";

/**
 * Fetches live GitHub data for the configured user.
 * Returns user profile, top repos, and recent activity.
 * Falls back gracefully if rate-limited or offline.
 */
export default function useGithubData() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      setLoading(true);
      setError(null);

      try {
        const [profileRes, reposRes, eventsRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`),
          fetch(
            `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6&type=owner`
          ),
          fetch(
            `${GITHUB_API}/users/${GITHUB_USERNAME}/events/public?per_page=10`
          ),
        ]);

        // Handle rate limiting gracefully
        if (profileRes.status === 403 || reposRes.status === 403) {
          throw new Error("rate_limited");
        }

        if (!cancelled) {
          const profileData = profileRes.ok ? await profileRes.json() : null;
          const reposData = reposRes.ok ? await reposRes.json() : [];
          const eventsData = eventsRes.ok ? await eventsRes.json() : [];

          setProfile(profileData);
          setRepos(reposData);
          setEvents(eventsData);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message === "rate_limited" ? "rate_limited" : "fetch_failed");
          setLoading(false);
        }
      }
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, []);

  /**
   * Extracts recent commit-like events (PushEvent, CreateEvent).
   * Returns simplified objects for display.
   */
  const recentCommits = events
    .filter((e) => e.type === "PushEvent" || e.type === "CreateEvent")
    .slice(0, 5)
    .map((e) => {
      const repoName = e.repo?.name?.split("/")[1] || "unknown";
      const commits = e.payload?.commits || [];
      const message = commits[0]?.message || (e.type === "CreateEvent" ? `Created ${e.payload?.ref_type}: ${e.payload?.ref}` : "New push");
      return {
        repo: repoName,
        message: message.length > 60 ? message.slice(0, 57) + "..." : message,
        time: formatTimeAgo(new Date(e.created_at)),
        url: `https://github.com/${e.repo?.name}`,
      };
    });

  /**
   * Formats top repos for display, sorted by stars descending.
   */
  const pinnedRepos = repos
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4)
    .map((r) => ({
      name: r.name,
      description: r.description || "No description provided.",
      language: r.language || "Unknown",
      languageColor: getLanguageColor(r.language),
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url,
    }));

  return {
    profile,
    pinnedRepos,
    recentCommits,
    loading,
    error,
    totalRepos: profile?.public_repos || 0,
    totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    totalForks: repos.reduce((sum, r) => sum + r.forks_count, 0),
    contributionGraphUrl: `https://ghchart.rshah.org/4F8CFF/${GITHUB_USERNAME}`,
  };
}

// ---- Helpers ----

function formatTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

function getLanguageColor(lang) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    "C++": "#f34b7d",
    C: "#555555",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    "Jupyter Notebook": "#DA5B0B",
    Vue: "#41b883",
    PHP: "#4F5D95",
    Dockerfile: "#384d54",
  };
  return colors[lang] || "#8b8b8b";
}