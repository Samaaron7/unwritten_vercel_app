import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function NotFound() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content" className="closing-cta">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>This chapter is still unwritten.</h1>
        <p>Let’s take you back to the beginning.</p>
        <Link href="/" className="button">
          Back to home ↗
        </Link>
      </main>
      <Footer />
    </div>
  );
}
