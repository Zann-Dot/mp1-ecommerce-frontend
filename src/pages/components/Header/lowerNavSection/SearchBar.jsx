import { useNavigate } from "react-router"

export default function SearchBar() {
    const navigate = useNavigate();

    return (
        <div className="hidden lg:block relative w-full">
            <input
                id="input-base"
                type="text"
                className="w-full py-2.5 sm:py-3 px-4 rounded-full block bg-layer border-line-3 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search Products"
            />

            <div className="absolute right-1.5 bottom-1 top-1.25">
                <button
                    type="button"
                    onClick={() => navigate('/search-result')}
                    className="searchbtn cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </button>
            </div>
        </div>

    )
}
