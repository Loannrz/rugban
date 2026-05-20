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

function RugbyBallBackdrop() {
  return (
    <svg
      viewBox="0 0 260 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-title__ball"
      aria-hidden
    >
      <path
        d="M12 60 C48 4 212 4 248 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 60 C48 116 212 116 248 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M130 14 C138 60 122 60 130 106"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 60 C38 22 88 10 130 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 60 C38 98 88 110 130 106"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M248 60 C222 22 172 10 130 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M248 60 C222 98 172 110 130 106"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
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
      <RugbyBallBackdrop />

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
