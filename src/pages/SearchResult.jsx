import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

export default function SearchResult() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-55.75 lg:top-42.25 left-0 right-0">
                <main className="relative max-w-340 mx-auto w-full lg:my-10 px-4 sm:px-6 lg:px-0">
                    <div className="lg:flex">
                        <div className="overflow-hidden pt-16 pb-10 lg:pt-5 px-0 lg:px-8 lg:ps-4 xl:ps-8">
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:max-[1180px]:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-10">
                                result
                            </div>
                        </div>
                    </div>

                </main>
                <hr />
                <Footer />
            </div>
        </>
    )
}
