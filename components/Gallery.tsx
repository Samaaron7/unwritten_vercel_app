"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import EventImage from "./EventImage";
import { photos } from "../lib/photos";
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visible = photos.filter(
    (p) => filter === "All" || p.category === filter,
  );
  useEffect(() => {
    if (selected !== null) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    } else if (dialog.current?.open) {
      dialog.current.close();
      trigger.current?.focus();
    }
  }, [selected]);
  function move(step: number) {
    setSelected((i) =>
      i === null ? null : (i + step + visible.length) % visible.length,
    );
  }
  const current = selected === null ? null : visible[selected];
  return (
    <>
      <div className="gallery-toolbar" aria-label="Filter photographs">
        {["All", "Ceremony", "Reception"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setSelected(null);
            }}
          >
            {f}
          </button>
        ))}
        <p aria-live="polite">{visible.length} photographs</p>
      </div>
      <div className="photo-grid">
        {visible.map((p, i) => (
          <button
            className="photo-tile"
            key={p.src}
            aria-label={`View ${p.label}, photo ${i + 1}`}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setSelected(i);
            }}
          >
            <EventImage src={p.src} alt={p.alt} />
            <span>
              {p.category}
              <span aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Event photo viewer"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
      >
        {current && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Close photo viewer"
            >
              ×
            </button>
            <div className="lightbox-image">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="95vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="lightbox-controls">
              <button onClick={() => move(-1)} aria-label="Previous photo">
                ←
              </button>
              <p aria-live="polite">
                {current.category} · {(selected ?? 0) + 1} / {visible.length}
              </p>
              <button onClick={() => move(1)} aria-label="Next photo">
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
