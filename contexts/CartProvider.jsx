import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
export default useCartContext;

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    async function loadCart() {
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();
            if (!response.ok)
                throw new Error("Failed to get cart", data.message);

            setCart(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CartContext.Provider value={{ loadCart, cart }}>
            {children}
        </CartContext.Provider>
    );
}
