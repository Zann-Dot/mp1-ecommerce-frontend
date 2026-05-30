import React from 'react'
import PaymentSummary from '../cart/PaymentSummary'

export default function OrderSummary() {
    return (
        <div className='before:hidden md:before:block before:absolute before:inset-y-0 before:inset-s-1/2 before:-z-1 before:w-full before:bg-background-1'>
            <div className='py-14 text-foreground flex flex-col gap-10 md:ms-auto md:max-w-sm md:w-full'>
                {/* payment summary */}
                <div className='w-full flex flex-col gap-5 text-foreground'>
                    <h1 className='text-md text-foreground font-semibold'>Order Summary</h1>

                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between text-sm'>
                            Subtotal
                            <span className='font-medium'>₹2699</span>
                        </div>
                        <div className='flex justify-between text-sm'>
                            Shipping
                            <span className='font-medium'>
                                Free
                            </span>
                        </div>
                        <div className='flex justify-between text-sm'>
                            Estimated Tax
                            <span className='font-medium'>
                                ₹40
                            </span>
                        </div>
                        <div className='flex justify-between text-sm'>
                            Promo Code
                            <span className='font-medium text-muted-foreground underline cursor-pointer hover:text-muted-foreground-1 underline-offset-4'>
                                Enter Code
                            </span>
                        </div>
                        <div className='flex justify-between text-sm'>
                            Total
                            <span className='flex items-center gap-1'>
                                <span className='text-xs'>INR</span>
                                <span className='font-medium'>₹2699</span>
                            </span>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Order Summary */}
                <div className='grid grid-flow-row gap-5'>
                    <div className='flex items-center gap-4'>
                        <div className='relative w-25 h-28 rounded-xl overflow-hidden'>
                            <img
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80"
                                alt="Nike Air Force 1"
                                className="size-1/1 object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-1 h-full text-muted-foreground-1 text-xs'>
                            <h1 className='text-foreground text-base'>Title nodn abo</h1>
                            <h4>Color: red</h4>
                            <h4>Size: M</h4>
                            <h4>Qty: 2</h4>
                            <h2 className='text-foreground text-base'>₹456</h2>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='relative w-25 h-28 rounded-xl overflow-hidden'>
                            <img
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80"
                                alt="Nike Air Force 1"
                                className="size-1/1 object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-1 h-full text-muted-foreground-1 text-xs'>
                            <h1 className='text-foreground text-base'>Title nodn abo</h1>
                            <h4>Color: red</h4>
                            <h4>Size: M</h4>
                            <h4>Qty: 2</h4>
                            <h2 className='text-foreground text-base'>₹456</h2>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='relative w-25 h-28 rounded-xl overflow-hidden'>
                            <img
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80"
                                alt="Nike Air Force 1"
                                className="size-1/1 object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-1 h-full text-muted-foreground-1 text-xs'>
                            <h1 className='text-foreground text-base'>Title nodn abo</h1>
                            <h4>Color: red</h4>
                            <h4>Size: M</h4>
                            <h4>Qty: 2</h4>
                            <h2 className='text-foreground text-base'>₹456</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
