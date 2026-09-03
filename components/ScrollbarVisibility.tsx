"use client";

import { useEffect } from "react";

const HIDE_DELAY_MS = 700;

export default function ScrollbarVisibility() {
  useEffect(() => {
    const root = document.documentElement;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showScrollbar = () => {
      root.dataset.scrolling = "true";
      clearTimeout(hideTimer);

      hideTimer = setTimeout(() => {
        delete root.dataset.scrolling;
      }, HIDE_DELAY_MS);
    };

    window.addEventListener("scroll", showScrollbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", showScrollbar);
      clearTimeout(hideTimer);
      delete root.dataset.scrolling;
    };
  }, []);

  return null;
}
