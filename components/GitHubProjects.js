"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/config";
import { GitHubIcon, ExternalIcon, StarIcon } from "./Icons";

const LANG_COLORS = {
  Dart: "#00B4AB",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  "C++": "#f34b7d",
};

const INITIAL_COUNT = 9;

export default function GitHubProjects() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${site.githubUsername}/repos?per_page=100&sort=pushed`
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((data) => {
        if (cancelled) return;
        const featuredRepos = new Set(site.featured.map((f) => f.repo));
        const cleaned = data
          .filter((r) => !r.fork && !featuredRepos.has(r.name))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(cleaned);
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="load-note">
        Couldn’t load the live GitHub feed right now view everything directly on{" "}
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--green-deep)", fontWeight: 700 }}
        >
          my GitHub profile
        </a>
        .
      </p>
    );
  }

  if (!repos) return <p className="load-note">Loading projects from GitHub…</p>;

  const visible = showAll ? repos : repos.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="project-grid">
        {visible.map((repo) => (
          <article className="project-card" key={repo.id}>
            <h3 className="project-title">{prettify(repo.name)}</h3>
            <p className="project-desc">
              {repo.description || "Opensource project explore the code on GitHub."}
            </p>
            <div className="repo-meta">
              {repo.language && (
                <span>
                  <span
                    className="dot"
                    style={{ background: LANG_COLORS[repo.language] || "#9aa5a0" }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <StarIcon /> {repo.stargazers_count}
                </span>
              )}
              <span>Updated {timeAgo(repo.pushed_at)}</span>
            </div>
            <div className="project-links">
              {repo.homepage && (
                <a
                  className="plink plink-live"
                  href={withProtocol(repo.homepage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalIcon /> Live Demo
                </a>
              )}
              <a
                className="plink plink-code"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={15} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
      {repos.length > INITIAL_COUNT && (
        <div className="more-row">
          <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show fewer" : `Show all ${repos.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}

function prettify(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function withProtocol(url) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function timeAgo(dateStr) {
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}
