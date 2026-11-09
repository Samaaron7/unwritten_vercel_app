"use client";

import { useRef } from "react";
import EventImage from "./EventImage";

const moments = [
  {
    src: "/images/reception-0327.webp",
    label: "A table set for unforgettable moments.",
    alt: "An ivory wedding cake surrounded by flowers and candlelight on a decorated table",
  },
  {
    src: "/images/wedding-0368.webp",
    label: "A celebration that carries your name.",
    alt: "Personalized gold wedding signage reflecting the couple’s story",
  },
  {
    src: "/images/reception-0316.webp",
    label: "The quiet moments before it all begins.",
    alt: "Neatly arranged ivory place cards waiting to welcome wedding guests",
  },
  {
    src: "/images/reception-0155.webp",
    label: "A little warmth, a lasting memory.",
    alt: "A warm fireplace glowing at the wedding reception venue",
  },
  {
    src: "/images/wedding-0466.webp",
    label: "Every detail, full of feeling.",
    alt: "Three softly glowing candles at a wedding celebration",
  },
];

function reduceMotion() {
  const mode = document.documentElement.dataset.motionPreference;
  return (
    mode === "reduced" ||
    (mode !== "full" && matchMedia("(prefers-reduced-motion: reduce)").matches)
  );
}

export default function MomentsStrip() {
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    x: number;
    start: number;
    moved: boolean;
    lastX: number;
    time: number;
    velocity: number;
  } | null>(null);
  function move(direction: number) {
    const element = rail.current;
    if (!element) return;
    element.scrollBy({
      left: direction * (element.clientWidth * 0.75),
      behavior: reduceMotion() ? "instant" : "smooth",
    });
  }
  return (
    <section className="moments-section" id="celebration">
      <div className="section-heading story-heading">
        <div>
          <p className="eyebrow">MORE THAN A BEAUTIFUL ROOM</p>
          <h2>
            It’s how you <em>feel.</em>
          </h2>
        </div>
        <div className="rail-controls">
          <span>Drag to explore</span>
          <button
            type="button"
            aria-label="Previous celebration moments"
            onClick={() => move(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next celebration moments"
            onClick={() => move(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={rail}
        className="moments-rail"
        data-lenis-prevent
        tabIndex={0}
        role="region"
        aria-label="Celebration moments. Swipe, drag, or use arrow keys to explore."
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          drag.current = {
            x: event.clientX,
            start: event.currentTarget.scrollLeft,
            moved: false,
            lastX: event.clientX,
            time: event.timeStamp,
            velocity: 0,
          };
        }}
        onPointerMove={(event) => {
          const state = drag.current;
          if (!state) return;
          const distance = event.clientX - state.x;
          const elapsed = event.timeStamp - state.time;
          if (elapsed > 0)
            state.velocity = (event.clientX - state.lastX) / elapsed;
          state.lastX = event.clientX;
          state.time = event.timeStamp;
          if (!state.moved && Math.abs(distance) > 5) {
            state.moved = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.classList.add("is-dragging");
          }
          if (state.moved) {
            event.preventDefault();
            event.currentTarget.scrollLeft = state.start - distance;
          }
        }}
        onPointerUp={(event) => {
          const state = drag.current;
          drag.current = null;
          if (
            state?.moved &&
            event.timeStamp - state.time < 100 &&
            !reduceMotion()
          )
            event.currentTarget.scrollBy({
              left: Math.max(-500, Math.min(500, -state.velocity * 180)),
              behavior: "smooth",
            });
          event.currentTarget.classList.remove("is-dragging");
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={(event) => {
          drag.current = null;
          event.currentTarget.classList.remove("is-dragging");
        }}
        onPointerLeave={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
            drag.current = null;
            event.currentTarget.classList.remove("is-dragging");
          }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {moments.map((moment) => (
          <figure className="moment-card" key={moment.src}>
            <EventImage
              src={moment.src}
              alt={moment.alt}
              sizes="(max-width: 768px) 85vw, 55vw"
            />
            <figcaption>{moment.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
