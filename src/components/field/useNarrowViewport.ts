import { useEffect, useState } from "react";

/*
  A real JS gate, not a CSS one.

  Each canvas is its own WebGL2 context and mobile browsers reclaim contexts
  under memory pressure, so decorative fields must never be created on a phone
  rather than created and hidden. `display: none` still mounts the component and
  boots its context, and a hidden element's getBoundingClientRect() returns all
  zeros, so top === 0, which any "is it visible" check reads as already visible.
  CSS hiding is strictly worse than not mounting.
*/
export function useNarrowViewport(maxWidth = 639): boolean {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${maxWidth}px)`).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const sync = () => setNarrow(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [maxWidth]);

  return narrow;
}
