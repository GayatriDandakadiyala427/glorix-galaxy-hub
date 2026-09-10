import { PostCard } from "./PostCard";
import type { Post } from "@/data/mock";

/**
 * GLORIX GALAXY — posts float in a staggered constellation on desktop and
 * gracefully stack into a clean responsive grid on smaller screens.
 */
const orbit = [
  { offset: "md:mt-0", rotate: "md:-rotate-1", delay: "0s" },
  { offset: "md:mt-12", rotate: "md:rotate-1", delay: "1.2s" },
  { offset: "md:mt-4", rotate: "md:rotate-2", delay: "2.4s" },
  { offset: "md:mt-16", rotate: "md:-rotate-2", delay: "0.6s" },
  { offset: "md:mt-6", rotate: "md:rotate-1", delay: "1.8s" },
  { offset: "md:mt-10", rotate: "md:-rotate-1", delay: "3s" },
];

export function GalaxyFeed({ items }: { items: Post[] }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-[100px]" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post, i) => {
          const o = orbit[i % orbit.length];
          const wide = post.size === "lg";
          return (
            <div
              key={post.id}
              className={`animate-rise ${o.offset} ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className={`animate-float h-full ${o.rotate} transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]`}
                style={{ animationDelay: o.delay }}
              >
                <PostCard post={post} compact={post.size === "sm"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
