import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useEcommerceContext from "../../../../../contexts/EcommerceProvider";
import useCartContext from "../../../../../contexts/CartProvider";
import useWishlistContext from "../../../../../contexts/WishlistProvider";

export default function AddToCart({ productId }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { user, dispatch, loading } = useEcommerceContext();
    const { addToCart } = useCartContext();
    const { handleWishlist } = useWishlistContext();
    const [goToCart, setGoToCart] = useState(false);
    const [wishlistState, setWishlistState] = useState(true);

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

            if (response?.success) {
                location.pathname === "/wishlist" &&
                    (await handleWishlist(wishlistState, setWishlistState, productId));

                dispatch({
                    type: "addedToCart",
                    heading: "Item added to cart successfully",
                    subHeading: "",
                });

                setTimeout(() => {
                    dispatch({
                        type: "",
                        heading: "",
                        subHeading: "",
                    });
                }, 2500);
                setGoToCart(true);
            }

            goToCart && navigate("/cart");
        } else {
            navigate("/customer/login");
        }
    }

    return (
        <button
            type="button"
            onClick={handleAddToCart}
            className={`cursor-pointer py-3 px-4 w-full text-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none`}
        >
            {loading && (
                <div
                    className="animate-spin inline-block size-4 border-3 border-border border-t-transparent rounded-[999px] text-muted-foreground-2"
                    role="status"
                    aria-label="loading"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            {!loading && (goToCart ? "Go to cart" : "Add to cart")}
        </button>
    );
}
