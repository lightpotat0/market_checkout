import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cont from "./cont";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById("navbar") as HTMLElement).render(
  <React.StrictMode>
    <Cont />
  </React.StrictMode>,
);