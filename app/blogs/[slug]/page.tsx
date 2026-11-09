import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EventImage from "../../../components/EventImage";
import { articles } from "../../../lib/journal";
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return {
    title: a ? `${a.title} — Unwritten Events` : "Story not found",
    description: a?.excerpt,
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <article className="article">
          <Link className="text-link" href="/blogs">
            ← Back to the journal
          </Link>
          <header>
            <p className="eyebrow">{a.tag}</p>
            <h1>{a.title}</h1>
            <p>{a.excerpt}</p>
          </header>
          <EventImage
            src={a.image}
            alt={a.alt}
            sizes="(max-width: 900px) 100vw, 900px"
            preload
          />
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <Link href="/consultation" className="button">
            Let’s bring your ideas to life ↗
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
