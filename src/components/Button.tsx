import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "silver";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-border bg-card text-silver backdrop-blur-md hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
  silver:
    "bg-silver/90 text-background hover:bg-silver hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <Link className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}
