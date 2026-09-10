import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/Button";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — GLORIX" },
      {
        name: "description",
        content: "Log in to Glorix to manage your professional gaming identity.",
      },
      { property: "og:title", content: "Login — GLORIX" },
      {
        property: "og:description",
        content: "Log in to Glorix to manage your professional gaming identity.",
      },
    ],
  }),
  component: LoginPage,
});

const field =
  "h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring focus:outline-none";

function LoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("alexplays");
  const [password, setPassword] = useState("glorixdemo");

  return (
    <div className="grid min-h-screen place-items-center px-4 py-12">
      <GalaxyBackground />
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="glass animate-rise rounded-3xl p-7">
          <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Log in to continue building your gaming identity.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/home" });
            }}
          >
            <div>
              <label htmlFor="identifier" className="mb-1.5 block text-xs text-silver">
                Email / Username
              </label>
              <input
                id="identifier"
                className={field}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate({ to: "/home" })}
          >
            Continue with Google
          </Button>

          <div className="mt-6 flex items-center justify-between text-xs">
            <button type="button" className="text-muted-foreground hover:text-silver">
              Forgot password?
            </button>
            <Link to="/signup" className="text-primary-glow hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
