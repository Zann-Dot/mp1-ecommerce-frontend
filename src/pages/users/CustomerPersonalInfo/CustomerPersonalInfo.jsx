import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import PersonalInfoSidebar from './PersonalInfoSidebar'
import PersonalDetails from './PersonalDetails'

export default function CustomerPersonalInfo() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-42.25 left-0 right-0">
                <div className="max-w-340 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <div className="flex gap-6">
                        <PersonalInfoSidebar />
                        <PersonalDetails />
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    )
}
