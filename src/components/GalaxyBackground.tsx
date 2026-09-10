const stars = Array.from({ length: 70 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const r2 = ((i * 4523 + 1301) % 9973) / 9973;
  return {
    top: `${(r * 100).toFixed(2)}%`,
    left: `${(r2 * 100).toFixed(2)}%`,
    size: r2 > 0.85 ? 2.5 : 1.5,
    delay: `${(r * 5).toFixed(2)}s`,
  };
});

export function GalaxyBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="nebula absolute inset-0" />
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-silver"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
      <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
    </div>
  );
}
