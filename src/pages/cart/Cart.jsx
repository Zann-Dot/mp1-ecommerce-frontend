import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import CartMainSection from "./CartMainSection";
import AlertComponent from "../components/AlertComponent";
import useEcommerceContext from "../../../contexts/EcommerceProvider";
import ErrorAlert from "../components/ErrorAlert";

export default function Cart() {
    const { alert } = useEcommerceContext();

    return (
        <>
            {alert?.type === "quantityUpdate" && (
                <AlertComponent
                    headingMessage={alert?.headingMessage}
                    subHeadingMessage={alert?.subHeadingMessage}
                />
            )}

            {alert?.type === "removedItemFromCart" && (
                <ErrorAlert
                    headingMessage={alert?.headingMessage}
                    subHeadingMessage={alert?.subHeadingMessage}
                />
            )}
            <Navbar />
            <div className="absolute top-56.25 lg:top-42.25 left-0 right-0 lg:px-8">
                <CartMainSection />
                <hr />
                <Footer />
            </div>
        </>
    );
}
