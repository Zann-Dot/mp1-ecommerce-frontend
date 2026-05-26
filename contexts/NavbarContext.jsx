import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
const useNavbarContext = () => useContext(NavbarContext);
export default useNavbarContext;

export function NavbarProvider({ children }) {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme'))

  if (themeMode === 'dark') {
    localStorage.setItem('theme', themeMode);
  }
  else {
    localStorage.setItem('theme', themeMode);
  }

  document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');



  return (
    <NavbarContext.Provider value={{ setThemeMode }}>
      {children}
    </NavbarContext.Provider>
  );
}
