import React from 'react'

export default function OrderCard() {
    return (
        <div className="relative p-1.25  bg-surface rounded-2xl">
            {/* upper order section */}
            <div className="flex items-center gap-30 grow ps-5 py-3 pb-5 font-medium">
                <div>
                    <h1 className='font-normal text-muted-foreground-1 text-xs'>Status</h1>
                    <div class="inline-flex items-center">
                        <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                        <span class="text-foreground text-[13px]">Order in progress</span>
                    </div>
                </div>

                <div>
                    <h1 className='font-normal text-muted-foreground-1 text-xs'>Order number</h1>
                    <span class="text-foreground text-[13px]">789453113</span>

                </div>

                <div>
                    <h1 className='font-normal text-muted-foreground-1 text-xs'>Order date</h1>
                    <span class="text-foreground text-[13px]">21/01/2026</span>

                </div>

                <div>
                    <h1 className='font-normal text-muted-foreground-1 text-xs'>Total</h1>
                    <span class="text-foreground text-[13px]">₹2999</span>
                </div>

            </div>

            {/* order details */}
            <div className="flex flex-col justify-center gap-6 p-6 bg-card shadow-2xs rounded-xl">
                <section className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-muted-foreground-2 text-sm gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Truck-Line--Streamline-Mingcute" height="16" width="16">
                                <desc>
                                    Truck Line Streamline Icon: https://streamlinehq.com
                                </desc>
                                <g fill="none" fill-rule="nonzero">
                                    <path d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z" stroke-width="0.6667"></path>
                                    <path fill="currentColor" d="M10 2.6666666666666665a1.3333333333333333 1.3333333333333333 0 0 1 1.3333333333333333 1.3333333333333333v0.6666666666666666h1.0133333333333332a1.3333333333333333 1.3333333333333333 0 0 1 1.0406666666666666 0.5l0.9866666666666666 1.234a1.3333333333333333 1.3333333333333333 0 0 1 0.29266666666666663 0.8333333333333333V10a1.3333333333333333 1.3333333333333333 0 0 1 -1.3333333333333333 1.3333333333333333 2 2 0 1 1 -4 0h-2.6666666666666665a2 2 0 1 1 -4 0 1.3333333333333333 1.3333333333333333 0 0 1 -1.3333333333333333 -1.3333333333333333V4a1.3333333333333333 1.3333333333333333 0 0 1 1.3333333333333333 -1.3333333333333333h7.333333333333333ZM4.666666666666666 10.666666666666666a0.6666666666666666 0.6666666666666666 0 1 0 0 1.3333333333333333 0.6666666666666666 0.6666666666666666 0 0 0 0 -1.3333333333333333Zm6.666666666666666 0a0.6666666666666666 0.6666666666666666 0 1 0 0 1.3333333333333333 0.6666666666666666 0.6666666666666666 0 0 0 0 -1.3333333333333333ZM10 4H2.6666666666666665v6h0.5093333333333333c0.3666666666666667 -0.4093333333333333 0.8986666666666667 -0.6666666666666666 1.4906666666666668 -0.6666666666666666 0.5466666666666666 0 1.0419999999999998 0.22 1.4033333333333333 0.5746666666666667l0.08733333333333333 0.092h3.685333333333333l0.07666666666666666 -0.08066666666666666 0.08066666666666666 -0.07666666666666666V4Zm2.3466666666666667 2H11.333333333333332v3.333333333333333c0.5466666666666666 0 1.0419999999999998 0.22 1.4033333333333333 0.5746666666666667l0.08733333333333333 0.092H13.333333333333332v-2.7666666666666666L12.346666666666666 6Z" stroke-width="0.6667"></path>
                                </g>
                            </svg>
                            <h3>Estimated delivery: <span className='font-semibold'>Wednesday, Aug 7 2024</span></h3>
                        </div>

                        <div className='flex items-center text-muted-foreground-2 text-sm gap-2'>
                            <svg
                                class="zeqf6 c51lg kh2c5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"></path>
                                <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"></path>
                                <path d="M18 22v-3"></path>
                                <circle cx="10" cy="10" r="3"></circle>
                            </svg>
                            <h3>280 Suzanne Throughway, New York, Breannabury, OR 45801, US</h3>
                        </div>
                    </div>

                    <button type="button" class="px-2 py-1 cursor-pointer inline-flex items-center gap-x-2 text-sm rounded-md bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
                        Order Details
                    </button>
                </section>
                <hr />

                <div className="grid grid-cols-4 gap-x-2 sm:gap-x-3 md:gap-x-4">

                    {/* --- STAGE 1: COMPLETED --- */}
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-x-1.5 text-xs sm:text-sm  text-neutral-900 dark:text-neutral-100">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Check-Line--Streamline-Mingcute" height="16" width="16">
                                <desc>
                                    Check Line Streamline Icon: https://streamlinehq.com
                                </desc>
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z" stroke-width="0.6667"></path>
                                    <path fill="currentColor" d="M14.128 3.643333333333333a0.6666666666666666 0.6666666666666666 0 0 1 0 0.9426666666666665L6.633333333333333 12.081333333333333a0.7333333333333334 0.7333333333333334 0 0 1 -1.0373333333333332 0l-3.724 -3.724a0.6666666666666666 0.6666666666666666 0 1 1 0.9433333333333334 -0.9433333333333334l3.3 3.3L13.184666666666667 3.643333333333333a0.6666666666666666 0.6666666666666666 0 0 1 0.9426666666666665 0Z" stroke-width="0.6667"></path>
                                </g>
                            </svg>
                            <span className="truncate">Order placed</span>
                        </div>

                        <div className="h-1.5 w-full bg-neutral-900 rounded-full dark:bg-neutral-100" />
                    </div>

                    {/* --- STAGE 2: ACTIVE / IN PROGRESS --- */}
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-x-1.5 text-xs sm:text-sm  text-neutral-800 dark:text-neutral-200">
                            <span className="size-2 rounded-full bg-neutral-500 shrink-0 mix-blend-difference dark:bg-neutral-400" />
                            <span className="truncate">Preparing order</span>
                        </div>
                        {/* Active Solid Tracker Line */}
                        <div className="h-1.5 w-full bg-neutral-800 rounded-full dark:bg-neutral-300" />
                    </div>

                    {/* --- STAGE 3: INACTIVE / UPCOMING --- */}
                    <div className="space-y-2.5 opacity-35 transition-opacity">
                        <div className="flex items-center gap-x-1.5 text-xs sm:text-sm text-foreground">
                            <span className="truncate">Shipped</span>
                        </div>
                        {/* Dimmed Background Track Bar */}
                        <div className="h-1.5 w-full bg-primary-400 rounded-full" />
                    </div>

                    {/* --- STAGE 4: INACTIVE / UPCOMING --- */}
                    <div className="space-y-2.5 opacity-35 transition-opacity">
                        <div className="flex items-center gap-x-1.5 text-xs sm:text-sm text-foreground">
                            <span className="truncate">Delivered</span>
                        </div>
                        {/* Dimmed Background Track Bar */}
                        <div className="h-1.5 w-full rounded-full bg-primary-400" />
                    </div>
                </div>
                <hr />

                <section>
                    <div className="h-45 full flex flex-col sm:flex-row gap-5 items-start">
                        <div className="h-full w-35 rounded-xl overflow-hidden shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=300&q=80"
                                alt="Nike SB Zoom Blazer"
                                className="size-1/1 object-cover"
                            />
                        </div>


                        <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-1">
                            <div>
                                <h4 className="text-base text-foreground tracking-wide">
                                    Nike SB Zoom Blazer Mid Electric
                                </h4>
                                <p className="text-base text-foreground mt-1">
                                    ₹9500
                                </p>
                            </div>


                            <div className="w-full flex justify-between gap-x-4 max-w-md text-sm text-foreground">
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Color</span>
                                    <span>White</span>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Size</span>
                                    <span>US 10</span>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Quantity</span>
                                    <span>1</span>
                                </div>
                            </div>

                            {/* 3. INTERACTIVE UTILITY BUTTONS */}
                            <div className="flex flex-wrap gap-2 pt-1 text-sm">
                                <button
                                    type="button"
                                    className="hover:bg-layer-hover py-1.5 px-2 inline-flex justify-center items-center rounded-lg border border-layer-line transition cursor-pointer"
                                >
                                    Buy it again
                                </button>
                                <button
                                    type="button"
                                    className="hover:bg-layer-hover py-1.5 px-2 inline-flex justify-center items-center rounded-lg border border-layer-line transition cursor-pointer"
                                >
                                    Write a product review
                                </button>
                            </div>

                        </div>

                    </div>
                </section>
                <hr />

                <section>
                    <div className="h-45 full flex flex-col sm:flex-row gap-5 items-start">
                        <div className="h-full w-35 rounded-xl overflow-hidden shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=300&q=80"
                                alt="Nike SB Zoom Blazer"
                                className="size-1/1 object-cover"
                            />
                        </div>


                        <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-1">
                            <div>
                                <h4 className="text-base text-foreground tracking-wide">
                                    Nike SB Zoom Blazer Mid Electric
                                </h4>
                                <p className="text-base text-foreground mt-1">
                                    ₹9500
                                </p>
                            </div>


                            <div className="w-full flex justify-between gap-x-4 max-w-md text-sm text-foreground">
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Color</span>
                                    <span>White</span>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Size</span>
                                    <span>US 10</span>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <span className="text-muted-foreground">Quantity</span>
                                    <span>1</span>
                                </div>
                            </div>

                            {/* 3. INTERACTIVE UTILITY BUTTONS */}
                            <div className="flex flex-wrap gap-2 pt-1 text-sm">
                                <button
                                    type="button"
                                    className="hover:bg-layer-hover py-1.5 px-2 inline-flex justify-center items-center rounded-lg border border-layer-line transition cursor-pointer"
                                >
                                    Buy it again
                                </button>
                                <button
                                    type="button"
                                    className="hover:bg-layer-hover py-1.5 px-2 inline-flex justify-center items-center rounded-lg border border-layer-line transition cursor-pointer"
                                >
                                    Write a product review
                                </button>
                            </div>

                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}
