interface Props {
  name: string;
  size?: number;
  className?: string;
}

const palettes = [
  "from-primary to-primary-glow",
  "from-primary-glow to-accent",
  "from-accent to-primary",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function SeptagonAvatar({ name, size = 64, className = "" }: Props) {
  const palette = palettes[name.length % palettes.length];

  return (
    <div
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size, filter: "drop-shadow(0 0 12px oklch(0.62 0.21 300 / 0.55))" }}
    >
      <div
        className="septagon grid h-full w-full place-items-center bg-gradient-to-br from-silver/70 to-primary/70"
        aria-hidden={false}
      >
        <div
          className={`septagon grid place-items-center bg-gradient-to-br ${palette}`}
          style={{ width: "92%", height: "92%" }}
        >
          <span
            className="font-display font-bold text-primary-foreground"
            style={{ fontSize: Math.max(11, size * 0.32) }}
            aria-label={name}
          >
            {initials(name)}
          </span>
        </div>
      </div>
    </div>
  );
}
