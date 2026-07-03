import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import MainSection from "./MainSection";

export default function Homepage() {

   return (
      <>
         <link rel="icon" type="image/svg+xml" href="/Solana-Sol-Line--Streamline-Mingcute.svg" />
         <title>Home</title>
         <Navbar />
         <div className="w-full absolute top-56.25 lg:top-42.25 left-0 right-0">
            <MainSection />
            <hr />
            <Footer />
         </div>
      </>
   );
}
