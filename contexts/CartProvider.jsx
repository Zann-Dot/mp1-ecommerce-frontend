import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
export default useCartContext;


export function CartProvider({ children }) {
    function cartReducer() {

    }

    const [cart, dispatch] = useReducer(cartReducer, []);

    async function loadCart() {
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();
            if (!response.ok)
                throw new Error("Failed to get cart", data.message);

            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <CartContext.Provider value={{ loadCart }}>
            {children}
        </CartContext.Provider>
    )
}