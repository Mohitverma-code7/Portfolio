import { useState, useEffect } from "react";

const HASHNODE_USERNAME = "mohitcodes-write";
const HASHNODE_API = "https://gql.hashnode.com";

const QUERY = `
  query Publication($host: String!) {
    publication(host: $host) {
      posts(first: 20) {
        edges {
          node {
            id
            title
            subtitle
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches real blog posts from Hashnode's public GraphQL API.
 * Falls back to static data if the API is unavailable.
 */
export default function useHashnodePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(HASHNODE_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: QUERY,
            variables: { host: HASHNODE_USERNAME },
          }),
        });

        if (!res.ok) throw new Error("api_failed");

        const json = await res.json();

        if (!cancelled) {
          const edges = json?.data?.publication?.posts?.edges || [];
          const formatted = edges.map(({ node }) => ({
            id: node.id,
            title: node.title,
            excerpt: node.brief || node.subtitle || "",
            url: node.url,
            slug: node.slug,
            date: new Date(node.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            readTime: `${node.readTimeInMinutes} min read`,
            coverImage: node.coverImage?.url || null,
            tags: (node.tags || []).map((t) => t.name),
          }));
          setPosts(formatted);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError("api_failed");
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
}