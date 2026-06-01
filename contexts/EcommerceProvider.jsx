import { createContext, useContext, useState } from "react";

const EcommerceContext = createContext();
const useEcommerceContext = () => useContext(EcommerceContext);
export default useEcommerceContext;

export function EcommerceProvider({ children }) {
    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme'))
    const [products, setProducts] = useState([]);

    if (themeMode === 'dark') {
        localStorage.setItem('theme', themeMode);
    }
    else {
        localStorage.setItem('theme', themeMode);
    }

    document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');

    return (
        <EcommerceContext.Provider value={{ setThemeMode, products, setProducts }}>
            {children}
        </EcommerceContext.Provider>
    )
}