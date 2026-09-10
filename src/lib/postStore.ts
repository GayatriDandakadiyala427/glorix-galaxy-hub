import { useSyncExternalStore } from "react";

import { posts as seedPosts, type Post } from "@/data/mock";

/**
 * Tiny in-memory post store for the prototype.
 * Swap this for API calls when a backend is added later.
 */
let state: Post[] = [...seedPosts];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function addPost(post: Omit<Post, "id" | "createdAt" | "likes" | "comments">) {
  state = [
    {
      ...post,
      id: `p-${Date.now()}`,
      createdAt: "Just now",
      likes: 0,
      comments: 0,
    },
    ...state,
  ];
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function usePosts() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
