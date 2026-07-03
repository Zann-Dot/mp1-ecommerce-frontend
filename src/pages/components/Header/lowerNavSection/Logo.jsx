import { Link } from "react-router";

export default function Logo() {
    return (
        <Link
            className="text-2xl font-semibold text-primary sm:text-foreground max-[500px]:hidden focus:outline-hidden focus:opacity-80"
            to="/"
        >
            ShopperStore
        </Link>
    )
}
