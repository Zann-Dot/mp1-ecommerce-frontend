import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { EcommerceProvider } from "../contexts/EcommerceProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "../contexts/CartProvider.jsx";
import { CheckoutProvider } from "../contexts/CheckoutProvider.jsx";
import { AddressProvider } from "../contexts/AddressProvider.jsx";
import { WishlistProvider } from "../contexts/WishlistProvider.jsx";
import noUiSlider from "nouislider";

window.noUiSlider = noUiSlider;

import("preline").then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <EcommerceProvider>
        <AddressProvider>
          <CartProvider>
            <WishlistProvider>
              <CheckoutProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CheckoutProvider>
            </WishlistProvider>
          </CartProvider>
        </AddressProvider>
      </EcommerceProvider>
    </StrictMode>,
  );
});
