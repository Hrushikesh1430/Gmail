import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AppContext, AppContextProvider } from "./context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { AppContext };

root.render(
  <StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </StrictMode>
);
