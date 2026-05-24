

export default function AccessoriesCategoryCard() {
    return (
        <div className="group transition-all duration-300 h-100 flex flex-col p-1.5 gap-4 hover:bg-layer-hover bg-card border border-card-line rounded-xl shadow-2xs">
            <div className="grid grid-cols-2 gap-1.5 h-2/3">
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover object-pos rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://image.hm.com/assets/hm/6c/00/6c0013ec04cf329603570b0109c66d7581e58767.jpg"
                        alt="accessories card1"
                    />
                </div>
                <div className="rounded-xl row-span-2 overflow-hidden">
                    <img
                        className="size-full  object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                        src="https://image.hm.com/assets/hm/a2/6b/a26b43e851ea5d0abda44cf44c14a34ba2ed60a8.jpg"
                        alt="accessories card1"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-foreground">
                <div className="text-xl font-medium mb-1">
                    Accessories
                </div>
                <div className="text-muted-foreground-1 text-sm mb-4">
                    Starting from ₹399
                </div>
                <a className="underline underline-offset-4 text-sm" href="#">
                    View all
                </a>
            </div>
        </div>
    )
}
