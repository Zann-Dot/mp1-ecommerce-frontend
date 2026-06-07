import { createContext, useContext, useState } from "react";

const EcommerceContext = createContext();
const useEcommerceContext = () => useContext(EcommerceContext);
export default useEcommerceContext;

export function EcommerceProvider({ children }) {
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("")

    if (themeMode === "dark") {
        localStorage.setItem("theme", themeMode);
    } else {
        localStorage.setItem("theme", themeMode);
    }

    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark",
    );

    async function fetchProducts() {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to get products");
        const data = await response.json();
        setProducts(data);
    }

    return (
        <EcommerceContext.Provider
            value={{ setThemeMode, products, sort, setSort, setProducts, fetchProducts }}
        >
            {children}
        </EcommerceContext.Provider>
    );
}
