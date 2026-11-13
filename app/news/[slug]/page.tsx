import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsFooter, NewsHeader } from "../../components/NewsChrome";
import { Cover } from "../NewsIndex";
import { articles, formatDate, getArticle } from "../articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];

  return (
    <main className="news-page">
      <NewsHeader />

      <article className="news-article">
        <header className="news-article-head">
          <Link href="/news" className="news-back">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M16 10H5M9.5 5.5 5 10l4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Всички новини
          </Link>

          <p className="news-meta">
            <span className="news-tag">{article.category}</span>
            <span>{article.readMinutes} мин четене</span>
            <span>{formatDate(article.publishedAt)}</span>
          </p>

          <h1>{article.title}</h1>
          <p className="news-article-dek">{article.dek}</p>
        </header>

        <Cover article={article} />

        <div className="news-article-body">
          <aside className="news-tldr" aria-labelledby="tldr-title">
            <h2 id="tldr-title">Накратко</h2>
            <ul>
              {article.tldr.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>

          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <aside className="news-take" aria-labelledby="take-title">
            <h2 id="take-title">Нашият прочит</h2>
            {article.ourTake.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </aside>

          {article.tryIt && (
            <aside className="news-try" aria-labelledby="try-title">
              <h2 id="try-title">Опитай</h2>
              <p>{article.tryIt}</p>
            </aside>
          )}

          <aside className="news-source" aria-labelledby="source-title">
            <div>
              <h2 id="source-title">Първоизточник</h2>
              <p className="news-source-title">„{article.source.title}“</p>
              <p className="news-source-meta">
                {[
                  article.source.author,
                  article.source.name !== article.source.author
                    ? article.source.name
                    : undefined,
                  article.source.published,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>

            <a
              href={article.source.url}
              className="news-source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Прочети оригинала
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M7 13 13.5 6.5M8 6.5h5.5V12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </aside>

          <p className="news-rights">
            Това е наше резюме със собствени думи. Всички права върху оригиналния
            материал принадлежат на автора му.
          </p>
        </div>

        {next && next.slug !== article.slug && (
          <Link href={`/news/${next.slug}`} className="news-next">
            <span>Следваща новина</span>
            <strong>{next.title}</strong>
          </Link>
        )}
      </article>

      <NewsFooter />
    </main>
  );
}
