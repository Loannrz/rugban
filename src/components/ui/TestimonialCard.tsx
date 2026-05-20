"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import type { Testimonial as TestimonialType } from "@/data/testimonials";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: TestimonialType;
  imageSrc?: string;
  invert?: boolean;
};

export function TestimonialCard({
  testimonial,
  imageSrc,
  invert,
}: TestimonialCardProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <motion.figure
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className={cn(
        "relative overflow-hidden border border-white/14 bg-black/70 p-10",
        invert && "bg-white border-black/10 text-ink",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-12 font-display text-[160px] leading-none text-accent/10 lg:text-[200px]"
      >
        ”
      </span>
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="relative h-52 w-full max-w-[220px] border border-accent/35 bg-muted/10">
          {imageSrc ? (
            <Image
              fill
              src={imageSrc}
              alt={`Portrait représentatif de ${testimonial.author}`}
              className="object-cover grayscale"
              sizes="220px"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-display text-6xl uppercase text-accent/40">
              {testimonial.initials}
            </div>
          )}
        </div>
        <div className="space-y-6">
          <blockquote className="text-lg lg:text-xl">
            « {testimonial.quote} »
          </blockquote>
          <figcaption className="text-sm uppercase tracking-[0.26em] text-muted">
            {testimonial.author} —{" "}
            <span className={invert ? "text-ink/80" : "text-accent"}>
              {testimonial.role}
            </span>
          </figcaption>
        </div>
      </div>
    </motion.figure>
  );
}
