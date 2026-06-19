import useEcommerceContext from "../../../../contexts/EcommerceProvider"

export default function EmailForm({ user }) {
    const { updateCheckoutForm, checkoutForm } = useEcommerceContext();

    return (
        <div className="max-w-sm w-full space-y-3">
            <label
                htmlFor="input-base"
                className="block mb-2 font-medium text-foreground"
            >
                Contact details
            </label>
            <input
                type="text"
                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Email"
                required
                value={checkoutForm.email ?? ""}
                onChange={(e) => updateCheckoutForm({ email: e.target.value })}
            />
            <p
                id="input-base-helper-text"
                className="mt-2 text-sm text-muted-foreground-1 flex items-center gap-2"
            >
                <input
                    type="checkbox"
                    className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-checkbox"
                />
                Email me with news and others
            </p>
        </div>
    )
}
