import type { Metadata } from "next";
import Link from "next/link";
import { NewsFooter, NewsHeader } from "../components/NewsChrome";
import NewsIndex from "./NewsIndex";
import { articles, followedSources } from "./articles";

export const metadata: Metadata = {
  title: "Бар новини",
  description:
    "Най-интересното от световната барова сцена, разказано накратко, с нашия прочит и линк към първоизточника.",
};

export default function NewsPage() {
  return (
    <main className="news-page">
      <NewsHeader />

      <section className="news-masthead">
        <p className="news-kicker">БАР НОВИНИ</p>

        <h1>
          Какво се случва <span>зад бара.</span>
        </h1>

        <p className="news-intro">
          Подбираме най-интересното от световната барова сцена и го разказваме
          за три минути. Към всяка новина добавяме какво означава тя за нашия
          бар и линк към първоизточника.
        </p>
      </section>

      <section className="news-body" aria-label="Новини">
        <NewsIndex articles={articles} />
      </section>

      <section className="news-sources" aria-labelledby="news-sources-title">
        <h2 id="news-sources-title">Източници, които следим</h2>

        <ul>
          {followedSources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                <strong>{source.name}</strong>
                <span>{source.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="news-cta">
        <div>
          <h2>Искаш тези идеи в чашата на твоите гости?</h2>
          <p>Разкажи ни за събитието и ще предложим меню за него.</p>
        </div>

        <Link href="/#contact" className="format-cta">
          <span>Свържи се с нас</span>
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
        </Link>
      </section>

      <NewsFooter />
    </main>
  );
}
