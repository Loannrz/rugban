"use client";

import { motion, useReducedMotion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { SectionLabel } from "../ui/SectionLabel";
import { TestimonialCard } from "../ui/TestimonialCard";
import { ViewportReveal } from "../ui/ViewportReveal";

const visuals = [
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
] as const;

export function TemoignagesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y bg-black text-white">
      <div className="container-site space-y-14">
        <ViewportReveal staggerChildren>
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel label="ils en parlent" />
          </motion.div>
          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="font-display text-clamp-h2 uppercase"
          >
            Parcours vécus après la Prépa Sport
          </motion.h2>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.05)}>
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={item.id} testimonial={item} imageSrc={visuals[idx]} />
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
