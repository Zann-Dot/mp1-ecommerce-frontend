import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import CartMainSection from './CartMainSection'


export default function Cart() {

    return (
        <>
            <Navbar />
            <div className="absolute top-56.25 lg:top-42.25 left-0 right-0 lg:px-8">
                <CartMainSection />
                <hr />
                <Footer />
            </div>
        </>
    )
}
