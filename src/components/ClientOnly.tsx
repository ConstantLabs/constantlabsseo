import { useEffect, useState, type ReactNode } from "react";

/* Renders its children only in the browser, after mount. For widgets that have no
   content worth crawling and read window, document or localStorage while rendering
   (the cookie banner, the WhatsApp bubble, dev tools). The build-time prerender emits
   nothing for them, and hydration matches because the first client render is empty. */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
