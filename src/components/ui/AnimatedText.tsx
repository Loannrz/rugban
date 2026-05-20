"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroWordContainer,
  letterRevealVariants,
  letterStaggerDelay,
  slideUpReveal,
} from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export type SlidingWord = {
  text: string;
  tone?: "default" | "lime" | "muted";
};

type SlidingWordsProps = {
  words: SlidingWord[];
  className?: string;
};

export function SlidingWordsHero({ words, className }: SlidingWordsProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
    rootMargin: "0px",
  });

  const shouldReveal = reducedMotion || inView;
  const wordMotion = slideUpReveal({ reducedMotion, narrowMotion });

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col items-center gap-2 lg:items-start", className)}
      variants={heroWordContainer(reducedMotion)}
      initial="hidden"
      animate={shouldReveal ? "visible" : "hidden"}
    >
      {words.map((word) => (
        <div key={word.text} className="overflow-hidden pb-2 lg:pb-3">
          {reducedMotion ? (
            <span
              className={cn(
                "inline-flex font-display text-clamp-h1 leading-[0.9]",
                word.tone === "lime"
                  ? "text-lime"
                  : word.tone === "muted"
                    ? "text-muted"
                    : "text-white",
              )}
            >
              {word.text.toUpperCase()}
            </span>
          ) : (
            <motion.span
              variants={wordMotion}
              className={cn(
                "inline-flex font-display text-clamp-h1 leading-[0.9]",
                word.tone === "lime"
                  ? "text-lime"
                  : word.tone === "muted"
                    ? "text-muted"
                    : "text-white",
              )}
            >
              {word.text.toUpperCase()}
            </motion.span>
          )}
        </div>
      ))}
    </motion.div>
  );
}

type AnimatedLettersProps = {
  text: string;
  className?: string;
};

export function AnimatedLettersHeading({
  text,
  className,
}: AnimatedLettersProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const letters = Array.from(text);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });
  const shouldReveal = reducedMotion || inView;

  if (reducedMotion) {
    return (
      <span className={cn("font-display text-clamp-h2", className)}>{text}</span>
    );
  }

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap gap-px", className)}>
      {letters.map((letter, index) => (
        <span key={`${letter}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            variants={letterRevealVariants({ reducedMotion, narrowMotion })}
            initial="hidden"
            animate={shouldReveal ? "visible" : "hidden"}
            transition={{ delay: index * letterStaggerDelay(reducedMotion) }}
            className="inline-flex py-px font-display text-clamp-h2"
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
