import React from "react";
import { Link } from "react-router";

export default function CheckoutHeader() {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line">
            <nav className="max-w-270 w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
                <Link
                    className="sm:order-1 flex-none text-xl font-semibold text-foreground focus:outline-hidden focus:opacity-80"
                    to="/"
                >
                    ShoppersStop
                </Link>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <button
                        type="button"
                        className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-navbar-alignment-collapse"
                        aria-expanded="false"
                        aria-controls="hs-navbar-alignment"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-navbar-alignment"
                    >
                        <svg
                            className="hs-collapse-open:hidden shrink-0 size-4"
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
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg
                            className="hs-collapse-open:block hidden shrink-0 size-4"
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Toggle</span>
                    </button>
                    <Link
                        to="/cart"
                        className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-full bg-layer text-layer-foreground shadow-2xs hover:bg-muted-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Left-Line--Streamline-Mingcute"
                            height="16"
                            width="16"
                        >
                            <desc>Left Line Streamline Icon: https://streamlinehq.com</desc>
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                    stroke-width="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M5.528666666666666 8.471333333333334a0.6666666666666666 0.6666666666666666 0 0 1 0 -0.9426666666666665l3.771333333333333 -3.771333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0.9426666666666665 0.9426666666666665L6.942666666666666 8l3.3 3.3a0.6666666666666666 0.6666666666666666 0 0 1 -0.9426666666666665 0.9426666666666665l-3.771333333333333 -3.771333333333333Z"
                                    stroke-width="0.6667"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Shopping-Bag-2-Line--Streamline-Mingcute"
                            height="16"
                            width="16"
                        >
                            <desc>
                                Shopping Bag 2 Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fill-rule="nonzero">
                                <path
                                    d="M16 0v16H0V0zM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999m0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665m-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666z"
                                    stroke-width="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M12.04 2a1.3333333333333333 1.3333333333333333 0 0 1 1.3199999999999998 1.146l0.011333333333333334 0.104 0.5833333333333333 9.333333333333332a1.3333333333333333 1.3333333333333333 0 0 1 -1.2313333333333332 1.4133333333333333l-0.09999999999999999 0.003333333333333333H3.377333333333333a1.3333333333333333 1.3333333333333333 0 0 1 -1.3333333333333333 -1.3173333333333332l0.002 -0.09933333333333333 0.5833333333333333 -9.333333333333332a1.3333333333333333 1.3333333333333333 0 0 1 1.2266666666666666 -1.246L3.96 2zm0 1.3333333333333333H3.96l-0.5833333333333333 9.333333333333332h9.246666666666666zM10 4.666666666666666a0.6666666666666666 0.6666666666666666 0 0 1 0.6666666666666666 0.6666666666666666 2.6666666666666665 2.6666666666666665 0 0 1 -5.333333333333333 0 0.6666666666666666 0.6666666666666666 0 0 1 1.3333333333333333 0 1.3333333333333333 1.3333333333333333 0 0 0 2.663333333333333 0.09999999999999999L9.333333333333332 5.333333333333333a0.6666666666666666 0.6666666666666666 0 0 1 0.6666666666666666 -0.6666666666666666"
                                    stroke-width="0.6667"
                                ></path>
                            </g>
                        </svg>
                        {/* Back */}
                    </Link>
                </div>
                <div
                    id="hs-navbar-alignment"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
                    aria-labelledby="hs-navbar-alignment-collapse"
                    role="region"
                >
                    <ol className="flex items-center whitespace-nowrap text-sm font-semibold text-foreground">
                        <li className="inline-flex items-center">
                            1. Checkout
                            <svg
                                className="shrink-0 mx-2 size-4 text-muted-foreground"
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
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-muted-foreground">
                            2. Review and Pay
                            <svg
                                className="shrink-0 mx-2 size-4 text-muted-foreground"
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
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li
                            className="inline-flex items-center truncate text-muted-foreground"
                            aria-current="page"
                        >
                            3. Order confirmation
                        </li>
                    </ol>
                </div>
            </nav>
        </header>
    );
}
