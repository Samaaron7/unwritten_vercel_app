import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <div className="footer-logo-monogram">UE</div>
          <div className="footer-logo-name">UNWRITTEN EVENTS</div>
          <div className="footer-social">
            <a href="https://www.instagram.com/unwrittenev" target="_blank" rel="noopener noreferrer" className="footer-social-link">IG</a>
            <a href="https://pinterest.com/unwrittenevents" target="_blank" rel="noopener noreferrer" className="footer-social-link">PIN</a>
            <a href="https://tiktok.com/@unwrittenevents" target="_blank" rel="noopener noreferrer" className="footer-social-link">TK</a>
          </div>
          <div className="footer-contact">
            <p>events@unwrittenevents.com</p>
            <p>(212) 555-7843</p>
          </div>
        </div>

        <div className="footer-section footer-nav-section">
          <h4>Navigate</h4>
          <ul className="footer-nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-work">Our Work</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-hours-section">
          <h4>Studio Hours</h4>
          <p>Monday – Friday<br />9:00 AM – 6:00 PM EST</p>
          <p style={{ marginTop: 12 }}>Saturday by appointment.<br />Sunday: closed.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright 1999–{year} by Ingenious Data. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
