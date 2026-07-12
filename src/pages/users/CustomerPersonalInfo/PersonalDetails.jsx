import useEcommerceContext from "../../../../contexts/EcommerceProvider";

export default function PersonalDetails() {
    const { user } = useEcommerceContext();

    return (
        <main className="w-full flex flex-col">
            <div className="flex items-center gap-3.5">
                <div
                    className="inline-flex items-center justify-center size-12 rounded-full border border-line-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                        id="User-3-Line--Streamline-Mingcute"
                        height="30"
                        width="30"
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
                <h1 className="font-semibold">{user?.firstName} {user?.lastName}</h1>
            </div>

            <br />
            <hr />

            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Name</h1>
                        <p className="text-sm text-muted-foreground-1">{user?.firstName} {user?.lastName}</p>
                    </section>

                    {/* <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading"
                        data-hs-collapse="#hs-collapse-heading"
                    >
                        Edit
                    </div> */}
                </div>
                <div
                    id="hs-collapse-heading"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div className="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Email</h1>
                        <p className="text-sm text-muted-foreground-1">{user?.email}</p>
                    </section>

                    {/* <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-email"
                        data-hs-collapse="#hs-collapse-heading-email"
                    >
                        Edit
                    </div> */}
                </div>
                <div
                    id="hs-collapse-heading-email"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div className="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">
                            Phone number
                        </h1>
                        <p className="text-sm text-muted-foreground-1">{user?.ISDCode}{user?.phoneNumber}</p>
                    </section>

                    {/* <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-phone"
                        data-hs-collapse="#hs-collapse-heading-phone"
                    >
                        Edit
                    </div> */}
                </div>
                <div
                    id="hs-collapse-heading-phone"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div className="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Password</h1>
                        <p className="text-sm text-muted-foreground-1">*********</p>
                    </section>

                    {/* <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-password"
                        data-hs-collapse="#hs-collapse-heading-password"
                    >
                        Edit
                    </div> */}
                </div>
                <div
                    id="hs-collapse-heading-password"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div className="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Old password"
                            />
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="New password"
                            />
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            {/* <hr />
            <div className="py-4">
                <div className="flex flex-wrap gap-y-2 items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">
                            Deactivate your account
                        </h1>
                        <p className="text-sm text-muted-foreground-1">
                            This will immediately delete all of your data. This action is not
                            reversible, so please continue with caution.
                        </p>
                    </section>

                    <div
                        className="hs-collapse-toggle min-[775px]:ms-auto text-red-500 text-sm underline decoration-red-500 underline-offset-4 cursor-pointer hover:opacity-98 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-vertically-centered-modal"
                        data-hs-overlay="#hs-vertically-centered-modal"
                    >
                        Deactivate
                    </div>
                </div>

                <div
                    id="hs-vertically-centered-modal"
                    className="hs-overlay hidden size-full fixed top-0 inset-s-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
                    role="dialog"
                    tabIndex="-1"
                    aria-labelledby="hs-vertically-centered-modal-label"
                >
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
                        <div className="w-full p-4 flex flex-col bg-overlay border border-overlay-line shadow-2xs rounded-xl pointer-events-auto">
                            <div className="p-4 overflow-y-auto">
                                <h1 className="text-lg font-semibold">Are you sure?</h1>
                                <p className="text-muted-foreground-2 text-sm">
                                    Are you sure you want to deactivate your account?
                                </p>
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4">
                                <button
                                    type="button"
                                    className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                                    aria-label="Close"
                                    data-hs-overlay="#hs-vertically-centered-modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg bg-destructive text-white hover:bg-destructive-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Yes, I'm sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    );
}
