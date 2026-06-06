import { useEffect, useRef, useState } from "react";
import rangeSliderLoader from "../../../utilis/rangeSliderLoader";
import useSidebarContext from "../../../../contexts/SidebarProvider";

export default function FilterByPrice() {
    const sliderRef = useRef(null);
    const { minPrice, maxPrice, setMaxPrice, setMinPrice } = useSidebarContext();

    useEffect(() => {
        return rangeSliderLoader(sliderRef, setMinPrice, setMaxPrice);
    }, []);

    return (
        <div className="w-full bg-sidebar rounded-lg p-4 flex flex-col gap-4">
            <p className="text-foreground mb-3 font-medium text-base">Price</p>

            <div className="flex">
                <input
                    type="radio"
                    name="hs-default-radio"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    Price - Low to High
                </span>
            </div>

            <div className="flex">
                <input
                    type="radio"
                    name="hs-default-radio"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    Price - High to Low
                </span>
            </div>

            {/* Range Slider */}
            <div className="w-full my-4">
                <div className="flex justify-center w-full mb-5">
                    <div className="flex items-center text-sm text-foreground">
                        <div className="text-center min-w-16">₹{minPrice}</div>-
                        <div className="text-center min-w-16">₹{maxPrice}</div>
                    </div>
                </div>

                <div
                    id="hs-pass-values-to-html-elements"
                    ref={sliderRef}
                    className="--prevent-on-load-init"
                    data-hs-range-slider='{
                "start": [500, 1500],
                "range": {
                  "min": 0,
                  "max": 2000
                },
                "formatter": {
                  "type": "integer",
                  "prefix": ""
                },
                 "step": 500,
                "connect": true,
                "cssClasses": {
                  "target": "relative h-2 rounded-full bg-surface",
                  "base": "size-full relative z-1",
                  "origin": "absolute top-0 inset-e-0 size-full origin-top-left rounded-full",
                  "handle": "absolute top-1/2 inset-e-0 size-4.5 bg-layer border-4 border-primary rounded-full cursor-pointer translate-x-2/4 -translate-y-2/4",
                  "connects": "relative z-0 size-full rounded-full overflow-hidden",
                  "connect": "absolute top-0 inset-e-0 z-1 size-full origin-top-left bg-primary",
                  "touchArea": "absolute -inset-1"
                }
              }'
                ></div>
            </div>
        </div>
    );
}
