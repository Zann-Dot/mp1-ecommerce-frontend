import { Link } from "react-router";
import Navbar from "../components/Header/Navbar";
import DarkModeButton from "../components/Header/upperNavSection/DarkModeButton";

export default function CustomerSignIn() {
    return (
        <>
            <div className="bg-navbar p-4 flex justify-center shadow-sm hover:outline-hidden">
                <Link to="/" className="cursor-pointer text-xl text-foreground ">ShoppersStop</Link>
            </div>
            <hr />

            <main className="w-full mx-auto flex justify-center items-center">
                <div className="my-10 bg-card rounded-xl shadow-2xs w-full md:w-md mx-10">
                    {/* Sign In */}
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h3
                                id="hs-modal-signin-label"
                                className="block text-xl font-medium text-foreground mb-9"
                            >
                                Log in
                            </h3>
                        </div>

                        {/* Form */}
                        <form>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                            required
                                            aria-describedby="email-error"
                                            placeholder="Email"
                                        />
                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                            <svg
                                                className="size-5 text-red-500"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p
                                        className="hidden text-xs text-red-600 mt-2"
                                        id="email-error"
                                    >
                                        Please include a valid email address so we can get back to
                                        you
                                    </p>
                                </div>
                                {/* End Form Group */}

                                {/* Form Group */}
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">

                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                            required
                                            aria-describedby="password-error"
                                            placeholder="Password"
                                        />
                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                            <svg
                                                className="size-5 text-red-500"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p
                                        className="hidden text-xs text-red-600 mt-2"
                                        id="password-error"
                                    >
                                        8+ characters required
                                    </p>
                                </div>
                                {/* End Form Group */}

                                {/* Checkbox */}
                                <div className="flex items-center mb-5">
                                    <div className="flex">
                                        <input
                                            id="checkbox"
                                            name="checkbox"
                                            type="checkbox"
                                            className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <label
                                            htmlFor="checkbox"
                                            className="text-xs sm:text-sm text-muted-foreground-1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-xs text-muted-foreground-1 sm:text-sm underline underline-offset-3 ms-auto">Forgot your password?</div>
                                </div>
                                {/* End Checkbox */}

                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Log in
                                </button>
                                <Link to="/customer/signup" className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none">
                                    Create account
                                </Link>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                    {/* End Sign In */}
                </div>
            </main>

            <div className="bg-navbar short-screen:static absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                <div className="text-muted-foreground text-xs flex gap-3">
                    <span>2026 Preline Labs.</span>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Your Privacy Choices</span>
                    <DarkModeButton />
                </div>
            </div>
        </>
    );
}
