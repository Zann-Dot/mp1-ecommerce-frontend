import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import DetailsSection from "./DetailsSection";
import ImageDisplay from "./ImageDisplay";
import ExploreMore from "../../components/ExploreMore";

export default function ProductDetails() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-56.25 lg:top-42.25 left-0 right-0">
                <main className="max-w-270 mx-auto w-full lg:my-10 px-4 sm:px-6 lg:px-0">
                    <div className="px-5 sm:px-10 xl:px-8 pt-5 lg:pt-0 grid grid-cols-5 gap-y-10">
                        <ImageDisplay />
                        <DetailsSection />
                    </div>
                </main>
                <section className="max-w-340 mx-auto mt-20 w-full lg:my-10 px-8 sm:px-10 xl:px-8">
                    <ExploreMore />
                </section>
                <hr />
                <Footer />
            </div>
        </>
    );
}
