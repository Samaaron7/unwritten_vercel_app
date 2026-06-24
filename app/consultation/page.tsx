'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EVENT_TYPES = ['Wedding', 'Bridal Shower', 'Birthday / Milestone', 'Corporate', 'Cultural Event', 'Other'];

export default function ConsultationPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', eventDate: '', details: '' });
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page-container">
      <Header />

      <div className="consult-hero">
        <h1>Free Strategy Call</h1>
        <p>Let&apos;s start with a conversation. Tell us about your vision and we&apos;ll take it from there.</p>
      </div>

      <div className="consult-form-wrap">
        {done ? (
          <div className="success-banner">
            <div className="check">✓</div>
            <h2>You&apos;re on our calendar!</h2>
            <p>We&apos;ll be in touch within 24 hours to confirm your complimentary strategy call. We can&apos;t wait to hear your story.</p>
          </div>
        ) : (
          <>
            <h2>Tell us about your event</h2>
            <div className="form-group">
              <label>Your Name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Jane Doe" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="jane@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="(212) 000-0000" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Event Type</label>
                <select name="eventType" value={form.eventType} onChange={handle}>
                  <option value="">Select…</option>
                  {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Estimated Event Date</label>
                <input name="eventDate" type="date" value={form.eventDate} onChange={handle} />
              </div>
            </div>
            <div className="form-group">
              <label>Tell us about your vision</label>
              <textarea name="details" value={form.details} onChange={handle} placeholder="Share any details, themes, or inspirations you have in mind…" rows={5} />
            </div>
            <button className="form-submit-btn" onClick={() => setDone(true)}>Request My Free Call</button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
