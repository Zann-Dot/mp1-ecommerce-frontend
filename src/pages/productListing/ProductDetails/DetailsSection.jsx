import { useState } from "react";
import useEcommerceContext from "../../../../contexts/EcommerceProvider";

export default function DetailsSection({ data }) {
    const [wishlistState, setWishlistState] = useState(data.isWishlist);
    const { handleWishlist } = useEcommerceContext();
    const productId = data?._id;

    return (
        <div className="text-foreground col-span-5 md:col-span-2 px-1 md:px-10">
            <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground-1">{data.category}</p>
                <h1 className="text-3xl font-medium">{data.productName}</h1>
                <h4 className="text-lg">₹{data.priceRupees}</h4>
            </div>

            <div className="flex mt-8 text-sm gap-x-1.5">
                {(data.ratings / 10).toFixed(1)}
                <div className="flex items-center gap-0.5">
                    <svg
                        className={`shrink-0 size-3.5 ${data.ratings >= 10 ? "text-primary" : "text-muted-foreground/50"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                        className={`shrink-0 size-3.5 ${data.ratings >= 20 ? "text-primary" : "text-muted-foreground/50"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                        className={`shrink-0 size-3.5 ${data.ratings >= 30 ? "text-primary" : "text-muted-foreground/50"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                        className={`shrink-0 size-3.5 ${data.ratings >= 40 ? "text-primary" : "text-muted-foreground/50"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                        className={`shrink-0 size-3.5 ${data.ratings > 45 ? "text-primary" : "text-muted-foreground/50"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                </div>
                ({Math.round(Math.random() * 10000)})
            </div>
            <p className="text-xs text-muted-foreground">
                Includes reviewers who received this item for free
            </p>

            <h3 className="text-lg mt-5 font-medium mb-2">Size</h3>
            <div className="grid grid-cols-4 gap-2">
                <div className="hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center">
                    S
                </div>
                <div className="hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center">
                    M
                </div>
                <div className="hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center">
                    L
                </div>
                <div className="hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center">
                    XL
                </div>
                <div className="hover:bg-surface p-1 cursor-pointer border border-line-3 rounded-lg grid place-items-center">
                    XXL
                </div>
            </div>

            <div className="flex items-center mt-8 gap-2">
                <select className="py-3 px-4 hover:bg-layer-hover cursor-pointer pe-9 block bg-layer border-layer-line rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <button
                    type="button"
                    className="cursor-pointer py-3 px-4 w-full text-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                >
                    Add to cart
                </button>
                <button
                    type="button"
                    onClick={() => handleWishlist(wishlistState, setWishlistState, productId)}
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

            <h3 className="mt-8 font-medium">Shipping</h3>
            <p className="text-sm text-muted-foreground-1 mt-1">
                You'll see our shipping options at checkout.
            </p>

            <div className="flex flex-col gap-2 mt-5">
                <div className="flex text-muted-foreground-2 text-sm items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="Safety-Certificate-Line--Streamline-Mingcute"
                        height="18"
                        width="18"
                    >
                        <desc>
                            Safety Certificate Line Streamline Icon: https://streamlinehq.com
                        </desc>
                        <g fill="none" fillRule="nonzero">
                            <path
                                d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                strokeWidth="0.6667"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M7.532 1.4633333333333332a1.3333333333333333 1.3333333333333333 0 0 1 0.8213333333333332 -0.03666666666666667l0.11466666666666665 0.03666666666666667 4.666666666666666 1.75a1.3333333333333333 1.3333333333333333 0 0 1 0.8606666666666666 1.1386666666666665l0.004666666666666666 0.11v3.5753333333333335a6 6 0 0 1 -3.139333333333333 5.273999999999999l-0.17733333333333334 0.09266666666666667 -2.2359999999999998 1.1179999999999999a1 1 0 0 1 -0.7986666666666666 0.04133333333333333l-0.09599999999999999 -0.04133333333333333 -2.2359999999999998 -1.1179999999999999a6 6 0 0 1 -3.313333333333333 -5.166666666666666l-0.003333333333333333 -0.19999999999999998V4.462a1.3333333333333333 1.3333333333333333 0 0 1 0.7633333333333333 -1.2053333333333334l0.102 -0.043333333333333335 4.666666666666666 -1.75ZM8 2.7119999999999997 3.333333333333333 4.462v3.5753333333333335a4.666666666666666 4.666666666666666 0 0 0 2.423333333333333 4.092l0.15666666666666665 0.08199999999999999L8 13.254666666666667l2.0866666666666664 -1.0433333333333332a4.666666666666666 4.666666666666666 0 0 0 2.5766666666666667 -3.9979999999999998l0.003333333333333333 -0.176V4.462l-4.666666666666666 -1.75Zm2.2886666666666664 3.0406666666666666a0.6666666666666666 0.6666666666666666 0 0 1 0.998 0.88l-0.05533333333333333 0.06266666666666666 -3.489333333333333 3.49a0.7333333333333334 0.7333333333333334 0 0 1 -0.9733333333333333 0.05666666666666667l-0.064 -0.05666666666666667 -1.6026666666666665 -1.6026666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0.88 -0.9986666666666666l0.06266666666666666 0.05533333333333333 1.1786666666666665 1.1786666666666665 3.0653333333333332 -3.0653333333333332Z"
                                strokeWidth="0.6667"
                            ></path>
                        </g>
                    </svg>
                    Secure checkout
                </div>

                {data.isReturnable && (
                    <div className="flex text-muted-foreground-2 text-sm items-center gap-3">
                        <svg
                            className="zeqf6 tam5u w1use kh2c5"
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
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                        </svg>
                        10 days returnable
                    </div>
                )}

                {data.isFreeDelivery && (
                    <div className="flex text-muted-foreground-2 text-sm items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Truck-Line--Streamline-Mingcute"
                            height="20"
                            width="20"
                        >
                            <desc>Truck Line Streamline Icon: https://streamlinehq.com</desc>
                            <g fill="none" fillRule="nonzero">
                                <path
                                    d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                    strokeWidth="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M10 2.6666666666666665a1.3333333333333333 1.3333333333333333 0 0 1 1.3333333333333333 1.3333333333333333v0.6666666666666666h1.0133333333333332a1.3333333333333333 1.3333333333333333 0 0 1 1.0406666666666666 0.5l0.9866666666666666 1.234a1.3333333333333333 1.3333333333333333 0 0 1 0.29266666666666663 0.8333333333333333V10a1.3333333333333333 1.3333333333333333 0 0 1 -1.3333333333333333 1.3333333333333333 2 2 0 1 1 -4 0h-2.6666666666666665a2 2 0 1 1 -4 0 1.3333333333333333 1.3333333333333333 0 0 1 -1.3333333333333333 -1.3333333333333333V4a1.3333333333333333 1.3333333333333333 0 0 1 1.3333333333333333 -1.3333333333333333h7.333333333333333ZM4.666666666666666 10.666666666666666a0.6666666666666666 0.6666666666666666 0 1 0 0 1.3333333333333333 0.6666666666666666 0.6666666666666666 0 0 0 0 -1.3333333333333333Zm6.666666666666666 0a0.6666666666666666 0.6666666666666666 0 1 0 0 1.3333333333333333 0.6666666666666666 0.6666666666666666 0 0 0 0 -1.3333333333333333ZM10 4H2.6666666666666665v6h0.5093333333333333c0.3666666666666667 -0.4093333333333333 0.8986666666666667 -0.6666666666666666 1.4906666666666668 -0.6666666666666666 0.5466666666666666 0 1.0419999999999998 0.22 1.4033333333333333 0.5746666666666667l0.08733333333333333 0.092h3.685333333333333l0.07666666666666666 -0.08066666666666666 0.08066666666666666 -0.07666666666666666V4Zm2.3466666666666667 2H11.333333333333332v3.333333333333333c0.5466666666666666 0 1.0419999999999998 0.22 1.4033333333333333 0.5746666666666667l0.08733333333333333 0.092H13.333333333333332v-2.7666666666666666L12.346666666666666 6Z"
                                    strokeWidth="0.6667"
                                ></path>
                            </g>
                        </svg>
                        Free delivery
                    </div>
                )}

                {data.isPayOnDelivery && (
                    <div className="flex text-muted-foreground-2 text-sm items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            id="Wallet-4-Line--Streamline-Mingcute"
                            height="20"
                            width="20"
                        >
                            <desc>Wallet 4 Line Streamline Icon: https://streamlinehq.com</desc>
                            <g fill="none" fillRule="evenodd">
                                <path
                                    d="M18 0v18H0V0zM9.444749999999999 17.4435l-0.00825 0.0015 -0.05324999999999999 0.026250000000000002 -0.015 0.003 -0.0105 -0.003 -0.05324999999999999 -0.026250000000000002c-0.0075 -0.003 -0.014249999999999999 -0.00075 -0.018000000000000002 0.00375l-0.003 0.0075 -0.012750000000000001 0.321 0.00375 0.015 0.0075 0.00975 0.078 0.055499999999999994 0.01125 0.003 0.009000000000000001 -0.003 0.078 -0.055499999999999994 0.009000000000000001 -0.012 0.003 -0.012750000000000001 -0.012750000000000001 -0.32025c-0.0015 -0.0075 -0.006749999999999999 -0.012750000000000001 -0.012750000000000001 -0.013499999999999998m0.19875 -0.08475 -0.00975 0.0015 -0.13874999999999998 0.06975 -0.0075 0.0075 -0.0022500000000000003 0.00825 0.013499999999999998 0.3225 0.00375 0.009000000000000001 0.006 0.00525 0.15075 0.06975c0.009000000000000001 0.003 0.01725 0 0.021750000000000002 -0.006l0.003 -0.0105 -0.025500000000000002 -0.4605c-0.0022500000000000003 -0.009000000000000001 -0.0075 -0.015 -0.015 -0.0165m-0.53625 0.0015a0.01725 0.01725 0 0 0 -0.02025 0.0045000000000000005l-0.0045000000000000005 0.0105 -0.025500000000000002 0.4605c0 0.009000000000000001 0.00525 0.015 0.012750000000000001 0.018000000000000002l0.01125 -0.0015 0.15075 -0.06975 0.0075 -0.006 0.003 -0.00825 0.012750000000000001 -0.3225 -0.0022500000000000003 -0.009000000000000001 -0.0075 -0.0075z"
                                    strokeWidth="0.75"
                                ></path>
                                <path
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    d="M12.75 9.75a1.125 1.125 0 1 1 -2.25 0 1.125 1.125 0 0 1 2.25 0"
                                    strokeWidth="0.75"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="m3.60975 4.295999999999999 8.25 -2.3572499999999996A1.875 1.875 0 0 1 14.25 3.7417499999999997V4.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1 -1.5 1.5H3.75a1.5 1.5 0 0 1 -1.5 -1.5V6c0 -0.78375 0.62625 -1.49475 1.35975 -1.7039999999999997m8.662500000000001 -0.915a0.375 0.375 0 0 1 0.47775 0.36V4.5h-4.3950000000000005zM3.75 6h10.5v7.5H3.75z"
                                    strokeWidth="0.75"
                                ></path>
                            </g>
                        </svg>
                        Pay on delivery
                    </div>
                )}
            </div>

            <div className="hs-accordion-group mt-8">
                <div className=" hs-accordion" id="hs-basic-heading-one">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                        aria-expanded="false"
                        aria-controls="hs-basic-collapse-one"
                    >
                        Description
                        <svg
                            className="hs-accordion-active:hidden block size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hidden size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>
                    <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-heading-one"
                    >
                        <ul className="list-disc list-outside ps-5 text-muted-foreground-1 text-sm">
                            {data?.description?.map((line, i) => (
                                <li key={i}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className=" hs-accordion" id="hs-basic-heading-two">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                        aria-expanded="false"
                        aria-controls="hs-basic-collapse-two"
                    >
                        Size and Fit
                        <svg
                            className="hs-accordion-active:hidden block size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hidden size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>
                    <div
                        id="hs-basic-collapse-two"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-heading-two"
                    >
                        <p className="text-muted-foreground-1 text-sm">
                            <em>This is the second item's accordion body.</em> It is hidden by
                            default, until the collapse plugin adds the appropriate classes
                            that we use to style each element. These classes control the
                            overall appearance, as well as the showing and hiding via CSS
                            transitions.
                        </p>
                    </div>
                </div>

                <div className=" hs-accordion" id="hs-basic-heading-three">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                        aria-expanded="false"
                        aria-controls="hs-basic-collapse-three"
                    >
                        Shipping and Returns
                        <svg
                            className="hs-accordion-active:hidden block size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hidden size-4 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>
                    <div
                        id="hs-basic-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-heading-three"
                    >
                        <p className="text-muted-foreground-1 text-sm">
                            Free standard shipping on orders over $50 and free 30-day returns. <span className="underline underline-offset-4 cursor-pointer">Learn more</span>. <br />
                            <br />
                            Returns must be received within 30 days of shipping confirmation. In order to process your return, items must be unworn and tags must be attached.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
