import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Compass,
  Rocket,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";

import { ButtonLink } from "@/components/Button";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Logo } from "@/components/Logo";
import { SeptagonAvatar } from "@/components/SeptagonAvatar";
import { GameTag } from "@/components/Tags";
import { gamers } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLORIX — Your Game. Your Identity." },
      {
        name: "description",
        content:
          "GLORIX is the professional gaming identity platform. Build your gamer profile, showcase achievements and connect with the community.",
      },
      { property: "og:title", content: "GLORIX — Your Game. Your Identity." },
      {
        property: "og:description",
        content:
          "Build your professional gaming identity, showcase your journey, and connect with the gaming community.",
      },
    ],
  }),
  component: Landing,
});

const why = [
  {
    icon: UserRound,
    title: "Build Your Gaming Identity",
    text: "A professional profile that shows who you are as a competitor, not just a username.",
  },
  {
    icon: Sparkles,
    title: "Showcase Your Journey",
    text: "Clips, photos, milestones and updates live together in one unified activity timeline.",
  },
  {
    icon: Trophy,
    title: "Share Your Achievements",
    text: "Tournament results, ranks and certificates presented as credible proof of skill.",
  },
  {
    icon: Compass,
    title: "Discover Gamers",
    text: "Find players by game, specialization, skill and experience — then follow their progress.",
  },
];

const steps = [
  {
    n: "01",
    title: "Create Your Profile",
    text: "Add your specialization, games, skills and experience in minutes.",
  },
  {
    n: "02",
    title: "Showcase Your Gaming Journey",
    text: "Publish one post type — attach a clip, image, certificate or achievement.",
  },
  {
    n: "03",
    title: "Connect & Discover",
    text: "Follow players, explore rosters and grow a professional gaming presence.",
  },
];

function Landing() {
  const floating = gamers.slice(0, 3);

  return (
    <div className="min-h-screen">
      <GalaxyBackground />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Logo />
        <div className="flex items-center gap-2">
          <ButtonLink to="/login" variant="ghost" size="sm">
            Login
          </ButtonLink>
          <ButtonLink to="/signup" size="sm">
            Sign Up
          </ButtonLink>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-2">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-silver">
            <Rocket className="h-3.5 w-3.5" aria-hidden />
            Professional identity for gamers
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            <span className="text-gradient">GLORIX</span>
          </h1>
          <p className="mt-4 font-display text-xl text-silver sm:text-2xl">
            Your Game. Your Identity.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Build your professional gaming identity, showcase your journey, and connect
            with the gaming community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/signup" size="lg">
              Create Your Profile
            </ButtonLink>
            <ButtonLink to="/explore" variant="outline" size="lg">
              Explore Gamers
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["12K+", "Gamer profiles"],
              ["48K+", "Journey posts"],
              ["300+", "Tournaments"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-silver">{v}</dt>
                <dd className="text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[26rem]">
          <div className="pointer-events-none absolute inset-0 mx-auto h-72 w-72 self-center rounded-full bg-primary/20 blur-[90px]" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {floating.map((g, i) => (
              <div
                key={g.id}
                className={`glass animate-float rounded-2xl p-4 ${
                  i === 1 ? "sm:mt-10 sm:-rotate-2" : i === 2 ? "sm:-mt-4 sm:rotate-2" : "sm:rotate-1"
                }`}
                style={{ animationDelay: `${i * 1.4}s` }}
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <SeptagonAvatar name={g.name} size={44} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{g.name}</p>
                    <p className="truncate text-xs text-muted-foreground">@{g.username}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-xs text-silver">{g.specialization}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.games.slice(0, 2).map((game) => (
                    <GameTag key={game}>{game}</GameTag>
                  ))}
                </div>
              </div>
            ))}
            <div className="glass animate-float rounded-2xl p-4 sm:mt-6" style={{ animationDelay: "2.2s" }}>
              <span className="inline-flex items-center gap-2 text-xs text-silver">
                <Award className="h-4 w-4 text-primary-glow" aria-hidden />
                Tournament Victory
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                Finished #1 in the Regional Valorant Championship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground">Why Glorix?</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          A professional identity layer built specifically for the way gamers grow.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="glass rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-primary-glow">{s.n}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <div className="glass nebula rounded-3xl px-6 py-14">
          <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
            Your gaming journey deserves an identity.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Build your gaming identity. Showcase your journey.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/signup" size="lg">
              Join Glorix
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © 2026 Glorix · Your Game. Your Identity.
          </p>
        </div>
      </footer>
    </div>
  );
}
