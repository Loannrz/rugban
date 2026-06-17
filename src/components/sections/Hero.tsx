"use client";

import { motion, useReducedMotion } from "framer-motion";

import { heroStats } from "@/data/stats";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { HeroOverlapTitle } from "../ui/HeroOverlapTitle";
import { CountUpNumber } from "../ui/CountUp";
import { CTAButton } from "../ui/CTAButton";
import { ViewportReveal } from "../ui/ViewportReveal";

export function HeroSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="relative isolate flex min-h-[100dvh] min-h-screen flex-col overflow-x-clip bg-black text-white">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,107,53,0.08),transparent_55%)]"
      />

      <div className="container-site relative z-10 flex min-h-[100dvh] min-h-screen flex-col pt-[4.75rem] lg:block lg:pt-[5.25rem]">
        <div className="relative z-20 shrink-0 text-center lg:absolute lg:inset-x-0 lg:top-[5.25rem] lg:pl-8 lg:text-left xl:pl-10">
          <ViewportReveal immediate className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[11px]">
              Association loi 1901 • Depuis 2006 • Île-de-France
            </span>
          </ViewportReveal>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-visible px-1 py-6 sm:py-8 lg:pointer-events-none lg:absolute lg:inset-0 lg:px-0 lg:py-0">
          <HeroOverlapTitle className="pointer-events-auto relative z-10 w-full max-w-full text-center lg:-translate-y-[6vh]" />
        </div>

        <div className="relative z-20 mt-auto shrink-0 lg:absolute lg:inset-x-0 lg:bottom-0">
          <div className="mb-4 space-y-3 sm:mb-5 sm:space-y-4 lg:pl-8 xl:pl-10">
            <ViewportReveal>
              <p className="mx-auto max-w-[520px] text-center text-sm leading-snug text-muted sm:text-[15px] lg:mx-0 lg:text-left">
                Depuis 2006, nous utilisons le sport comme levier d&apos;insertion
                sociale et professionnelle pour la jeunesse francilienne.
              </p>
            </ViewportReveal>

            <ViewportReveal staggerChildren threshold={0.25}>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <motion.div
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  className="w-full sm:min-w-[180px] sm:flex-1 sm:flex-none lg:w-auto"
                >
                  <CTAButton
                    href="/nos-actions"
                    variant="ghost"
                    className="w-full border-white text-white sm:w-auto"
                  >
                    Nos actions
                  </CTAButton>
                </motion.div>
              </div>
            </ViewportReveal>
          </div>

          <ViewportReveal staggerChildren threshold={0.35} delayChildren={0.05}>
            <div
              id="hero-chiffres"
              className="scroll-mt-4 grid w-full gap-y-8 border-y border-white/15 px-4 py-6 sm:px-0 sm:py-8 lg:relative lg:left-1/2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-y-0 lg:divide-white/20 lg:divide-dashed lg:w-screen lg:max-w-none lg:-translate-x-1/2"
            >
              {heroStats.map((stat) => (
                <motion.article
                  key={stat.id}
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  className="flex flex-col items-center gap-2 px-4 text-center sm:gap-3 sm:px-6 lg:items-start lg:pl-6 lg:text-left lg:first:pl-6"
                >
                  <span className="sr-only">{stat.label}</span>
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    ariaLabel={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
                    className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none text-white"
                  />
                  <p className="max-w-[220px] text-[10px] uppercase tracking-[0.22em] text-muted sm:text-xs sm:tracking-[0.24em]">
                    {stat.label}
                  </p>
                </motion.article>
              ))}
            </div>
          </ViewportReveal>
        </div>
      </div>
    </section>
  );
}
