import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventImage from "../components/EventImage";
import MomentsStrip from "../components/MomentsStrip";
import { featured } from "../lib/photos";
import { articles } from "../lib/journal";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <section className="home-hero" id="beginning">
          <EventImage
            src="/images/home-1.webp"
            alt="An intimate reception with gold chairs, candlelight, and abundant blush florals"
            sizes="100vw"
            preload
            parallax
          />
          <div className="home-hero-shade" />
          <div className="home-hero-copy">
            <p className="eyebrow">NEW YORK · EVENT DESIGN & PRODUCTION</p>
            <h1>
              Your story.
              <br />
              <em>Beautifully unwritten.</em>
            </h1>
            <p>
              Meaningful celebrations. Thoughtful details. Moments that become a
              part of you.
            </p>
            <Link href="/consultation" className="button button-light">
              Let’s create your moment <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <a href="#our-story" className="hero-footnote hero-scroll-link">
            EXPLORE OUR STORY <span aria-hidden="true">↓</span>
          </a>
        </section>
        <nav className="chapter-nav" aria-label="Explore this page">
          <a href="#our-story">Our approach</a>
          <a href="#selected-work">Selected work</a>
          <a href="#celebration">The feeling</a>
          <a href="#journal">The journal</a>
        </nav>
        <section className="intro-section" id="our-story">
          <p className="eyebrow">THE UNWRITTEN APPROACH</p>
          <h2>
            Every celebration begins
            <br />
            with <em>your story.</em>
          </h2>
          <p>
            We take the time to truly understand you, so every element reflects
            your vision with care and intention. From the first conversation to
            the final reveal, we create immersive spaces that feel as personal
            as the moments they hold.
          </p>
          <Link href="/services" className="text-link">
            Discover what we do <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <section className="featured-section" id="selected-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A GLIMPSE INTO OUR WORLD</p>
              <h2>Moments, made memorable.</h2>
            </div>
            <Link className="text-link" href="/our-work">
              Explore the gallery ↗
            </Link>
          </div>
          <div className="featured-grid">
            {featured.map((p) => (
              <Link href="/our-work" key={p.src}>
                <figure>
                  <EventImage src={p.src} alt={p.alt} parallax />
                  <figcaption>
                    {p.label}
                    <span aria-hidden="true">↗</span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </section>
        <MomentsStrip />
        <section className="approach-section">
          <EventImage
            src="/images/reception-0152.webp"
            alt="A delicate white rose detail cascading down the wedding cake"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="approach-copy">
            <p className="eyebrow">
              THOUGHTFULLY DESIGNED. SEAMLESSLY EXPERIENCED.
            </p>
            <h2>
              Present for the moments
              <br />
              <em>that matter.</em>
            </h2>
            <p>
              Beautiful design is only the beginning. We bring the details
              together so you can be fully there—with your people, in your
              moment.
            </p>
            <div className="value-list">
              <div>
                <h3>Personal by design</h3>
                <p>
                  Your traditions, your style, and your vision guide every
                  choice.
                </p>
              </div>
              <div>
                <h3>Care in every detail</h3>
                <p>
                  From the first mood board to the last place setting, nothing
                  is an afterthought.
                </p>
              </div>
            </div>
            <Link href="/consultation" className="button">
              Let’s start a conversation ↗
            </Link>
          </div>
        </section>
        <section className="journal-section" id="journal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NOTES & INSPIRATION</p>
              <h2>From the journal</h2>
            </div>
            <Link href="/blogs" className="text-link">
              Read all stories ↗
            </Link>
          </div>
          <div className="journal-grid">
            {articles.slice(0, 2).map((a) => (
              <Link
                href={`/blogs/${a.slug}`}
                className="journal-card"
                key={a.slug}
              >
                <EventImage
                  src={a.image}
                  alt={a.alt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p className="eyebrow">{a.tag}</p>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="text-link">Read the story ↗</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="closing-cta">
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Let’s make something <em>unforgettable.</em>
          </h2>
          <Link href="/consultation" className="button">
            Request a complimentary consultation ↗
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
