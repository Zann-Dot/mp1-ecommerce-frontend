import React from 'react'
import AccountSidebar from '../AccountSidebar'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import OrdersHistory from './OrdersHistory'

export default function MyOrders() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-42.25 left-0 right-0">
                <div className="max-w-340 mx-auto w-full my-20 lg:my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <AccountSidebar />
                        <OrdersHistory />
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    )
}
