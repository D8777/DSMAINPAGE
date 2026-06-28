import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NexaAi } from "./screens/NexaAi";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <NexaAi />
  </StrictMode>,
);
