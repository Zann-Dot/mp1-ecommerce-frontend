import Navbar from "../components/Header/Navbar";
import Sidebar from "./FiltereOption/SIdebar";
import FeaturedProducts from "../home/FeaturedProducts";
import Footer from "../components/Footer/Footer";

export default function ProductListing() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top56.25 lg:top-42.25 left-0 right-0">
                <main className="max-w-340 mx-auto w-full my-10 px-4 sm:px-6 lg:px-0">
                    <div className="flex">
                        <div className="pt-4 lg:pt-0">
                            <Sidebar />
                        </div>
                        <div className="overflow-hidden pt-14 pb-10 lg:pt-5 px-0 lg:px-8 lg:ps-4 xl:ps-8">
                            <div className="h-250 sm:h-150 md:h-full grid grid-cols-2 sm:grid-cols-3 lg:max-[1120px]:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-10">
                                <FeaturedProducts />
                                <FeaturedProducts />
                                <FeaturedProducts />
                                <FeaturedProducts />
                                <FeaturedProducts />
                                <FeaturedProducts />
                            </div>
                        </div>
                    </div>

                </main>
                <hr />
                <Footer />
            </div>
        </>
    );
}
