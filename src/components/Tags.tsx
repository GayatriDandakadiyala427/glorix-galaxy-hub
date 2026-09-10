import type { ReactNode } from "react";

export function GameTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-silver">
      {children}
    </span>
  );
}

export function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
