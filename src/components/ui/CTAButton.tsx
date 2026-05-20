"use client";

import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark";

type Size = "default" | "sm";

type SharedProps = {
  variant?: Variant;
  uppercase?: boolean;
  size?: Size;
  className?: string;
};

type AnchorProps =
  SharedProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonPropsNative =
  SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type CTAButtonProps =
  | AnchorProps
  | (ButtonPropsNative & { href?: undefined });

export const CTAButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CTAButtonProps
>(function CTAButton(
  {
    variant = "primary",
    uppercase = true,
    size = "default",
    className,
    children,
    ...rest
  },
  ref,
) {
  const sizeClasses: Record<Size, string> = {
    default:
      "min-h-[36px] px-5 py-2 text-[11px] tracking-[0.1em]",
    sm: "min-h-[30px] px-3.5 py-1.5 text-[10px] tracking-[0.08em]",
  };

  const base = cn(
    "relative inline-flex items-center justify-center overflow-hidden font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b35]",
    sizeClasses[size],
  );

  const outlineFill =
    "before:absolute before:inset-0 before:z-[-1] before:w-0 before:bg-accent before:transition-[width] before:duration-300 hover:before:w-full hover:text-ink hover:border-transparent";

  const ghostFill =
    "before:absolute before:inset-0 before:z-[-1] before:w-0 before:bg-white before:transition-[width] before:duration-300 hover:before:w-full";

  const themes: Record<Variant, string> = {
    primary: cn("border border-accent bg-accent text-ink"),
    outline: cn(
      "relative border border-accent bg-transparent text-accent hover:bg-transparent",
      outlineFill,
    ),
    ghost: cn(
      "relative border border-muted bg-transparent text-white hover:border-white hover:text-black",
      ghostFill,
    ),
    dark: "border border-transparent bg-black text-white hover:bg-blue-dark hover:text-white",
  };

  const textClass =
    uppercase === false ? "!normal-case tracking-normal" : "uppercase";

  const classes = cn(
    base,
    variant === "primary" && "cta-fill",
    themes[variant],
    textClass,
    className,
  );

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if ("href" in rest && typeof rest.href === "string") {
    return (
      <Link
        ref={ref as never}
        {...(rest as React.ComponentPropsWithoutRef<typeof Link>)}
        href={rest.href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as ButtonPropsNative;

  return (
    <button
      ref={ref as never}
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={classes}
    >
      {content}
    </button>
  );
});
