import { motion } from "motion/react"
export default function AlertComponent({ headingMessage, subHeadingMessage }) {
    return (
        <motion.div
            className="flex flex-col gap-y-2 absolute top-5 left-2 right-2 lg:left-1/4 lg:right-1/4 z-200"
            initial={{ translateY: -15 }}
            animate={{ translateY: 0 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
        >
            <div
                className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/80"
                role="alert"
                tabIndex="-1"
                aria-labelledby="hs-bordered-success-style-label"
            >
                <div className="flex">
                    <div className="shrink-0">
                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
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
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                <path d="m9 12 2 2 4-4" />
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
                        <p className="text-sm text-foreground">
                            {subHeadingMessage}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
