import React from "react";
import { Link } from "react-router";
import SelectCountry from "../components/SelectCountry";

export default function CheckoutForm() {
    return (
        <div className="py-14 text-foreground flex flex-col gap-10 md:me-auto md:max-w-sm md:w-full">
            <div>
                <h1 className="font-medium text-lg">Checkout as Guest</h1>
                <div className="text-muted-foreground-1 text-sm">
                    or{" "}
                    <Link
                        to="/customer/login"
                        className="text-sm text-muted-foreground-2 hover:text-primary underline underline-offset-4"
                    >
                        Log in
                    </Link>{" "}
                    for faster checkout
                </div>
            </div>

            <div className="grid grid-flow-row gap-15">
                <div className="max-w-sm w-full space-y-3">
                    <label
                        htmlFor="input-base"
                        className="block mb-2 font-medium text-foreground"
                    >
                        Contact details
                    </label>
                    <input
                        id="input-base"
                        type="text"
                        className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email"
                        aria-describedby="input-base-helper-text"
                    />
                    <p
                        id="input-base-helper-text"
                        className="mt-2 text-sm text-muted-foreground-1 flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-default-checkbox"
                        />
                        Email me with news and others
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <h1 className="col-span-full font-medium">Shipping address</h1>

                    <input
                        id="input-base"
                        type="text"
                        className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Full name"
                    />
                    <div className="col-span-full">
                        <SelectCountry />
                    </div>
                    <input
                        id="input-base"
                        type="text"
                        className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Address 1"
                    />
                    <input
                        id="input-base"
                        type="text"
                        className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Address 2"
                    />
                    <input
                        id="input-base"
                        type="text"
                        className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="City"
                    />
                    <input
                        id="input-base"
                        type="text"
                        className=" py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="State"
                    />
                    <input
                        id="input-base"
                        type="text"
                        className=" py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Pincode"
                    />
                    <input
                        id="input-base"
                        type="text"
                        className="col-span-full py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Phone"
                    />
                </div>

                <div className="max-w-sm w-full space-y-3">
                    <h1 className="col-span-full font-medium">Shipping method</h1>
                    <label
                        for="vertical-radio-checked-in-form"
                        className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
                    >
                        <input
                            type="radio"
                            name="hs-vertical-radio-in-form"
                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                            id="vertical-radio-checked-in-form"

                        />
                        <span className="text-sm ms-3 text-muted-foreground-1">
                            2-4 working days
                        </span>
                        <span className="text-muted-foreground-1 ms-auto">Free</span>
                    </label>

                    <label
                        for="hs-vertical-radio-in-form"
                        className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
                    >
                        <input
                            type="radio"
                            name="hs-vertical-radio-in-form"
                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-vertical-radio-in-form"
                        />
                        <span className="text-sm ms-3 text-muted-foreground-1">
                            Next day
                        </span>
                        <span className="text-muted-foreground-1 ms-auto">₹49</span>
                    </label>

                    <label
                        for="hs-vertical-radio-in-form"
                        className="max-w-xs flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus"
                    >
                        <input
                            type="radio"
                            name="hs-vertical-radio-in-form"
                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-vertical-radio-in-form"
                        />
                        <span className="text-sm ms-3 text-muted-foreground-1">
                            Same day
                        </span>
                        <span className="text-muted-foreground-1 ms-auto">₹89</span>
                    </label>

                </div>
            </div>
        </div>
    );
}
