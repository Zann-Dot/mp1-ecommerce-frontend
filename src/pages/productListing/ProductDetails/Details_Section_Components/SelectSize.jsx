import { useSearchParams } from "react-router";
import useCartContext from "../../../../../contexts/CartProvider";

export default function SelectSize({ params, productId }) {
    const { cart } = useCartContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const cartItemSize = cart?.find((i) => i.product._id === productId)?.size;
    const currentSize = searchParams.get("size") || cartItemSize;

    function handleSize(e) {
        params.set("size", e.target.value);
        setSearchParams(params);
    };

    return (
        <div className="grid col-span-6 sm:max-lg:col-span-3 grid-cols-4 gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label
                    key={size}
                    className={`hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center has-checked:bg-surface has-checked:border-primary`}
                >
                    <input
                        type="radio"
                        name="size"
                        value={size}
                        className="appearance-none hidden"
                        onChange={handleSize}
                        checked={currentSize === size}
                    />
                    {size}
                </label>
            ))}
        </div>
    )
}
