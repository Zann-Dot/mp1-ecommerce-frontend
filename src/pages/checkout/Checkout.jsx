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
                <main className="relative max-w-5xl mx-auto w-full px-4">
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
