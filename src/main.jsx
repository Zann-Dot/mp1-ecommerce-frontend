import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { EcommerceProvider } from "../contexts/EcommerceProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "../contexts/CartProvider.jsx";


import("preline").then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <EcommerceProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </EcommerceProvider>
    </StrictMode>,
  );
});
