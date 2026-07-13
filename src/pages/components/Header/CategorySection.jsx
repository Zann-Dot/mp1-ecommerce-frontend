import React from 'react'

export default function CategorySection() {
    return (
        <div className='max-w-340 w-full mx-auto px-4 pb-2'>
            <div className="relative flex items-center gap-1 basis-full">
                <div className="flex flex-row items-center gap-1 overflow-x-auto scrollbar-none">
                    {/* <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='stroke-muted-foreground-2' viewBox="0 0 24 24" id="Layers-Stacked--Streamline-Ultimate" height="14" width="14">
                            <desc>
                                Layers Stacked Streamline Icon: https://streamlinehq.com
                            </desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m22.91 6.95302 -10.21 -5.281c-0.2189 -0.11304 -0.4617 -0.17202 -0.708 -0.17202 -0.2464 0 -0.4891 0.05898 -0.708 0.17202l-10.208 5.281c-0.10056 0.05168 -0.184927 0.13007 -0.243833 0.22657 -0.058906 0.0965 -0.090071 0.20737 -0.090071 0.32043s0.031165 0.22393 0.090071 0.32043 0.143273 0.17489 0.243833 0.22657L11.285 13.328c0.2189 0.1131 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.0589 0.708 -0.172L22.91 8.04702c0.1003 -0.05192 0.1843 -0.13041 0.243 -0.22688s0.0897 -0.20721 0.0897 -0.32012c0 -0.11291 -0.031 -0.22365 -0.0897 -0.32012 -0.0587 -0.09647 -0.1427 -0.17495 -0.243 -0.22688Z" strokeWidth="1.5"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M0.757996 17.25 11.285 22.328c0.2189 0.113 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.059 0.708 -0.172l10.557 -5.078" strokeWidth="1.5"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M0.757996 12.75 11.285 17.828c0.2189 0.113 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.059 0.708 -0.172l10.557 -5.078" strokeWidth="1.5"></path>
                        </svg>
                        Pages
                    </button> */}

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='stroke-muted-foreground-2' viewBox="0 0 24 24" id="Discount--Streamline-Ultimate" height="12" width="12">
                            <desc>
                                Discount Streamline Icon: https://streamlinehq.com
                            </desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19c0 0.862 0.3424 1.6886 0.9519 2.2981 0.6095 0.6095 1.4361 0.9519 2.2981 0.9519 0.862 0 1.6886 -0.3424 2.2981 -0.9519 0.6095 -0.6095 0.9519 -1.4361 0.9519 -2.2981 0 -0.862 -0.3424 -1.6886 -0.9519 -2.2981 -0.6095 -0.6095 -1.4361 -0.9519 -2.2981 -0.9519 -0.862 0 -1.6886 0.3424 -2.2981 0.9519 -0.6095 0.6095 -0.9519 1.4361 -0.9519 2.2981Z" strokeWidth="1.5"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M1.75 5c0 0.86195 0.34241 1.6886 0.9519 2.2981C3.3114 7.90759 4.13805 8.25 5 8.25c0.86195 0 1.6886 -0.34241 2.2981 -0.9519C7.90759 6.6886 8.25 5.86195 8.25 5c0 -0.86195 -0.34241 -1.6886 -0.9519 -2.2981C6.6886 2.09241 5.86195 1.75 5 1.75c-0.86195 0 -1.6886 0.34241 -2.2981 0.9519C2.09241 3.3114 1.75 4.13805 1.75 5Z" strokeWidth="1.5"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.30998 23.2501c-0.1006 -0.004 -0.19937 -0.0281 -0.29043 -0.0711 -0.09105 -0.0429 -0.17253 -0.1038 -0.23957 -0.1789l-1.78 -1.78c-0.140451 -0.1406 -0.21934 -0.3312 -0.21934 -0.53 0 -0.1987 0.078889 -0.3894 0.21934 -0.53L20.16 1.0001c0.1406 -0.140449 0.3312 -0.219338 0.53 -0.219338 0.1987 0 0.3894 0.078889 0.53 0.219338l1.78 1.78c0.1404 0.14063 0.2193 0.33125 0.2193 0.53 0 0.19875 -0.0789 0.38938 -0.2193 0.53l-19.16002 19.16c-0.06704 0.0751 -0.14852 0.136 -0.23957 0.1789 -0.09106 0.043 -0.18983 0.0671 -0.29043 0.0711Z" strokeWidth="1.5"></path>
                        </svg>
                        Sales
                    </button>

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="stroke-muted-foreground-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                        </svg>
                        Best Sellers
                    </button>

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="zeqf6 r390y" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 16h6"></path>
                            <path d="M19 13v6"></path>
                            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                            <path d="m7.5 4.27 9 5.15"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" x2="12" y1="22" y2="12"></line>
                        </svg>
                        New Arrivals
                    </button>

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-muted-foreground-2' viewBox="0 0 16 16" id="Shoe-2-Line--Streamline-Mingcute" height="22" width="22">
                            <desc>
                                Shoe 2 Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fillRule="nonzero">
                                <path d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z" strokeWidth="0.6667"></path>
                                <path fill="currentColor" d="M5.286666666666666 12.726666666666667A4.006666666666666 4.006666666666666 0 0 1 4.546666666666667 12.666666666666666c-1.38 -0.24666666666666665 -3.373333333333333 -1.5466666666666664 -3.253333333333333 -2.9266666666666663C1.4533333333333334 8 4.373333333333333 8 5.333333333333333 8c1.2799999999999998 0 2.5933333333333333 -1.38 4.413333333333333 -3.2933333333333334 0.54 -0.5733333333333333 1.1333333333333333 -1.1933333333333334 1.7799999999999998 -1.8466666666666667a0.6666666666666666 0.6666666666666666 0 0 1 0.7733333333333332 -0.12 4.066666666666666 4.066666666666666 0 0 1 2.2666666666666666 2.6666666666666665 3.593333333333333 3.593333333333333 0 0 1 -0.7 2.993333333333333A6.76 6.76 0 0 0 12.666666666666666 12a0.6699999999999999 0.6699999999999999 0 0 1 -1.3333333333333333 0.13333333333333333 12.214666666666666 12.214666666666666 0 0 0 -0.8133333333333332 -2.6666666666666665 14.413333333333334 14.413333333333334 0 0 0 -2.393333333333333 2.04 4 4 0 0 1 -2.84 1.22ZM12.113333333333333 4.166666666666666l-1.4 1.4533333333333334C8.666666666666666 7.779999999999999 7.186666666666666 9.333333333333332 5.333333333333333 9.333333333333332c-2.3866666666666667 0 -2.706666666666666 0.5066666666666666 -2.7133333333333334 0.5133333333333333 0.013333333333333332 0.09333333333333334 0.05333333333333333 0.18066666666666667 0.11333333333333334 0.2533333333333333A3.7266666666666666 3.7266666666666666 0 0 0 4.786666666666666 11.333333333333332a2.6066666666666665 2.6066666666666665 0 0 0 2.4066666666666663 -0.82C8.346666666666666 9.373333333333333 9.886666666666667 8 10.666666666666666 8c0.24666666666666665 0 0.72 0 1.24 1.22a6.98 6.98 0 0 1 0.8933333333333333 -1.62 2.2399999999999998 2.2399999999999998 0 0 0 0.4666666666666666 -1.9066666666666665 2.5733333333333333 2.5733333333333333 0 0 0 -1.1533333333333333 -1.5266666666666666Z" strokeWidth="0.6667"></path>
                            </g>
                        </svg>
                        Footwear
                    </button>

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="stroke-muted-foreground-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                        </svg>
                        Clothings
                    </button>

                    <button type="button" className="relative w-full text-start whitespace-nowrap py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-muted-foreground-2  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="stroke-muted-foreground-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                            <path d="M12 8v13"></path>
                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                        </svg>
                        Gift Cards
                    </button>

                </div>

            </div>

        </div>
    )
}
