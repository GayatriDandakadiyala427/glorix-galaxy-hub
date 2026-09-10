import { Bell, Heart, MessageCircle, UserPlus } from "lucide-react";

import { SeptagonAvatar } from "./SeptagonAvatar";
import type { Notification } from "@/data/mock";

const icons = {
  like: Heart,
  follow: UserPlus,
  comment: MessageCircle,
  reaction: Bell,
};

export function NotificationItem({ item }: { item: Notification }) {
  const Icon = icons[item.kind];

  return (
    <li
      className={`glass grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl p-4 transition-colors hover:border-primary/50 ${
        item.unread ? "border-primary/35" : ""
      }`}
    >
      <SeptagonAvatar name={item.actor} size={42} />
      <div className="min-w-0">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{item.actor}</span>{" "}
          <span className="text-muted-foreground">{item.text}</span>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
      </div>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-primary/10 text-primary-glow">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
    </li>
  );
}
