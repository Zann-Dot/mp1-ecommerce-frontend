import { createContext, useContext, useState } from "react";
import useEcommerceContext from "./EcommerceProvider";
import useCartContext from "./CartProvider";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);
export default useWishlistContext;

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const { dispatch } = useEcommerceContext();
    const { cart } = useCartContext();

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
    const wishlists = cart
        ? wishlist?.filter((product) =>
            !cart.find((item) => item.product._id === product._id),
        )
        : wishlist;

    async function updateWishlist(newWishlistState, productId) {
        try {
            setWishlistLoading(true);
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

            (data.success && data.updateProductToWishlist.isWishlist)
                ? dispatch({
                    type: "addToWishlist",
                    heading: "Product added to wishlist",
                    subHeading: "",
                })
                : dispatch({
                    type: "removeFromWishlist",
                    heading: "Product removed from wishlist",
                    subHeading: "",
                });

            setTimeout(() => {
                dispatch({
                    type: "",
                    heading: "",
                    subHeading: "",
                });
            }, 2500);

        } catch (error) {
            console.error(error);
        } finally {
            setWishlistLoading(false);
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
                wishlists,
                handleWishlist,
                wishlistLoading,
                updateWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}
