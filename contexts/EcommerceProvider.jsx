import { createContext, useContext, useReducer, useState } from "react";

const EcommerceContext = createContext();
const useEcommerceContext = () => useContext(EcommerceContext);
export default useEcommerceContext;

function alertReducer(action) {
    switch (action.type) {
        case "setToDefault":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading
            };

        case "addressUpdateForm":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading
            };

    }
}

export function EcommerceProvider({ children }) {
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [sort, setSort] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [alert, dispatch] = useReducer(alertReducer, {
        type: "",
        headingMessage: "",
        subHeadingMessage: "",
    });

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

    async function getOrdersDetails() {
        try {
            const response = await fetch("/api/orders");
            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            setOrders(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function setAddressToDefault(isDefault, addressId) {
        try {
            const res = await fetch(
                `/api/user/defaultAddress/${user?._id}/${addressId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ isDefault }),
                },
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            data.success && dispatch({
                type: "setToDefault",
                heading: "Address set to default",
                subHeading: "You have successfully updated your address to default"
            });

            setTimeout(() => {
                dispatch({
                    type: "",
                    headingMessage: "",
                    subHeadingMessage: "",
                })
            }, 3000)

        } catch (error) {
            console.error(error.message);
        }
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
                getOrdersDetails,
                orders,
                setAddressToDefault,
                alert,
                dispatch
            }}
        >
            {children}
        </EcommerceContext.Provider>
    );
}
