import React from "react";
import { Link } from "react-router";

export default function PersonalDetails() {
    return (
        <main className="w-full flex flex-col">
            <div className="flex items-center gap-3.5">
                <img
                    class="inline-block size-14 rounded-full"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                />
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg bg-sidebar-nav-hover border border-primary-line text-foreground hover:bg-sidebar-2-nav-hover hover:border-sidebar-nav-hover focus:outline-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-file-upload-trigger
                >
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                    Upload photo
                </button>
            </div>

            <br />
            <hr />

            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Name</h1>
                        <p className="text-sm text-muted-foreground-1">James collin</p>
                    </section>

                    <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading"
                        data-hs-collapse="#hs-collapse-heading"
                    >
                        Edit
                    </div>
                </div>
                <div
                    id="hs-collapse-heading"
                    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div class="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Email</h1>
                        <p className="text-sm text-muted-foreground-1">James@gmail.com</p>
                    </section>

                    <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-email"
                        data-hs-collapse="#hs-collapse-heading-email"
                    >
                        Edit
                    </div>
                </div>
                <div
                    id="hs-collapse-heading-email"
                    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div class="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">
                            Phone number
                        </h1>
                        <p className="text-sm text-muted-foreground-1">+91998413950</p>
                    </section>

                    <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-phone"
                        data-hs-collapse="#hs-collapse-heading-phone"
                    >
                        Edit
                    </div>
                </div>
                <div
                    id="hs-collapse-heading-phone"
                    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div class="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="This is placeholder"
                            />
                        </div>
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">Password</h1>
                        <p className="text-sm text-muted-foreground-1">*********</p>
                    </section>

                    <div
                        className="hs-collapse-toggle ms-auto text-primary text-sm underline underline-offset-4 cursor-pointer decoration-primary hover:opacity-80 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-expanded="false"
                        aria-controls="hs-collapse-heading-password"
                        data-hs-collapse="#hs-collapse-heading-password"
                    >
                        Edit
                    </div>
                </div>
                <div
                    id="hs-collapse-heading-password"
                    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-400"
                    aria-labelledby="hs-collapse"
                    role="region"
                >
                    <div class="mt-5">
                        <div className="max-w-xs w-full space-y-4 mb-4">
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Old password"
                            />
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="New password"
                            />
                            <input
                                id="input-base"
                                type="text"
                                className="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Saves changes
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="py-4">
                <div className="flex items-center">
                    <section>
                        <h1 className="text-sm text-foreground font-medium">
                            Deactivate your account
                        </h1>
                        <p className="text-sm text-muted-foreground-1">
                            This will immediately delete all of your data. This action is not
                            reversible, so please continue with caution.
                        </p>
                    </section>

                    <div
                        className="hs-collapse-toggle ms-auto text-red-500 text-sm underline decoration-red-500 underline-offset-4 cursor-pointer hover:opacity-98 focus:outline-hidden focus:opacity-80"
                        id="hs-collapse"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-vertically-centered-modal"
                        data-hs-overlay="#hs-vertically-centered-modal"
                    >
                        Deactivate
                    </div>
                </div>

                <div
                    id="hs-vertically-centered-modal"
                    class="hs-overlay hidden size-full fixed top-0 inset-s-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
                    role="dialog"
                    tabindex="-1"
                    aria-labelledby="hs-vertically-centered-modal-label"
                >
                    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
                        <div class="w-full p-4 flex flex-col bg-overlay border border-overlay-line shadow-2xs rounded-xl pointer-events-auto">
                            <div class="p-4 overflow-y-auto">
                                <h1 className="text-lg font-semibold">Are you sure?</h1>
                                <p class="text-muted-foreground-2 text-sm">
                                    Are you sure you want to deactivate your account?
                                </p>
                            </div>
                            <div class="flex justify-end items-center gap-x-2 py-3 px-4">
                                <button
                                    type="button"
                                    class="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                                    aria-label="Close"
                                    data-hs-overlay="#hs-vertically-centered-modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    class="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg bg-destructive text-white hover:bg-destructive-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Yes, I'm sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
