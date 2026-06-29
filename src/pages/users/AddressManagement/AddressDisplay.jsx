import { useState } from "react";
import useEcommerceContext from "../../../../contexts/EcommerceProvider";
import AddressFormModel from "./AddressFormModel";

export default function AddressDisplay() {
    const { user, setAddressToDefault, removeAddress } = useEcommerceContext();
    const [currentAddress, setCurrentAddress] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="w-full">
            <h1 className="text-lg font-semibold text-foreground">Addresses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                {user?.address?.map((address) => (
                    <div
                        key={address._id}
                        className="relative p-1.25  bg-surface rounded-2xl"
                    >
                        <div className="flex flex-col pb-6 bg-card shadow-2xs rounded-xl">
                            <div className="p-4  ">
                                <div className="flex items-center">
                                    <h3 className="font-semibold text-base text-foreground">
                                        {address.city}
                                    </h3>
                                    {address.isDefault && (
                                        <span className="inline-flex items-center gap-x-1.5 py-1 px-3 ms-auto rounded-full text-[11px] font-medium bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-400">
                                            Default
                                        </span>
                                    )}
                                </div>
                                <div className="mt-1 text-muted-foreground-2 text-sm flex flex-col gap-px">
                                    <span>
                                        {user?.firstName} {user?.lastName}
                                    </span>
                                    <span>{address.addressLine}</span>
                                    <span>
                                        {address.city}, {address.state}, {address.pincode}, IN
                                    </span>
                                    {address.altPhoneNumber && (
                                        <span className="mt-2">
                                            {user?.ISDCode} {address.altPhoneNumber}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3 text-xs font-medium">
                            <button
                                type="button"
                                className="cursor-pointer text-foreground underline underline-offset-4 decoration-foreground hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                onClick={() => {
                                    setCurrentAddress(address);
                                    setIsOpen(true);
                                }}
                            >
                                Edit
                            </button>
                            <span className="mx-1 text-muted-foreground opacity-30 text-xs">
                                |
                            </span>
                            <button
                                className="cursor-pointer disabled:no-underline disabled:text-muted-foreground disabled:hover:opacity-100 text-foreground underline underline-offset-4 decoration-foreground hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                disabled={address?.isDefault}
                                onClick={() => removeAddress(address?._id)}
                            >
                                Remove
                            </button>
                            <span className="mx-1 text-muted-foreground opacity-30 text-xs">
                                |
                            </span>
                            <button
                                className="cursor-pointer disabled:no-underline disabled:text-muted-foreground disabled:hover:opacity-100 text-foreground underline underline-offset-4 decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                                disabled={address?.isDefault}
                                onClick={() => setAddressToDefault(true, address?._id)}
                            >
                                Set as default
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() => {
                        setCurrentAddress(null);
                        setIsOpen(true);
                    }}
                    className="h-56.25 p-1.25 border border-line-2 border-dashed cursor-pointer hover:border-line-4 rounded-2xl flex flex-col items-center justify-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="Add-Line--Streamline-Mingcute"
                        height="24"
                        width="24"
                    >
                        <desc>Add Line Streamline Icon: https://streamlinehq.com</desc>
                        <g fill="none" fillRule="nonzero">
                            <path
                                d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                                strokeWidth="0.6667"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M7.333333333333333 13.333333333333332a0.6666666666666666 0.6666666666666666 0 1 0 1.3333333333333333 0v-4.666666666666666h4.666666666666666a0.6666666666666666 0.6666666666666666 0 1 0 0 -1.3333333333333333h-4.666666666666666V2.6666666666666665a0.6666666666666666 0.6666666666666666 0 1 0 -1.3333333333333333 0v4.666666666666666H2.6666666666666665a0.6666666666666666 0.6666666666666666 0 1 0 0 1.3333333333333333h4.666666666666666v4.666666666666666Z"
                                strokeWidth="0.6667"
                            ></path>
                        </g>
                    </svg>
                    <h2>Add address</h2>
                </button>

                <AddressFormModel
                    currentAddress={currentAddress}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </main>
    );
}
