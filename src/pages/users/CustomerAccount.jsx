import { useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router";
import useEcommerceContext from "../../../contexts/EcommerceProvider";

export default function CustomerAccount() {
    const { user } = useEcommerceContext();
    const navigate = useNavigate();

    useEffect(() => {
        user?.mode === "guest" && navigate('/')
    }, [user])

    return (
        <>
            <Navbar />
            <div className="w-full absolute top-42.25 left-0 right-0">
                <div className="max-w-250 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <h1 className="text-xl font-medium mb-4">Account</h1>
                    <div className="flex flex-col gap-7">
                        <div className="flex justify-between">
                            <section className="flex gap-4">
                                <div
                                    className="inline-flex items-center justify-center size-12 rounded-full border border-line-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 36 36"
                                        id="User-3-Line--Streamline-Mingcute"
                                        height="30"
                                        width="30"
                                    >
                                        <desc>User 3 Line Streamline Icon: https://streamlinehq.com</desc>
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="M36 0v36H0V0h36ZM18.889499999999998 34.887l-0.0165 0.003 -0.10649999999999998 0.052500000000000005 -0.03 0.006 -0.021 -0.006 -0.10649999999999998 -0.052500000000000005c-0.015 -0.006 -0.028499999999999998 -0.0015 -0.036000000000000004 0.0075l-0.006 0.015 -0.025500000000000002 0.642 0.0075 0.03 0.015 0.0195 0.156 0.11099999999999999 0.0225 0.006 0.018000000000000002 -0.006 0.156 -0.11099999999999999 0.018000000000000002 -0.024 0.006 -0.025500000000000002 -0.025500000000000002 -0.6405c-0.003 -0.015 -0.013499999999999998 -0.025500000000000002 -0.025500000000000002 -0.026999999999999996Zm0.3975 -0.1695 -0.0195 0.003 -0.27749999999999997 0.1395 -0.015 0.015 -0.0045000000000000005 0.0165 0.026999999999999996 0.645 0.0075 0.018000000000000002 0.012 0.0105 0.3015 0.1395c0.018000000000000002 0.006 0.0345 0 0.043500000000000004 -0.012l0.006 -0.021 -0.051000000000000004 -0.921c-0.0045000000000000005 -0.018000000000000002 -0.015 -0.03 -0.03 -0.033Zm-1.0725 0.003a0.0345 0.0345 0 0 0 -0.0405 0.009000000000000001l-0.009000000000000001 0.021 -0.051000000000000004 0.921c0 0.018000000000000002 0.0105 0.03 0.025500000000000002 0.036000000000000004l0.0225 -0.003 0.3015 -0.1395 0.015 -0.012 0.006 -0.0165 0.025500000000000002 -0.645 -0.0045000000000000005 -0.018000000000000002 -0.015 -0.015 -0.276 -0.138Z"
                                                strokeWidth="1.5"
                                            ></path>
                                            <path
                                                fill="currentColor"
                                                d="M18 19.5c3.594 0 6.862500000000001 1.041 9.267 2.508 1.2000000000000002 0.732 2.226 1.596 2.967 2.535 0.729 0.9225 1.266 2.0265 1.266 3.207 0 1.2675 -0.6164999999999999 2.2664999999999997 -1.5044999999999997 2.979 -0.8400000000000001 0.675 -1.9485 1.1219999999999999 -3.1260000000000003 1.434 -2.367 0.6255 -5.526 0.8370000000000001 -8.8695 0.8370000000000001s-6.5024999999999995 -0.21000000000000002 -8.8695 -0.8370000000000001c-1.1775 -0.312 -2.286 -0.759 -3.1260000000000003 -1.434C5.115 30.015 4.5 29.0175 4.5 27.75c0 -1.1805 0.5369999999999999 -2.2845 1.266 -3.2085 0.741 -0.9375 1.7655 -1.7999999999999998 2.967 -2.535C11.1375 20.5425 14.4075 19.5 18 19.5Zm0 3c-3.0345000000000004 0 -5.7645 0.885 -7.704000000000001 2.0685000000000002 -0.9705 0.591 -1.7025000000000001 1.2329999999999999 -2.175 1.833 -0.486 0.615 -0.621 1.08 -0.621 1.3485 0 0.183 0.055499999999999994 0.3765 0.3825 0.639 0.3735 0.30000000000000004 1.0230000000000001 0.6104999999999999 2.016 0.873C11.875499999999999 29.787 14.7165 30 18 30c3.285 0 6.1245 -0.21449999999999997 8.100000000000001 -0.738 0.9945 -0.26249999999999996 1.6440000000000001 -0.573 2.0175 -0.873 0.327 -0.26249999999999996 0.3825 -0.45599999999999996 0.3825 -0.639 0 -0.27 -0.135 -0.7335 -0.6194999999999999 -1.3485 -0.474 -0.6000000000000001 -1.206 -1.242 -2.1765 -1.833C23.764499999999998 23.3835 21.0345 22.5 18 22.5Zm0 -19.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0 -15Zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0 -9Z"
                                                strokeWidth="1.5"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="font-medium text-base">Welcome, {user?.firstName}</h1>
                                    <h4 className="text-muted-foreground-1 text-sm">
                                        {user?.email}
                                    </h4>
                                </div>
                            </section>
                            <p>
                                <a
                                    className="font-medium text-primary text-sm underline underline-offset-4 decoration-line-8 hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                    href="#"
                                >
                                    Logout
                                </a>
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <Link to="/user/account/personalinfo" className="flex flex-col relative bg-card border border-card-line shadow-xs rounded-xl cursor-pointer before:absolute before:inset-0 before:z-10 before:border before:border-card-line before:rounded-xl before:transition hover:before:border-2 hover:before:border-primary-hover hover:before:shadow-lg focus:before:border-2 focus:before:border-primary-focus focus:before:shadow-lg">
                                <div className="px-6 py-6">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="User-1-Line--Streamline-Mingcute" height="26" width="26">
                                            <desc>
                                                User 1 Line Streamline Icon: https://streamlinehq.com
                                            </desc>
                                            <g fill="none" fillRule="evenodd">
                                                <path d="M24 0v24H0V0h24ZM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018Zm0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022Zm-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01 -0.184 -0.092Z" strokeWidth="1"></path>
                                                <path fill="currentColor" d="M16 14a5 5 0 0 1 4.995 4.783L21 19v2a1 1 0 0 1 -1.993 0.117L19 21v-2a3 3 0 0 0 -2.824 -2.995L16 16H8a3 3 0 0 0 -2.995 2.824L5 19v2a1 1 0 0 1 -1.993 0.117L3 21v-2a5 5 0 0 1 4.783 -4.995L8 14h8ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0 -10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0 -6Z" strokeWidth="1"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <h3 className="font-semibold text-foreground mt-4">
                                        Personal Info
                                    </h3>

                                    <p className="mt-1 text-muted-foreground-1 text-sm">
                                        Update your details, email preferences, or password.
                                    </p>

                                </div>
                            </Link>

                            <Link to="/user/account/myorders" className="flex flex-col relative bg-card border border-card-line shadow-xs rounded-xl cursor-pointer before:absolute before:inset-0 before:z-10 before:border before:border-card-line before:rounded-xl before:transition hover:before:border-2 hover:before:border-primary-hover hover:before:shadow-lg focus:before:border-2 focus:before:border-primary-focus focus:before:shadow-lg">
                                <div className="px-6 py-6">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Shopping-Bag-2-Line--Streamline-Mingcute" height="24" width="24">
                                            <desc>
                                                Shopping Bag 2 Line Streamline Icon: https://streamlinehq.com
                                            </desc>
                                            <g fill="none" fillRule="nonzero">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018m0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022m-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01z" strokeWidth="1"></path>
                                                <path fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l0.017 0.156 0.875 14a2 2 0 0 1 -1.847 2.12l-0.15 0.005H5.066a2 2 0 0 1 -2 -1.976l0.003 -0.149 0.875 -14a2 2 0 0 1 1.84 -1.869L5.94 3zm0 2H5.94l-0.875 14h13.87zM15 7a1 1 0 0 1 1 1 4 4 0 0 1 -8 0 1 1 0 0 1 2 0 2 2 0 0 0 3.995 0.15L14 8a1 1 0 0 1 1 -1" strokeWidth="1"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <h3 className="font-semibold text-foreground mt-4">
                                        My Orders
                                    </h3>

                                    <p className="mt-1 text-muted-foreground-1 text-sm">
                                        Check the status of your order or see past orders.
                                    </p>

                                </div>
                            </Link>

                            <Link to="/user/account/addresses" className="flex flex-col relative bg-card border border-card-line shadow-xs rounded-xl cursor-pointer before:absolute before:inset-0 before:z-10 before:border before:border-card-line before:rounded-xl before:transition hover:before:border-2 hover:before:border-primary-hover hover:before:shadow-lg focus:before:border-2 focus:before:border-primary-focus focus:before:shadow-lg">
                                <div className="px-6 py-6">
                                    <span className="">
                                        <svg className="zeqf6 c51lg kh2c5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"></path>
                                            <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"></path>
                                            <path d="M18 22v-3"></path>
                                            <circle cx="10" cy="10" r="3"></circle>
                                        </svg>
                                    </span>
                                    <h3 className="font-semibold text-foreground mt-4">
                                        Addresses
                                    </h3>

                                    <p className="mt-1 text-muted-foreground-1 text-sm">
                                        Manage your billing and shipping addresses.
                                    </p>

                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-between">
                            <section className="flex gap-4">

                                <div>
                                    <h1 className="font-medium text-sm mb-2">Need assistance?</h1>
                                    <h4 className="text-muted-foreground-1 text-sm">
                                        Ask our customer service <br />
                                        Mon to Sun, 5 am to 8 pm PT
                                    </h4>
                                </div>
                            </section>
                            <p>
                                <a
                                    className="text-primary font-medium text-sm underline  underline-offset-4 decoration-line-8 hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                    href="#"
                                >
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </>
    );
}
