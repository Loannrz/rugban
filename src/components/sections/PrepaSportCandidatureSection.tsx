"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardList,
  FileText,
  FolderOpen,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const candidatureSteps = [
  {
    id: "dossier",
    texte:
      "Construire votre dossier avec votre conseiller Mission Locale / France Travail.",
    icon: FolderOpen,
  },
  {
    id: "motivation",
    texte:
      "Participer au rendez-vous motivation / mise en mouvement encadrée par deux éducateurs permanents.",
    icon: Users,
  },
  {
    id: "cohorte",
    texte:
      "Intégrer la cohorte officielle suivie de deux semaines d'accélération commune avec la promotion sortante.",
    icon: ClipboardList,
  },
] as const;

const documents = [
  {
    id: "affiche",
    anchor: "documents-prepa-affiche",
    titre: "Affiche officielle",
    texte:
      "Version PDF destinée aux salles d'infos jeunes franciliennes. Contient planning typique semaine + contacts permanence.",
    href: "/contact?doc=affiche-prepa-sport",
    cta: "Réceptionner le fichier",
    featured: false,
  },
  {
    id: "brochure",
    anchor: "documents-prepa-brochure",
    titre: "Brochure pédagogique",
    texte:
      "Synthèse à transmettre à vos équipes financières : budget porté collectivement avec ANS / Région / collectivités hôtes franciliennes.",
    href: "/contact?doc=brochure-prepa",
    cta: "Demander la brochure",
    featured: true,
  },
] as const;

function StepCard({
  step,
  index,
  reducedMotion,
  narrowMotion,
}: {
  step: (typeof candidatureSteps)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = step.icon as LucideIcon;

  return (
    <motion.li
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:p-9"
    >
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

      <p className="relative mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
        Étape {index + 1}
      </p>
      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted lg:text-base">
        {step.texte}
      </p>
    </motion.li>
  );
}

export function PrepaSportCandidatureSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[90px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-4">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Candidature" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              Comment déposer votre candidature
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Trois étapes encadrées, en lien avec votre Mission Locale ou
              France Travail, avant l&apos;intégration dans la cohorte
              officielle.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <ol className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {candidatureSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </ol>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.12)}>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {documents.map((doc) => (
              <motion.article
                key={doc.id}
                id={doc.anchor}
                variants={fadeUp(motionPrefs)}
                className={
                  doc.featured
                    ? "relative overflow-hidden border border-accent/45 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10"
                    : "relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black p-8 lg:p-10"
                }
              >
                {doc.featured ? (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,255,0,0.1),transparent_55%)]"
                  />
                ) : null}

                <div className="relative flex items-start gap-4">
                  <span
                    className={
                      doc.featured
                        ? "flex h-11 w-11 items-center justify-center border border-lime/40 bg-black/40 text-lime"
                        : "flex h-11 w-11 items-center justify-center border border-accent/35 bg-black/40 text-accent"
                    }
                  >
                    <FileText aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <p
                      className={
                        doc.featured
                          ? "text-[10px] font-semibold uppercase tracking-[0.28em] text-lime"
                          : "text-[10px] font-semibold uppercase tracking-[0.28em] text-accent"
                      }
                    >
                      Document
                    </p>
                    <h3 className="mt-2 font-display text-xl uppercase leading-tight text-white">
                      {doc.titre}
                    </h3>
                  </div>
                </div>

                <p className="relative mt-6 text-sm leading-relaxed text-white/65 lg:text-base">
                  {doc.texte}
                </p>

                <Link
                  prefetch={false}
                  href={doc.href}
                  className={
                    doc.featured
                      ? "group relative mt-8 inline-flex items-center gap-2 border border-white/25 bg-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10"
                      : "group relative mt-8 inline-flex items-center gap-2 border border-accent/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent/10"
                  }
                >
                  {doc.cta}
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
