"use client";

import { Camera, Link2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Link from "next/link";

import { navItems, siteConfig } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { CTAButton } from "../ui/CTAButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RugbanLogo } from "../ui/RugbanLogo";

type FooterProps = {
  className?: string;
};

const footerLinks = [...navItems, { label: "Prépa sport", href: "/prepa-sport" }];

const socialLinks = [
  { name: "Facebook", Icon: Share2, href: siteConfig.social.facebook },
  { name: "Instagram", Icon: Camera, href: siteConfig.social.instagram },
  { name: "LinkedIn", Icon: Link2, href: siteConfig.social.linkedin },
] as const;

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-white/10 bg-footer text-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(255,107,53,0.1),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(212,255,0,0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[clamp(5rem,18vw,12rem)] uppercase leading-none tracking-[0.06em] text-white/[0.03]"
      >
        Rugban
      </div>

      <div className="container-site relative py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-5">
              <RugbanLogo height={48} />
              <p className="max-w-sm text-base leading-relaxed text-white/85">
                {siteConfig.tagline}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Association loi 1901 — insertion sociale et professionnelle par
                le rugby en Île-de-France depuis 2006.
              </p>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <address className="not-italic leading-relaxed text-muted">
                  <span className="block text-white">{siteConfig.addressLine}</span>
                  {siteConfig.postcode} {siteConfig.city}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <Link
                  prefetch={false}
                  href={siteConfig.phoneHref}
                  className="leading-relaxed text-white transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <Link
                  prefetch={false}
                  href="mailto:contact@rugban.fr"
                  className="leading-relaxed text-white transition-colors hover:text-accent"
                >
                  contact@rugban.fr
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Navigation
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    prefetch={false}
                    href={link.href}
                    className="nav-link-underline text-sm font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Restez informé
            </h2>

            <form
              aria-label="Inscription newsletter"
              action="mailto:contact@rugban.fr"
              method="post"
              className="space-y-4 border border-white/12 bg-gradient-to-br from-white/[0.05] to-transparent p-5 backdrop-blur-sm"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href =
                  "mailto:contact@rugban.fr?subject=Newsletter%20RUGBAN";
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="news-email" className="text-xs text-muted">
                  Newsletter mensuelle
                </Label>
                <p className="text-sm leading-relaxed text-white/80">
                  Actualités programmes, sessions Prépa Sport et événements
                  terrain.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  id="news-email"
                  name="email"
                  placeholder="Votre courriel"
                  type="email"
                  required
                  className="min-w-0 flex-1 border-white/15 bg-black/40"
                />
                <CTAButton type="submit" size="sm" className="shrink-0">
                  S&apos;inscrire
                </CTAButton>
              </div>
            </form>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                Réseaux sociaux
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, Icon, name }) => (
                  <Link
                    prefetch={false}
                    key={name}
                    aria-label={`${name} de ${siteConfig.name}`}
                    href={href}
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.03] text-muted transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-5 text-[11px] text-muted md:flex-row md:items-center">
          <p>
            © {year} {siteConfig.fullName} ({siteConfig.name}) — Tous droits
            réservés.
          </p>
          <Link
            prefetch={false}
            href="/mentions-legales"
            className="text-white/90 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
