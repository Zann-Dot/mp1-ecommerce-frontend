import { useEffect } from 'react';

export default function Accordian({ data }) {
    useEffect(() => {
        if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit();
        }
    }, [data]);

    return (
        <div className="hs-accordion-group mt-8">
            <div className=" hs-accordion" id="hs-basic-heading-one">
                <button
                    className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-basic-collapse-one"
                >
                    Description
                    <svg
                        className="hs-accordion-active:hidden block size-4 ms-auto"
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
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                        className="hs-accordion-active:block hidden size-4 ms-auto"
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
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
                <div
                    id="hs-basic-collapse-one"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-heading-one"
                >
                    <ul className="list-disc list-outside ps-5 text-muted-foreground-1 text-sm">
                        {data?.description?.map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className=" hs-accordion" id="hs-basic-heading-two">
                <button
                    className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-basic-collapse-two"
                >
                    Size and Fit
                    <svg
                        className="hs-accordion-active:hidden block size-4 ms-auto"
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
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                        className="hs-accordion-active:block hidden size-4 ms-auto"
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
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
                <div
                    id="hs-basic-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-heading-two"
                >
                    <p className="text-muted-foreground-1 text-sm">
                        <em>This is the second item's accordion body.</em> It is hidden by
                        default, until the collapse plugin adds the appropriate classes
                        that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions.
                    </p>
                </div>
            </div>

            <div className=" hs-accordion" id="hs-basic-heading-three">
                <button
                    className="hs-accordion-toggle hs-accordion-active:text-primary-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground hover:text-muted-foreground-1 focus:outline-hidden focus:text-muted-foreground-1 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-basic-collapse-three"
                >
                    Shipping and Returns
                    <svg
                        className="hs-accordion-active:hidden block size-4 ms-auto"
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
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                        className="hs-accordion-active:block hidden size-4 ms-auto"
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
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
                <div
                    id="hs-basic-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-basic-heading-three"
                >
                    <p className="text-muted-foreground-1 text-sm">
                        Free standard shipping on orders over $50 and free 30-day returns.{" "}
                        {/* <span className="underline underline-offset-4 cursor-pointer">
                            Learn more
                        </span> */}
                        . <br />
                        <br />
                        Returns must be received within 30 days of shipping confirmation.
                        In order to process your return, items must be unworn and tags
                        must be attached.
                    </p>
                </div>
            </div>
        </div>
    )
}
