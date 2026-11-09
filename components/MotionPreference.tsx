"use client";

import { useEffect, useState } from "react";

export default function MotionPreference() {
  const [value, setValue] = useState("system");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("unwritten-motion");
      if (saved === "full" || saved === "reduced") setValue(saved);
    } catch {
      /* System preference remains available without storage. */
    }
  }, []);
  return (
    <label className="motion-preference">
      <span>Motion</span>
      <select
        aria-label="Motion preference"
        value={value}
        onChange={(event) => {
          const next = event.target.value;
          setValue(next);
          try {
            localStorage.setItem("unwritten-motion", next);
          } catch {
            /* Apply for this page even when storage is unavailable. */
          }
          window.dispatchEvent(
            new CustomEvent("unwritten:motion", { detail: next }),
          );
        }}
      >
        <option value="system">Use device setting</option>
        <option value="full">Full motion</option>
        <option value="reduced">Reduced motion</option>
      </select>
    </label>
  );
}
