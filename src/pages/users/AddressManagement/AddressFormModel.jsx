export default function AddressFormModel() {
    return (
        <>
            <div
                id="hs-scroll-inside-body-modal"
                className="hs-overlay hidden size-full fixed top-0 inset-s-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
                role="dialog"
                tabindex="-1"
                aria-labelledby="hs-scroll-inside-body-modal-label"
            >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 h-[calc(100%-56px)] sm:mx-auto">
                    <div className="max-h-full overflow-hidden flex flex-col bg-overlay border border-overlay-line shadow-2xs rounded-xl pointer-events-auto">
                        <div className="flex justify-between px-8 items-center py-4 border-b border-overlay-header">
                            <h3
                                id="hs-scroll-inside-body-modal-label"
                                className="font-semibold text-foreground"
                            >
                                Add address
                            </h3>
                            <button
                                type="button"
                                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-surface border border-surface-line text-surface-foreground hover:bg-surface-hover focus:outline-hidden focus:bg-surface-focus disabled:opacity-50 disabled:pointer-events-none"
                                aria-label="Close"
                                data-hs-overlay="#hs-scroll-inside-body-modal"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-8 overflow-y-auto">
                            <div className="space-y-4 grid grid-cols-2 gap-x-2">
                                <div className="w-full space-y-3 col-span-2">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="w-full space-y-3 col-span-2">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        Address Line
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Address line"
                                    />
                                </div>
                                <div className="w-full space-y-3 col-span-2">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        City
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="w-full space-y-3 col-span-1">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        State
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="State"
                                    />
                                </div>
                                <div className="w-full space-y-3 col-span-1">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        Pincode
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Pincode"
                                    />
                                </div>
                                <div className="w-full space-y-3 col-span-2">
                                    <label
                                        htmlFor="input-base"
                                        className="block mb-2 text-sm font-medium text-foreground"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="input-base"
                                        type="text"
                                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Phone number"
                                    />
                                </div>

                                <div className="w-full col-span-2 flex gap-x-2 items-center">
                                    <input
                                        type="checkbox"
                                        className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                                        id="hs-default-checkbox"
                                    />

                                    <label
                                        htmlFor="input-base"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Make this my default address
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end gap-2 items-center gap-x-2 p-8 pt-2">
                            <button
                                type="button"
                                className="cursor-pointer w-full py-3 px-3 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Add address
                            </button>
                            <button
                                type="button"
                                className="cursor-pointer w-full py-3 px-3 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                                data-hs-overlay="#hs-scroll-inside-body-modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
