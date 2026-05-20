"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border border-muted bg-transparent px-3 py-1.5 text-sm text-primary placeholder:text-muted outline-none ring-2 ring-transparent transition-colors focus-visible:border-accent focus-visible:ring-accent/40 uppercase tracking-[0.06em]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
