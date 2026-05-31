import React from "react";
import { useNavigate } from "react-router";

export default function FeaturedProducts() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/products/details')} className="group cursor-pointer flex flex-col overflow-hidden transition-all duration-300">
            <div className="relative w-full h-100 shrink-0 xl:aspect-square rounded-xl overflow-hidden">
                <img
                    className="size-1/1 object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=600&q=80"
                    alt="iPhone 14 Case"
                />

                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-x-1 py-1.5 px-3 rounded-full text-xs font-semibold text-primary-800 bg-primary-100 dark:bg-primary-600 dark:text-primary-50 backdrop-blur-md">
                        Only 7 left
                    </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                        type="button"
                        className="inline-flex justify-center  cursor-pointer items-center size-9 rounded-full bg-line-2 text-foreground shadow-2xs hover:scale-105 transition-transform"
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
            </div>

            {/* --- CARD BODY DETAILS --- */}
            <div className="pt-2 flex flex-col flex-1">
                <h4 className="font-medium text-foreground text-sm">iPhone 14 Case</h4>

                <div className="w-full flex items-baseline gap-x-2 mt-auto mb-3">
                    <span className=" font-semibold text-primary">₹5999</span>
                    <span className="text-sm text-muted-foreground-1 line-through">
                        $7999
                    </span>
                    <span className="text-sm text-muted-foreground-1 ms-auto">
                        200 sold
                    </span>
                </div>

                <div className="flex items-center gap-x-1.5">
                    <div className="flex items-center">
                        <svg
                            className="shrink-0 size-3.5 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className="shrink-0 size-3.5 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className="shrink-0 size-3.5 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className="shrink-0 size-3.5 text-muted-foreground/50"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className="shrink-0 size-3.5 text-muted-foreground/50"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>

                    <span className="text-sm font-semibold text-foreground">(67)</span>
                </div>
            </div>
        </div>
    );
}
