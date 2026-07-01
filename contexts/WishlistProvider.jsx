import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);
export default useWishlistContext;

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    async function fetchWishlistProducts() {
        try {
            const response = await fetch("/api/wishlist");
            const data = await response.json();
            if (!response.ok) {
                setWishlist([]);
                throw new Error(data.error);
            }
            setWishlist(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function updateWishlist(newWishlistState, productId) {
        try {
            const response = await fetch(`/api/wishlist`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: productId,
                    isWishlist: newWishlistState,
                }),
            });
            const data = await response.json();
            if (!response.ok) console.error(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleWishlist(wishlistState, setWishlistState, productId) {
        const newWishlistState = !wishlistState;
        setWishlistState(newWishlistState);
        await updateWishlist(newWishlistState, productId);
        fetchWishlistProducts();
    }
    return (
        <WishlistContext.Provider
            value={{
                fetchWishlistProducts,
                wishlist,
                handleWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}
