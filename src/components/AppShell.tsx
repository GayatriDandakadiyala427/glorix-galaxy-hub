import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Bell,
  Compass,
  House,
  PlusCircle,
  Settings,
  UserRound,
} from "lucide-react";

import { GalaxyBackground } from "./GalaxyBackground";
import { Logo } from "./Logo";
import { SeptagonAvatar } from "./SeptagonAvatar";
import { currentUser, notifications } from "@/data/mock";

const nav = [
  { label: "Home", to: "/home", icon: House },
  { label: "Explore", to: "/explore", icon: Compass },
  { label: "Create", to: "/create", icon: PlusCircle },
  { label: "Notifications", to: "/notifications", icon: Bell },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const unread = notifications.filter((n) => n.unread).length;

  return (
    <div className="min-h-screen">
      <GalaxyBackground />

      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-8">
            <Logo to="/home" />
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map(({ label, to, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  activeProps={{ className: "bg-primary/15 text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  <span>{label}</span>
                  {label === "Notifications" && unread > 0 && (
                    <span className="rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                      {unread}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/settings"
              aria-label="Settings"
              className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground sm:block"
            >
              <Settings className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              to="/profile/$username"
              params={{ username: currentUser.username }}
              className="flex items-center gap-2 rounded-xl border border-border px-2 py-1.5 transition-colors hover:border-primary/60"
            >
              <SeptagonAvatar name={currentUser.name} size={30} />
              <span className="hidden text-sm text-silver lg:inline">
                @{currentUser.username}
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pt-6 pb-28 sm:px-6 md:pb-16">
        {children}
      </main>

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl md:hidden"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {[
            ...nav,
            {
              label: "Profile",
              to: "/profile/$username" as const,
              icon: UserRound,
            },
          ].map((item) => {
            const Icon = item.icon;
            const isProfile = item.label === "Profile";
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...(isProfile
                    ? { params: { username: currentUser.username } }
                    : {})}
                  activeProps={{ className: "text-primary-glow" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="flex flex-col items-center gap-1 py-2.5 text-[11px]"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
