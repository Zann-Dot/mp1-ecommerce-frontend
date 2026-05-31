import React from "react";

export default function MobileSideDashboard() {
    return (
        <div className="flex sm:hidden me-3 mt-1">
            <button
                type="button"
                className="cursor-pointer"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-sidebar-offcanvas"
                aria-label="Toggle navigation"
                data-hs-overlay="#hs-sidebar-offcanvas"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Navigation-Menu--Streamline-Ultimate"
                    height="24"
                    width="24"
                    className="fill-foreground"
                >
                    <desc>Navigation Menu Streamline Icon: https://streamlinehq.com</desc>
                    <g id="Navigation-Menu--Streamline-Ultimate.svg">
                        <path
                            d="M1.5 2.5h21s1 0 1 1v1s0 1 -1 1h-21s-1 0 -1 -1v-1s0 -1 1 -1"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M1.5 10.5h21s1 0 1 1v1s0 1 -1 1h-21s-1 0 -1 -1v-1s0 -1 1 -1"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M1.5 18.5h21s1 0 1 1v1s0 1 -1 1h-21s-1 0 -1 -1v-1s0 -1 1 -1"
                            strokeWidth="1"
                        ></path>
                    </g>
                </svg>
            </button>

            {/* Sidebar */}
            <div
                id="hs-sidebar-offcanvas"
                className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:inset-e-auto lg:bottom-0 w-64
                            hs-overlay-open:translate-x-0
                            -translate-x-full transition-all duration-300 transform
                            h-full
                            hidden

                            fixed top-0 inset-s-0 bottom-0 z-60
                            bg-sidebar border-e border-sidebar-line"
                role="dialog"
                tabIndex="-1"
                aria-label="Sidebar"
            >
                <div className="relative flex flex-col h-full max-h-full ">
                    {/* Header */}
                    <header className=" p-4 flex justify-between items-center gap-x-2">
                        <a
                            className="flex-none font-semibold text-xl text-layer-foreground focus:outline-hidden focus:opacity-80 "
                            href="#"
                            aria-label="Brand"
                        >
                            ShoppersStop
                        </a>

                        <div className="lg:hidden -me-2">
                            {/* Close Button */}
                            <button
                                type="button"
                                className="flex justify-center items-center cursor-pointer gap-x-3 size-6 bg-layer border border-layer-line text-sm text-muted-foreground-2 hover:bg-layer-hover rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus"
                                data-hs-overlay="#hs-sidebar-offcanvas"
                            >
                                <svg
                                    className="shrink-0 size-4"
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
                                <span className="sr-only">Close</span>
                            </button>
                            {/* End Close Button */}
                        </div>
                    </header>
                    {/* End Header */}

                    {/* Body */}
                    <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                        <div
                            className="hs-accordion-group pb-0 px-2  w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open
                        >
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        className=" flex items-center gap-x-3.5 py-2 px-2.5 bg-sidebar-nav-active text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                        href="#"
                                    >
                                        <svg
                                            className="size-4"
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
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                        Dashboard
                                    </a>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                    >
                                        <svg
                                            className="size-4"
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
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        Users
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="cursor-pointer w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                    >
                                        <svg
                                            className="size-4"
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
                                            <circle cx="18" cy="15" r="3" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                            <path d="m21.7 16.4-.9-.3" />
                                            <path d="m15.2 13.9-.9-.3" />
                                            <path d="m16.6 18.7.3-.9" />
                                            <path d="m19.1 12.2.3-.9" />
                                            <path d="m19.6 18.7-.4-1" />
                                            <path d="m16.8 12.3-.4-1" />
                                            <path d="m14.3 16.6 1-.4" />
                                            <path d="m20.7 13.8 1-.4" />
                                        </svg>
                                        Account
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* End Body */}
                </div>
            </div>
            {/* End Sidebar */}
        </div>
    );
}
