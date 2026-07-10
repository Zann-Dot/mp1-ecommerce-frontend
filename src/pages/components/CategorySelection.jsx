import { Link, useSearchParams } from "react-router";

export default function CategorySelection() {
    const [searchParams] = useSearchParams();

    const categories = [
        { type: "Women's Clothing", thumbnail: "https://dynamic.zacdn.com/APqBMkvowcUrEoN2u13i8MLE978=/0x440/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/hm-0228-1991493-1.jpg" },
        { type: "Men's Clothing", thumbnail: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/17185528/2022/2/17/ccd5b4f7-391b-4032-8621-1f2c7bd97bab1645105868084RelaxedFitOxfordshirt1.jpg" },
        { type: "Accessories", thumbnail: "https://image.hm.com/assets/hm/ba/56/ba56ea7a894d79f1799990c5ca9f9d77dccc175c.jpg" }
    ]

    return (
        <div className="flex items-center justify-center gap-x-8 mt-5 mb-10">
            {categories.map((c, i) => (
                <Link key={i} className="flex items-center gap-3" to={`/category?c=${c.type}`}>
                    <img
                        className="inline-block size-10 rounded-full object-cover "
                        src={c.thumbnail}
                        alt="women's"
                    />
                    <h1 className={`${searchParams.has("c", c.type) ? "text-foreground" : "text-muted-foreground-1"} font-medium text-lg`}>
                        {c.type}
                    </h1>
                </Link>
            ))}
        </div>
    );
}
