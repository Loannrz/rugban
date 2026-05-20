"use client";

import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  startWhen: boolean;
  end: number;
  duration?: number;
};

export function useCountUp({
  startWhen,
  end,
  duration = 1400,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const prefersReducedMotionRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = media.matches;

    const sync = () => {
      prefersReducedMotionRef.current = media.matches;
    };

    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!startWhen) {
      setValue(0);
      return;
    }

    if (prefersReducedMotionRef.current) {
      setValue(end);
      return;
    }

    const startTs = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTs) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [duration, end, startWhen]);

  return value;
}
