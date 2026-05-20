"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText, Handshake, Mail, Phone } from "lucide-react";

import { CTAButton } from "@/components/ui/CTAButton";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const documentsRequis = [
  "SIRET de l'association",
  "Lettre de patronage",
  "Convention de mécénat",
] as const;

const demarche = [
  {
    icon: Phone,
    label: "01",
    text: "Premier contact téléphonique avec l'équipe développement.",
  },
  {
    icon: Mail,
    label: "02",
    text: "Réception de l'espace sécurisé associatif par mail officiel.",
  },
  {
    icon: FileText,
    label: "03",
    text: "Envoi des documents administratifs via l'espace dédié.",
  },
] as const;

export function PartenairesDevenirSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/20 bg-accent text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-black/10 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-lime/25 blur-[70px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 top-8 font-display text-[clamp(5rem,18vw,12rem)] uppercase leading-none text-black/[0.06]"
      >
        Partenaire
      </div>

      <div className="container-site relative">
        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-stretch lg:gap-12">
            <motion.div variants={fadeUp(motionPrefs)} className="flex flex-col justify-center">
              <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/70">
                <span aria-hidden className="h-[2px] w-10 bg-ink/40" />
                Rejoindre le réseau
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,4rem)] uppercase leading-[0.92]">
                Devenir partenaire
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 lg:text-lg">
                Envoyez vos documents administratifs depuis l&apos;espace sécurisé
                associatif communiqué par mail officiel après premier contact
                téléphonique avec notre équipe.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {documentsRequis.map((doc) => (
                  <li
                    key={doc}
                    className="border border-ink/20 bg-black/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/75"
                  >
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp(motionPrefs)}
              className="relative overflow-hidden border border-ink/15 bg-black p-8 text-white lg:p-10"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.18),transparent_55%)]"
              />

              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-accent/50 bg-accent/15 text-accent">
                  <Handshake aria-hidden className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                    Parcours administratif
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/60">
                    3 étapes simples
                  </p>
                </div>
              </div>

              <ol className="relative mt-8 space-y-5">
                {demarche.map((step) => {
                  const Icon = step.icon;

                  return (
                    <li key={step.label} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 bg-white/[0.04] text-accent">
                        <Icon aria-hidden className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-lime">
                          Étape {step.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/75">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="relative mt-10 border-t border-white/10 pt-8">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Contacter équipe développement
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
