import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InquiryForm from "../../components/InquiryForm";
export const metadata = { title: "Contact — Unwritten Events" };
export default function ContactPage() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <div className="contact-hero">
          <p className="eyebrow">LET’S BEGIN</p>
          <h1>Tell us your story.</h1>
          <p>We’d love to hear about your vision.</p>
        </div>
        <div className="contact-info-band">
          <div className="contact-info-card">
            <h2>Call us</h2>
            <a href="tel:+15166737943">(516) 673-7943</a>
          </div>
          <div className="contact-info-card">
            <h2>Write to us</h2>
            <a href="mailto:unwrittenev@gmail.com">unwrittenev@gmail.com</a>
          </div>
          <div className="contact-info-card">
            <h2>Let’s connect</h2>
            <p>
              New York & beyond
              <br />
              Consultations by appointment
            </p>
          </div>
        </div>
        <div className="contact-main">
          <div className="contact-form-area">
            <InquiryForm />
          </div>
          <aside className="contact-sidebar">
            <h2>
              Every detail starts
              <br />
              with a conversation.
            </h2>
            <p>
              Whether you have a fully formed vision or just the beginning of an
              idea, we’re here to listen.
            </p>
            <h3>Follow along</h3>
            <div className="sidebar-social">
              <a
                href="https://www.instagram.com/unwrittenev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            </div>
            <h3>Prefer to talk?</h3>
            <p>
              <a href="tel:+15166737943">Call (516) 673-7943</a> to discuss your
              celebration.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
