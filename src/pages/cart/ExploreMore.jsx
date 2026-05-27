import React from 'react'
import FeaturedProducts from '../home/FeaturedProducts'

export default function ExploreMore() {
    return (
        <div className='col-span-3 flex flex-col gap-4'>
            <h1 className='text-xl font-medium text-foreground'>You may also like</h1>

            <div className='flex overflow-x-auto gap-x-4 scroll-smooth no-scrollbar snap-x snap-mandatory pb-4'>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>
                <div className="basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] shrink-0 snap-start">
                    <FeaturedProducts />
                </div>

            </div>
        </div>
    )
}
