import useEcommerceContext from "../../../../contexts/EcommerceProvider";
import useSidebarContext from "../../../../contexts/SidebarProvider";

export default function FilterByCategory() {
    const { setCategory } = useSidebarContext();
    const { products } = useEcommerceContext();

    function handleCategory(e) {
        const { checked, value } = e.target;
        checked
            ? setCategory((prevVal) => [...prevVal, value])
            : setCategory((prevVal) =>
                prevVal.filter((category) => category !== value),
            );
    }

    return (
        <div className="w-full bg-sidebar rounded-lg p-4 flex flex-col gap-4">
            <p className="text-foreground mb-3 font-medium text-base">Category</p>

            <div className="flex">
                <input
                    type="checkbox"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-vertical-checkbox-in-form"
                    value="Men's Clothing"
                    onChange={handleCategory}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">Men</span>
                <span className="text-xs text-muted-foreground-1 ms-auto">
                    ( {(products?.filter((i) => i.category === "Men's Clothing")).length} )
                </span>
            </div>

            <div className="flex">
                <input
                    type="checkbox"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-vertical-checkbox-in-form"
                    value="Women's Clothing"
                    onChange={handleCategory}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">Women</span>
                <span className="text-xs text-muted-foreground-1 ms-auto">
                    ( {(products?.filter((i) => i.category === "Women's Clothing")).length} )
                </span>
            </div>

            <div className="flex">
                <input
                    type="checkbox"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-vertical-checkbox-in-form"
                    value="Accessories"
                    onChange={handleCategory}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    Accessories
                </span>
                <span className="text-xs text-muted-foreground-1 ms-auto">
                    ( {(products?.filter((i) => i.category === "Accessories")).length} )
                </span>
            </div>
        </div>
    );
}
