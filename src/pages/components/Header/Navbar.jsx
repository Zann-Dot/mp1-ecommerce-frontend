import { NavbarProvider } from "../../../../contexts/NavbarContext";
import CategorySection from "./CategorySection";
import LowerNavSection from "./lowerNavSection/LowerNavSection";
import MobileSideDashboard from "./lowerNavSection/MobileSideDashboard";
import UpperNavSection from "./upperNavSection/UpperNavSection";

export default function Navbar() {
    return (
        <NavbarProvider>
            <MobileSideDashboard />
            <header className="short-screen:static fixed top-0 right-0 left-0 flex flex-col flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-navbar border-b border-navbar-line">
                <UpperNavSection />
                <LowerNavSection />
                <CategorySection />
            </header>
        </NavbarProvider>
    );
}
