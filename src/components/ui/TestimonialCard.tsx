"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Testimonial as TestimonialType } from "@/data/testimonials";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: TestimonialType;
  index?: number;
  featured?: boolean;
};

export function TestimonialCard({
  testimonial,
  index = 0,
  featured = false,
}: TestimonialCardProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.figure
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className={cn(
        "group relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black",
        "transition-colors duration-500 hover:border-accent/35",
        featured ? "lg:col-span-2" : "",
      )}
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-white/10 transition-colors duration-500 group-hover:bg-accent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 font-display text-[7rem] leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-accent/10 lg:text-[9rem]"
      >
        {displayIndex}
      </div>

      <div className="relative z-10 space-y-8 p-8 text-left lg:p-10">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
          <span aria-hidden className="h-px w-8 bg-accent/70" />
          Témoignage {displayIndex}
        </span>

        <blockquote className="max-w-3xl text-left text-[clamp(1.125rem,2.2vw,1.45rem)] leading-relaxed text-white/92">
          <span
            aria-hidden
            className="mr-1 font-display text-4xl leading-none text-accent/80"
          >
            «
          </span>
          {testimonial.quote}
          <span
            aria-hidden
            className="ml-1 font-display text-4xl leading-none text-accent/80"
          >
            »
          </span>
        </blockquote>

        <figcaption className="flex flex-wrap items-center justify-start gap-4 border-t border-white/10 pt-6 text-left">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
              {testimonial.author}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
              Parcours Prépa Sport
            </p>
          </div>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {testimonial.role}
          </span>
        </figcaption>
      </div>
    </motion.figure>
  );
}
