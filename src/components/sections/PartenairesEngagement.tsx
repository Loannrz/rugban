"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BarChart3, MapPinned, Sparkles } from "lucide-react";

import { siteImages } from "@/data/siteImages";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

const engagementMotifs = [
  {
    id: "marque",
    titre: "Une marque forte et positive",
    texte:
      "Relier vos engagements RSE avec un mouvement visuel immédiatement reconnaissable : sport de contact, élitisme féminin et inclusion urbaine francilienne.",
    icon: Sparkles,
    tags: ["RSE", "Élitisme féminin", "Inclusion urbaine"],
  },
  {
    id: "impact",
    titre: "Données d'impact vérifiables",
    texte:
      "Tableaux suivis tous les quatre mois : jeunes suivis cumulés, départements actifs et diplômes obtenus.",
    icon: BarChart3,
    tags: ["BAFA", "PSC1", "BP JEPS"],
  },
  {
    id: "territoire",
    titre: "Articulation nationale / locale",
    texte:
      "Un lien direct entre vos Directions territoriales Île-de-France et nos clubs partenaires (Bobigny, Stade français, ville de Courbevoie).",
    icon: MapPinned,
    tags: ["Île-de-France", "Clubs pros", "Collectivités"],
  },
] as const;

function EngagementCard({
  motif,
  index,
  reducedMotion,
  narrowMotion,
}: {
  motif: (typeof engagementMotifs)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = motif.icon as LucideIcon;

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#222244] via-[#1a1a2e] to-[#12121f] p-8 transition-colors duration-300 hover:border-white/22 lg:p-9"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/60 to-transparent"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center border border-accent/35 bg-black/30 text-accent">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="font-display text-4xl leading-none text-white/10 transition-colors group-hover:text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-8 flex flex-1 flex-col">
        <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.65rem)] uppercase leading-tight tracking-[0.02em]">
          {motif.titre}
        </h3>
        <p className="mt-5 flex-1 text-sm leading-relaxed text-white/65 lg:text-base">
          {motif.texte}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {motif.tags.map((tag) => (
            <li
              key={tag}
              className="border border-white/15 bg-black/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function PartenairesEngagementSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section
      id="engagement"
      className="section-y relative overflow-hidden bg-navy-deep text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-lime/8 blur-[90px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6 border-b border-white/10 pb-10">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Engagement partenaire" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className={cn(
                "font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.92]",
              )}
            >
              Pourquoi nous appuyer
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-white/60 lg:text-lg"
            >
              Trois leviers concrets pour relier vos objectifs institutionnels ou
              corporate à un réseau sportif francilien reconnu depuis 2006.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[240px] overflow-hidden border border-white/12 sm:min-h-[280px]">
              <Image
                src={siteImages.partenaireRazel.src}
                alt={siteImages.partenaireRazel.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                quality={82}
              />
            </div>
            <div className="relative min-h-[240px] overflow-hidden border border-white/12 sm:min-h-[280px]">
              <Image
                src={siteImages.partenaireSuez.src}
                alt={siteImages.partenaireSuez.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                quality={82}
              />
            </div>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {engagementMotifs.map((motif, index) => (
              <EngagementCard
                key={motif.id}
                motif={motif}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
