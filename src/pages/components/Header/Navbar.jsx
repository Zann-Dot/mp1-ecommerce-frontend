import { NavbarProvider } from "../../../../contexts/NavbarContext";
import LowerNavSection from "./lowerNavSection/LowerNavSection";
import UpperNavSection from "./upperNavSection/UpperNavSection";

export default function Navbar() {
    return (
        <NavbarProvider>
            <header className="flex flex-col flex-wrap sm:justify-start sm:flex-nowrap w-full bg-navbar border-b border-navbar-line">
                <UpperNavSection />
                <LowerNavSection />
            </header>
        </NavbarProvider>
    );
}
