"use client";

import Link from "next/link";
import { type CSSProperties, useState } from "react";
import { type Article, type Category, formatDate } from "./articles";

type Filter = "Всички" | Category;

function coverStyle(article: Article): CSSProperties {
  return {
    "--cover-a": article.cover[0],
    "--cover-b": article.cover[1],
    "--cover-ink": article.cover[2],
  } as CSSProperties;
}

export function Cover({ article }: { article: Article }) {
  return (
    <div className="news-cover" style={coverStyle(article)} aria-hidden="true">
      <span className="news-cover-ring" />
      <span className="news-cover-ring news-cover-ring-small" />
      <strong>{article.keyNumber.value}</strong>
      <em>{article.keyNumber.label}</em>
    </div>
  );
}

function Meta({ article }: { article: Article }) {
  return (
    <p className="news-meta">
      <span className="news-tag">{article.category}</span>
      <span>{article.readMinutes} мин четене</span>
      <span>Източник: {article.source.name}</span>
    </p>
  );
}

export default function NewsIndex({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<Filter>("Всички");

  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const filters: Filter[] = ["Всички", ...categories];
  const visible =
    filter === "Всички"
      ? articles
      : articles.filter((article) => article.category === filter);
  const [lead, ...rest] = visible;

  return (
    <>
      <div className="news-filters" role="group" aria-label="Филтър по тема">
        {filters.map((name) => (
          <button
            type="button"
            key={name}
            className={
              name === filter ? "news-filter news-filter-active" : "news-filter"
            }
            aria-pressed={name === filter}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {lead && (
        <Link href={`/news/${lead.slug}`} className="news-lead">
          <Cover article={lead} />

          <div className="news-lead-copy">
            <Meta article={lead} />
            <h2>{lead.title}</h2>
            <p className="news-dek">{lead.dek}</p>
            <span className="news-more">
              Прочети за {lead.readMinutes} минути
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="news-grid">
          {rest.map((article) => (
            <li key={article.slug}>
              <Link href={`/news/${article.slug}`} className="news-card">
                <Cover article={article} />

                <div className="news-card-copy">
                  <Meta article={article} />
                  <h3>{article.title}</h3>
                  <p className="news-dek">{article.dek}</p>
                  <span className="news-date">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
