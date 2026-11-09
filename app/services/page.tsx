import Link from "next/link";
import EventImage from "../../components/EventImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SERVICES = [
  {
    title: "Full Room Transformation",
    desc: "Complete immersive environment creation that alters the perception of space.",
  },
  {
    title: "Backdrop & Draping",
    desc: "Elegant fabric styling and custom backdrops to frame your most important moments.",
  },
  {
    title: "Stage Design",
    desc: "Platform artistry that elevates the focal point of your event with structural beauty.",
  },
  {
    title: "Custom Prop Creation",
    desc: "Bespoke fabrications and thematic installations built specifically for your narrative.",
  },
  {
    title: "Ceremony Decor",
    desc: "Thoughtful styling for the vow exchange area, creating a sacred atmosphere.",
  },
  {
    title: "Centerpieces",
    desc: "Striking floral and structural focal points that anchor your guest tables.",
  },
  {
    title: "Fresh Florals",
    desc: "Premium botanical arrangements sourced from top growers for lush visuals.",
  },
  {
    title: "Rentals",
    desc: "Exclusive access to high-end furniture, lounge sets, and décor pieces.",
  },
  {
    title: "Stationery Design",
    desc: "Custom paper goods including invitations, menus, and place cards.",
  },
  {
    title: "Vinyl & Carpeting",
    desc: "Personalised flooring solutions to define spaces and add texture.",
  },
  {
    title: "Lighting",
    desc: "Atmospheric illumination to set the mood and highlight key design elements.",
  },
  {
    title: "Head Table Design",
    desc: "Signature bridal seating arrangements designed to stand out.",
  },
  {
    title: "DJ & Entertainment",
    desc: "World-class sound and curated performances to energise your celebration.",
  },
  {
    title: "Photography & Videography",
    desc: "Cinematic sourcing and editorial imagery to preserve every precious moment.",
  },
  {
    title: "Limo & Car Rentals",
    desc: "Sophisticated transportation solutions for a grand arrival and seamless journey.",
  },
  {
    title: "Cultural Events",
    desc: "Authentic celebrations honouring traditions with vibrant colors and rich heritage details.",
  },
  {
    title: "Dhol & Dholak Players",
    desc: "High-energy rhythmic performances that command attention and ignite the dance floor.",
  },
  {
    title: "Hair & Makeup",
    desc: "Exquisite beauty styling designed to enhance your natural radiance for your finest moments.",
  },
  {
    title: "Henna / Mehndi Artists",
    desc: "Masterfully applied henna patterns that blend contemporary style with timeless cultural artistry.",
  },
];

const SERVICE_IMAGES = [
  "reception-0143",
  "reception-0312",
  "reception-0130",
  "reception-0317",
  "wedding-0372",
  "reception-0329",
  "wedding-0377",
  "reception-0330",
  "reception-0133",
  "reception-0314",
  "reception-0332",
  "reception-0333",
];

const STEPS = [
  {
    icon: "◻",
    title: "Consultation",
    desc: "Initial meeting to understand your vision and needs.",
  },
  {
    icon: "◈",
    title: "Design",
    desc: "Creating bespoke mood boards and detailed concepts.",
  },
  {
    icon: "◻",
    title: "Coordination",
    desc: "Managing logistics, vendors, and detailed timelines.",
  },
  {
    icon: "◈",
    title: "Execution",
    desc: "Flawless event day management so you can relax.",
  },
];

export const metadata = { title: "Services — Unwritten Events" };

export default function ServicesPage() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <div className="sp-page-header">
          <p className="eyebrow">EVERY PART OF YOUR CELEBRATION</p>
          <h1>Our Services</h1>
          <p>
            From the first floral sketch to the last song, with your traditions
            at the heart of it.
          </p>
        </div>

        <nav className="chapter-nav" aria-label="Explore our services">
          <a href="#design-services">Design & decor</a>
          <a href="#celebration-services">Music, culture & beauty</a>
          <a href="#our-process">Our process</a>
        </nav>
        <div className="sp-section-intro" id="design-services">
          <h2>Full Service Event Design</h2>
          <p>
            We believe each event is unique to you. During the consultation,
            we&apos;ll work together to determine the budget for your event
            based on your needs, scope of the project &amp; vision to create a
            customised solution that fits your requirements.
          </p>
        </div>

        <section className="sp-service-grid">
          <div className="sp-grid">
            {SERVICES.slice(0, 12).map((svc, i) => (
              <div className="sp-card" key={svc.title}>
                <EventImage
                  src={`/images/${SERVICE_IMAGES[i % SERVICE_IMAGES.length]}.webp`}
                  alt={`Event design inspiration: ${svc.title}`}
                  className="service-photo"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <h3 className="sp-card-title">{svc.title}</h3>
                <div className="sp-card-desc">{svc.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="celebration-services" id="celebration-services">
          <p className="eyebrow">TRADITION. EXPRESSION. CELEBRATION.</p>
          <h2>The energy. The artistry. The traditions.</h2>
          <div className="celebration-services-grid">
            {SERVICES.slice(12)
              .map((svc, index) => ({ svc, index }))
              .sort(
                (a, b) =>
                  [4, 6, 0, 3, 5, 1, 2].indexOf(a.index) -
                  [4, 6, 0, 3, 5, 1, 2].indexOf(b.index),
              )
              .map(({ svc, index }) => (
                <article
                  className="sp-card celebration-service-card"
                  key={svc.title}
                >
                  {index === 0 ? (
                    <EventImage
                      src="/images/reception-0131.webp"
                      alt="A beautifully lit reception stage with gold seating and white floral arches"
                      className="service-photo"
                    />
                  ) : index === 1 ? (
                    <EventImage
                      src="/images/reception-0151.webp"
                      alt="A tiered wedding cake decorated with white flowers"
                      className="service-photo"
                    />
                  ) : index === 3 ? (
                    <EventImage
                      src="/images/wedding-0369.webp"
                      alt="A white floral arch framing a wedding ceremony space"
                      className="service-photo"
                    />
                  ) : index === 5 ? (
                    <EventImage
                      src="/images/wedding-0378.webp"
                      alt="White floral details and greenery decorating the ceremony space"
                      className="service-photo"
                    />
                  ) : (
                    <div className="service-signature" aria-hidden="true">
                      <span>UNWRITTEN CELEBRATIONS</span>
                      <span>
                        {index === 2
                          ? "The arrival."
                          : index === 4
                            ? "The rhythm."
                            : "The artistry."}
                      </span>
                      <span>PERSONAL BY DESIGN</span>
                    </div>
                  )}
                  <h3 className="sp-card-title">{svc.title}</h3>
                  <p className="sp-card-desc">{svc.desc}</p>
                  <Link href="/consultation" className="service-inquiry">
                    Ask about {svc.title.toLowerCase()} ↗
                  </Link>
                </article>
              ))}
          </div>
        </section>
        <section className="sp-process" id="our-process">
          <h2>Our Process</h2>
          <p className="sp-process-tagline">
            A seamless journey from inspiration to celebration.
          </p>
          <div className="sp-process-steps">
            {STEPS.map((s) => (
              <div className="sp-step" key={s.title}>
                <div className="sp-step-icon">{s.icon}</div>
                <div className="sp-step-title">{s.title}</div>
                <div className="sp-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="sp-addons">
          <div className="sp-addon">
            <span className="sp-addon-icon">📍</span>
            <div>
              <h4>Venue Sourcing</h4>
              <p>
                Access to exclusive, hidden-gem locations and premier estates
                worldwide. We handle negotiations and contracts.
              </p>
            </div>
          </div>
          <div className="sp-addon">
            <span className="sp-addon-icon">✦</span>
            <div>
              <h4>Catering &amp; Mixology</h4>
              <p>
                Curating culinary experiences with top-tier chefs and
                mixologists to create custom menus that delight.
              </p>
            </div>
          </div>
        </div>

        <section className="closing-cta">
          <h2>Your vision. Our thoughtful execution.</h2>
          <Link href="/consultation" className="button">
            Plan your celebration ↗
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
