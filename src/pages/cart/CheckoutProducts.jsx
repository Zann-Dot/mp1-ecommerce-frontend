import React from 'react'

export default function CheckoutProducts() {
    return (


        <div className="relative flex flex-row gap-5 items-start sm:items-center">

            {/* --- 1. PRODUCT IMAGE CONTAINER --- */}
            <div className="relative w-32 rounded-xl overflow-hidden bg-neutral-100 shrink-0 dark:bg-neutral-800">
                <img
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80"
                    alt="Nike Air Force 1"
                    className="w-full h-40  object-cover"
                />
                {/* Wishlist Icon Overlay */}
                <button
                    type="button"
                    className="absolute top-2 right-2 inline-flex justify-center items-center size-7 rounded-full bg-white/90 text-neutral-800 shadow-2xs hover:scale-105 transition-transform dark:bg-neutral-800/90 dark:text-neutral-200"
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </button>
            </div>

            {/* --- 2. DETAILS & SELECTION CONTROLS --- */}
            <div className="flex-1 w-full flex flex-col gap-y-4">

                {/* Title & Price Header */}
                <div>
                    <h3 className="text-base text-foreground dark:text-neutral-200">
                        Nike Air Force 1
                    </h3>
                    <p className="text-sm text-foreground mt-0.5 dark:text-neutral-100">
                        $149
                    </p>
                </div>

                {/* Configuration Matrix (Color, Size, Quantity) */}
                <div className="w-full grid grid-cols-3 gap-x-4 sm:gap-x-8">

                    {/* Color Option Block */}
                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Color
                        </span>
                        <div className="p-2 inline-flex items-center justify-center rounded-lg border border-line-3 text-xs text-foreground bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            White
                        </div>
                    </div>

                    {/* Size Option Block */}
                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Size
                        </span>
                        <div className="p-2 inline-flex items-center justify-center rounded-lg border border-line-3 text-xs text-foreground bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            US 10
                        </div>
                    </div>

                    {/* Quantity Selector Selector Block */}
                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-sm font-medium text-muted-foreground dark:text-neutral-400">
                            Quantity
                        </span>

                        <select className="p-2 pe-9 block w-15 bg-layer border-line-3 rounded-lg text-xs text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none">
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


                    </div>

                </div>

                {/* --- 3. DESTRUCTIVE ACTION ROW --- */}
                <div className="pt-1">
                    <button
                        type="button"
                        className="cursor-pointer inline-flex items-center gap-x-1.5 text-sm text-foreground underline decoration-1 underline-offset-4 hover:text-red-600 hover:decoration-red-600 transition-colors dark:text-neutral-300 dark:hover:text-red-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Delete-Line--Streamline-Mingcute" height="16" width="16">
                            <desc>
                                Delete Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fillRule="nonzero" >
                                <path d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z" strokeWidth="0.6667"></path>
                                <path fill="currentColor" d="M13.333333333333332 3.333333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333h-0.6666666666666666l-0.002 0.047333333333333324 -0.622 8.713999999999999A1.3333333333333333 1.3333333333333333 0 0 1 10.712666666666665 14.666666666666666H5.286666666666666a1.3333333333333333 1.3333333333333333 0 0 1 -1.33 -1.2386666666666666l-0.622 -8.713333333333333A0.6779999999999999 0.6779999999999999 0 0 1 3.333333333333333 4.666666666666666H2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h10.666666666666666Zm-2.002 1.3333333333333333H4.668666666666667l0.6186666666666667 8.666666666666666h5.425333333333333l0.6186666666666667 -8.666666666666666ZM9.333333333333332 1.3333333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333h-2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333h2.6666666666666665Z" strokeWidth="0.6667"></path>
                            </g>
                        </svg>
                        Remove
                    </button>
                </div>



            </div>

        </div>




    )
}
