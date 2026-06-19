import { useEffect } from "react";
import useEcommerceContext from "../../../../contexts/EcommerceProvider";
import EmailForm from "./EmailForm";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";

export default function CheckoutForm() {
    const { user, address, updateCheckoutForm } = useEcommerceContext();

    useEffect(() => {
        if (user) {
            updateCheckoutForm({
                email: user.email,
                fullName: user.firstName + " " + user?.lastName,
                address,
                phoneNumber: user.phoneNumber,
                shipping: 0,
                deliveryTime: 172800000
            });
        }
    }, [user?._id, address]);


    return (
        <div className="py-14 text-foreground flex flex-col gap-10 md:me-auto md:max-w-sm md:w-full">
            <h1 className="font-medium text-lg">Checkout as {user?.firstName}</h1>

            <form className="grid grid-flow-row gap-15">
                <EmailForm user={user} />
                <ShippingAddress user={user} />
                <ShippingMethod />
            </form>
        </div>
    );
}
