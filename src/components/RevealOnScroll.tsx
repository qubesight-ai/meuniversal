import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Gently fades in titles and sections as they enter the viewport. */
export function RevealOnScroll() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll<HTMLElement>("main section, main h1, main h2, .reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal-pending");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
