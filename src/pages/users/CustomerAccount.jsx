import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router";

export default function CustomerAccount() {
    return (
        <>
            <Navbar />
            <div className="w-full absolute top-42.25 left-0 right-0">
                <div className="max-w-250 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8 text-foreground">
                    <h1 className="text-xl font-medium mb-2">Account</h1>
                    <div className="flex flex-col gap-7">
                        <div className="flex justify-between">
                            <section className="flex gap-4">
                                <img
                                    class="inline-block size-12 rounded-full"
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                    alt="Avatar"
                                ></img>
                                <div>
                                    <h1 className="font-medium text-base">James Collins</h1>
                                    <h4 className="text-muted-foreground-1 text-sm">
                                        james@gmail.com
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
                            {/* Card */}
                            <Link to="/user/account/personalinfo" className="flex flex-col relative bg-card border border-card-line shadow-xs rounded-xl cursor-pointer before:absolute before:inset-0 before:z-10 before:border before:border-card-line before:rounded-xl before:transition hover:before:border-2 hover:before:border-primary-hover hover:before:shadow-lg focus:before:border-2 focus:before:border-primary-focus focus:before:shadow-lg">
                                <div className="px-6 py-6">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="User-1-Line--Streamline-Mingcute" height="26" width="26">
                                            <desc>
                                                User 1 Line Streamline Icon: https://streamlinehq.com
                                            </desc>
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M24 0v24H0V0h24ZM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018Zm0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022Zm-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01 -0.184 -0.092Z" stroke-width="1"></path>
                                                <path fill="currentColor" d="M16 14a5 5 0 0 1 4.995 4.783L21 19v2a1 1 0 0 1 -1.993 0.117L19 21v-2a3 3 0 0 0 -2.824 -2.995L16 16H8a3 3 0 0 0 -2.995 2.824L5 19v2a1 1 0 0 1 -1.993 0.117L3 21v-2a5 5 0 0 1 4.783 -4.995L8 14h8ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0 -10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0 -6Z" stroke-width="1"></path>
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
                            {/* End Card */}

                            <Link to="/user/account/myorders" className="flex flex-col relative bg-card border border-card-line shadow-xs rounded-xl cursor-pointer before:absolute before:inset-0 before:z-10 before:border before:border-card-line before:rounded-xl before:transition hover:before:border-2 hover:before:border-primary-hover hover:before:shadow-lg focus:before:border-2 focus:before:border-primary-focus focus:before:shadow-lg">
                                <div className="px-6 py-6">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Shopping-Bag-2-Line--Streamline-Mingcute" height="24" width="24">
                                            <desc>
                                                Shopping Bag 2 Line Streamline Icon: https://streamlinehq.com
                                            </desc>
                                            <g fill="none" fill-rule="nonzero">
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
                                        <svg class="zeqf6 c51lg kh2c5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
