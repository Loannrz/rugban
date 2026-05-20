"use client";

import { Camera, Link2, Share2 } from "lucide-react";
import Link from "next/link";

import { navItems, siteConfig } from "@/data/navigation";

import { CTAButton } from "../ui/CTAButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RugbanLogo } from "../ui/RugbanLogo";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  const socialIcons = [
    {
      name: "Facebook",
      Icon: Share2,
      href: siteConfig.social.facebook,
    },
    {
      name: "Instagram",
      Icon: Camera,
      href: siteConfig.social.instagram,
    },
    {
      name: "LinkedIn",
      Icon: Link2,
      href: siteConfig.social.linkedin,
    },
  ] as const;

  return (
    <footer className={`border-t border-muted/35 bg-footer text-white ${className ?? ""}`}>
      <div className="container-site grid gap-8 py-10 md:grid-cols-12 md:gap-6 md:py-12 lg:gap-8">
        <div className="flex flex-col gap-4 md:col-span-4">
          <RugbanLogo height={44} />
          <p className="text-xs text-muted">{siteConfig.tagline}</p>
          <address className="not-italic text-xs leading-relaxed text-muted">
            {siteConfig.addressLine}
            <br />
            {siteConfig.postcode} {siteConfig.city}
            <br />
            <Link
              prefetch={false}
              href={siteConfig.phoneHref}
              className="text-white hover:text-accent"
            >
              Tél.&nbsp;: {siteConfig.phone}
            </Link>
          </address>
        </div>

        <div className="flex flex-col gap-3 md:col-span-3">
          <h2 className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Navigation
          </h2>
          <ul className="space-y-1.5 text-xs font-semibold uppercase tracking-[0.12em]">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link
                  prefetch={false}
                  href={link.href}
                  className="nav-link-underline text-white hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                prefetch={false}
                href="/prepa-sport"
                className="nav-link-underline text-white hover:text-accent"
              >
                Prépa sport
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:col-span-5">
          <h2 className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Réseaux & newsletter
          </h2>

          <div className="flex gap-3">
            {socialIcons.map(({ href, Icon, name }) => (
              <Link
                prefetch={false}
                key={name}
                aria-label={`${name} de ${siteConfig.name}`}
                href={href}
                className="inline-flex border border-muted p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <form
            aria-label="Inscription newsletter"
            action="mailto:contact@rugban.fr"
            method="post"
            className="space-y-2 border border-muted/75 p-4"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href =
                "mailto:contact@rugban.fr?subject=Newsletter%20RUGBAN";
            }}
          >
            <Label htmlFor="news-email" className="text-xs">
              Newsletter mensuelle
            </Label>
            <div className="flex flex-wrap gap-2">
              <Input
                id="news-email"
                name="email"
                placeholder="Courriel professionnel"
                type="email"
                required
                className="min-w-[180px] flex-1"
              />
              <CTAButton type="submit" size="sm">
                S&apos;inscrire
              </CTAButton>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-3 text-center text-[11px] text-muted md:px-6">
        <span>
          © {year} Rugby Urban Attitude ({siteConfig.name}) — tous droits
          réservés.
        </span>
        {" · "}
        <Link
          prefetch={false}
          href="/mentions-legales"
          className="text-white underline-offset-4 hover:underline hover:text-accent"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
