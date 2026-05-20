"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { navItems, siteConfig } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { RugbanLogo } from "../ui/RugbanLogo";

type FooterProps = {
  className?: string;
};

const footerLinks = [...navItems, { label: "Prépa sport", href: "/prepa-sport" }];

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

      <div className="container-site relative py-10 lg:py-11">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-8">
            <div className="space-y-3">
              <RugbanLogo height={40} />
              <p className="max-w-sm text-sm leading-relaxed text-white/85">
                {siteConfig.tagline}
              </p>
              <p className="text-xs leading-relaxed text-muted">
                Association loi 1901 — insertion sociale et professionnelle par
                le rugby en Île-de-France depuis 2006.
              </p>
            </div>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                </span>
                <address className="not-italic leading-snug text-muted">
                  <span className="block text-white">{siteConfig.addressLine}</span>
                  {siteConfig.postcode} {siteConfig.city}
                </address>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                </span>
                <Link
                  prefetch={false}
                  href={siteConfig.phoneHref}
                  className="leading-snug text-white transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-accent">
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                </span>
                <Link
                  prefetch={false}
                  href={siteConfig.emailHref}
                  className="leading-snug text-white transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
              Navigation
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
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
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col items-start justify-between gap-3 py-3.5 text-[11px] text-muted md:flex-row md:items-center">
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
