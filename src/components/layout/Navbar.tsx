"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { navItems } from "@/data/navigation";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

import { CTAButton } from "../ui/CTAButton";
import { RugbanLogo } from "../ui/RugbanLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion() === true;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const stagger = useMemo(() => staggerContainer(reducedMotion, 0.05), [
    reducedMotion,
  ]);

  const mobileItemVariants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.35 },
    },
  };

  const mobileMenu =
    mounted && typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {open ? (
              <>
                <motion.button
                  type="button"
                  aria-label="Fermer le menu"
                  className="fixed inset-0 z-[280] bg-black/85 lg:hidden"
                  initial={{ opacity: reducedMotion ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reducedMotion ? 1 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.25 }}
                  onClick={() => setOpen(false)}
                />
                <motion.nav
                  id="navigation-mobile-overlay"
                  aria-label="Navigation mobile"
                  className="fixed inset-0 z-[290] overflow-y-auto bg-black px-8 pb-10 pt-24 text-white lg:hidden"
                  initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -12 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.ul
                    className="flex flex-col gap-4 text-base font-semibold uppercase tracking-[0.18em]"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={`mobile-${item.href}`}
                        variants={mobileItemVariants}
                      >
                        <Link
                          href={item.href}
                          prefetch={false}
                          onClick={() => setOpen(false)}
                          className="block border border-transparent py-2 transition hover:border-accent"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li variants={mobileItemVariants}>
                      <CTAButton
                        href="/prepa-sport"
                        aria-label="Aller au programme Prépa Sport"
                        onClick={() => setOpen(false)}
                        className="mt-1 w-full sm:w-auto"
                      >
                        Rejoindre la Prépa Sport
                      </CTAButton>
                    </motion.li>
                  </motion.ul>
                </motion.nav>
              </>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[300] px-4 transition-colors duration-500 md:px-6",
          scrolled || open
            ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black via-black/40 to-transparent",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex w-full max-w-container items-center justify-between gap-6 tv:max-w-container-tv",
            scrolled || open ? "py-3.5" : "py-5",
          )}
        >
          <RugbanLogo linkToHome height={scrolled || open ? 36 : 44} priority />

          <div className="hidden items-center justify-end gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                prefetch={false}
                href={item.href}
                className="nav-link-underline text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton
              href="/prepa-sport"
              aria-label="Aller au programme Prépa Sport"
              className="min-h-[40px] px-6 text-[12px]"
            >
              Rejoindre la Prépa Sport
            </CTAButton>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="navigation-mobile-overlay"
            onClick={() => setOpen((value) => !value)}
            className="relative z-[310] inline-flex items-center justify-center border border-white/35 bg-black/40 p-2.5 text-white backdrop-blur-sm lg:hidden"
          >
            <span className="sr-only">{open ? "Fermer" : "Ouvrir"} le menu</span>
            <div className="flex h-[18px] w-[22px] flex-col justify-between" aria-hidden>
              <motion.span
                className="h-[2px] w-full rounded-[2px] bg-white"
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 7 : 0,
                }}
              />
              <motion.span
                className="h-[2px] w-full rounded-[2px] bg-white"
                animate={{ opacity: open ? 0 : 1 }}
              />
              <motion.span
                className="h-[2px] w-full rounded-[2px] bg-white"
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -7 : 0,
                }}
              />
            </div>
          </button>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}
