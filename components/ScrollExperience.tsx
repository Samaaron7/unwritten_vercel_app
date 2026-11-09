"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** One scroll controller per route. Content stays visible if JS or motion is disabled. */
export default function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposeMotion = () => {};
    let motionSetting = "full";
    try {
      const saved = localStorage.getItem("unwritten-motion");
      if (saved && ["full", "reduced", "system"].includes(saved))
        motionSetting = saved;
    } catch {
      /* Keep full motion enabled when storage is unavailable. */
    }

    function setup() {
      disposeMotion();
      document.documentElement.dataset.motionPreference = motionSetting;
      if (
        motionSetting === "reduced" ||
        (motionSetting !== "full" && preference.matches)
      )
        return;

      const lenis = new Lenis({
        autoRaf: true,
        respectReducedMotion: motionSetting !== "full",
        anchors: false,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        stopInertiaOnNavigate: true,
        prevent: (node) =>
          !!node.closest("dialog, textarea, select, [data-lenis-prevent]"),
      });
      // Intercept the native hash jump so anchor navigation animates instead of snapping.
      function followAnchor(event: MouseEvent) {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        const link =
          event.target instanceof Element
            ? event.target.closest<HTMLAnchorElement>("a[href]")
            : null;
        if (
          !link ||
          link.hasAttribute("download") ||
          (link.target && link.target !== "_self")
        )
          return;
        const url = new URL(link.href, location.href);
        if (
          url.origin !== location.origin ||
          url.pathname !== location.pathname ||
          url.search !== location.search ||
          !url.hash
        )
          return;
        let target: HTMLElement | null;
        try {
          target = document.getElementById(
            decodeURIComponent(url.hash.slice(1)),
          );
        } catch {
          return;
        }
        if (!target) return;
        event.preventDefault();
        if (location.hash !== url.hash)
          history.pushState(history.state, "", url.hash);
        lenis.scrollTo(target, {
          offset: -24,
          duration: 1.1,
          onComplete: () => {
            if (!target.hasAttribute("tabindex"))
              target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          },
        });
      }
      document.addEventListener("click", followAnchor);
      document.documentElement.dataset.scrollExperience = "ready";
      const reveals = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".section-heading, .intro-section > *, .featured-grid > a, .approach-copy > *, .journal-card, .sp-card, .sp-step, .test-card, .story-heading",
        ),
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
      );
      reveals.forEach((element, index) => {
        // Never hide elements already on screen at initialization.
        if (element.getBoundingClientRect().top < innerHeight) return;
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 55}ms`);
        observer.observe(element);
      });

      const parallax = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      let frame = 0;
      function render() {
        frame = 0;
        const maximum = document.documentElement.scrollHeight - innerHeight;
        const progress =
          maximum > 0 ? Math.min(1, Math.max(0, scrollY / maximum)) : 0;
        document.documentElement.style.setProperty(
          "--reading-progress",
          String(progress),
        );
        parallax.forEach((element) => {
          const box = element.getBoundingClientRect();
          if (box.bottom < 0 || box.top > innerHeight) return;
          const distance = (innerHeight / 2 - box.top - box.height / 2) * 0.09;
          element.style.setProperty(
            "--parallax-y",
            `${Math.max(-42, Math.min(42, distance))}px`,
          );
        });
      }
      function schedule() {
        if (!frame) frame = requestAnimationFrame(render);
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      render();

      // The gallery's native modal locks page scroll, including any residual momentum.
      const dialogs = Array.from(document.querySelectorAll("dialog"));
      const modalObserver = new MutationObserver(() => {
        if (dialogs.some((dialog) => dialog.open)) lenis.stop();
        else lenis.start();
      });
      dialogs.forEach((dialog) =>
        modalObserver.observe(dialog, {
          attributes: true,
          attributeFilter: ["open"],
        }),
      );

      disposeMotion = () => {
        document.removeEventListener("click", followAnchor);
        lenis.destroy();
        observer.disconnect();
        modalObserver.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        cancelAnimationFrame(frame);
        reveals.forEach((element) => {
          element.classList.remove("scroll-reveal", "is-visible");
          element.style.removeProperty("--reveal-delay");
        });
        parallax.forEach((element) =>
          element.style.removeProperty("--parallax-y"),
        );
        delete document.documentElement.dataset.scrollExperience;
        document.documentElement.style.removeProperty("--reading-progress");
      };
    }
    function changeMotion(event: Event) {
      const value = (event as CustomEvent<string>).detail;
      if (["full", "reduced", "system"].includes(value)) motionSetting = value;
      setup();
    }
    setup();
    window.addEventListener("unwritten:motion", changeMotion);
    preference.addEventListener("change", setup);
    return () => {
      preference.removeEventListener("change", setup);
      window.removeEventListener("unwritten:motion", changeMotion);
      delete document.documentElement.dataset.motionPreference;
      disposeMotion();
    };
  }, [pathname]);

  return <div className="reading-progress" aria-hidden="true" />;
}
