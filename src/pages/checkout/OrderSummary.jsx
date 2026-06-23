import useCartContext from "../../../contexts/CartProvider";
import calculateDiscountedPrice from "../../utilis/calculateDiscountedPrice";

export default function OrderSummary() {
    const { paymentSummary, cart } = useCartContext();

    return (
        <div className="before:hidden md:before:block before:absolute before:inset-y-0 before:inset-s-1/2 before:-z-1 before:inset-e-0 before:bg-background-1">
            <div className="py-14 text-foreground flex flex-col gap-10 md:ms-auto md:max-w-sm md:w-full">
                {/* payment summary */}
                <div className="w-full flex flex-col gap-5 text-foreground">
                    <h1 className="text-base text-foreground font-semibold">
                        Order Summary
                    </h1>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between text-sm">
                            Subtotal
                            <span className="font-medium">₹{paymentSummary?.subTotal}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            Shipping
                            <span className="font-medium">
                                {paymentSummary?.shippingCharge === 0
                                    ? "Free"
                                    : `₹${paymentSummary?.shippingCharge}`}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            Estimated Tax
                            <span className="font-medium">₹{paymentSummary?.taxCharge}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            Promo Code
                            <span className="font-medium text-muted-foreground underline cursor-pointer hover:text-muted-foreground-1 underline-offset-4">
                                Enter Code
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            Total
                            <span className="flex items-center gap-1">
                                <span className="text-xs">INR</span>
                                <span className="font-medium">₹{paymentSummary?.netTotal}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Order Summary */}
                <div className="grid grid-flow-row gap-5">
                    {cart.length !== 0 &&
                        cart &&
                        cart.map((item) => (
                            <div key={item._id} className="flex items-center gap-4">
                                <div className="relative w-25 h-28 rounded-xl overflow-hidden">
                                    <img
                                        src={item.product.imageUrl}
                                        alt="Nike Air Force 1"
                                        className="size-1/1 object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 h-full text-muted-foreground-1 text-xs">
                                    <h1 className="text-foreground text-base">
                                        {item.product.productName.split(" ").splice(0, 3).join(" ")}
                                    </h1>
                                    <h4>Color: red</h4>
                                    <h4>Size: {item.size}</h4>
                                    <h4>Qty: {item.quantity}</h4>
                                    <h2 className="text-foreground text-base">
                                        ₹
                                        {item.product.isDiscount
                                            ? calculateDiscountedPrice(
                                                item.product.discount,
                                                item.product.priceRupees,
                                            )
                                            : item.product.priceRupees}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
