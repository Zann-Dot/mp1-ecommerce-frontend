import React from "react";

export default function HeroSection() {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">

                {/* Carousel */}
                <div id="hs-carousel" className="relative" data-hs-carousel='{"loadingClasses": "opacity-0", "dotsItemClasses": "hs-carousel-active:bg-foreground-inverse hs-carousel-active:border-foreground-inverse bg-line-3 border-line-2 size-3 border  rounded-full cursor-pointer"}' >
                    <div className="hs-carousel relative overflow-hidden w-full h-120 md:h-[calc(100vh-106px)]  bg-surface rounded-2xl">
                        {/* Carousel Body */}
                        <div className="hs-carousel-body flex flex-nowrap absolute top-0 bottom-0 inset-s-0 transition-transform duration-700 opacity-0">
                            {/* Item */}
                            <div className="hs-carousel-slide">
                                <div className="h-120 md:h-[calc(100vh-106px)]  flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1471602514494-6b059b461fa0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <h3 className="text-foreground-inverse text-md md:text-lg lg:text-xl mb-3">SUMMER SALE</h3>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl mb-5 md:mb-6 lg:md-9 font-semibold text-foreground-inverse ">Up to 50% off</h1>
                                    <div className="flex text-md gap-5">
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop men
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop women
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Item */}

                            {/* Item */}
                            <div className="hs-carousel-slide">
                                <div className="h-120 md:h-[calc(100vh-106px)]  flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1603139635700-04637d0d16bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 font-semibold text-foreground-inverse ">New styles</h1>
                                    <h3 className="text-foreground-inverse text-md md:text-lg lg:text-xl mb-5 md:mb-6 lg:md-9">From lightweight layers to the perfect pair of pants, new seasonal favorites are here.</h3>
                                    <div className="flex text-md gap-5">
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop men
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop women
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Item */}

                            {/* Item */}
                            <div className="hs-carousel-slide">
                                <div className="h-120 md:h-[calc(100vh-106px)] flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1684144064253-bb3b4c8fc700?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <h3 className="text-foreground-inverse text-md md:text-lg lg:text-xl mb-3">SUMMER SALE</h3>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl mb-5 md:mb-6 lg:md-9 font-semibold text-foreground-inverse ">Up to 50% off</h1>
                                    <div className="flex text-md gap-5">
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop men
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                class="text-foreground-inverse underline underline-offset-4 decoration-foreground-inverse  hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                                href="#"
                                            >
                                                Shop women
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Item */}
                        </div>
                        {/* End Carousel Body */}
                    </div>

                    {/* Arrows */}
                    <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 inset-s-2 inline-flex justify-center items-center size-10 bg-layer text-layer-foreground rounded-full shadow-2xs hover:bg-layer-hover -translate-y-1/2 focus:outline-hidden">
                        <span className="text-2xl" aria-hidden="true">
                            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 inset-e-2 inline-flex justify-center items-center size-10 bg-layer text-layer-foreground rounded-full shadow-2xs hover:bg-layer-hover -translate-y-1/2 focus:outline-hidden">
                        <span className="sr-only">Next</span>
                        <span className="text-2xl" aria-hidden="true">
                            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </span>
                    </button>
                    {/* End Arrows */}

                    <div className=" hs-carousel-pagination justify-center absolute bottom-3 inset-s-0 inset-e-0 flex gap-x-2 ">

                    </div>
                    {/* End Pagination */}
                </div>


                <div className="grid grid-cols-3 gap-10 my-10">
                    {/* Card */}
                    <div className="cursor-pointer hover:bg-layer-hover flex bg-card border border-card-line rounded-xl shadow-2xs">
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 sm:rounded-se-none">
                            <img className="size-full absolute top-0 inset-s-0 object-cover object-top" src="https://www.fashiongonerogue.com/wp-content/uploads/2017/05/HM-Summer-Party-Dresses-2017-Inspiration01.jpg" alt="Card Image" />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="font-semibold text-foreground">
                                    Women's Summer occasionwear
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer hover:bg-layer-hover flex bg-card border border-card-line rounded-xl shadow-2xs">
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 sm:rounded-se-none">
                            <img className="size-full absolute top-0 inset-s-0 object-cover object-top" src="https://image.hm.com/content/dam/regional-local-activities/ame/2026/wk-22/CFUL263C01B-summer-men-drop-1_4x5.png?imwidth=1024" alt="Card Image" />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="font-semibold text-foreground">
                                    Men's Summer 2026
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer hover:bg-layer-hover flex bg-card border border-card-line rounded-xl shadow-2xs">
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 sm:rounded-se-none">
                            <img className="size-full absolute top-0 inset-s-0 object-cover" src="https://image.hm.com/assets/hm/6c/00/6c0013ec04cf329603570b0109c66d7581e58767.jpg" alt="Card Image" />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="font-semibold text-foreground">
                                    Accesories
                                </h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    );
}
