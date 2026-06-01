import { useNavigate } from "react-router";

export default function ExploreSection() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center gap-6">
            <button
                type="button"
                onClick={() => navigate("/products")}
                className="cursor-pointer mt-4 py-3 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none"
            >
                See more
            </button>
        </div>
    );
}
