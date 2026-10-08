import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

/* Built pages arrive prerendered (scripts/prerender.mjs), so hydrate them. The dev
   server serves an empty #root, which has nothing to hydrate. */
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
