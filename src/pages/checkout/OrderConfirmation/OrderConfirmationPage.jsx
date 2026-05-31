import { Link } from "react-router";
import OrderConfirmationSummary from "./OrderConfirmationSummary";
import DeliveryDetails from "./DeliveryDetails";
import DarkModeButton from "../../components/Header/upperNavSection/DarkModeButton";
import useEcommerceContext from "../../../../contexts/EcommerceProvider";

export default function OrderConfirmationPage() {
    const { setThemeMode } = useEcommerceContext();

    return (
        <>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line">
                <nav className="max-w-270 w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
                    <Link
                        className="sm:order-1 flex-none text-xl font-semibold text-muted-foreground focus:outline-hidden focus:opacity-80"
                        to="/"
                    >
                        ShoppersStop
                    </Link>

                    <div className="sm:order-3 flex items-center gap-x-2">
                        <Link
                            to="/user/account"
                            className="cursor-pointer p-px rounded-full hover:bg-layer-line"
                        >
                            <img
                                class="inline-block size-8 rounded-full"
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                alt="Avatar"
                            ></img>
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="w-full flex-1 flex flex-col">
                <main className="relative mx-auto w-full px-4">
                    <div className="grid grid-cols-2 max-w-5xl mx-auto">
                        <DeliveryDetails />
                        <OrderConfirmationSummary />
                    </div>
                </main>

                <hr className="my-3" />

                <footer className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-navbar-line">
                    <nav className="max-w-270 w-full mx-auto px-4 text-muted-foreground-1 text-sm flex flex-wrap basis-full items-center justify-center gap-x-3">
                        <p>&copy; 2026 Preline Labs.</p>
                        <span className="font-extrabold">·</span>
                        <p>Terms</p>
                        <span className="font-extrabold">·</span>
                        <p>Privacy</p>
                        <span className="font-extrabold">·</span>
                        <p>Your Privacy Choices</p>
                        <span className="font-extrabold">·</span>
                        <DarkModeButton setThemeMode={setThemeMode} />
                    </nav>
                </footer>
            </div>
        </>
    );
}
