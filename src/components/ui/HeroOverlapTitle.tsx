"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  heroWordContainer,
  slideUpReveal,
} from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

type HeroOverlapTitleProps = {
  className?: string;
};

function RugbyBallBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse
        cx="60"
        cy="42"
        rx="52"
        ry="34"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-lime/70"
      />
      <path
        d="M22 42c10-18 24-24 32-24s22 6 32 24c-10 18-24 24-32 24s-22-6-32-24Z"
        stroke="currentColor"
        strokeWidth="1.25"
        className="text-white/40"
      />
      <path
        d="M98 42c-10 18-24 24-32 24s-22-6-32-24"
        stroke="currentColor"
        strokeWidth="1.25"
        className="text-white/25"
      />
    </svg>
  );
}

export function HeroOverlapTitle({ className }: HeroOverlapTitleProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const wordMotion = slideUpReveal({ reducedMotion, narrowMotion });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const shouldReveal = reducedMotion || inView;

  const Reveal = ({
    children,
    className: revealClass,
    delay = 0,
  }: {
    children: ReactNode;
    className?: string;
    delay?: number;
  }) =>
    reducedMotion ? (
      <div className={revealClass}>{children}</div>
    ) : (
      <motion.div
        variants={wordMotion}
        transition={{ delay }}
        className={revealClass}
      >
        {children}
      </motion.div>
    );

  return (
    <motion.h1
      ref={ref}
      className={cn("hero-title w-full select-none text-center", className)}
      variants={heroWordContainer(reducedMotion)}
      initial="hidden"
      animate={shouldReveal ? "visible" : "hidden"}
    >
      <div className="hero-title__texture" aria-hidden />

      <div className="hero-title__ball-wrap" aria-hidden>
        <RugbyBallBackdrop className="hero-title__ball" />
      </div>

      <Reveal className="hero-title__stage overflow-visible">
        <span className="hero-title__insertion block">L&apos;insertion</span>

        <div className="hero-title__baseline">
          <span className="hero-title__parle">par le</span>
          <span className="hero-title__rugby">rugby</span>
        </div>
      </Reveal>

      <span className="sr-only">L&apos;insertion par le rugby</span>
    </motion.h1>
  );
}
