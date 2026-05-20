"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const diameterRest = 12;
const diameterHover = 40;

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hoverTarget, setHoverTarget] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const smoothX = useSpring(pointerX, { damping: 30, stiffness: 320 });
  const smoothY = useSpring(pointerY, { damping: 30, stiffness: 320 });

  useEffect(() => {
    function evaluatePointers() {
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      const widescreen = window.matchMedia("(min-width: 1024px)").matches;
      const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const shouldEnable = finePointer && widescreen && !reducedMotion;
      setActive(shouldEnable);
      document.body.style.cursor = shouldEnable ? "none" : "";
    }

    evaluatePointers();

    const handleMove = (event: MouseEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setHoverTarget(
        Boolean(
          (event.target as HTMLElement | null)?.closest(
            'a[href], button, [role="button"], label, summary',
          ),
        ),
      );
    };

    window.addEventListener("pointermove", handleMove);

    const mqs = ["(pointer: fine)", "(min-width: 1024px)", "(prefers-reduced-motion: reduce)"].map(
      (query) => window.matchMedia(query),
    );

    mqs.forEach((mq) => mq.addEventListener("change", evaluatePointers));

    return () => {
      window.removeEventListener("pointermove", handleMove);
      mqs.forEach((mq) => mq.removeEventListener("change", evaluatePointers));
      document.body.style.cursor = "";
    };
  }, [pointerX, pointerY]);

  if (!active) {
    return null;
  }

  const diameter = hoverTarget ? diameterHover : diameterRest;
  const color = hoverTarget
    ? "var(--accent-orange)"
    : "var(--white, #f5f5f5)";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[320]"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.span
        className="block origin-center rounded-full shadow-[0_0_40px_rgba(0,0,0,.45)]"
        style={{ x: "-50%", y: "-50%", mixBlendMode: "difference" }}
        animate={{
          width: diameter,
          height: diameter,
          opacity: hoverTarget ? 0.92 : 0.75,
          backgroundColor: color,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
