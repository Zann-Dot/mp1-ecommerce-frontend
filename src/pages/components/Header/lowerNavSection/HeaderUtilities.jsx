import { Link } from "react-router";
import useEcommerceContext from "../../../../../contexts/EcommerceProvider";
import useCartContext from "../../../../../contexts/CartProvider";
import useWishlistContext from "../../../../../contexts/WishlistProvider";

export default function HeaderUtilities() {
    const { user } = useEcommerceContext();
    const { wishlists } = useWishlistContext();
    const { totalQuantity, cart } = useCartContext();

    return (
        <div className="flex items-center gap-5 ms-auto lg:ms-0">
            <div className="w-15 cursor-pointer">
                {user.mode === "guest" && (
                    <Link
                        to="/customer/login"
                        className="text-foreground flex flex-col justify-center items-center gap-1 text-xs hover:text-primary-hover"
                    >
                        <svg
                            className="zeqf6 shb27 kh2c5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Log in
                    </Link>
                )}

                {user.mode !== "guest" && (
                    <Link
                        to="/user/account"
                        className="text-foreground flex flex-col justify-center items-center gap-1 text-xs hover:text-primary-hover"
                    >
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                                id="User-3-Line--Streamline-Mingcute"
                                height="20"
                                width="20"
                            >
                                <desc>User 3 Line Streamline Icon: https://streamlinehq.com</desc>
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        d="M36 0v36H0V0h36ZM18.889499999999998 34.887l-0.0165 0.003 -0.10649999999999998 0.052500000000000005 -0.03 0.006 -0.021 -0.006 -0.10649999999999998 -0.052500000000000005c-0.015 -0.006 -0.028499999999999998 -0.0015 -0.036000000000000004 0.0075l-0.006 0.015 -0.025500000000000002 0.642 0.0075 0.03 0.015 0.0195 0.156 0.11099999999999999 0.0225 0.006 0.018000000000000002 -0.006 0.156 -0.11099999999999999 0.018000000000000002 -0.024 0.006 -0.025500000000000002 -0.025500000000000002 -0.6405c-0.003 -0.015 -0.013499999999999998 -0.025500000000000002 -0.025500000000000002 -0.026999999999999996Zm0.3975 -0.1695 -0.0195 0.003 -0.27749999999999997 0.1395 -0.015 0.015 -0.0045000000000000005 0.0165 0.026999999999999996 0.645 0.0075 0.018000000000000002 0.012 0.0105 0.3015 0.1395c0.018000000000000002 0.006 0.0345 0 0.043500000000000004 -0.012l0.006 -0.021 -0.051000000000000004 -0.921c-0.0045000000000000005 -0.018000000000000002 -0.015 -0.03 -0.03 -0.033Zm-1.0725 0.003a0.0345 0.0345 0 0 0 -0.0405 0.009000000000000001l-0.009000000000000001 0.021 -0.051000000000000004 0.921c0 0.018000000000000002 0.0105 0.03 0.025500000000000002 0.036000000000000004l0.0225 -0.003 0.3015 -0.1395 0.015 -0.012 0.006 -0.0165 0.025500000000000002 -0.645 -0.0045000000000000005 -0.018000000000000002 -0.015 -0.015 -0.276 -0.138Z"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M18 19.5c3.594 0 6.862500000000001 1.041 9.267 2.508 1.2000000000000002 0.732 2.226 1.596 2.967 2.535 0.729 0.9225 1.266 2.0265 1.266 3.207 0 1.2675 -0.6164999999999999 2.2664999999999997 -1.5044999999999997 2.979 -0.8400000000000001 0.675 -1.9485 1.1219999999999999 -3.1260000000000003 1.434 -2.367 0.6255 -5.526 0.8370000000000001 -8.8695 0.8370000000000001s-6.5024999999999995 -0.21000000000000002 -8.8695 -0.8370000000000001c-1.1775 -0.312 -2.286 -0.759 -3.1260000000000003 -1.434C5.115 30.015 4.5 29.0175 4.5 27.75c0 -1.1805 0.5369999999999999 -2.2845 1.266 -3.2085 0.741 -0.9375 1.7655 -1.7999999999999998 2.967 -2.535C11.1375 20.5425 14.4075 19.5 18 19.5Zm0 3c-3.0345000000000004 0 -5.7645 0.885 -7.704000000000001 2.0685000000000002 -0.9705 0.591 -1.7025000000000001 1.2329999999999999 -2.175 1.833 -0.486 0.615 -0.621 1.08 -0.621 1.3485 0 0.183 0.055499999999999994 0.3765 0.3825 0.639 0.3735 0.30000000000000004 1.0230000000000001 0.6104999999999999 2.016 0.873C11.875499999999999 29.787 14.7165 30 18 30c3.285 0 6.1245 -0.21449999999999997 8.100000000000001 -0.738 0.9945 -0.26249999999999996 1.6440000000000001 -0.573 2.0175 -0.873 0.327 -0.26249999999999996 0.3825 -0.45599999999999996 0.3825 -0.639 0 -0.27 -0.135 -0.7335 -0.6194999999999999 -1.3485 -0.474 -0.6000000000000001 -1.206 -1.242 -2.1765 -1.833C23.764499999999998 23.3835 21.0345 22.5 18 22.5Zm0 -19.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0 -15Zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0 -9Z"
                                        strokeWidth="1.5"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        {user?.firstName}
                    </Link>
                )}
            </div>

            <div className=" w-15 cursor-pointer">
                <Link
                    to="/wishlist"
                    className="text-foreground flex flex-col justify-center items-center gap-1 text-xs hover:text-primary-hover"
                >
                    <div className="indicator">
                        {wishlists.length !== 0 && (
                            <span className="indicator-item badge badge-primary scale-70 px-2 py-0 rounded-full text-primary-foreground text-">
                                {wishlists?.length}
                            </span>
                        )}
                        <div className="p-0.5">
                            <svg
                                className="zeqf6 shb27 kh2c5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                        </div>
                    </div>
                    Wishlist
                </Link>
            </div>

            <div className="w-15 cursor-pointer">
                <Link
                    to={user.mode === "guest" ? "#" : "/cart"}
                    className="text-foreground flex flex-col justify-center items-center gap-1 text-xs hover:text-primary-hover"
                >
                    <div className="indicator">
                        {user.mode !== "guest" && cart.length !== 0 && (
                            <span className="indicator-item badge badge-primary scale-70 px-2 py-0 rounded-full text-primary-foreground text-">
                                {totalQuantity}
                            </span>
                        )}
                        <div className="p-0.5">
                            <svg
                                className="zeqf6 shb27 kh2c5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                            </svg>
                        </div>
                    </div>
                    Cart
                </Link>
            </div>
        </div>
    );
}
