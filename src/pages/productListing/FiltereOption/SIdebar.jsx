import FilterByRating from "./FilterByRating";
import FilterByPrice from "./FilterByPrice";
import FilterByCategory from "./FilterByCategory";
import { SidebarProvider } from "../../../../contexts/SidebarProvider";
import SubmitFilterButton from "./SubmitFilterButton";

export default function Sidebar() {

    return (
        <SidebarProvider>
            <div className="short-screen:static fixed top-55.75 inset-x-0 z-20 bg-navbar border-b border-navbar-line px-4 sm:px-6 lg:px-8 lg:hidden">
                <div className="flex items-center py-2">
                    <button
                        type="button"
                        className="px-9 cursor-pointer size-8 flex justify-center items-center gap-x-2 bg-sidebar-1-divider border border-layer-line text-layer-foreground hover:bg-navbar-2-divider rounded-full focus:outline-hidden focus:text-layer-foreground-focus disabled:opacity-50 disabled:pointer-events-none"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-application-sidebar"
                        aria-label="Toggle navigation"
                        data-hs-overlay="#hs-application-sidebar"
                    >
                        <span className="text-sm flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                id="Filter-2-Line--Streamline-Mingcute"
                                height="16"
                                width="16"
                            >
                                <desc>
                                    Filter 2 Line Streamline Icon: https://streamlinehq.com
                                </desc>
                                <g fill="none" fillRule="nonzero">
                                    <path
                                        d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                        strokeWidth="0.6667"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M9.333333333333332 11.333333333333332a0.6666666666666666 0.6666666666666666 0 0 1 0.078 1.3286666666666667L9.333333333333332 12.666666666666666h-2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 -0.078 -1.3286666666666667L6.666666666666666 11.333333333333332h2.6666666666666665Zm2 -4a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333H4.666666666666666a0.6666666666666666 0.6666666666666666 0 1 1 0 -1.3333333333333333h6.666666666666666Zm2 -4a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333H2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h10.666666666666666Z"
                                        strokeWidth="0.6667"
                                    ></path>
                                </g>
                            </svg>
                            Filter
                        </span>
                    </button>

                    <ol className="ms-3 flex items-center whitespace-nowrap">
                        <li className="flex items-center text-sm text-foreground">
                            Products
                            <svg
                                className="shrink-0 mx-3 overflow-visible size-2.5 text-muted-foreground"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </li>
                        <li
                            className="text-sm font-semibold text-foreground truncate"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                    </ol>
                </div>
            </div>

            {/* Sidebar */}
            <div
                id="hs-application-sidebar"
                className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0 
  -translate-x-full transition-all duration-300 transform
  w-100 max-w-80 h-svh hs-overlay-open:px-0
  hidden 
  bg-sidebar absolute top-0 z-60 lg:static lg:bottom-0 inset-y-0
  lg:block lg:translate-x-0"
                role="dialog"
                tabIndex="-1"
                aria-label="Sidebar"
            >
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 py-4 text-foreground flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Filter-2-Line--Streamline-Mingcute"
                            height="16"
                            width="16"
                        >
                            <desc>
                                Filter 2 Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fillRule="nonzero">
                                <path
                                    d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                    strokeWidth="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M9.333333333333332 11.333333333333332a0.6666666666666666 0.6666666666666666 0 0 1 0.078 1.3286666666666667L9.333333333333332 12.666666666666666h-2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 -0.078 -1.3286666666666667L6.666666666666666 11.333333333333332h2.6666666666666665Zm2 -4a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333H4.666666666666666a0.6666666666666666 0.6666666666666666 0 1 1 0 -1.3333333333333333h6.666666666666666Zm2 -4a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333H2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h10.666666666666666Z"
                                    strokeWidth="0.6667"
                                ></path>
                            </g>
                        </svg>
                        Filter
                        <button
                            type="button"
                            className="lg:hidden ms-auto cursor-pointer flex justify-center items-center gap-x-3 size-6 bg-layer border border-layer-line text-sm text-muted-foreground-2 hover:bg-layer-hover rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus"
                            data-hs-overlay="#hs-application-sidebar"
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
                    </div>

                    <div className="pb-2 bg-sidebar h-screen overflow-y-auto scrollbar-none">
                        <div className="flex flex-col items-center justify-start gap-2">
                            <FilterByCategory />
                            <FilterByPrice />
                            <FilterByRating />
                            <SubmitFilterButton />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
