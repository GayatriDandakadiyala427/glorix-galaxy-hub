import { Link } from "@tanstack/react-router";

export function Logo({ to = "/" }: { to?: string }) {
  return (
    <Link to={to} className="group flex items-center gap-2.5" aria-label="Glorix home">
      <span className="septagon grid h-9 w-9 place-items-center bg-gradient-to-br from-primary to-primary-glow shadow-glow">
        <span className="font-display text-sm font-bold text-primary-foreground">G</span>
      </span>
      <span className="font-display text-lg font-bold tracking-[0.2em] text-gradient">
        GLORIX
      </span>
    </Link>
  );
}
