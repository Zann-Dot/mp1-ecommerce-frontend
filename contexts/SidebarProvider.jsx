import { createContext, useContext, useState } from "react";
import useEcommerceContext from "./EcommerceProvider";
import { useSearchParams } from "react-router";

const SidebarContext = createContext();
const useSidebarContext = () => useContext(SidebarContext);
export default useSidebarContext;

export function SidebarProvider({ children }) {
    const [category, setCategory] = useState([]);
    const [minPrice, setMinPrice] = useState(500);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [searchParams, setSearchParams] = useSearchParams()
    const { setProducts, fetchProducts } = useEcommerceContext();
    const params = new URLSearchParams();

    function filterProducts() {
        if ((minPrice === 0 && maxPrice === 0) || (minPrice === 2000 && maxPrice === 2000)) return;

        category.forEach((category) => {
            params.append("c", category);
        });

        params.set("min", minPrice);
        params.set("max", maxPrice);

        fetch(`/api/products?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));

        setSearchParams(params);
    }

    function resetFilter() {
        fetchProducts();
        setSearchParams("");
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
                resetFilter
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}
