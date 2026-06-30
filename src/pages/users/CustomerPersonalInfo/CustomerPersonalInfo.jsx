import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import AccountSidebar from '../AccountSidebar'
import PersonalDetails from './PersonalDetails'

export default function CustomerPersonalInfo() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-56.25 lg:top-42.25 left-0 right-0">
                <div className="max-w-340 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <div className="flex flex-col gap-6">
                        <AccountSidebar />
                        <PersonalDetails />
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    )
}
