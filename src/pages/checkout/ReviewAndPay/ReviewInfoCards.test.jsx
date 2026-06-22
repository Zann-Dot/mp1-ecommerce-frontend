import { describe, expect, it } from "vitest";
import ReviewFooter from "./ReviewFooter";

describe("Review Footer Component ", () => {
    let cart = [
        {
            _id: "6a33c83714aaa66fbf2a6972",
            userId: "6a2839a7bc73f75a5b3fc0c9",
            product: {
                _id: "6a1ecf4a6227dfca0df5044e",
                productName:
                    "Men Premium Jacket Quilted Hooded Winter Jackets for Men & Boys Full Sleeves",
                imageUrl:
                    "https://image.hm.com/assets/hm/10/ff/10ff96e64877b9b106838e6ea1054b98444e10c3.jpg?imwidth=564",
                ratings: 45,
                priceRupees: 2499,
                isDiscount: true,
                discount: 20,
                isReturnable: true,
                isPayOnDelivery: true,
                isFreeDelivery: true,
                isWishlist: false,
                description: [
                    "Made from high-quality polyester blend for maximum durability.",
                    "Style redefined with a modern, sleek quilted pattern.",
                    "All weather ready to keep you warm during harsh winters.",
                    "Unmatched comfort with a soft inner lining.",
                    "Versatile enough for both casual outings and outdoor adventures.",
                    "Travel friendly and lightweight for easy packing.",
                ],
                category: "Men's Clothing",
                merchantName: "Urban Men Apparels",
                __v: 0,
                createdAt: "2026-06-02T12:40:42.738Z",
                updatedAt: "2026-06-13T20:07:31.078Z",
            },
            quantity: 1,
            size: "S",
            createdAt: "2026-06-18T10:28:07.797Z",
            updatedAt: "2026-06-18T10:28:07.797Z",
            __v: 0,
        },
    ];
    let productSummary = cart?.map((item) => item.product._id);

    it("should map product IDs in productSummary", () => {
        expect(productSummary).toBe(["6a1ecf4a6227dfca0df5044e"]);
    });
});
