import { createContext, useContext, useState } from "react";
import useEcommerceContext from "./EcommerceProvider";
import { useNavigate } from "react-router";

const SidebarContext = createContext();
const useSidebarContext = () => useContext(SidebarContext);
export default useSidebarContext;


export function SidebarProvider({ children }) {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const { setProducts, fetchProducts } = useEcommerceContext();

    function filterByCategory() {
        const params = new URLSearchParams();

        if (category.length !== 0) {
            category.forEach(category => {
                params.append('c', category);
            });
            navigate(`/products?${params.toString()}`)

            fetch(`/api/products?${params.toString()}`)
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((err) => console.log(err));

        } else {
            fetchProducts();
        }
    }

    return (
        <SidebarContext.Provider value={{ setCategory, filterByCategory }}>
            {children}
        </SidebarContext.Provider>
    )
}