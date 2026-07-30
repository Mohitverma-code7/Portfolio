// Static blog post data — used as fallback when Hashnode API is unavailable

const blogPosts = [
  {
    id: "1",
    slug: "inside-git-how-it-works-and-the-role-of-the-git-folder",
    title: "Inside Git: How It Works and the Role of the .git Folder",
    excerpt: "A deep dive into Git internals and how the .git folder manages version control behind the scenes.",
    url: "https://mohitcodes-write.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    tags: ["Git", "Version Control", "Branches", "Collaboration"],
    content: "<h2>The Heart of Git</h2><p>A deep dive into Git internals. The <code>.git</code> folder is the heart of Git version control, silently managing every commit, branch, and merge behind the scenes. Understanding how it works gives you superpowers as a developer.</p><h2>What's Inside .git?</h2><p>When you run <code>git init</code>, Git creates a hidden <code>.git</code> directory that contains everything Git needs to track your project's history. This includes:</p><ul><li><strong>objects/</strong> — All your commits, files, and tags stored as binary blobs</li><li><strong>refs/</strong> — Pointers to commits (branches and tags)</li><li><strong>HEAD</strong> — Points to the current branch</li><li><strong>config</strong> — Repository-specific configuration</li><li><strong>hooks/</strong> — Scripts that run on specific Git events</li></ul><h2>How Commits Work</h2><p>Every commit is a snapshot of your entire project. Git doesn't store diffs — it stores complete file contents, compressed and referenced by SHA-1 hashes. This makes operations like switching branches incredibly fast.</p>",
  },
  {
    id: "2",
    slug: "git-for-beginners-basics-and-essential-commands",
    title: "Git for Beginners: Basics and Essential Commands Explained",
    excerpt: "A beginner-friendly guide to Git commands like add, commit, push, and pull.",
    url: "https://mohitcodes-write.hashnode.dev/git-for-beginners-basics-and-essential-commands",
    date: "Feb 2026",
    readTime: "8 min read",
    tags: ["Git", "Commands", "Commit", "Push"],
    content: "<h2>Getting Started with Git</h2><p>A beginner-friendly guide covering all the essential Git commands you need to start using version control effectively.</p><h2>Essential Commands</h2><ul><li><strong>git init</strong> — Initialize a new repository</li><li><strong>git add</strong> — Stage changes for commit</li><li><strong>git commit</strong> — Save staged changes with a message</li><li><strong>git push</strong> — Upload local commits to remote</li><li><strong>git pull</strong> — Download and merge remote changes</li><li><strong>git branch</strong> — Create and manage branches</li><li><strong>git merge</strong> — Combine branches together</li></ul><p>Master these commands and you'll be comfortable with 90% of day-to-day Git workflows.</p>",
  },
  {
    id: "3",
    slug: "why-version-control-exists-the-pendrive-problem",
    title: "The Pendrive Problem: Why Version Control Exists",
    excerpt: "Learn why version control is crucial to avoid chaos when sharing code manually with pendrives.",
    url: "https://mohitcodes-write.hashnode.dev/why-version-control-exists-the-pendrive-problem",
    date: "Feb 2026",
    readTime: "7 min read",
    tags: ["GitHub", "Collaboration", "VC"],
    content: "<h2>Before Git Existed</h2><p>Before Git, developers shared code using pendrives and email attachments. Teams would pass around USB drives with folders named <code>project_v1</code>, <code>project_v2_final</code>, <code>project_v2_final_REAL</code>.</p><h2>The Chaos</h2><p>This approach led to countless problems: overwritten files, lost changes, no way to track who changed what, and the infamous 'it works on my machine' syndrome. Merging changes from multiple team members was a nightmare.</p><h2>The Solution</h2><p>Version control systems like Git solved all of this. They track every change, allow parallel work through branches, provide complete history, and make collaboration seamless — all without a single pendrive.</p>",
  },
  {
    id: "4",
    slug: "how-dns-resolution-works",
    title: "How DNS Resolution Works",
    excerpt: "Understand how DNS resolution works behind the scenes and how browsers connect domain names to servers across the internet.",
    url: "https://mohitcodes-dns.hashnode.dev/how-dns-resolution-works?t=1768844354598",
    date: "Mar 2026",
    readTime: "9 min read",
    tags: ["DNS", "Networking", "Browser"],
    content: "<h2>What is DNS?</h2><p>The Domain Name System (DNS) is often called the phonebook of the internet. It translates human-readable domain names like <code>google.com</code> into IP addresses like <code>142.250.80.46</code> that computers use to communicate.</p><h2>How It Works (Step by Step)</h2><ol><li>You type a URL in your browser</li><li>Your computer checks its local DNS cache</li><li>If not found, it asks the Recursive DNS Resolver (usually your ISP)</li><li>The resolver queries Root Nameservers</li><li>Root servers direct to TLD Nameservers (.com, .org, etc.)</li><li>TLD servers point to Authoritative Nameservers for the domain</li><li>The authoritative server returns the IP address</li><li>Your browser connects to that IP</li></ol><p>This entire process typically takes less than 100 milliseconds!</p>",
  },
];

export default blogPosts;