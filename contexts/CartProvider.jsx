import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
export default useCartContext;

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    const totalQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0);


    async function loadCart() {
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();

            if (!response.ok) {
                response.status === 404 && setCart([]);
                throw new Error("Failed to get cart", data.message);
            }
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

    async function addToCart(payload) {
        try {
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);
            await loadCart();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    }

    async function deleteFromCart(productId) {
        const res = await fetch(`/api/cart/${productId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        await loadCart();
        await getPaymentSummary();
    }

    return (
        <CartContext.Provider
            value={{
                loadCart,
                cart,
                getPaymentSummary,
                paymentSummary,
                addToCart,
                totalQuantity,
                deleteFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
