import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import AccountSidebar from '../AccountSidebar'
import AddressDisplay from './AddressDisplay'
import AlertComponent from './AlertComponent'
import useEcommerceContext from '../../../../contexts/EcommerceProvider'

export default function AddressManagement() {
    const { alert } = useEcommerceContext();

    return (
        <>
            {alert?.type == "setToDefault" && (
                <AlertComponent
                    headingMessage={alert?.headingMessage}
                    subHeadingMessage={alert?.subHeadingMessage}
                />
            )}
            <Navbar />
            <div className="w-full absolute top-42.25 left-0 right-0">
                <div className="max-w-340 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <div className="flex gap-6">
                        <AccountSidebar />
                        <AddressDisplay />
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    )
}
