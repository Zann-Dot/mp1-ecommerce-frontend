import CheckoutHeader from '../CheckoutHeader'
import OrderSummary from '../OrderSummary'
import CheckoutFooter from '../CheckoutFooter'
import ReviewAndPaySection from './ReviewAndPaySection'

export default function ReviewAndPay() {
    return (
        <>
            <CheckoutHeader />
            <div className="w-full">
                <main className="relative mx-auto w-full px-4">
                    <div className="grid grid-cols-2 max-w-5xl mx-auto">
                        <ReviewAndPaySection />
                        <OrderSummary />
                    </div>
                </main>
                <hr />
                <CheckoutFooter />
            </div>
        </>
    )
}
