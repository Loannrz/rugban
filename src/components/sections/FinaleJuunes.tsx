"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, GraduationCap, Route, Sparkles } from "lucide-react";

import { siteImages } from "@/data/siteImages";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { CTAButton } from "../ui/CTAButton";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

const prepaModules = [
  { label: "Sports", hours: 126 },
  { label: "Professions", hours: 82 },
  { label: "Socio-éducation", hours: 176 },
] as const;

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sparkles,
    title: "100% gratuit",
    text: "Parcours intégralement pris en charge.",
  },
  {
    icon: GraduationCap,
    title: "Diplômes reconnus",
    text: "BAFA, PSC1 et socle BP JEPS.",
  },
  {
    icon: Route,
    title: "Terrain concret",
    text: "Clubs pros, événements et mises en situation.",
  },
];

export function FinaleJuunesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_50%,rgba(212,255,0,0.14),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(255,107,53,0.1),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/35 to-transparent"
      />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <ViewportReveal staggerChildren className="space-y-10 lg:col-span-7">
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel
              label="Prépa sport - session ouverte"
              className="text-lime [&>span:first-child]:bg-lime"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="max-w-2xl font-display text-[clamp(2.5rem,6vw,5.5rem)] uppercase leading-[0.92] tracking-[0.03em]"
          >
            Tu as entre{" "}
            <span className="text-lime">16 et 25 ans</span>&nbsp;?
          </motion.h2>

          <motion.p
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            Rejoins la prochaine cohorte francilienne : un parcours structuré,
            humain et orienté emploi, avec un accompagnement jusqu&apos;aux
            validations certifiantes.
          </motion.p>

          <motion.ul
            variants={staggerContainer(reducedMotion, 0.08)}
            className="grid gap-4 sm:grid-cols-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.title}
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  className="border border-white/12 bg-white/[0.03] p-4 backdrop-blur-sm"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center border border-lime/35 bg-lime/10 text-lime">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <CTAButton href="/prepa-sport" className="min-w-[240px]">
              Candidater maintenant
              <ArrowRight className="h-4 w-4" aria-hidden />
            </CTAButton>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Tu peux aussi te faire accompagner par ta Mission Locale ou France
              Travail avant de déposer ton dossier.
            </p>
          </motion.div>
        </ViewportReveal>

        <ViewportReveal
          variants={fadeUp({ reducedMotion, narrowMotion })}
          className="space-y-6 lg:col-span-5"
        >
          <div className="relative min-h-[220px] overflow-hidden border border-lime/35 lg:min-h-[260px]">
            <Image
              src={siteImages.prepaSportSession.src}
              alt={siteImages.prepaSportSession.alt}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              quality={82}
            />
          </div>

          <article className="relative overflow-hidden border border-lime/45 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,255,0,0.16),transparent_55%)]"
            />
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-lime via-accent to-transparent"
            />

            <div className="relative space-y-8">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime">
                  Session suivante
                </span>
                <span className="font-display text-5xl leading-none text-lime/20">
                  16→25
                </span>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                  Parcours certifiant
                </p>
                <p className="mt-3 font-display text-4xl uppercase leading-none text-white">
                  384 heures
                </p>
                <p className="mt-2 text-sm text-muted">
                  Trois blocs complémentaires sur 5 mois.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {prepaModules.map((mod) => (
                  <div
                    key={mod.label}
                    className="border border-white/15 bg-black/35 px-3 py-4 text-center"
                  >
                    <p className="font-display text-2xl leading-none text-lime">
                      {mod.hours}
                      <span className="text-sm">h</span>
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-muted">
                      {mod.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {["BAFA", "PSC1", "BP JEPS"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </ViewportReveal>
      </div>
    </section>
  );
}
