import SelectQuantity from "../productListing/ProductDetails/Details_Section_Components/SelectQuantity";
import SelectSize from "../productListing/ProductDetails/Details_Section_Components/SelectSize";

export default function WishlistAddToCartModal({ params, productId }) {

    return (
        <div
            id="hs-slide-up-animation-modal"
            className="hs-overlay hidden size-full sticky top-0 inset-e-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-slide-up-animation-modal-label"
        >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-overlay border border-overlay-line shadow-2xs rounded-xl pointer-events-auto">
                    <div className="flex justify-between items-center py-3 px-4 border-b border-overlay-header">
                        <h3
                            id="hs-slide-up-animation-modal-label"
                            className="font-semibold text-foreground"
                        >
                            Add to cart
                        </h3>
                        <button
                            type="button"
                            className="cursor-pointer hs-dropup-toggle size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-surface border border-surface-line text-surface-foreground hover:bg-surface-hover focus:outline-hidden focus:bg-surface-focus disabled:opacity-50 disabled:pointer-events-none"
                            aria-label="Close"
                            data-hs-overlay="#hs-slide-up-animation-modal"
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
                    <div className="p-4 overflow-y-auto">
                        <label>Select Size:</label>
                        <SelectSize params={params} productId={productId} />
                    </div>
                    <label className="px-4">Select Quantity:</label>
                    <div className="grid grid-cols-2 gap-x-2 py-3 px-4 border-overlay-footer">
                        <SelectQuantity params={params} productId={productId} />

                        <button
                            type="button"
                            className="py-3 px-3 justify-center cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Move
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
