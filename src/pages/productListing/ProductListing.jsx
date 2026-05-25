import React from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "./FiltereOption/SIdebar";
import FeaturedProducts from "../home/FeaturedProducts";



export default function () {
    return (
        <div className="relative">
            <Navbar />
            <main className="absolute top-56.25 lg:top-42.25 px-4 sm:px-6 lg:px-0  w-full mx-auto">
                <div className="lg:flex">
                    <div className="pt-4 lg:pt-0 lg:fixed lg:left-0">
                        <Sidebar />
                    </div>
                    <div className="static lg:absolute lg:left-90 overflow-hidden pt-14 pb-10 lg:pt-5 px-0 lg:px-8 lg:ps-4 xl:ps-8">
                        <div className="h-250 sm:h-150 md:h-full grid grid-cols-2 sm:grid-cols-3 lg:max-[1120px]:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-10">
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
        </div>
    );
}
