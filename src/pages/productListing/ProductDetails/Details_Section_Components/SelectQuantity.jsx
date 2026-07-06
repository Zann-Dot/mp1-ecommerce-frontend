import { useSearchParams } from "react-router";
import useCartContext from "../../../../../contexts/CartProvider";

export default function SelectQuantity({ params, productId }) {
    const { cart } = useCartContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const cartItemQty = cart?.find((i) => i.product._id === productId)?.quantity;
    const currentQty = searchParams.get("quantity") || cartItemQty;

    function handleQuantity(e) {
        params.set("quantity", e.target.value);
        setSearchParams(params);
    }

    return (
        <select
            onChange={handleQuantity}
            value={currentQty ?? 1}
            className="py-3 px-4 hover:bg-layer-hover cursor-pointer pe-9 block bg-layer border-layer-line rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
        >
            {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
    )
}
