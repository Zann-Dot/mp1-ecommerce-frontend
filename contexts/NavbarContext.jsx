import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
const useNavbarContext = () => useContext(NavbarContext);
export default useNavbarContext;

export function NavbarProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <NavbarContext.Provider value={{ setDarkMode }}>
      {children}
    </NavbarContext.Provider>
  );
}
