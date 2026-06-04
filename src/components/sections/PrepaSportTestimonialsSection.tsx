"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

function TestimonialCard({
  item,
  index,
  reducedMotion,
  narrowMotion,
}: {
  item: (typeof testimonials)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="relative flex h-full min-h-[280px] flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:min-h-[300px] lg:p-9"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.08),transparent_55%)]"
      />
      <Quote aria-hidden className="relative h-8 w-8 text-accent/80" strokeWidth={1.5} />

      <blockquote className="relative mt-6 flex-1">
        <p className="text-lg leading-relaxed text-white lg:text-xl">
          « {item.quote} »
        </p>
      </blockquote>

      <footer className="relative mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-black/50 font-display text-lg text-accent"
        >
          {item.initials}
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            {item.author}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-lime">
            {item.role}
          </p>
        </div>
        <span className="ml-auto font-display text-3xl leading-none text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </footer>
    </motion.article>
  );
}

export function PrepaSportTestimonialsSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-lime/6 blur-[100px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="w-full space-y-4">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Parcours & relais" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              Ils en parlent
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Des jeunes franciliens racontent comment la Prépa Sport leur a
              redonné structure, confiance et une trajectoire professionnelle
              concrète.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal
          variants={staggerContainer(reducedMotion, 0.12)}
          className="grid items-stretch gap-6 md:grid-cols-2 lg:gap-8"
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.id}
              item={item}
              index={index}
              reducedMotion={reducedMotion}
              narrowMotion={narrowMotion}
            />
          ))}
        </ViewportReveal>
      </div>
    </section>
  );
}
