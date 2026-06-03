import useEcommerceContext from "../../../contexts/EcommerceProvider";
import FeaturedProducts from "./FeaturedProducts";

export default function Featured() {
    const { products } = useEcommerceContext();
    const featuredProducts = products.filter((p) => products.indexOf(p) <= 3);

    return (
        <div className="flex flex-col my-10 gap-10">
            <h1 className="text-foreground text-center font-semibold text-xl my-5">
                Featured
            </h1>
            <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
                {featuredProducts.map((product) => (
                    <FeaturedProducts key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
