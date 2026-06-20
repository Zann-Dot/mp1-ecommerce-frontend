export default function PaymentMethod() {
    return (
        <div className="flex flex-col gap-5">
            {/* payment option toggle */}
            <div>
                <h1 className="font-medium mb-3">Payment methods</h1>

                <div className="grid grid-cols-3 gap-2">
                    <button
                        type="button"
                        className="cursor-pointer py-2  inline-flex items-center justify-center gap-x-3 text-sm font-medium rounded-lg border border-line-3 text-foreground focus:outline-hidden disabled:opacity-50 focus:border-2 focus:border-line-4 disabled:pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="Bank-Card-Line--Streamline-Mingcute"
                            height="20"
                            width="20"
                        >
                            <desc>
                                Bank Card Line Streamline Icon: https://streamlinehq.com
                            </desc>
                            <g fill="none" fillRule="nonzero">
                                <path
                                    d="M16 0v16H0V0zM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999m0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665m-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666z"
                                    strokeWidth="0.6667"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M12.666666666666666 2.6666666666666665a2 2 0 0 1 2 2v6.666666666666666a2 2 0 0 1 -2 2H3.333333333333333a2 2 0 0 1 -2 -2V4.666666666666666a2 2 0 0 1 2 -2zm0.6666666666666666 4H2.6666666666666665v4.666666666666666a0.6666666666666666 0.6666666666666666 0 0 0 0.5886666666666667 0.6619999999999999L3.333333333333333 12h9.333333333333332a0.6666666666666666 0.6666666666666666 0 0 0 0.6619999999999999 -0.5886666666666667L13.333333333333332 11.333333333333332zm-2 2a0.6666666666666666 0.6666666666666666 0 0 1 0.078 1.3286666666666667L11.333333333333332 10h-2a0.6666666666666666 0.6666666666666666 0 0 1 -0.078 -1.3286666666666667L9.333333333333332 8.666666666666666zm1.3333333333333333 -4.666666666666666H3.333333333333333a0.6666666666666666 0.6666666666666666 0 0 0 -0.6666666666666666 0.6666666666666666v0.6666666666666666h10.666666666666666V4.666666666666666a0.6666666666666666 0.6666666666666666 0 0 0 -0.6666666666666666 -0.6666666666666666"
                                    strokeWidth="0.6667"
                                ></path>
                            </g>
                        </svg>
                        Card
                    </button>

                    <button
                        type="button"
                        className="cursor-pointer py-2  inline-flex items-center justify-center gap-x-3 text-sm font-medium rounded-lg border border-line-3 text-foreground focus:outline-hidden focus:border-2 focus:border-line-4 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <img
                            className="size-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg"
                            alt="paypal"
                        />
                        PayPal
                    </button>
                </div>
            </div>

            {/* Payment options */}
            <div>
                <h1 className="font-medium mb-3">Card details</h1>

                <div className="max-w-sm w-full grid grid-cols-2 gap-y-3 gap-x-2">
                    <div className="relative col-span-2">
                        <input
                            type="text"
                            id="hs-trailing-icon"
                            name="hs-trailing-icon"
                            className="py-2.5 sm:py-3 px-4 pe-11 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:z-10 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                        <div className="absolute inset-y-0 inset-e-0 flex items-center gap-x-1 pointer-events-none z-20 pe-4">
                            <label className="border border-line-2 p-1 rounded-sm">
                                <img
                                    className="h-2 w-5"
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg"
                                    alt="visa"
                                />
                            </label>
                            <label className="border border-line-2 px-1 rounded-sm">
                                <img
                                    className="h-4 w-5 p-px object-cover"
                                    src="https://cdn.iconscout.com/icon/free/png-256/free-mastercard-logo-icon-svg-download-png-2944982.png"
                                    alt="master card"
                                />
                            </label>
                            <label className="border border-line-2 p-1 rounded-sm">
                                <img
                                    className="h-2 w-5 object-contain"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/3840px-RuPay.svg.png"
                                    alt="rupay"
                                />
                            </label>
                            <label className="border border-line-2 px-1 rounded-sm">
                                <img
                                    className="h-4 w-5 object-contain"
                                    src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png"
                                    alt="amex"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="max-w-sm w-full space-y-3">
                        <input
                            id="input-base"
                            type="text"
                            className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Expiration"
                        />
                    </div>
                    <div className="max-w-sm w-full space-y-3">
                        <input
                            id="input-base"
                            type="password"
                            className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="CVC"
                        />
                    </div>
                    <div className="max-w-sm w-full space-y-3 col-span-2">
                        <input
                            id="input-base"
                            type="text"
                            className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Name on card"
                        />
                    </div>
                    <div className="flex items-center col-span-2">
                        <input
                            type="checkbox"
                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-default-checkbox"
                        />
                        <label
                            htmlFor="hs-default-checkbox"
                            className="text-sm ms-3 text-muted-foreground-1"
                        >
                            Set as default payment method
                        </label>
                    </div>
                </div>
            </div>

            <hr className="my-4" />

            <div>
                <h1 className="font-medium mb-3">Billing address</h1>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-checked-checkbox"
                        defaultChecked
                    />
                    <label
                        htmlFor="hs-checked-checkbox"
                        className="text-sm ms-3 text-muted-foreground-1"
                    >
                        Use my shipping address
                    </label>
                </div>
                <p className="text-muted-foreground-1 mt-1 text-sm">
                    New York, 280 Suzanne Throughway <br />
                    Breannabury, OR 45801, US
                </p>
            </div>
        </div>
    );
}
