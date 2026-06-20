import { createContext, useContext, useState } from "react";

const EcommerceContext = createContext();
const useEcommerceContext = () => useContext(EcommerceContext);
export default useEcommerceContext;

export function EcommerceProvider({ children }) {
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [sort, setSort] = useState("");
    const [wishlist, setWishlist] = useState([]);

    if (themeMode === "dark") {
        localStorage.setItem("theme", themeMode);
    } else {
        localStorage.setItem("theme", themeMode);
    }

    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark",
    );

    async function getUser() {
        try {
            const response = await fetch("/api/user/profile/customer");
            const userData = await response.json();
            if (!response.ok) {
                setUser({ userId: null, mode: "guest" });

                if (
                    response.status === 401 ||
                    response.status === 403 ||
                    response.status === 500
                ) {
                    console.error(userData.error);
                }
                return;
            }

            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchProducts() {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to get products");
        const data = await response.json();
        setProducts(data);
    }

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
        <EcommerceContext.Provider
            value={{
                setThemeMode,
                products,
                sort,
                setSort,
                setProducts,
                fetchProducts,
                getUser,
                user,
                fetchWishlistProducts,
                wishlist,
                handleWishlist,
            }}
        >
            {children}
        </EcommerceContext.Provider>
    );
}
