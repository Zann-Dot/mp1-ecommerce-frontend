
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import CheckoutProducts from './CheckoutProducts'
import PaymentSummary from './PaymentSummary'
import IconBlock from './IconBlock'
import ExploreMore from '../components/ExploreMore'

export default function Cart() {
    return (
        <>
            <Navbar />
            <div className="absolute top-56.25 lg:top-42.25 left-0 right-0 lg:px-8">
                <main className="max-w-340 w-full mx-auto p-3 mb-20 sm:p-6 md:p-8">
                    <div className="grid grid-cols-3 gap-10">
                        {/* cart section */}
                        <div className='col-span-2 flex flex-col gap-5'>
                            <h1 className='text-2xl font-semibold text-foreground'>
                                Shopping bag
                            </h1>

                            <CheckoutProducts />
                            <hr className='my-1' />
                            <CheckoutProducts />
                            <hr className='my-1' />
                            <CheckoutProducts />
                            <hr className='my-1' />
                            <IconBlock />

                        </div>

                        {/* payment section */}
                        <PaymentSummary />

                        {/* Explore more section */}
                        <ExploreMore />
                    </div>

                </main>
                <hr />
                <Footer />
            </div>
        </>
    )
}
