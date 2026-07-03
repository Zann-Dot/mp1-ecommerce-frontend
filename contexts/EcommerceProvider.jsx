import { createContext, useContext, useReducer, useState } from "react";

const EcommerceContext = createContext();
const useEcommerceContext = () => useContext(EcommerceContext);
export default useEcommerceContext;

function alertReducer(alert, action) {
    switch (action.type) {
        case "setToDefault":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "addressUpdateForm":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "removeAddress":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "addressUpdateFormError":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "quantityUpdate":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "addedToCart":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };

        case "removedItemFromCart":
            return {
                type: action.type,
                headingMessage: action.heading,
                subHeadingMessage: action.subHeading,
            };
    }
}

export function EcommerceProvider({ children }) {
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);
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
        try {
            setLoading(true);
            const response = await fetch("/api/products");
            if (!response.ok) throw new Error("Failed to get products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    async function getOrdersDetails() {
        try {
            setLoading(true);
            const response = await fetch(`/api/orders/${user?._id}`);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            setOrders(data);
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
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
                getOrdersDetails,
                orders,
                alert,
                dispatch,
                loading,
                setLoading
            }}
        >
            {children}
        </EcommerceContext.Provider>
    );
}
