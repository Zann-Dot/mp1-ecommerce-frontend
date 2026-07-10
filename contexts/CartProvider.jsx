import { createContext, useContext, useState } from "react";
import useEcommerceContext from "./EcommerceProvider";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
export default useCartContext;

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [emptyCart, setEmptyCart] = useState("");
    const [paymentSummary, setPaymentSummary] = useState(null);
    const totalQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0);
    const { setLoading, dispatch } = useEcommerceContext();

    async function loadCart() {
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();

            if (!response.ok) {
                response.status === 404 && setCart([]);
                setEmptyCart(data.message);
                throw data.message;
            }
            setEmptyCart("");
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
            setLoading(true)
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) {
                dispatch({
                    type: "selectSize",
                    heading: "Please select size",
                    subHeading: ""
                })

                setTimeout(() => {
                    dispatch({
                        type: "",
                        heading: "",
                        subHeading: ""
                    });
                }, 3000);

                throw new Error(data.message)
            };

            await loadCart();
            await getPaymentSummary();
            return data;
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    async function updateCartQuantity(payload) {
        try {
            setLoading(true)
            const res = await fetch("/api/cart", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) {
                dispatch({
                    type: "selectSize",
                    heading: "Please select size",
                    subHeading: ""
                })

                setTimeout(() => {
                    dispatch({
                        type: "",
                        heading: "",
                        subHeading: ""
                    });
                }, 3000);

                throw new Error(data.message)
            };

            await loadCart();
            await getPaymentSummary();
            return data;
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    async function deleteFromCart(productId) {
        try {
            setLoading(true);
            const res = await fetch(`/api/cart/${productId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            data.success && dispatch({
                type: "removedItemFromCart",
                heading: "Successfully removed item from cart",
                subHeading: ""
            });

            setTimeout(() => {
                dispatch({
                    type: "",
                    heading: "",
                    subHeading: ""
                });
            }, 3000);

            await loadCart();
            await getPaymentSummary();
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    async function deleteCart() {
        const res = await fetch(`/api/cart`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        await loadCart();
        await getPaymentSummary();
        return data.success;
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
                deleteFromCart,
                emptyCart,
                deleteCart,
                updateCartQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
