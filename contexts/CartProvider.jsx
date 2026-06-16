import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
export default useCartContext;

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    async function loadCart() {
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();
            if (!response.ok) throw new Error("Failed to get cart", data.message);

            setCart(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getPaymentSummary(shipping = 0) {
        try {
            const response = await fetch(`/api/paymentSummary?shipping=${shipping}`);
            const data = await response.json();
            if (!response.ok) throw new Error("Failed to get payment summary");

            setPaymentSummary(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <CartContext.Provider
            value={{ loadCart, cart, getPaymentSummary, paymentSummary }}
        >
            {children}
        </CartContext.Provider>
    );
}
