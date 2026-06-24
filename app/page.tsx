'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_IMAGES = [
  '/Home-image.png',
  '/Home-image-2.png',
  '/services_image.jpg',
  '/Home_page_main_picture.jpg',
];

const GALLERY_ITEMS = [
  { label: 'Bridal Shower',        bg: 'linear-gradient(135deg,#e8dfd8,#c9a8a0)' },
  { label: 'Housewarming',         bg: 'linear-gradient(135deg,#d8e0d0,#a8b8a0)' },
  { label: 'Wedding Plan',         bg: 'linear-gradient(135deg,#e0d8e8,#b0a8c8)' },
  { label: 'Summer Solstice Gala', bg: 'linear-gradient(135deg,#383838,#181818)' },
  { label: 'Vineyard Wedding',     bg: 'linear-gradient(135deg,#282828,#181818)' },
  { label: 'Nordic Winter Retreat',bg: 'linear-gradient(135deg,#303030,#202020)' },
];

const STRIP_COLORS = [
  'linear-gradient(135deg,#e8dfd8,#c9a8a0)',
  'linear-gradient(135deg,#d8e0d0,#a8b8a0)',
  'linear-gradient(135deg,#e0d8e8,#b0a8c8)',
  'linear-gradient(135deg,#e8e0d0,#c8b898)',
  'linear-gradient(135deg,#dce8e4,#a0b8b0)',
  'linear-gradient(135deg,#e8d8d8,#c8a0a0)',
  'linear-gradient(135deg,#d8dce8,#a0a8c0)',
  'linear-gradient(135deg,#e4e8d8,#b0b890)',
];

const VALUES = [
  { title: 'Trust',      body: 'Count on us to deliver not just events, but trust in the flawless execution of your dreams.' },
  { title: 'Experience', body: 'With 10+ years of expertise, we provide an unparalleled experience tailored just for you.' },
  { title: 'Luxury',     body: 'Elevate your celebration with our signature touch of opulence and refined elegance.' },
  { title: 'Reliable',   body: 'In a world of uncertainties, we are the reassuring presence that guides you through every step.' },
];

const JOURNAL = [
  {
    tag: 'Floral Design',
    title: 'Embracing Minimalism in Floral Design',
    excerpt: 'Discover how less truly becomes more when styling tablescape arrangements with intention and grace.',
    bg: 'linear-gradient(135deg,#e0d4c0,#c8b8a0)',
    color: '#999',
  },
  {
    tag: 'Table Setting',
    title: 'The Art of the Table Setting',
    excerpt: 'A guide to layering textures, colors, and the right details to create an unforgettable dining experience for guests.',
    bg: 'linear-gradient(135deg,#282828,#181818)',
    color: '#555',
  },
];

export default function Home() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % HERO_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page-container">
      <Header />

      {/* HERO */}
      <section className="ue-hero">
        <div className="ue-hero-img-wrap">
          <Image
            key={imgIdx}
            src={HERO_IMAGES[imgIdx]}
            alt="Elegant event setup"
            fill
            className="ue-hero-carousel-img"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="ue-hero-gradient-overlay" />
          <div className="ue-hero-copy">
            <h1 className="ue-hero-title">UNWRITTEN EVENTS</h1>
            <p className="ue-hero-sub">
              We create unforgettable moments where design meets emotion, ensuring your story is beautifully
              told and every detail feels intentional—luxury event production at its finest in New York.
            </p>
            <Link href="/consultation" className="ue-hero-cta">Schedule FREE Strategy Call</Link>
          </div>
        </div>
      </section>

      {/* SCROLLING STRIP */}
      <div className="ue-strip">
        <div className="ue-strip-fade-left" />
        <div className="ue-strip-inner">
          {[...STRIP_COLORS, ...STRIP_COLORS].map((bg, i) => (
            <div key={i} style={{ width: 280, height: 200, flexShrink: 0, borderRadius: 4, background: bg }} />
          ))}
        </div>
        <div className="ue-strip-fade-right" />
      </div>

      {/* WHO WE ARE */}
      <section className="ue-who">
        <h2>WHO WE ARE</h2>
        <p>
          We take the time to truly understand you, so every element reflects your vision with care, depth,
          and intention. We believe the most beautiful events begin with connection—with listening,
          understanding, and honoring what matters most to you. From our first conversation to the final
          reveal, we pour thoughtfulness into every detail, creating an atmosphere that feels meaningful,
          immersive, and full of emotion.
        </p>
        <div className="ue-who-cta-row">
          <Link href="/our-work" className="ue-who-btn">SEE OUR WORK!</Link>
          <p className="ue-who-tagline">A COHESIVE EXPERIENCE, FROM START TO FINISH</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="ue-gallery">
        <div className="ue-gallery-row">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <figure className="ue-gallery-card" key={item.label}>
              <div className="ue-gallery-placeholder" style={{ background: item.bg }} />
              <figcaption className="ue-gallery-caption">{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="ue-gallery-row">
          {GALLERY_ITEMS.slice(3).map((item) => (
            <figure className="ue-gallery-card" key={item.label}>
              <div className="ue-gallery-placeholder" style={{ background: item.bg }} />
              <figcaption className="ue-gallery-caption">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CRAFTING MOMENTS */}
      <section className="ue-crafting">
        <h2>CRAFTING UNFORGETTABLE MOMENTS.</h2>
        <h3>TURNING THE ORDINARY INTO EXTRAORDINARY STORIES.</h3>
        <div className="ue-crafting-grid">
          {VALUES.map((v) => (
            <div className="ue-crafting-item" key={v.title}>
              <h4>{v.title}</h4>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
        <Link href="/consultation" className="ue-crafting-btn">LET&apos;S CHAT!</Link>
      </section>

      {/* JOURNAL */}
      <section className="ue-journal">
        <h2>Latest from the Journal</h2>
        <div className="ue-journal-grid">
          {JOURNAL.map((a) => (
            <Link href="/blogs" key={a.title} className="ue-journal-card" style={{ textDecoration: 'none' }}>
              <div className="ue-journal-placeholder" style={{ background: a.bg, color: a.color }}>
                IMAGE
              </div>
              <div className="ue-journal-body">
                <span className="ue-journal-tag">{a.tag}</span>
                <div className="ue-journal-title">{a.title}</div>
                <p className="ue-journal-excerpt">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
