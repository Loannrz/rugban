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

import { RugbyBallBackdrop } from "./RugbyBallBackdrop";

type HeroStyledTitleProps = {
  primary: string;
  accent?: string;
  baselinePrefix?: string;
  srOnly: string;
  className?: string;
};

export function splitHeroTitle(title: string) {
  const words = title.trim().split(/\s+/);

  if (words.length <= 1) {
    return { primary: title.trim(), accent: null as string | null };
  }

  const accent = words.pop()!;
  return { primary: words.join(" "), accent };
}

export function HeroStyledTitle({
  primary,
  accent,
  baselinePrefix,
  srOnly,
  className,
}: HeroStyledTitleProps) {
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
        <span className="hero-title__insertion block">{primary}</span>

        {accent ? (
          <div className="hero-title__baseline">
            {baselinePrefix ? (
              <span className="hero-title__parle">{baselinePrefix}</span>
            ) : null}
            <span className="hero-title__rugby">{accent}</span>
          </div>
        ) : null}
      </Reveal>

      <span className="sr-only">{srOnly}</span>
    </motion.h1>
  );
}
