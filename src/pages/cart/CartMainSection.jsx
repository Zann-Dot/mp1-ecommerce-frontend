import { useEffect } from "react";
import useCartContext from "../../../contexts/CartProvider";
import useEcommerceContext from "../../../contexts/EcommerceProvider";
import ExploreMore from "../components/ExploreMore";
import CheckoutProducts from "./CheckoutProducts";
import IconBlock from "./IconBlock";
import PaymentSummary from "./PaymentSummary";

export default function CartMainSection() {
    const { user } = useEcommerceContext();
    const { cart, getPaymentSummary } = useCartContext();

    useEffect(() => {
        getPaymentSummary();
    }, []);

    return (
        <main className="max-w-340 w-full mx-auto p-3 mb-20 sm:p-6 md:p-8">
            {user.mode !== "guest" && (
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2 flex flex-col gap-5">
                        <h1 className="text-2xl font-semibold text-foreground">
                            Shopping bag
                        </h1>

                        {cart &&
                            cart.length !== 0 &&
                            cart?.map((cartItem) => (
                                <div key={cartItem._id} className="flex flex-col gap-5">
                                    <CheckoutProducts cartItem={cartItem} />
                                    <hr className="my-1" />
                                </div>
                            ))}

                        <IconBlock />
                    </div>
                    <PaymentSummary />
                    <ExploreMore />
                </div>
            )}
        </main>
    );
}
