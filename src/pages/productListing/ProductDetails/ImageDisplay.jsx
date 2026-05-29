import React from 'react'
import Breadcrumb from './Breadcrumb'

export default function ImageDisplay() {
    return (
        <div className='col-span-5 md:col-span-3'>
            <Breadcrumb />
            <div className='lg:sticky top-50'>
                <div className="relative">
                    {/* Carousel */}
                    <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' className="relative">
                        <div className="hs-carousel h-100 sm:h-170 shrink flex flex-col lg:flex-row gap-4">
                            <div className="lg:order-2 relative grow overflow-hidden min-h-50 rounded-lg">
                                <div className="hs-carousel-body absolute top-0 bottom-0 inset-s-0 flex flex-nowrap  opacity-0">
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">First slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface-1 p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">Second slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface-2 p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">Third slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface-3 p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">Fourth slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface-4 p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">Fifth slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide">
                                        <div className="flex justify-center h-full bg-surface-5 p-6">
                                            <span className="self-center text-4xl text-foreground transition duration-700">Sixth slide</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="lg:order-1 flex-none">
                                <div className="hs-carousel-pagination max-h-full flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden sm:overflow-y-auto scrollbar-none">
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface p-2">
                                            <span className="text-xs text-foreground transition duration-700">First slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface-1 p-2">
                                            <span className="text-xs text-foreground transition duration-700">Second slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface-2 p-2">
                                            <span className="text-xs text-foreground transition duration-700">Third slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface-3 p-2">
                                            <span className="text-xs text-foreground transition duration-700">Fourth slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface-4 p-2">
                                            <span className="text-xs text-foreground transition duration-700">Fifth slide</span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                                        <div className="flex justify-center items-center text-center size-full bg-surface-5 p-2">
                                            <span className="text-xs text-foreground transition duration-700">Sixth slide</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Thumbnails */}
                        </div>
                    </div>
                    {/* End Carousel */}
                </div>
            </div>

        </div>
    )
}
