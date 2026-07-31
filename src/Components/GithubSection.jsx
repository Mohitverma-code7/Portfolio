import { motion } from "framer-motion";
import { Github, Star, GitFork, GitCommit, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import useGithubData from "../hooks/useGithubData";

// Static fallback data in case API is rate-limited or offline
const fallbackRepos = [
  {
    name: "Portl",
    description: "Cross-platform portfolio builder with React Native & Firebase.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 48,
    forks: 12,
    url: "https://github.com/Mohitverma-code7/Portl",
  },
  {
    name: "Weather-Dashboard",
    description: "Real-time weather app with interactive maps & 7-day forecasts.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 32,
    forks: 8,
    url: "https://github.com/Mohitverma-code7/Weather-Dashboard",
  },
  {
    name: "AI-Chatbot",
    description: "GPT-powered chatbot with custom knowledge base integration.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 26,
    forks: 5,
    url: "https://github.com/Mohitverma-code7/AI-Chatbot",
  },
  {
    name: "Notify-App",
    description: "Smart notification management app for iOS with React Native.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 18,
    forks: 4,
    url: "https://github.com/Mohitverma-code7/Notify-App",
  },
];

const fallbackCommits = [
  { repo: "Portl", message: "feat: Add real-time sync with Firebase", time: "2 days ago" },
  { repo: "AI-Chatbot", message: "fix: Handle streaming responses edge case", time: "3 days ago" },
  {
    repo: "Portfolio",
    message: "style: Redesign hero section with new typography",
    time: "1 week ago",
  },
];

// Skeleton shimmer component
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse rounded-lg bg-white/[0.03] ${className}`} />
);

const GithubSection = () => {
  const {
    profile,
    pinnedRepos: liveRepos,
    recentCommits: liveCommits,
    loading,
    error,
    contributionGraphUrl,
  } = useGithubData();

  // Use live data or fallback
  const repos = liveRepos.length > 0 ? liveRepos : fallbackRepos;
  const commits = liveCommits.length > 0 ? liveCommits : fallbackCommits;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Open Source</span>
          <h2 className="section-heading">
            GITHUB
            <br />
            ACTIVITY
          </h2>
        </motion.div>

        {/* Rate limit / error banner */}
        {error && error === "rate_limited" && (
          <motion.div
            className="mb-8 flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AlertCircle size={16} />
            GitHub API rate limit reached. Showing cached data. Live data will return in ~1 hour.
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT - Pinned Repos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                Pinned Repositories
              </h3>
              {loading && <Loader2 size={14} className="animate-spin text-[#4F8CFF]" />}
            </div>

            <div className="space-y-4">
              {loading && repos.length === 0
                ? // Loading skeletons
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="glass-card p-5 lg:p-6">
                      <Skeleton className="h-5 w-32 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <div className="flex gap-4">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-12" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                  ))
                : repos.map((repo, i) => (
                    <motion.a
                      key={repo.name}
                      href={repo.url || `https://github.com/Mohitverma-code7/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-card p-5 lg:p-6 group hover:border-[#4F8CFF]/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Github size={16} className="text-[#9B9B9B]" />
                          <h4 className="font-semibold text-[#F5F5F5] group-hover:text-[#4F8CFF] transition-colors">
                            {repo.name}
                          </h4>
                        </div>
                        <ExternalLink
                          size={14}
                          className="text-[#9B9B9B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                      </div>
                      <p className="text-sm text-[#9B9B9B] mb-4 line-clamp-2">
                        {repo.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#9B9B9B]">
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: repo.languageColor }}
                          />
                          {repo.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {repo.forks}
                        </span>
                      </div>
                    </motion.a>
                  ))}
            </div>
          </motion.div>

          {/* RIGHT - Recent Commits & Graph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8CFF] mb-6">
              Latest Commits
            </h3>
            <div className="glass-card p-5 lg:p-6 mb-6">
              <div className="space-y-4">
                {loading && commits.length === 0
                  ? Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 pb-4 border-b border-white/[0.03] last:border-0 last:pb-0"
                      >
                        <Skeleton className="w-7 h-7 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-3/4 mb-2" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    ))
                  : commits.map((commit, i) => (
                      <a
                        key={i}
                        href={commit.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 pb-4 border-b border-white/[0.03] last:border-0 last:pb-0 group hover:opacity-80 transition-opacity"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#4F8CFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <GitCommit size={14} className="text-[#4F8CFF]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-[#F5F5F5] truncate">{commit.message}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-[#4F8CFF]">{commit.repo}</span>
                            <span className="text-[10px] text-[#9B9B9B]">{commit.time}</span>
                          </div>
                        </div>
                      </a>
                    ))}
              </div>
            </div>

            {/* Live Contribution Graph */}
            <div className="glass-card p-5 lg:p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#9B9B9B]">
                  Contribution Graph
                </span>
                <span className="text-xs text-[#4F8CFF]">
                  {profile ? (
                    <a
                      href={`https://github.com/${profile.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @{profile.login}
                    </a>
                  ) : (
                    "@Mohitverma-code7"
                  )}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0d1117]">
                <img
                  src={contributionGraphUrl}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-24">
        <div className="h-px bg-white/[0.04]" />
      </div>
    </section>
  );
};

export default GithubSection;