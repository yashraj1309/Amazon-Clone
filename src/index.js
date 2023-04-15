import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { StateProvider } from "./StateProvider";
import { initialState, reducer } from "./reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
