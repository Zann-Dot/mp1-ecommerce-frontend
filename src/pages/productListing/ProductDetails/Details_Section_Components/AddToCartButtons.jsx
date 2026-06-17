import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useEcommerceContext from "../../../../../contexts/EcommerceProvider";
import useCartContext from "../../../../../contexts/CartProvider";

export default function AddToCartButtons({ data, params, productId }) {
    const navigate = useNavigate();
    const [wishlistState, setWishlistState] = useState(data.isWishlist);
    const [goToCart, setGoToCart] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const { handleWishlist, user } = useEcommerceContext();
    const { addToCart, cart } = useCartContext();
    const cartItemQty = cart?.find((i) => i.product._id === productId)?.quantity;
    const currentQty = searchParams.get("quantity") || cartItemQty;

    function handleQuantity(e) {
        params.set("quantity", e.target.value);
        setSearchParams(params);
    }

    async function handleAddToCart() {
        if (user.mode !== "guest") {
            const size = searchParams.get("size");
            const quantity = parseInt(searchParams.get("quantity") ?? 1);
            const payload = {
                size,
                quantity,
                product: productId,
                userId: user._id,
            };
            const response = await addToCart(payload);
            response.success && setGoToCart(true);
            goToCart && navigate("/cart");
        } else {
            navigate("/customer/login");
        }
    }
    return (
        <div className="flex items-center mt-8 gap-2">
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
            <button
                type="button"
                onClick={handleAddToCart}
                className="cursor-pointer py-3 px-4 w-full text-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
            >
                {goToCart ? "Go to cart" : "Add to cart"}
            </button>
            <button
                type="button"
                onClick={() =>
                    handleWishlist(wishlistState, setWishlistState, productId)
                }
                className="wishlist cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-layer-line bg-layer text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus  disabled:opacity-50 disabled:pointer-events-none"
            >
                <svg
                    className="zeqf6 shb27 kh2c5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={wishlistState ? "#F5788B" : "none"}
                    stroke={wishlistState ? "#F5788B" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
            </button>
        </div>
    )
}
