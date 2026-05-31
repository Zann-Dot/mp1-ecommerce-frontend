import PaymentMethod from "./PaymentMethod";
import ReviewInfoCards from "./ReviewInfoCards";

export default function ReviewAndPaySection() {
    return (
        <div className="py-14 text-foreground flex flex-col gap-6 md:me-auto md:max-w-sm md:w-full">
            <ReviewInfoCards />
            <hr className="my-2" />
            <PaymentMethod />
        </div>
    );
}
