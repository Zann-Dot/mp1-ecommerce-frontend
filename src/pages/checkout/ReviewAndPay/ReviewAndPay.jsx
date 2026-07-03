import OrderSummary from '../OrderSummary'
import ReviewAndPaySection from './ReviewAndPaySection'
import ReviewFooter from './ReviewFooter'
import ReviewHeader from './ReviewHeader'

export default function ReviewAndPay() {
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/Solana-Sol-Line--Streamline-Mingcute.svg" />
            <title>Checkout</title>
            <ReviewHeader />
            <div className="w-full">
                <main className="relative mx-auto w-full px-4">
                    <div className="grid md:grid-cols-2 max-w-5xl mx-auto">
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
