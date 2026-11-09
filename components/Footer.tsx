import Link from "next/link";
import MotionPreference from "./MotionPreference";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <div className="footer-logo-monogram">UE</div>
          <div className="footer-logo-name">UNWRITTEN EVENTS</div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/unwrittenev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              IG
            </a>
            <a
              href="https://pinterest.com/unwrittenevents"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              PIN
            </a>
            <a
              href="https://tiktok.com/@unwrittenevents"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              TK
            </a>
          </div>
          <div className="footer-contact">
            <p>
              <a href="tel:+15166737943">(516) 673-7943</a>
            </p>
            <p>
              <a href="mailto:unwrittenev@gmail.com">unwrittenev@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-section footer-nav-section">
          <h4>Navigate</h4>
          <ul className="footer-nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-hours-section">
          <h4>Studio Hours</h4>
          <p>
            Monday – Friday
            <br />
            9:00 AM – 6:00 PM ET
          </p>
          <p style={{ marginTop: 12 }}>
            Saturday by appointment.
            <br />
            Sunday: closed.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <MotionPreference />
        <p>&copy; {year} Unwritten Events. All rights reserved.</p>
      </div>
    </footer>
  );
}
