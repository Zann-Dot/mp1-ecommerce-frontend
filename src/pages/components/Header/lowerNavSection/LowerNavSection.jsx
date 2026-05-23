import Dashboards from "./Dashboards";
import HeaderUtilities from "./HeaderUtilities";
import Logo from "./Logo";
import MediumViewSearchBar from "./MediumViewSearchBar";
import MobileSideDashboard from "./MobileSideDashboard";
import SearchBar from "./SearchBar";

export default function LowerNavSection() {
   return (
      <nav className="max-w-340 w-full mx-auto px-4 py-5 flex flex-col gap-3">
         <div className="flex items-center flex-wrap md:flex-nowrap basis-full lg:gap-7 sm:max-lg:justify-start lg:justify-between">
            <MobileSideDashboard />
            <Logo />
            <Dashboards />
            <SearchBar />
            <HeaderUtilities />
         </div>

         <MediumViewSearchBar />
      </nav>
   );
}
