"use client";
import { useState } from "react";
export default function InquiryForm({
  consultation = false,
}: {
  consultation?: boolean;
}) {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n\n");
    setDraft(body);
    setCopied(false);
  }
  const subject = consultation
    ? "Complimentary consultation request"
    : "Event inquiry";
  return (
    <form
      onSubmit={submit}
      onChange={() => {
        setDraft("");
        setCopied(false);
      }}
      className="inquiry-form"
    >
      <h2>{consultation ? "Tell us about your event" : "Send us a message"}</h2>
      <p className="form-intro">
        {consultation
          ? "Share a little about your celebration. We’ll arrange a time to connect."
          : "We’d love to hear what you have in mind."}{" "}
        This form prepares an email for you to send.
      </p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="inquiry-name">Your name *</label>
          <input
            id="inquiry-name"
            name="Name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry-email">Email *</label>
          <input
            id="inquiry-email"
            name="Email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="inquiry-phone">Phone (optional)</label>
          <input
            id="inquiry-phone"
            name="Phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry-type">Event type *</label>
          <select id="inquiry-type" name="Event type" required defaultValue="">
            <option value="" disabled>
              Select your celebration
            </option>
            {[
              "Wedding",
              "Bridal shower",
              "Birthday / milestone",
              "Corporate event",
              "Cultural event",
              "Other",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inquiry-date">Estimated event date (optional)</label>
        <input id="inquiry-date" type="date" name="Event date" />
      </div>
      <div className="form-group">
        <label htmlFor="inquiry-details">Your vision *</label>
        <textarea
          id="inquiry-details"
          name="Details"
          required
          rows={5}
          maxLength={4000}
          placeholder="Your venue, guest count, ideas, and anything that matters to you…"
        />
      </div>
      <button className="form-submit-btn" type="submit">
        Prepare my {consultation ? "consultation request" : "message"} ↗
      </button>
      <p className="form-note">
        Your details are used to respond to your inquiry. A consultation request
        does not confirm a booking.
      </p>
      {draft && (
        <section className="draft-panel" aria-label="Email draft">
          <h3>Email draft ready</h3>
          <p role="status">
            Your message has not been sent. Open it in your email app and send
            it to{" "}
            <a href="mailto:unwrittenev@gmail.com">unwrittenev@gmail.com</a>, or
            copy it into your email service.
          </p>
          <pre>{draft}</pre>
          <div className="draft-actions">
            <a
              className="button"
              href={`mailto:unwrittenev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}
            >
              Open email app ↗
            </a>
            <button
              type="button"
              className="copy-button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${subject}\n\n${draft}`);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? "Copied" : "Copy message"}
            </button>
          </div>
        </section>
      )}
    </form>
  );
}
