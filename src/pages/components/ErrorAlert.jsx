import { motion } from "motion/react";
export default function ErrorAlert({ headingMessage, subHeadingMessage }) {
    return (
        <motion.div
            className="flex flex-col gap-y-2 absolute top-5 left-2 right-2 lg:left-1/4 lg:right-1/4 z-200"
            initial={{ translateY: -15 }}
            animate={{ translateY: 0 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
        >
            <div
                className="bg-teal-50 border-t-2 border-red-500 rounded-lg p-4 dark:bg-red-950"
                role="alert"
                tabIndex="-1"
                aria-labelledby="hs-bordered-success-style-label"
            >
                <div className="flex">
                    <div className="shrink-0">
                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-200">
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

                    </div>
                    <div className="ms-3">
                        <h3
                            id="hs-bordered-success-style-label"
                            className="text-foreground font-semibold"
                        >
                            {headingMessage}
                        </h3>
                        <p className="text-sm text-foreground">{subHeadingMessage}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
