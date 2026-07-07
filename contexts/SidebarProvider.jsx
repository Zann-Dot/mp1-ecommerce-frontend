import { createContext, useContext, useEffect, useState } from "react";
import useEcommerceContext from "./EcommerceProvider";
import { useLocation, useSearchParams } from "react-router";

const SidebarContext = createContext();
const useSidebar = () => useContext(SidebarContext);
export default useSidebar;

export function SidebarProvider({ children }) {
    const { setProducts, fetchProducts, setLoading, getProductsByCategory } =
        useEcommerceContext();

    const location = useLocation();

    const [category, setCategory] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [rating, setRating] = useState("all");

    const [searchParams, setSearchParams] = useSearchParams();
    const productByCategory = searchParams.get("c");

    const isPageCategory = location.pathname === "/category" && productByCategory;

    function filterProducts() {
        const params = new URLSearchParams();
        if (
            (minPrice === "0" && maxPrice === "0") ||
            (minPrice === "2000" && maxPrice === "2000")
        )
            return;

        isPageCategory ? params.set("c", productByCategory) : params.delete("c");

        category.forEach((category) => {
            params.append("c", category);
        });

        params.set("min", minPrice);
        params.set("max", maxPrice);
        params.set("r", rating);

        setLoading(true);
        fetch(`/api/products?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));

        setSearchParams(params);
    }

    function resetFilter() {
        isPageCategory
            ? setSearchParams(`c=${productByCategory}`)
            : setSearchParams("");

        isPageCategory ? getProductsByCategory(productByCategory) : fetchProducts();
    }

    return (
        <SidebarContext.Provider
            value={{
                setCategory,
                filterProducts,
                setMaxPrice,
                setMinPrice,
                minPrice,
                maxPrice,
                resetFilter,
                setRating,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}
