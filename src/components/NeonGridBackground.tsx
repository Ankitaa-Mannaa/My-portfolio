"use client";

import { useEffect } from "react";

export default function NeonGridBackground() {
  useEffect(() => {
    let rafId = 0;

    const updateNeonGrid = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, window.scrollY / maxScroll);

      const rotate = progress * 150;
      const shift = progress * 1200;
      const opacity = Math.max(0.14, 0.24 - progress * 0.1);

      const root = document.documentElement;
      root.style.setProperty("--neon-grid-rotate", `${rotate.toFixed(2)}deg`);
      root.style.setProperty("--neon-grid-shift", `${shift.toFixed(2)}px`);
      root.style.setProperty("--neon-grid-opacity", opacity.toFixed(3));
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateNeonGrid);
    };

    updateNeonGrid();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="neon-scroll-bg" aria-hidden="true" />;
}
