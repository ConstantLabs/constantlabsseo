import { useSyncExternalStore } from "react";

/*
  A real JS gate, not a CSS one.

  Each canvas is its own WebGL2 context and mobile browsers reclaim contexts
  under memory pressure, so decorative fields must never be created on a phone
  rather than created and hidden. `display: none` still mounts the component and
  boots its context, and a hidden element's getBoundingClientRect() returns all
  zeros, so top === 0, which any "is it visible" check reads as already visible.
  CSS hiding is strictly worse than not mounting.

  useSyncExternalStore, not useState(matchMedia): the build prerenders every page
  (no window, so desktop), and hydration does not repair attributes that differ
  between the server and the first client render. A phone that read matchMedia in
  its first render kept the prerendered desktop grid. The server snapshot is
  `false`; React hydrates with it, then re-renders at once with the real value.
  A plain client render (dev server) reads the real value immediately.
*/
export function useNarrowViewport(maxWidth = 639): boolean {
  const query = `(max-width: ${maxWidth}px)`;
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
