import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import MainSection from "./MainSection";

export default function Homepage() {

   return (
      <>
         <Navbar />
         <div className="w-full absolute top-42.25 left-0 right-0">
            <MainSection />
            <hr />
            <Footer />
         </div>
      </>
   );
}
