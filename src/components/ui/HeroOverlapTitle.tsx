"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  heroWordContainer,
  slideUpReveal,
} from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

const RUGBY_BALL_BACKDROP = "/hero/rugby-ball-backdrop.png";

type HeroOverlapTitleProps = {
  className?: string;
};

function RugbyBallBackdrop() {
  return (
    <Image
      src={RUGBY_BALL_BACKDROP}
      alt=""
      width={328}
      height={269}
      priority
      aria-hidden
      className="hero-title__ball"
    />
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
