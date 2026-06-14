import { Link, useNavigate } from "react-router";
import DarkModeButton from "../components/Header/upperNavSection/DarkModeButton";
import useEcommerceContext from "../../../contexts/EcommerceProvider";
import { useState } from "react";
import ErrorAlert from "./ErrorAlert";

export default function CustomerSignIn() {
    const { setThemeMode } = useEcommerceContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleLogIn(formData) {
        const emailOrUsername = formData.get("email-username");
        const password = formData.get("password");

        const payload = {
            emailOrUsername,
            password,
        };

        try {
            const response = await fetch("/api/user/customer/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });
            const data = await response.json();

            if (!response.ok) {
                if (response.status === 404) setError(data.message);
                if (response.status === 401) setError(data.error);
                throw new Error(data.error);
            }

            if (data.success) {
                console.log(data.message);
                navigate("/");
            }
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <>
            <div className="bg-navbar p-4 flex justify-center shadow-sm hover:outline-hidden">
                <Link
                    to="/"
                    className="cursor-pointer text-xl text-foreground font-semibold"
                >
                    ShoppersStop
                </Link>
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
                        <form action={handleLogIn}>
                            <div className="grid gap-y-4">
                                <div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="email-username"
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                            required
                                            aria-describedby="email-error"
                                            placeholder="Email or Username"
                                        />
                                        <div className={`${error !== "" && !error.split(" ").includes("password") ? "block" : "hidden"} absolute inset-y-3 inset-e-0 pointer-events-none pe-3`}>
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
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-2"></div>
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
                                        <button
                                            type="button"
                                            data-hs-toggle-password='{
        "target": "#password"
      }'
                                            className={`absolute inset-y-0 inset-e-0 ${error !== "" && error.split(" ").includes("password") ? "hidden" : "flex"} items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md focus:outline-hidden focus:text-primary-focus`}
                                        >
                                            <svg
                                                className="shrink-0 size-3.5"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    className="hs-password-active:hidden"
                                                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                                                />
                                                <path
                                                    className="hs-password-active:hidden"
                                                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                                                />
                                                <path
                                                    className="hs-password-active:hidden"
                                                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                                                />
                                                <line
                                                    className="hs-password-active:hidden"
                                                    x1="2"
                                                    x2="22"
                                                    y1="2"
                                                    y2="22"
                                                />
                                                <path
                                                    className="hidden hs-password-active:block"
                                                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                                                />
                                                <circle
                                                    className="hidden hs-password-active:block"
                                                    cx="12"
                                                    cy="12"
                                                    r="3"
                                                />
                                            </svg>
                                        </button>
                                        <div className={`${error !== "" && error.split(" ").includes("password") ? "block" : "hidden"} absolute inset-y-3 inset-e-0 pointer-events-none pe-3`}>
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

                                </div>

                                <div className="flex items-center mb-5">
                                    <div className="flex">
                                        <input
                                            id="checkbox"
                                            name="checkbox"
                                            type="checkbox"
                                            required
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
                                    <div className="text-xs text-muted-foreground-1 sm:text-sm underline underline-offset-3 ms-auto">
                                        Forgot your password?
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Log in
                                </button>
                                <Link
                                    to="/customer/signup"
                                    className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Create account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {error !== "" && <ErrorAlert error={error} setError={setError} />}


            <div className="bg-navbar short-screen:static absolute bottom-0 left-0 right-0 p-4 flex justify-center">
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
