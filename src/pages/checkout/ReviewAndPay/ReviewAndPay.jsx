import OrderSummary from '../OrderSummary'
import ReviewAndPaySection from './ReviewAndPaySection'
import ReviewFooter from './ReviewFooter'
import ReviewHeader from './ReviewHeader'

export default function ReviewAndPay() {
    return (
        <>
            <ReviewHeader />
            <div className="w-full">
                <main className="relative mx-auto w-full px-4">
                    <div className="grid grid-cols-2 max-w-5xl mx-auto">
                        <ReviewAndPaySection />
                        <OrderSummary />
                    </div>
                </main>
                <hr />
                <ReviewFooter />
            </div>
        </>
    )
}
