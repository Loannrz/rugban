"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { siteConfig } from "@/data/navigation";
import { fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const contactChannels = [
  {
    id: "phone",
    label: "Téléphone",
    title: "Appelez-nous",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    hint: "Réponse directe de l'équipe permanente.",
    icon: Phone,
    accent: "accent" as const,
  },
  {
    id: "email",
    label: "Courriel",
    title: "Écrivez-nous",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    hint: "Jeune, structure ou entreprise — décrivez votre demande.",
    icon: Mail,
    accent: "lime" as const,
  },
] as const;

type ContactSectionProps = {
  mapSrc: string;
  adresse: string;
};

export function ContactSection({ mapSrc, adresse }: ContactSectionProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-20 h-56 w-56 rounded-full bg-lime/6 blur-[80px]"
      />

      <div className="container-site relative grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-12">
        <ViewportReveal
          variants={staggerContainer(reducedMotion, 0.1)}
          className="space-y-8"
        >
          <motion.div variants={fadeUp(motionPrefs)} className="max-w-xl space-y-4">
            <SectionLabel label="Nous joindre" />
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]">
              Contact direct
            </h2>
            <p className="text-base leading-relaxed text-muted lg:text-lg">
              Pas de formulaire : appelez ou écrivez directement à l&apos;équipe
              Rugby Urban Attitude pour toute question sur nos programmes,
              partenariats ou candidatures.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.div key={channel.id} variants={fadeUp(motionPrefs)}>
                  <Link
                    prefetch={false}
                    href={channel.href}
                    className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-7 transition-colors hover:border-white/25 lg:p-8"
                  >
                    <div
                      aria-hidden
                      className={
                        channel.accent === "accent"
                          ? "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.1),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100"
                          : "absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,255,0,0.08),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100"
                      }
                    />
                    <div
                      aria-hidden
                      className={
                        channel.accent === "accent"
                          ? "absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-accent/50 to-transparent"
                          : "absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-lime via-lime/50 to-transparent"
                      }
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <span
                        className={
                          channel.accent === "accent"
                            ? "flex h-11 w-11 items-center justify-center border border-accent/40 bg-black/50 text-accent"
                            : "flex h-11 w-11 items-center justify-center border border-lime/40 bg-black/50 text-lime"
                        }
                      >
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <span className="font-display text-4xl leading-none text-white/10 transition-colors group-hover:text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mt-8">
                      <p
                        className={
                          channel.accent === "accent"
                            ? "text-[10px] font-semibold uppercase tracking-[0.28em] text-accent"
                            : "text-[10px] font-semibold uppercase tracking-[0.28em] text-lime"
                        }
                      >
                        {channel.label}
                      </p>
                      <p className="mt-2 font-display text-lg uppercase tracking-[0.04em] text-white">
                        {channel.title}
                      </p>
                      <p
                        className={
                          channel.accent === "accent"
                            ? "mt-4 break-all font-display text-[clamp(1.35rem,3vw,1.85rem)] uppercase leading-none text-white transition-colors group-hover:text-accent"
                            : "mt-4 break-all font-display text-[clamp(1.15rem,2.5vw,1.65rem)] uppercase leading-none text-white transition-colors group-hover:text-lime"
                        }
                      >
                        {channel.value}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {channel.hint}
                      </p>
                    </div>

                    <span
                      aria-hidden
                      className="relative mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 transition-colors group-hover:text-white"
                    >
                      Contacter
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeRight(motionPrefs)}>
          <aside className="relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black">
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/70 to-transparent"
            />

            <div className="relative space-y-6 p-8 lg:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-white/15 bg-black/40 text-accent">
                  <MapPin aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <SectionLabel label="Siège associatif" />
                  <p className="mt-2 font-display text-xl uppercase leading-none text-white">
                    Courbevoie
                  </p>
                </div>
              </div>

              <address className="not-italic border-t border-white/10 pt-6 text-base leading-relaxed text-muted">
                <span className="block font-semibold uppercase tracking-[0.12em] text-white">
                  {siteConfig.fullName}
                </span>
                <span className="mt-3 block">{adresse}</span>
              </address>
            </div>

            <div className="relative mt-auto min-h-[280px] flex-1 border-t border-white/10 lg:min-h-[320px]">
              <iframe
                title="Carte de localisation associative à Courbevoie"
                src={mapSrc}
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale transition-[filter] duration-500 hover:grayscale-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              />
            </div>
          </aside>
        </ViewportReveal>
      </div>
    </section>
  );
}
