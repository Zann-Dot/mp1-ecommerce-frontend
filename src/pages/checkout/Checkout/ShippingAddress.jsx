import useEcommerceContext from "../../../../contexts/EcommerceProvider";
import SelectCountry from "../../components/SelectCountry";

export default function ShippingAddress({ user }) {
    const { dispatch, address, checkoutForm, updateCheckoutForm } = useEcommerceContext();

    return (
        <div className="grid grid-cols-2 gap-2">
            <h1 className="col-span-full font-medium">Shipping address</h1>

            <input
                id="input-base"
                type="text"
                className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Full name"
                required
                value={checkoutForm.fullName ?? ""}
                onChange={(e) => updateCheckoutForm({ fullName: e.target.value })}
            />
            <div className="col-span-full">
                <SelectCountry />
            </div>
            <input
                id="input-base"
                type="text"
                className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Address 1"
                required
                value={address.addressLine ?? ""}
                onChange={(e) => dispatch({ type: "addressLine", value: e.target.value })}
            />
            <input
                id="input-base"
                type="text"
                className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Address 2"
                onChange={(e) => dispatch({ type: "addressLine2", value: e.target.value })}
            />
            <input
                id="input-base"
                type="text"
                className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="City"
                required
                value={address.city ?? ""}
                onChange={(e) => dispatch({ type: "city", value: e.target.value })}
            />
            <input
                id="input-base"
                type="text"
                className=" py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="State"
                required
                value={address.state ?? ""}
                onChange={(e) => dispatch({ type: "state", value: e.target.value })}
            />
            <input
                id="input-base"
                type="text"
                className=" py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Pincode"
                required
                value={address.pincode ?? ""}
                onChange={(e) => dispatch({ type: "pincode", value: e.target.value })}
            />
            <input
                id="input-base"
                type="text"
                className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Phone"
                required
                value={checkoutForm.phoneNumber ?? ""}
                onChange={(e) => updateCheckoutForm({ phoneNumber: e.target.value })}
            />
        </div>
    );
}
