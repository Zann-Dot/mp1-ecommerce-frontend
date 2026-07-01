import PaymentMethod from "./PaymentMethod";
import ReviewInfoCards from "./ReviewInfoCards";

export default function ReviewAndPaySection() {
    return (
        <div className="py-14 md:pe-10 sm:px-5 lg:ps-0 lg:pe-0 text-foreground flex flex-col gap-6 md:me-auto md:max-w-sm md:w-full">
            <ReviewInfoCards />
            <hr className="my-2" />
            <PaymentMethod />
        </div>
    );
}
