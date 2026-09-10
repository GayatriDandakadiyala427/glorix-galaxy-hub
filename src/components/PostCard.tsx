import { Link } from "@tanstack/react-router";
import { Award, FileBadge, Heart, MessageCircle, Play, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";

import { SeptagonAvatar } from "./SeptagonAvatar";
import { GameTag } from "./Tags";
import { gamers, type Post, type PostKind } from "@/data/mock";

const kindMeta: Record<PostKind, { label: string; icon: typeof Trophy }> = {
  achievement: { label: "Tournament Achievement", icon: Trophy },
  certificate: { label: "Certificate", icon: FileBadge },
  video: { label: "Gaming Clip", icon: Play },
  photo: { label: "Gaming Photo", icon: Sparkles },
  milestone: { label: "Gaming Milestone", icon: Award },
  text: { label: "Gaming Update", icon: Sparkles },
};

export function PostCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  const author = gamers.find((g) => g.id === post.authorId) ?? gamers[0];
  const meta = kindMeta[post.kind];
  const Icon = meta.icon;
  const [liked, setLiked] = useState(false);

  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
      <div className="flex min-w-0 items-center gap-3 p-4">
        <SeptagonAvatar name={author.name} size={38} />
        <div className="min-w-0 flex-1">
          <Link
            to="/profile/$username"
            params={{ username: author.username }}
            className="block truncate text-sm font-semibold text-foreground hover:text-primary-glow"
          >
            {author.name}
          </Link>
          <p className="truncate text-xs text-muted-foreground">
            @{author.username} · {post.createdAt}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[11px] text-silver">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">{meta.label}</span>
        </span>
      </div>

      {post.image && (
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.text}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
              compact ? "h-40" : "h-52 sm:h-64"
            }`}
          />
          {post.kind === "video" && (
            <span className="absolute inset-0 grid place-items-center bg-background/30">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/85 shadow-glow">
                <Play className="h-5 w-5 text-primary-foreground" aria-hidden />
              </span>
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-4">
        {post.title && (
          <h3 className="text-sm font-semibold tracking-wide text-silver">{post.title}</h3>
        )}
        <p className="text-sm leading-relaxed text-muted-foreground">{post.text}</p>

        {(post.game || post.tournament) && (
          <div className="flex flex-wrap gap-2">
            {post.game && <GameTag>{post.game}</GameTag>}
            {post.tournament && <GameTag>{post.tournament}</GameTag>}
          </div>
        )}

        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            aria-pressed={liked}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-glow"
          >
            <Heart
              className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`}
              aria-hidden
            />
            {post.likes + (liked ? 1 : 0)}
          </button>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4" aria-hidden />
            {post.comments}
          </span>
        </div>
      </div>
    </article>
  );
}
