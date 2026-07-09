import useEcommerceContext from "../../../../contexts/EcommerceProvider";
import calculateDiscountedPrice from "../../../utilis/calculateDiscountedPrice";

export default function OrderConfirmationSummary() {
    const { order } = useEcommerceContext();
    const cart = order?.orderSummary.cartItems;
    const paymentSummary = order?.orderSummary.paymentSummary;

    return (
        <div className='py-14 text-foreground flex flex-col gap-10 md:ms-auto md:max-w-sm md:w-full'>
            {/* payment summary */}
            <div className='w-full flex flex-col gap-5 text-foreground'>
                <div className="flex justify-between">
                    <h1 className='text-base text-foreground font-semibold'>Your Order</h1>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border bg-green-500/10 border-green-500/20 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Check-Line--Streamline-Mingcute" height="16" width="16">
                            <desc>
                                Check Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fillRule="evenodd">
                                <path d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z" strokeWidth="0.6667"></path>
                                <path fill="currentColor" d="M14.128 3.643333333333333a0.6666666666666666 0.6666666666666666 0 0 1 0 0.9426666666666665L6.633333333333333 12.081333333333333a0.7333333333333334 0.7333333333333334 0 0 1 -1.0373333333333332 0l-3.724 -3.724a0.6666666666666666 0.6666666666666666 0 1 1 0.9433333333333334 -0.9433333333333334l3.3 3.3L13.184666666666667 3.643333333333333a0.6666666666666666 0.6666666666666666 0 0 1 0.9426666666666665 0Z" strokeWidth="0.6667"></path>
                            </g>
                        </svg>
                        Paid
                    </span>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between text-sm'>
                        Subtotal
                        <span className='font-medium'>₹{paymentSummary?.subTotal}</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                        Shipping
                        <span className='font-medium'>
                            {paymentSummary?.shippingCharge === 0
                                ? "Free"
                                : `₹${paymentSummary?.shippingCharge}`}
                        </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                        Estimated Tax
                        <span className='font-medium'>
                            ₹{paymentSummary?.taxCharge}
                        </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                        Promo Code
                        <span className='font-medium text-muted-foreground cursor-pointer hover:text-muted-foreground-1 underline-offset-4'>
                            ₹0
                        </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                        Total
                        <span className='flex items-center gap-1'>
                            <span className='text-xs'>INR</span>
                            <span className='font-medium'>₹{paymentSummary?.netTotal}</span>
                        </span>
                    </div>
                </div>
            </div>

            <hr />

            {/* Order Summary */}
            <div className="grid grid-flow-row gap-5">
                {cart?.map((item) => (
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
                            <h4>Color: </h4>
                            <h4>Size: {item.size}</h4>
                            <h4>Qty: {item.quantity}</h4>
                            <h2 className="text-foreground text-base">
                                ₹
                                {item.product.isDiscount
                                    ? calculateDiscountedPrice(
                                        item.product.discount,
                                        item.product.priceRupees,
                                    )
                                    : product.priceRupees}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
