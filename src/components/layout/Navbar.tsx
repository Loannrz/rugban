"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

import { navItems } from "@/data/navigation";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

import { CTAButton } from "../ui/CTAButton";
import { RugbanLogo } from "../ui/RugbanLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion() === true;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const stagger = useMemo(() => staggerContainer(reducedMotion, 0.05), [
    reducedMotion,
  ]);

  const mobileItemVariants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.45 },
    },
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[120] px-4 transition-colors duration-500 md:px-6",
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black via-black/40 to-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex w-full max-w-container items-center justify-between gap-6 tv:max-w-container-tv",
          scrolled ? "py-3.5" : "py-5",
        )}
      >
        <RugbanLogo linkToHome height={scrolled ? 36 : 44} priority />

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

        <motion.button
          type="button"
          aria-expanded={open}
          aria-controls="navigation-mobile-overlay"
          onClick={() => setOpen((value) => !value)}
          className="relative z-[140] inline-flex items-center justify-center border border-white/35 p-2.5 text-white lg:hidden"
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
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-[132] bg-black/80 lg:hidden"
              aria-hidden
              initial={{ opacity: reducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: reducedMotion ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="navigation-mobile-overlay"
              className="fixed inset-0 z-[135] bg-black px-8 pt-20 text-white lg:hidden"
              initial={{ height: reducedMotion ? "100%" : 0 }}
              animate={{ height: "100%" }}
              exit={{
                height: reducedMotion ? 0 : "0%",
              }}
              transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: reducedMotion ? "auto" : "hidden" }}
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
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
