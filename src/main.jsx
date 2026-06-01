import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { EcommerceProvider } from "../contexts/EcommerceProvider.jsx";
import "./index.css";
import App from "./App.jsx";


import("preline").then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <EcommerceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EcommerceProvider>
    </StrictMode>,
  );
});
