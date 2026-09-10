import { ButtonLink } from "./Button";
import { SeptagonAvatar } from "./SeptagonAvatar";
import { GameTag, SkillTag } from "./Tags";
import type { Gamer } from "@/data/mock";

export function GamerProfileCard({ gamer }: { gamer: Gamer }) {
  return (
    <article className="glass flex h-full flex-col gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        <SeptagonAvatar name={gamer.name} size={56} />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground">{gamer.name}</h3>
          <p className="truncate text-xs text-muted-foreground">@{gamer.username}</p>
          <p className="truncate text-xs text-silver">{gamer.specialization}</p>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        {gamer.games.slice(0, 3).map((g) => (
          <GameTag key={g}>{g}</GameTag>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {gamer.skills.slice(0, 3).map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>

      <dl className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-background/40 p-3 text-center">
        <div>
          <dt className="text-[11px] text-muted-foreground">Experience</dt>
          <dd className="text-xs font-semibold text-silver">{gamer.experience}</dd>
        </div>
        <div>
          <dt className="text-[11px] text-muted-foreground">Posts</dt>
          <dd className="text-xs font-semibold text-silver">{gamer.stats.posts}</dd>
        </div>
        <div>
          <dt className="text-[11px] text-muted-foreground">Followers</dt>
          <dd className="text-xs font-semibold text-silver">{gamer.stats.followers}</dd>
        </div>
      </dl>

      <ButtonLink
        to="/profile/$username"
        params={{ username: gamer.username }}
        variant="outline"
        size="sm"
        className="mt-auto w-full"
      >
        View Profile
      </ButtonLink>
    </article>
  );
}
