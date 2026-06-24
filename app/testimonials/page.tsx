import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = { title: 'Testimonials — Unwritten Events' };

const TESTIMONIALS = [
  { name: 'Priya & Rahul S.', event: 'South Asian Wedding · Manhattan', stars: 5, quote: 'Unwritten Events transformed our wedding into a dream we didn\'t even know we had. Every detail was intentional, every moment felt like it was created just for us.' },
  { name: 'Chloe & James M.', event: 'Garden Wedding · The Hamptons', stars: 5, quote: 'From the first call to the final dance, they were with us every step of the way. The floral arrangements alone brought our guests to tears.' },
  { name: 'Sofia R.', event: 'Milestone Birthday · Tribeca', stars: 5, quote: 'I wanted a celebration that felt like me, and they delivered beyond my wildest imagination. The room was stunning — I couldn\'t believe it was real.' },
  { name: 'The Nguyen Family', event: 'Housewarming Gala · Brooklyn', stars: 5, quote: 'Professional, creative, and deeply thoughtful. They listened to every concern and turned our new home into an unforgettable memory.' },
  { name: 'Amara & Kofi D.', event: 'Cultural Wedding · Queens', stars: 5, quote: 'They honored our traditions while adding a modern elegance we didn\'t expect. Our families still talk about that evening.' },
  { name: 'Lauren T.', event: 'Bridal Shower · Upper East Side', stars: 5, quote: 'Absolutely flawless execution. The team was calm, organized, and poured genuine love into every element of our event.' },
];

export default function TestimonialsPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="test-hero">
        <h1>Testimonials</h1>
        <p>Words from the people whose stories we&apos;ve had the honor of telling.</p>
      </div>

      <div className="test-grid">
        {TESTIMONIALS.map((t) => (
          <div className="test-card" key={t.name}>
            <div className="test-stars">{'★'.repeat(t.stars)}</div>
            <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="test-author">{t.name}</div>
            <div className="test-event">{t.event}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
