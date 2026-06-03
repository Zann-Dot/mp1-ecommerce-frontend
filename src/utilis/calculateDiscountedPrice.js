export default function calculateDiscountedPrice(discount, price) {
    return Math.round(price - (discount * price) / 100)
}
