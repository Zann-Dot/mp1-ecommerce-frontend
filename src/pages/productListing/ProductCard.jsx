import { Link } from "react-router";
import calculateDiscountedPrice from "../../utilis/calculateDiscountedPrice";

export default function ProductCard({ product }) {

    return (
        <div
            className="group cursor-pointer flex flex-col overflow-hidden transition-all duration-300"
        >
            <div className="relative w-full h-min md:h-100 shrink-0 xl:aspect-square rounded-xl overflow-hidden">
                <img
                    className="size-1/1 object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.imageUrl}
                    alt="iPhone 14 Case"
                />

                <div className="absolute top-4 right-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                        type="button"
                        className="inline-flex justify-center  cursor-pointer items-center size-9 rounded-full bg-line-2 text-foreground shadow-2xs hover:scale-105 transition-transform"
                    >
                        <svg
                            className="zeqf6 shb27 kh2c5"
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
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- CARD BODY DETAILS --- */}
            <Link to={`/products/${product._id}?name=${product.productName}`} className="pt-2 flex flex-col flex-1">
                <h4 className="font-medium text-foreground text-sm">
                    {product.productName.split(" ").splice(0, 3).join(" ")}
                </h4>

                <div className="w-full flex items-baseline gap-x-2 mt-auto mb-3">
                    <span className=" font-semibold text-primary">
                        ₹{" "}
                        {product.isDiscount
                            ? calculateDiscountedPrice(product.discount, product.priceRupees)
                            : product.priceRupees}
                    </span>

                    {product.isDiscount && (
                        <>
                            <span className="text-sm text-muted-foreground-1 line-through">
                                ₹{product.priceRupees}
                            </span>
                            <span className="text-xs text-destructive/80 font-bold">
                                {product.discount}% OFF
                            </span>
                        </>
                    )}

                    <span className="text-sm text-muted-foreground-1 ms-auto">
                        {Math.round(Math.random() * 100)} sold
                    </span>
                </div>

                <div className="flex items-center text-muted-foreground-1 gap-x-1.5">
                    {(product.ratings / 10).toFixed(1)}
                    <div className="flex items-center">
                        <svg
                            className={`shrink-0 size-3.5 ${product.ratings >= 40 || product.ratings >= 30 || product.ratings >= 20 || product.ratings >= 10 ? "text-primary" : "text-muted-foreground/50"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className={`shrink-0 size-3.5 ${product.ratings >= 40 || product.ratings >= 30 || product.ratings >= 20 ? "text-primary" : "text-muted-foreground/50"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className={`shrink-0 size-3.5 ${product.ratings >= 40 || product.ratings >= 30 ? "text-primary" : "text-muted-foreground/50"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className={`shrink-0 size-3.5 ${product.ratings >= 40 ? "text-primary" : "text-muted-foreground/50"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                            className={`shrink-0 size-3.5 ${product.ratings > 45 ? "text-primary" : "text-muted-foreground/50"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>

                    <span className="text-sm font-semibold text-foreground">
                        ({Math.round(Math.random() * 1000)}) Reviews
                    </span>
                </div>
            </Link>
        </div>
    );
}
