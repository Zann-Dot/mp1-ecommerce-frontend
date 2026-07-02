export default function CartItemSkeleton() {
    return (
        <div className="relative flex flex-row gap-5 items-start animate-pulse">
            <span className="w-32 h-37 bg-surface-1 rounded-xl"></span>

            <div className="flex-1 w-full flex flex-col gap-y-4">
                <span className="w-1/1 h-3 bg-surface-1 rounded-full"></span>
                <span className="w-1/2 h-3 bg-surface-1 rounded-full"></span>
                <span className="w-1/2 h-3 bg-surface-1 rounded-full"></span>
                <span className="w-1/4 h-3 bg-surface-1 rounded-full"></span>
            </div>
        </div>
    )
}
