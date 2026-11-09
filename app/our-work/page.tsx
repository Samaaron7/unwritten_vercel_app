import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
export const metadata = {
  title: "Our Work — Unwritten Events",
  description:
    "Explore our ceremony and reception gallery, from floral installations to intimate tablescape details.",
};
export default function OurWorkPage() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <div className="work-hero">
          <p className="eyebrow">DESIGNED WITH INTENTION</p>
          <h1>Our Work</h1>
          <p>
            A closer look at the spaces, details, and moments we bring together.
          </p>
        </div>
        <Gallery />
        <section className="closing-cta">
          <h2>
            Your celebration could be <em>next.</em>
          </h2>
          <Link href="/consultation" className="button">
            Tell us your story ↗
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
