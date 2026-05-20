"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, ClipboardCheck, MapPinned, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const advantagesPrepaSport = [
  {
    id: "tuteur",
    titre: "Tuteur projet dédié",
    texte:
      "Une cellule associative suit chaque dossier jusqu'aux validations certifiantes et aux épreuves pratiques.",
    icon: ClipboardCheck,
  },
  {
    id: "terrain",
    titre: "Immersions terrain",
    texte:
      "Club professionnel, événements majeurs, rencontres techniques : mise en mouvement concrète hebdomadaire.",
    icon: MapPinned,
  },
  {
    id: "mission-locale",
    titre: "Relais Mission Locale",
    texte:
      "Chaque candidature passe par vos réseaux officiels franciliens ; nous nous synchronisons lors des panels collectifs.",
    icon: Building2,
  },
  {
    id: "pairs",
    titre: "Gouvernance par les pairs",
    texte:
      "Une promotion accompagne les suivantes tant sur la partie sportive que sur la mise en régularité scolaire / pro.",
    icon: Users,
  },
] as const;

function AdvantageCard({
  bloc,
  index,
  reducedMotion,
  narrowMotion,
}: {
  bloc: (typeof advantagesPrepaSport)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = bloc.icon as LucideIcon;

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 transition-colors hover:border-white/22 lg:p-9"
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
        <span className="flex h-11 w-11 items-center justify-center border border-accent/35 bg-black/40 text-accent">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="font-display text-4xl leading-none text-white/10 transition-colors group-hover:text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-8 font-display text-[clamp(1.15rem,2.2vw,1.5rem)] uppercase leading-tight tracking-[0.02em]">
        {bloc.titre}
      </h3>
      <p className="relative mt-5 flex-1 text-sm leading-relaxed text-muted lg:text-base">
        {bloc.texte}
      </p>
    </motion.article>
  );
}

export function PrepaSportAdvantagesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-lime/6 blur-[90px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-4">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Accompagnement" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              Un dispositif structuré autour de vous
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Quatre piliers pour sécuriser le parcours : suivi individuel,
              expériences terrain, relais institutionnels et entraide entre
              promotions.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {advantagesPrepaSport.map((bloc, index) => (
              <AdvantageCard
                key={bloc.id}
                bloc={bloc}
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
