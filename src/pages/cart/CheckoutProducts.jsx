import { useState } from "react";
import useCartContext from "../../../contexts/CartProvider";
import useEcommerceContext from "../../../contexts/EcommerceProvider";
import useWishlistContext from "../../../contexts/WishlistProvider";
import calculateDiscountedPrice from "../../utilis/calculateDiscountedPrice";
import { Link } from "react-router";

export default function CheckoutProducts({ cartItem }) {
    const { deleteFromCart, addToCart } = useCartContext();
    const { dispatch } = useEcommerceContext();
    const { handleWishlist } = useWishlistContext();
    const [wishlistState, setWishlistState] = useState(false);

    async function handleQuantityUpdate(e) {
        const payload = {
            size: cartItem?.size,
            quantity: e.target.value,
            product: cartItem?.product?._id,
            userId: cartItem?.userId,
        };
        const response = await addToCart(payload);
        response.success &&
            dispatch({
                type: "quantityUpdate",
                heading: "Quantity updated successfully",
                subHeading: "",
            });

        setTimeout(() => {
            dispatch({
                type: "",
                heading: "",
                subHeading: "",
            });
        }, 2500);
    }
    return (
        <div className="relative flex flex-row gap-5 items-start sm:items-center">
            <Link
                to={`/products/${cartItem?.product._id}?name=${cartItem?.product.productName}`}
                className="relative w-32 rounded-xl overflow-hidden bg-neutral-100 shrink-0 dark:bg-neutral-800"
            >
                <img
                    src={cartItem?.product.imageUrl}
                    alt="Nike Air Force 1"
                    className="w-full h-40  object-cover"
                />
            </Link>

            {/* --- 2. DETAILS & SELECTION CONTROLS --- */}
            <div className="flex-1 w-full flex flex-col gap-y-4">
                <div>
                    <h3 className="text-base text-foreground dark:text-neutral-200">
                        {cartItem?.product.productName}
                    </h3>
                    <p className="text-sm text-foreground mt-0.5 dark:text-neutral-100">
                        ₹
                        {calculateDiscountedPrice(
                            cartItem?.product.discount,
                            cartItem?.product.priceRupees,
                        )}
                    </p>
                </div>

                <div className="w-full grid grid-cols-3 gap-x-4 sm:gap-x-8">
                    {/* <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Color
                        </span>
                        <div className="p-2 inline-flex items-center justify-center rounded-lg border border-line-3 text-xs text-foreground bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            White
                        </div>
                    </div> */}

                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Size
                        </span>
                        <div className="p-2 inline-flex items-center justify-center rounded-lg border border-line-3 text-xs text-foreground bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            {cartItem?.size}
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Quantity
                        </span>

                        <select
                            className="p-2 pe-9 block w-15 bg-layer border-line-3 rounded-lg text-xs text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            defaultValue={cartItem?.quantity}
                            onChange={handleQuantityUpdate}
                        >
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="pt-1 flex items-center gap-x-2">
                    <button
                        type="button"
                        onClick={() => deleteFromCart(cartItem.product._id)}
                        className="cursor-pointer inline-flex items-center gap-x-1.5 text-sm text-foreground underline decoration-1 underline-offset-4 hover:text-red-600 hover:decoration-red-600 transition-colors duration-75 dark:text-neutral-300 dark:hover:text-red-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Delete-Line--Streamline-Mingcute"
                            height="16"
                            width="16"
                        >
                            <desc>Delete Line Streamline Icon: https://streamlinehq.com</desc>
                            <g fill="none" fillRule="nonzero">
                                <path
                                    d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                    strokeWidth="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M13.333333333333332 3.333333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333h-0.6666666666666666l-0.002 0.047333333333333324 -0.622 8.713999999999999A1.3333333333333333 1.3333333333333333 0 0 1 10.712666666666665 14.666666666666666H5.286666666666666a1.3333333333333333 1.3333333333333333 0 0 1 -1.33 -1.2386666666666666l-0.622 -8.713333333333333A0.6779999999999999 0.6779999999999999 0 0 1 3.333333333333333 4.666666666666666H2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h10.666666666666666Zm-2.002 1.3333333333333333H4.668666666666667l0.6186666666666667 8.666666666666666h5.425333333333333l0.6186666666666667 -8.666666666666666ZM9.333333333333332 1.3333333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333h-2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h2.6666666666666665Z"
                                    strokeWidth="0.6667"
                                ></path>
                            </g>
                        </svg>
                        Remove
                    </button>

                    <button
                        onClick={() => {
                            deleteFromCart(cartItem.product._id);
                            handleWishlist(wishlistState, setWishlistState, cartItem.product._id);
                        }}
                        type="button"
                        className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-600 hover:bg-primary-100 focus:outline-hidden hover:text-primary-800 focus:bg-primary-100 focus:text-primary-800 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-400/70 dark:hover:bg-primary-500/20 dark:hover:text-primary-400 dark:focus:bg-primary-500/20 dark:focus:text-primary-400"
                    >
                        Move to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
