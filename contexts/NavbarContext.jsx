import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
const useNavbarContext = () => useContext(NavbarContext);
export default useNavbarContext;

export function NavbarProvider({ children }) {

  return (
    <NavbarContext.Provider value={{}}>
      {children}
    </NavbarContext.Provider>
  );
}
