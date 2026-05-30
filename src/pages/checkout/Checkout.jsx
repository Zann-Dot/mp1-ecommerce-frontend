import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutForm from './CheckoutForm'
import OrderSummary from './OrderSummary'
import CheckoutFooter from './CheckoutFooter'

export default function Checkout() {
    return (
        <>
            <CheckoutHeader />
            <div className="w-full">
                <main className="relative max-w-270 mx-auto w-full lg:my-10 px-4">
                    <div className="grid grid-cols-2">
                        <CheckoutForm />
                        <OrderSummary />
                    </div>
                </main>
                <hr />
                <CheckoutFooter />
            </div>
        </>
    )
}
