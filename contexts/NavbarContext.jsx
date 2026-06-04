import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
const useNavbarContext = () => useContext(NavbarContext);
export default useNavbarContext;

export function NavbarProvider({ children }) {
   const [search, setSearch] = useState()
   // console.log(search);

   return (
      <NavbarContext.Provider value={{ search, setSearch }}>

         {children}
      </NavbarContext.Provider>
   );
}
