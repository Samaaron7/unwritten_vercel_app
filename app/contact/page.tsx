'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SUBJECTS = ['General Inquiry', 'Wedding', 'Corporate Event', 'Birthday / Milestone', 'Cultural Event', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-container">
      <Header />

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear about your vision.</p>
      </div>

      <div className="contact-info-band">
        <div className="contact-info-card">
          <div className="icon">📞</div>
          <h4>Phone</h4>
          <p>(212) 555-7843</p>
        </div>
        <div className="contact-info-card">
          <div className="icon">✉️</div>
          <h4>Email</h4>
          <p>events@unwrittenevents.com</p>
        </div>
        <div className="contact-info-card">
          <div className="icon">🕐</div>
          <h4>Studio Hours</h4>
          <p>Mon – Fri · 9AM – 6PM EST<br />Sat by appointment</p>
        </div>
      </div>

      <div className="contact-main">
        <div className="contact-form-area">
          {sent ? (
            <div className="success-banner">
              <div className="check">✓</div>
              <h2>Thank You!</h2>
              <p>We&apos;ve received your message and will be in touch within 24–48 business hours.</p>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handle} placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handle} placeholder="Doe" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="jane@example.com" />
              </div>
              <div className="form-group">
                <label>Phone (optional)</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="(212) 000-0000" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select name="subject" value={form.subject} onChange={handle}>
                  <option value="">Select a subject…</option>
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your event vision…" rows={5} />
              </div>
              <button className="form-submit-btn" onClick={submit}>Send Message</button>
            </>
          )}
        </div>

        <aside className="contact-sidebar">
          <h4>Visit Us</h4>
          <p>New York, NY<br />By appointment only</p>

          <h4>Follow Along</h4>
          <div className="sidebar-social">
            <a href="https://www.instagram.com/unwrittenev" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://pinterest.com/unwrittenevents" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://tiktok.com/@unwrittenevents" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>

          <h4>Response Time</h4>
          <p>We typically respond within 24–48 business hours. For urgent inquiries, please call directly.</p>

          <h4>Serving</h4>
          <p>New York City & surrounding areas, with destination events worldwide.</p>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
