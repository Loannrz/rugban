"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Handshake,
  Landmark,
  MapPinned,
  Network,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { siteAudiences } from "@/data/programs";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const audienceIcons: Record<
  (typeof siteAudiences)[number]["id"],
  LucideIcon
> = {
  jeunesse: Users,
  institutions: Landmark,
  collectivites: MapPinned,
  "france-travail": Briefcase,
  "missions-locales": Network,
  partenaires: Handshake,
  jeunes: UserRound,
};

type Audience = (typeof siteAudiences)[number];

function AudienceCard({
  audience,
  index,
  reducedMotion,
  narrowMotion,
}: {
  audience: Audience;
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = audienceIcons[audience.id];

  return (
    <motion.li
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-7 transition-colors hover:border-white/22 lg:p-8"
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
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/35 bg-black/40 text-accent">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="font-display text-3xl leading-none text-white/10 transition-colors group-hover:text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-7 font-display text-[clamp(1rem,2vw,1.25rem)] uppercase leading-tight tracking-[0.02em]">
        {audience.label}
      </h3>
      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted lg:text-[15px]">
        {audience.text}
      </p>
    </motion.li>
  );
}

export function NosActionsAudiencesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/3 h-48 w-48 rounded-full bg-lime/5 blur-[90px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-16">
        <ViewportReveal staggerChildren>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <motion.div
              variants={fadeUp(motionPrefs)}
              className="space-y-5 lg:col-span-5"
            >
              <SectionLabel label="Publics visés" />
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[0.95]">
                À qui s&apos;adresse le site
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp(motionPrefs)}
              className="space-y-5 lg:col-span-7"
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-[15px]">
                Centres sociaux, maisons de quartier, institutions, collectivités,
                partenaires et jeunes des quartiers : des actions citoyennes
                gratuites autour des valeurs du rugby.
              </p>
              <p className="inline-flex border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                7 publics · partenaires &amp; territoires
              </p>
            </motion.div>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.08)}>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {siteAudiences.map((audience, index) => (
              <AudienceCard
                key={audience.id}
                audience={audience}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </ul>
        </ViewportReveal>
      </div>
    </section>
  );
}
