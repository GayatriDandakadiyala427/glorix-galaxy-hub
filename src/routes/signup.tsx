import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/Button";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Logo } from "@/components/Logo";
import { allSpecializations } from "@/data/mock";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create Your Gamer Profile — GLORIX" },
      {
        name: "description",
        content:
          "Sign up for Glorix and create a professional gamer profile with your games, skills and achievements.",
      },
      { property: "og:title", content: "Create Your Gamer Profile — GLORIX" },
      {
        property: "og:description",
        content: "Build your gaming identity. Showcase your journey.",
      },
    ],
  }),
  component: SignupPage,
});

const field =
  "h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring focus:outline-none";

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    specialization: allSpecializations[0],
  });
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="grid min-h-screen place-items-center px-4 py-12">
      <GalaxyBackground />
      <div className="w-full max-w-xl">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="glass animate-rise rounded-3xl p-7">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Create your gamer profile
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Your Game. Your Identity. Takes under two minutes.
          </p>

          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/home" });
            }}
          >
            <div className="sm:col-span-2">
              <label htmlFor="name" className="mb-1.5 block text-xs text-silver">
                Full Name
              </label>
              <input
                id="name"
                className={field}
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
                placeholder="Alex Carter"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="mb-1.5 block text-xs text-silver">
                Gamer Username
              </label>
              <input
                id="username"
                className={field}
                value={form.username}
                onChange={(e) => set("username")(e.target.value)}
                placeholder="alexplays"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-silver">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={field}
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs text-silver">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={field}
                value={form.password}
                onChange={(e) => set("password")(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label htmlFor="confirm" className="mb-1.5 block text-xs text-silver">
                Confirm Password
              </label>
              <input
                id="confirm"
                type="password"
                className={field}
                value={form.confirm}
                onChange={(e) => set("confirm")(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="specialization" className="mb-1.5 block text-xs text-silver">
                Gaming specialization (optional)
              </label>
              <select
                id="specialization"
                className={field}
                value={form.specialization}
                onChange={(e) => set("specialization")(e.target.value)}
              >
                {allSpecializations.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                Create Gamer Profile
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already on Glorix?{" "}
            <Link to="/login" className="text-primary-glow hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
