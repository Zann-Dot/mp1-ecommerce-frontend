import React from "react";
import Breadcrumb from "./Breadcrumb";

export default function ImageDisplay({ data }) {

   return (
      <div className="col-span-5 md:col-span-3">
         <Breadcrumb data={data} />

         <div className="relative">
            {/* Carousel */}
            <div
               data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
               className="relative"
            >
               <div className="hs-carousel h-100 sm:h-170 shrink flex flex-col lg:flex-row gap-4">
                  <div className="lg:order-2 relative grow overflow-hidden min-h-50 rounded-lg">
                     <div className="hs-carousel-body absolute top-0 bottom-0 inset-s-0 flex flex-nowrap  opacity-0">
                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full bg-surface">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>

                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>

                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>

                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>

                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>

                        <div className="hs-carousel-slide">
                           <div className="flex justify-center h-full">
                              <img className="rounded-lg h-full w-full" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="lg:order-1 flex-none">
                     <div className="hs-carousel-pagination max-h-full flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden sm:overflow-y-auto scrollbar-none">
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                           </div>
                        </div>
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <div className="flex justify-center items-center text-center size-full bg-surface">
                                 <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                              </div>
                           </div>
                        </div>
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <div className="flex justify-center items-center text-center size-full bg-surface">
                                 <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                              </div>
                           </div>
                        </div>
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <div className="flex justify-center items-center text-center size-full bg-surface">
                                 <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                              </div>
                           </div>
                        </div>
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <div className="flex justify-center items-center text-center size-full bg-surface">
                                 <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                              </div>
                           </div>
                        </div>
                        <div className="hs-carousel-pagination-item shrink-0 border border-line-2 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-primary">
                           <div className="flex justify-center items-center text-center size-full">
                              <div className="flex justify-center items-center text-center size-full bg-surface">
                                 <img className="rounded-lg object-cover" src={data.imageUrl} alt={data.productName} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
