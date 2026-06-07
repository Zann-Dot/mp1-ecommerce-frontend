import useSidebarContext from "../../../../contexts/SidebarProvider"

export default function FilterByRating() {
    const { setRating } = useSidebarContext();
    function handleRating(e) {
        e.target.checked && setRating(e.target.value);
    }

    return (
        <div className="w-full bg-sidebar rounded-lg p-4 flex flex-col gap-4">
            <p className="text-foreground mb-3 font-medium text-base">Ratings</p>

            <div className="flex">
                <input
                    type="radio"
                    name="ratings"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                    value="4"
                    onChange={handleRating}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    4 Stars & above
                </span>
            </div>


            <div className="flex">
                <input
                    type="radio"
                    name="ratings"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                    value="3"
                    onChange={handleRating}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    3 Stars & above
                </span>
            </div>

            <div className="flex">
                <input
                    type="radio"
                    name="ratings"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                    value="2"
                    onChange={handleRating}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    2 Stars & above
                </span>
            </div>


            <div className="flex">
                <input
                    type="radio"
                    name="ratings"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                    value="1"
                    onChange={handleRating}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    1 Stars & above
                </span>
            </div>


        </div>
    )
}
