import { Link } from "react-router";

export default function WomensCategoryCard() {
    return (
        <div className="group transition-all duration-300 h-100 flex flex-col p-1.5 gap-4 hover:bg-layer-hover bg-card border border-card-line rounded-xl shadow-2xs">
            <div className="grid grid-cols-2 gap-1.5 h-2/3">
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover object-pos rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://image.hm.com/content/dam/global_campaigns/season_01/women/1031a/1031A-summer-2025-drop-1-3x2.jpg?imwidth=4800"
                        alt="women card1"
                    />
                </div>
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://image.hm.com/content/dam/global_campaigns/season_03/women/startpage-category-entries-assets/wk21/WA10263P05-4x5-women-startpage-wk21.jpg?imwidth=4800"
                        alt="women card1"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-foreground">
                <div className="text-xl font-medium mb-1">
                    Women's Summer Occasionwear
                </div>
                <div className="text-muted-foreground-1 text-sm mb-4">
                    Starting from ₹1399
                </div>
                <Link className="underline underline-offset-4 text-sm" to={`/category?c=Women's Clothing`}>
                    View all
                </Link>
            </div>
        </div>
    );
}
