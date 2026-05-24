
export default function MensCategoryCard() {
    return (
        <div className="group transition-all duration-300 h-100 flex flex-col p-1.5 gap-4 hover:bg-layer-hover bg-card border border-card-line rounded-xl shadow-2xs">
            <div className="grid grid-cols-2 gap-1.5 h-2/3">
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover object-top rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://image.hm.com/content/dam/regional-local-activities/ame/2026/wk-22/CFUL263C01B-summer-men-drop-1_4x5.png?imwidth=1024"
                        alt="men card1"
                    />
                </div>
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover  rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://i.pinimg.com/736x/b6/42/39/b64239348c842d11f16cb0b25e64fae6.jpg"
                        alt="men card1"
                    />
                </div>

            </div>

            <div className="flex flex-col items-center justify-center text-foreground">
                <div className="text-xl font-medium mb-1">Men's Clothing</div>
                <div className="text-muted-foreground-1 text-sm mb-4">
                    Starting from ₹1199
                </div>
                <a className="underline underline-offset-4 text-sm" href="#">
                    View all
                </a>
            </div>
        </div>
    );
}
