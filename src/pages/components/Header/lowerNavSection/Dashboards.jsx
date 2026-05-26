import { Link } from 'react-router'

export default function Dashboards() {
    return (
        <div className="relative sm:flex sm:items-center">
            <div className="flex items-center justify-between">

                <div className="sm:hidden">

                </div>
            </div>

            <div
                id="hs-navbar-basic-usage"
                className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                aria-labelledby="hs-navbar-basic-usage-collapse"
                role="region"
            >
                <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">


                    <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] [--auto-close:false] [--is-collapse:true] sm:[--is-collapse:false] ">
                        <button
                            id="hs-mega-menu"
                            type="button"
                            className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm text-primary-foreground font-medium w-full bg-primary rounded-full hover:bg-primary-hover focus:outline-hidden"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dashboard"
                        >
                            Dashboards
                            <svg
                                className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 ms-auto sm:ms-2 shrink-0 size-4"
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
                        </button>

                        <div
                            className="hs-dropdown-menu w-4xl md:w-2xl sm:w-md sm:transition-[opacity,margin] sm:ease-in-out sm:duration-150 hs-dropdown-open:opacity-100 opacity-0  hidden z-10 sm:mt-3  top-full inset-s-0 min-w-60 sm:bg-dropdown sm:border sm:border-dropdown-line sm:shadow-md rounded-lg py-2 sm:px-2"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-mega-menu"
                        >
                            <div className="sm:grid sm:grid-cols-3">
                                <div className="flex flex-col">
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        About
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Services
                                    </a>
                                    <Link
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        to="/sellers"
                                    >
                                        Sellers Dashboard
                                    </Link>
                                </div>

                                <div className="flex flex-col">
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Careers: Overview
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Careers: Apply
                                    </a>
                                </div>

                                <div className="flex flex-col">
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Log In
                                    </a>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                                        href="#"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
