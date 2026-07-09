import { useState } from "react";
import SelectQuantity from "./SelectQuantity";
import AddToCart from "./AddToCart";
import useWishlistContext from "../../../../../contexts/WishlistProvider";

export default function AddToCartButtons({ data, params, productId }) {
    const [wishlistState, setWishlistState] = useState(data.isWishlist);
    const { handleWishlist } = useWishlistContext();

    return (
        <div className="flex items-center mt-8 gap-2">
            <SelectQuantity params={params} productId={productId} />

            <AddToCart productId={productId} />

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
    );
}
