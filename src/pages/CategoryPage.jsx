import { useState, useEffect } from "react";
import { useSearchParams } from "react-router"
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./productListing/ProductCard";
import useEcommerceContext from "../../contexts/EcommerceProvider";
import Sidebar from "./productListing/FiltereOption/SIdebar";

export default function CategoryPage() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("c");
    const { loading, products, getProductsByCategory } = useEcommerceContext();

    useEffect(() => {
        getProductsByCategory(category);
        window.scrollTo(top);
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/Solana-Sol-Line--Streamline-Mingcute.svg" />
            <title>Products</title>
            <Navbar />
            <div className="w-full absolute top-55.75 lg:top-42.25 left-0 right-0">
                <main className="relative max-w-340 mx-auto w-full px-4 sm:px-6 lg:px-0">
                    <div className="lg:flex">
                        <div className="lg:pt-0 lg:border-e">
                            <Sidebar />
                        </div>
                        <div className="overflow-hidden pt-16 pb-10 lg:pt-5 px-0 lg:px-8 lg:ps-4 xl:ps-8">
                            <h1 className="text-foreground font-medium text-lg mb-10">{category}</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:max-[1180px]:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-10">
                                {loading && Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="ms-0 lg:ms-4 flex flex-col gap-y-4 animate-pulse">
                                        <div className="shrink-0">
                                            <span className="w-1/1 lg:w-70 h-60 sm:h-80 block bg-surface-1 rounded-xl"></span>
                                        </div>

                                        <div className="w-full">
                                            <ul className="space-y-3">
                                                <li className="w-3/4 h-4 bg-surface-1 rounded-full"></li>
                                                <li className="w-1/2 h-4 bg-surface-1 rounded-full"></li>
                                                <li className="w-full h-4 bg-surface-1 rounded-full"></li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                {!products || products?.length === 0 || products.error ?
                                    (!loading && <p className="font-medium text-muted-foreground text-2xl">Cannot find any products!</p>)
                                    :
                                    (
                                        !loading && products?.map(product => (
                                            <ProductCard key={product._id} product={product} />
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </main>
                <hr />
                <Footer />
            </div>
        </>
    )
}
