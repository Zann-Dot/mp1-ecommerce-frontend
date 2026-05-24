import React from "react";
import FeaturedProducts from "./FeaturedProducts";

export default function Featured() {
    return (
        <div className="flex flex-col">
            <h1 className="text-foreground font-semibold text-xl my-5">Featured</h1>
            <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-12">
                <FeaturedProducts />
                <FeaturedProducts />
                <FeaturedProducts />
                <FeaturedProducts />
                <FeaturedProducts />
            </div>
        </div>
    );
}
