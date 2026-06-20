import useCartContext from "../../../../contexts/CartProvider";
import useCheckoutContext from "../../../../contexts/CheckoutProvider";

export default function ShippingMethod() {
    const { updateCheckoutForm } = useCheckoutContext();
    const { getPaymentSummary } = useCartContext();
    return (
        <div className="max-w-sm w-full space-y-3">
            <h1 className="col-span-full font-medium">Shipping method</h1>
            <label
                htmlFor="vertical-radio-checked-in-form"
                className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
            >
                <input
                    type="radio"
                    name="hs-vertical-radio-in-form"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="vertical-radio-checked-in-form"
                    value={0}
                    onChange={(e) => {
                        updateCheckoutForm({ shipping: Number(e.target.value), deliveryTime: 172800000 })
                        getPaymentSummary()
                    }}
                    defaultChecked
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    2-4 working days
                </span>
                <span className="text-muted-foreground-1 ms-auto">Free</span>
            </label>

            <label
                htmlFor="hs-vertical-radio-in-form"
                className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
            >
                <input
                    type="radio"
                    name="hs-vertical-radio-in-form"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-vertical-radio-in-form"
                    value={49}
                    onChange={(e) => {
                        updateCheckoutForm({ shipping: Number(e.target.value), deliveryTime: 86400000 })
                        getPaymentSummary(e.target.value)
                    }}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    Next day
                </span>
                <span className="text-muted-foreground-1 ms-auto">₹49</span>
            </label>

            <label
                htmlFor="hs-vertical-radio-in-form"
                className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
            >
                <input
                    type="radio"
                    name="hs-vertical-radio-in-form"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-vertical-radio-in-form"
                    value={89}
                    onChange={(e) => {
                        updateCheckoutForm({ shipping: Number(e.target.value), deliveryTime: 18000000 })
                        getPaymentSummary(e.target.value)
                    }}
                />
                <span className="text-sm ms-3 text-muted-foreground-1">
                    Same day
                </span>
                <span className="text-muted-foreground-1 ms-auto">₹89</span>
            </label>
        </div>
    )
}
