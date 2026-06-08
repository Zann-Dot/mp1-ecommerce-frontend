import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import DetailsSection from "./DetailsSection";
import ImageDisplay from "./ImageDisplay";
import ExploreMore from "../../components/ExploreMore";
import { useParams } from "react-router";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

export default function ProductDetails() {
    const { productId } = useParams();
    const { data, loading, error } = useFetch(`/api/products/${productId}`);

    return (
        <>
            <Navbar />
            <div className="w-full absolute top-56.25 lg:top-42.25 left-0 right-0">
                <main className="max-w-270 mx-auto w-full lg:my-10 px-4 sm:px-6 lg:px-0">
                    {error && (
                        <p className="text-5xl/snug text-center font-bold text-primary-300 dark:text-primary-600">Opss! Cannot get product <br />details</p>
                    )}

                    {loading && (
                        <div className="w-full h-100 grid place-items-center">
                            <div
                                className="animate-spin inline-block size-6 border-3 border-current border-t-transparent rounded-[999px] text-muted-foreground-2"
                                role="status"
                                aria-label="loading"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}

                    {data && (
                        <div className="px-5 sm:px-10 xl:px-8 pt-5 lg:pt-0 grid grid-cols-5 gap-y-10">
                            <ImageDisplay data={data} loading={loading} error={error} />
                            <DetailsSection data={data} loading={loading} error={error} />
                        </div>
                    )}

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
