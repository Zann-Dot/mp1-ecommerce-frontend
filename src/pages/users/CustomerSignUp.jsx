import { Link } from "react-router";
import useEcommerceProvider from "../../../contexts/EcommerceProvider"
import DarkModeButton from "../components/Header/upperNavSection/DarkModeButton";

export default function CustomerSignUp() {
    const { setThemeMode } = useEcommerceProvider()
    return (
        <>
            <div className="bg-navbar p-4 flex justify-center shadow-sm hover:outline-hidden">
                <Link to="/" className="cursor-pointer text-xl text-foreground font-semibold">ShoppersStop</Link>
            </div>
            <hr />

            <main className="w-full mx-auto flex justify-center items-center">
                {/* Hero */}
                <div className="relative w-full bg-linear-to-bl from-primary-100 via-transparent dark:from-primary-950 dark:via-transparent">
                    <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-primary-600 to-violet-500 text-transparent dark:from-primary-400 dark:to-violet-400">
                                    ShoppersStop: Daily Essentials
                                </p>

                                {/* Title */}
                                <div className="mt-4 md:mb-12 max-w-2xl">
                                    <h1 className="mb-4 font-semibold text-foreground text-4xl lg:text-5xl">
                                        Runway trends, everyday prices. Shop the latest looks now.
                                    </h1>
                                    <p className="text-muted-foreground-2">
                                        Create your free account today and instantly unlock
                                        exclusive member rewards, plus an extra 20% off your
                                        purchase.
                                    </p>
                                </div>
                                {/* End Title */}
                            </div>
                            {/* End Col */}

                            <div>
                                {/* Form */}
                                <form>
                                    <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                                        {/* Card */}
                                        <div className="p-4 sm:p-7 flex flex-col bg-card rounded-2xl shadow-lg">
                                            <div className="text-center">
                                                <h1 className="block text-2xl font-bold text-foreground">
                                                    Create an account
                                                </h1>
                                                <p className="mt-2 text-sm text-muted-foreground-2">
                                                    Already have an account?
                                                    <Link
                                                        className="ms-1 text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                                                        to="/customer/login"
                                                    >
                                                        Log in
                                                    </Link>
                                                </p>
                                            </div>

                                            <div className="mt-5">
                                                {/* Grid */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-first-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="John"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-first-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                First name
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>
                                                    {/* End Input Group */}

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-last-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Doe"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-last-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Last name
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>
                                                    {/* End Input Group */}

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="email"
                                                                id="hs-hero-signup-form-floating-input-email"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="you@email.com"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-email"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Email
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>
                                                    {/* End Input Group */}

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-company-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Enter number"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Phone Number
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>
                                                    {/* End Input Group */}

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-company-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Enter number"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Address Line
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-company-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Enter number"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                City
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-company-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Enter number"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                State
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>

                                                    {/* Input Group */}
                                                    <div>
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="hs-hero-signup-form-floating-input-company-name"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="Enter number"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Pincode
                                                            </label>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>

                                                    {/* Input Group */}
                                                    <div className="relative col-span-full">
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="password"
                                                                id="hs-hero-signup-form-floating-input-new-password"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="********"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-new-password"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                New password
                                                            </label>
                                                            <button type="button" data-hs-toggle-password='{
        "target": "#hs-hero-signup-form-floating-input-new-password"
      }' className="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md focus:outline-hidden focus:text-primary-focus">
                                                                <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                                    <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                                    <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                                    <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                                                    <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                                    <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                                                </svg>
                                                            </button>

                                                            {/* End Form Group */}
                                                        </div>
                                                        {/* End Floating Input */}

                                                        <div
                                                            id="hs-strong-password-popover"
                                                            className="hidden absolute z-10 w-full bg-surface rounded-lg p-4"
                                                        >
                                                            <div
                                                                id="hs-strong-password-in-popover"
                                                                data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-primary opacity-50 mx-1",
                          "mode": "popover"
                        }'
                                                                className="flex mt-2 -mx-1"
                                                            ></div>

                                                            <p className="mt-3 text-sm font-semibold text-foreground">
                                                                Your password must contain:
                                                            </p>

                                                            <ul className="space-y-1 text-sm text-muted-foreground-1">
                                                                <li
                                                                    data-hs-strong-password-hints-rule-text="min-length"
                                                                    className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                                                >
                                                                    <span className="hidden" data-check>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <polyline points="20 6 9 17 4 12" />
                                                                        </svg>
                                                                    </span>
                                                                    <span data-uncheck>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </span>
                                                                    Minimum number of characters is 6.
                                                                </li>
                                                                <li
                                                                    data-hs-strong-password-hints-rule-text="lowercase"
                                                                    className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                                                >
                                                                    <span className="hidden" data-check>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <polyline points="20 6 9 17 4 12" />
                                                                        </svg>
                                                                    </span>
                                                                    <span data-uncheck>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </span>
                                                                    Should contain lowercase.
                                                                </li>
                                                                <li
                                                                    data-hs-strong-password-hints-rule-text="uppercase"
                                                                    className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                                                >
                                                                    <span className="hidden" data-check>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <polyline points="20 6 9 17 4 12" />
                                                                        </svg>
                                                                    </span>
                                                                    <span data-uncheck>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </span>
                                                                    Should contain uppercase.
                                                                </li>
                                                                <li
                                                                    data-hs-strong-password-hints-rule-text="numbers"
                                                                    className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                                                >
                                                                    <span className="hidden" data-check>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <polyline points="20 6 9 17 4 12" />
                                                                        </svg>
                                                                    </span>
                                                                    <span data-uncheck>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </span>
                                                                    Should contain numbers.
                                                                </li>
                                                                <li
                                                                    data-hs-strong-password-hints-rule-text="special-characters"
                                                                    className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                                                >
                                                                    <span className="hidden" data-check>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <polyline points="20 6 9 17 4 12" />
                                                                        </svg>
                                                                    </span>
                                                                    <span data-uncheck>
                                                                        <svg
                                                                            className="shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </span>
                                                                    Should contain special characters.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* End Input Group */}

                                                    {/* Input Group */}
                                                    <div className="col-span-full">
                                                        {/* Floating Input */}
                                                        <div className="relative">
                                                            <input
                                                                type="password"
                                                                id="hs-hero-signup-form-floating-input-current-password"
                                                                className="peer p-3 sm:p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                                                placeholder="********"
                                                            />
                                                            <label
                                                                htmlFor="hs-hero-signup-form-floating-input-current-password"
                                                                className="absolute top-0 inset-s-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-top-left text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-muted-foreground-1
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-muted-foreground-1"
                                                            >
                                                                Current password
                                                            </label>

                                                            <button type="button" data-hs-toggle-password='{
        "target": "#hs-hero-signup-form-floating-input-current-password"
      }' className="absolute inset-y-0 inset-e-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md focus:outline-hidden focus:text-primary-focus">
                                                                <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                                    <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                                    <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                                    <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                                                    <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                                    <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        {/* End Floating Input */}
                                                    </div>
                                                    {/* End Input Group */}
                                                </div>
                                                {/* End Grid */}

                                                {/* Checkbox */}
                                                <div className="mt-5 flex items-center">
                                                    <div className="flex">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                                                        />
                                                    </div>
                                                    <div className="ms-3">
                                                        <label
                                                            htmlFor="remember-me"
                                                            className="text-sm text-foreground"
                                                        >
                                                            I accept the{" "}
                                                            <a
                                                                className="text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                                                                href="#"
                                                            >
                                                                Terms and Conditions
                                                            </a>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* End Checkbox */}

                                                <div className="mt-5">
                                                    <button
                                                        type="submit"
                                                        className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                                    >
                                                        Create account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}

                        {/* Clients Section */}
                        <div className="mt-6 md:mt-12 py-3 flex items-center text-sm text-foreground gap-x-1.5 after:flex-1 after:border-t after:border-line-2 after:ms-6">
                            <span className="font-semibold bg-clip-text bg-linear-to-l from-primary to-violet-500 text-transparent dark:to-violet-400">
                                50,000
                            </span>
                            individuals trust ShoppersStop
                        </div>
                    </div>
                    {/* End Clients Section */}
                </div>
                {/* End Hero */}
            </main>

            <div className="bg-navbar short-screen:static sticky bottom-0 left-0 right-0 p-4 flex justify-center">
                <div className="text-muted-foreground text-xs flex gap-3">
                    <span>2026 Preline Labs.</span>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Your Privacy Choices</span>
                    <DarkModeButton setThemeMode={setThemeMode} />
                </div>
            </div>
        </>
    );
}
