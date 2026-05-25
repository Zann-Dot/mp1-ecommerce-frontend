import React from 'react'

export default function FilterByCategory() {
    return (
        <div className="w-full bg-sidebar rounded-lg p-4 flex flex-col gap-4">
            <p className="text-foreground mb-3 font-medium text-md">Category</p>

            <div className="flex">
                <input type="checkbox" class="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-vertical-checkbox-in-form" />
                <span class="text-sm ms-3 text-muted-foreground-1">Men</span>
                <span className="text-xs text-muted-foreground-1 ms-auto">(42)</span>
            </div>

            <div className="flex">
                <input type="checkbox" class="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-vertical-checkbox-in-form" />
                <span class="text-sm ms-3 text-muted-foreground-1">Women</span>
                <span className="text-xs text-muted-foreground-1 ms-auto">(42)</span>
            </div>

            <div className="flex">
                <input type="checkbox" class="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-vertical-checkbox-in-form" />
                <span class="text-sm ms-3 text-muted-foreground-1">Accessories</span>
                <span className="text-xs text-muted-foreground-1 ms-auto">(42)</span>
            </div>
        </div>
    )
}
