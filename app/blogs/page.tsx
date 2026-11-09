import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EventImage from "../../components/EventImage";
import { articles } from "../../lib/journal";
export const metadata = { title: "The Journal — Unwritten Events" };
export default function BlogsPage() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <div className="blogs-hero">
          <p className="eyebrow">NOTES & INSPIRATION</p>
          <h1>The Journal</h1>
          <p>Thoughtful ideas for meaningful celebrations.</p>
        </div>
        <div className="journal-section">
          <div className="journal-grid">
            {articles.map((a) => (
              <Link
                className="journal-card"
                href={`/blogs/${a.slug}`}
                key={a.slug}
              >
                <EventImage
                  src={a.image}
                  alt={a.alt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p className="eyebrow">{a.tag}</p>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <span className="text-link">Read the story ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
