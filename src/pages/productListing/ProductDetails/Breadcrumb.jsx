import { Link } from "react-router";

export default function Breadcrumb() {
    return (
        <div className="pb-4">
            <ol className="flex items-center whitespace-nowrap ">
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-muted-foreground-1 hover:text-primary-focus focus:outline-hidden focus:text-primary-focus"
                        to="/products"
                    >
                        Products
                    </Link>
                    <svg
                        className="shrink-0 mx-2 size-5 text-muted-foreground"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M6 13L10 3"
                            stroke="currentColor"
                            strokeLinecap="round"
                        />
                    </svg>
                </li>
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-muted-foreground-1 hover:text-primary-focus focus:outline-hidden focus:text-primary-focus"
                        to="/category"
                    >
                        Category
                        <svg
                            className="shrink-0 mx-2 size-5 text-muted-foreground"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L10 3"
                                stroke="currentColor"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Link>
                </li>
                <li
                    className="inline-flex items-center text-sm font-semibold text-foreground truncate"
                    aria-current="page"
                >
                    Product Name
                </li>
            </ol>
        </div>
    )
}
