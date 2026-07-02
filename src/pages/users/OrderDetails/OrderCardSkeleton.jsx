export default function OrderCardSkeleton() {
    return (
        <div className="relative p-1.25 bg-surface rounded-2xl animate-pulse">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 px-5 py-7 font-medium">

            </div>

            <div className="flex flex-col justify-center gap-6 p-6 bg-card shadow-2xs rounded-xl">
                <span className="w-1/1 h-3 bg-surface-1 rounded-full"></span>
                <hr />

                <div className="flex justify-between">
                    <span className="w-1/4 h-3 bg-surface-1 rounded-full"></span>

                    <button
                        type="button"
                        className="py-3 px-10 inline-flex justify-center items-center bg-surface-1 rounded-lg"
                    >
                    </button>
                </div>
                <hr />
                <div>
                    <section className="pb-8">
                        <div className="w-full flex flex-row gap-5 items-start">
                            <div className="h-full w-25 md:w-30 rounded-xl overflow-hidden shrink-0">
                                <span className="w-1/1 lg:w-30 h-20 sm:h-30 block bg-surface-1 rounded-xl"></span>
                            </div>

                            <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-y-4">


                                <div className="w-full flex flex-col gap-y-4 max-w-md text-sm text-foreground">
                                    <span className="w-1/2 h-3 bg-surface-1 rounded-full"></span>
                                    <span className="w-1/2 h-3 bg-surface-1 rounded-full"></span>
                                    <span className="w-1/2 h-3 bg-surface-1 rounded-full"></span>

                                </div>

                                <div className="flex flex-wrap gap-2 pt-1 text-xs lg:text-sm">
                                    <button
                                        type="button"
                                        className="py-3 px-10 inline-flex justify-center items-center bg-surface-1 rounded-lg"
                                    >
                                    </button>
                                    <button
                                        type="button"
                                        className="py-3 px-10 inline-flex justify-center items-center bg-surface-1 rounded-lg"
                                    >
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
