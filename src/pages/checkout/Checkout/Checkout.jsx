import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutForm from './CheckoutForm'
import OrderSummary from './OrderSummary'
import CheckoutFooter from './CheckoutFooter'

export default function Checkout() {
    return (
        <>
            <CheckoutHeader />
            <div className="w-full flex-1 flex flex-col">
                <main className="relative mx-auto w-full px-4">
                    <div className="grid grid-cols-2 max-w-5xl mx-auto">
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
