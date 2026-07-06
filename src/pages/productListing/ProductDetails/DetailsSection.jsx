import { useEffect } from "react";
import { useSearchParams } from "react-router";
import Accordian from "./Details_Section_Components/Accordian";
import Utilities from "./Details_Section_Components/Utilities";
import AddToCartButtons from "./Details_Section_Components/AddToCartButtons";
import Ratings from "./Details_Section_Components/Ratings";
import SelectSize from "./Details_Section_Components/SelectSize";

export default function DetailsSection({ data }) {
    const productId = data?._id;
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        params.delete("quantity");
        params.delete("size");
        window.scrollTo(top);
    }, [productId]);

    return (
        <div className="text-foreground col-span-5 short-screen:col-span-5 md:col-span-2 px-1 md:px-10">
            <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground-1">{data.category}</p>
                <h1 className="text-3xl font-medium">{data.productName}</h1>
                <h4 className="text-lg">₹{data.priceRupees}</h4>
            </div>

            <Ratings data={data} />
            <p className="text-xs text-muted-foreground">
                Includes reviewers who received this item for free
            </p>

            <h3 className="text-lg mt-5 font-medium mb-2">Size</h3>
            <SelectSize params={params} productId={productId} />

            <AddToCartButtons data={data} params={params} productId={productId} />
            <h3 className="mt-8 font-medium">Shipping</h3>
            <p className="text-sm text-muted-foreground-1 mt-1">
                You'll see our shipping options at checkout.
            </p>
            <Utilities data={data} />
            <Accordian data={data} />
        </div>
    );
}
