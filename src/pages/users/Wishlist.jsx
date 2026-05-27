import React from 'react'
import Navbar from '../components/Header/Navbar'
import FeaturedProducts from '../home/FeaturedProducts'
import Footer from '../components/Footer/Footer'

export default function Wishlist() {
    return (
        <>
            <Navbar />
            <div className="absolute top-56.25 lg:top-42.25 left-0 right-0">
                <main className="w-full p-3 mb-20 sm:p-6 md:p-8">
                    <div className='max-w-340 w-auto mx-auto flex flex-col items-center gap-5'>
                        <h1 className='text-2xl font-semibold text-foreground'>
                            Favorites
                        </h1>

                        <p className='text-primary-500 text-sm text-center w-100'>
                            So that you can access your favorites later please log in or create account
                        </p>

                        <div className="w-200 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-12">
                            <FeaturedProducts />
                            <FeaturedProducts />
                            <FeaturedProducts />
                            <FeaturedProducts />
                        </div>
                    </div>
                </main>
                <hr />
                <Footer />
            </div>
        </>
    )
}
