import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = { title: 'Blogs — Unwritten Events' };

const BLOGS = [
  { tag: 'Floral Design', title: 'Embracing Minimalism in Floral Design', excerpt: 'Discover how less truly becomes more when styling tablescape arrangements with intention and grace.', bg: 'linear-gradient(135deg,#e0d4c0,#c8b8a0)' },
  { tag: 'Table Setting', title: 'The Art of the Table Setting', excerpt: 'A guide to layering textures, colors, and the right details to create an unforgettable dining experience.', bg: 'linear-gradient(135deg,#282828,#181818)' },
  { tag: 'Trends', title: 'Event Design Trends for 2025', excerpt: 'From sustainable luxury to intimate micro-weddings, these are the aesthetics defining modern celebration.', bg: 'linear-gradient(135deg,#e8dfd8,#c9a8a0)' },
  { tag: 'Planning', title: 'How to Choose Your Event Planner', excerpt: 'The questions every couple should ask before signing a contract — and the answers that matter most.', bg: 'linear-gradient(135deg,#d8e0d0,#a8b8a0)' },
];

export default function BlogsPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="blogs-hero">
        <h1>The Journal</h1>
        <p>Insights, inspiration, and stories from the world of luxury event design.</p>
      </div>

      <div style={{ background: '#f9f6f3', padding: '60px' }}>
        <div className="blogs-grid" style={{ margin: '0 auto' }}>
          {BLOGS.map((b) => (
            <div className="blog-card" key={b.title}>
              <div className="blog-card-placeholder" style={{ background: b.bg }} />
              <div className="blog-card-body">
                <span className="blog-tag">{b.tag}</span>
                <div className="blog-title">{b.title}</div>
                <p className="blog-excerpt">{b.excerpt}</p>
                <span className="blog-read-more">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
