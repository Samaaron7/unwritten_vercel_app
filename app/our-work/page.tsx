import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = { title: 'Our Work — Unwritten Events' };

const WORK_ITEMS = [
  { label: 'Vineyard Wedding', bg: 'linear-gradient(135deg,#e8dfd8,#c9a8a0)' },
  { label: 'Bridal Shower — Tribeca', bg: 'linear-gradient(135deg,#d8e0d0,#a8b8a0)' },
  { label: 'Cultural Gala — Queens', bg: 'linear-gradient(135deg,#e0d8e8,#b0a8c8)' },
  { label: 'Nordic Winter Retreat', bg: 'linear-gradient(135deg,#383838,#181818)' },
  { label: 'Summer Solstice Gala', bg: 'linear-gradient(135deg,#e8e0d0,#c8b898)' },
  { label: 'Housewarming — Brooklyn', bg: 'linear-gradient(135deg,#dce8e4,#a0b8b0)' },
  { label: 'Milestone Birthday — NYC', bg: 'linear-gradient(135deg,#c8b898,#a09078)' },
  { label: 'South Asian Wedding', bg: 'linear-gradient(135deg,#300840,#600878)' },
  { label: 'Garden Wedding', bg: 'linear-gradient(135deg,#b0c8a0,#708060)' },
];

export default function OurWorkPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="work-hero">
        <h1>Our Work</h1>
        <p>A curated glimpse into the moments we&apos;ve had the privilege of crafting.</p>
      </div>

      <div className="work-grid">
        {WORK_ITEMS.map((item) => (
          <div className="work-card" key={item.label}>
            <div className="work-card-placeholder" style={{ background: item.bg }} />
            <div className="work-card-label">{item.label}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
