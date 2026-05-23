import React from 'react'

export default function HeaderUtilities() {
    return (
        <div className="flex items-center gap-5 ms-auto lg:ms-0">
            <div className="w-15 cursor-pointer text-foreground flex flex-col justify-center items-center gap-1 text-xs">
                <svg
                    class="zeqf6 shb27 kh2c5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Sign in
            </div>

            <div className=" w-15 cursor-pointer text-foreground flex flex-col justify-center items-center gap-1 text-xs">
                <div className="indicator">
                    <span className="indicator-item badge badge-primary scale-70 px-2 py-0 rounded-full text-white text-">2</span>
                    <svg
                        class="zeqf6 shb27 kh2c5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </div>
                Wishlist

            </div>

            <div className="w-15 cursor-pointer text-foreground flex flex-col justify-center items-center gap-1 text-xs">
                <div className="indicator">
                    <span className="indicator-item badge badge-primary scale-70 px-2 py-0 rounded-full text-white text-">2</span>
                    <svg
                        class="zeqf6 shb27 kh2c5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                </div>
                Cart
            </div>
        </div>
    )
}
