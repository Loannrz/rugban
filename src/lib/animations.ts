import type { Transition, Variants } from "framer-motion";

export const easeSport: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MotionPrefs = {
  reducedMotion: boolean;
  narrowMotion: boolean;
};

const baseEase = (): Transition["ease"] => easeSport;

export function fadeUp({ reducedMotion, narrowMotion }: MotionPrefs): Variants {
  const y = reducedMotion || narrowMotion ? 0 : 40;
  return {
    hidden: { opacity: reducedMotion ? 1 : 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: baseEase(),
      },
    },
  };
}

export function fadeLeft({
  reducedMotion,
  narrowMotion,
}: MotionPrefs): Variants {
  const x = reducedMotion || narrowMotion ? 0 : 60;
  return {
    hidden: { opacity: reducedMotion ? 1 : 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.7,
        ease: baseEase(),
      },
    },
  };
}

export function fadeRight({
  reducedMotion,
  narrowMotion,
}: MotionPrefs): Variants {
  const x = reducedMotion || narrowMotion ? 0 : -60;
  return {
    hidden: { opacity: reducedMotion ? 1 : 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.7,
        ease: baseEase(),
      },
    },
  };
}

export function scaleIn({
  reducedMotion,
  narrowMotion,
}: MotionPrefs): Variants {
  const scale = reducedMotion || narrowMotion ? 1 : 0.92;
  return {
    hidden: { opacity: reducedMotion ? 1 : 0, scale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.5,
        ease: baseEase(),
      },
    },
  };
}

export function staggerContainer(
  reducedMotion: boolean,
  delayChildren = 0.05,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : delayChildren,
      },
    },
  };
}

export function heroWordContainer(reducedMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
      },
    },
  };
}

export function slideUpReveal({ reducedMotion }: MotionPrefs): Variants {
  return {
    hidden: {
      y: reducedMotion ? "0%" : "100%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: reducedMotion ? 0 : 0.8,
        ease: easeSport,
      },
    },
  };
}

export function letterRevealVariants({
  reducedMotion,
}: MotionPrefs): Variants {
  return {
    hidden: {
      y: reducedMotion ? "0%" : "120%",
      opacity: reducedMotion ? 1 : 0.4,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.55,
        ease: easeSport,
      },
    },
  };
}

export const letterStaggerDelay = (
  reducedMotion: boolean | undefined,
  base = 0.03,
) => (reducedMotion ? 0 : base);

export const heroWordDelay = (
  reducedMotion: boolean | undefined,
  base = 0.08,
) => (reducedMotion ? 0 : base);
