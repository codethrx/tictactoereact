import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { StateProvider } from "./libs/state";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>
);
