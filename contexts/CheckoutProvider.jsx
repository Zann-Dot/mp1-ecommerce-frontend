import { createContext, useContext, useReducer, useState } from "react";
import useCartContext from "./CartProvider";

const CheckoutContext = createContext();
const useCheckoutContext = () => useContext(CheckoutContext);
export default useCheckoutContext;

export function CheckoutProvider({ children }) {
    const [reviewInfo, setReviewInfo] = useState([]);
    const { cart } = useCartContext();
    const [checkoutForm, setCheckoutForm] = useState({
        email: "",
        fullName: "",
        address: {
            addressLine: "",
            city: "",
            state: "",
            pincode: "",
        },
        shipping: 0,
    });

    function updateCheckoutForm(updates) {
        setCheckoutForm((prev) => ({ ...prev, ...updates }));
    }

    function addressReducer(address, action) {
        switch (action.type) {
            case "addressLine":
                return { ...address, addressLine: action.value };

            case "addressLine2":
                return { ...address, addressLine2: action.value };

            case "city":
                return { ...address, city: action.value };

            case "state":
                return { ...address, state: action.value };

            case "pincode":
                return { ...address, pincode: action.value };

            default:
                break;
        }
    }

    const [address, dispatch] = useReducer(addressReducer, checkoutForm.address);

    async function getCheckoutData() {
        try {
            const response = await fetch("/api/checkout");
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            setReviewInfo(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    function getOrderNumber() {
        const now = new Date();
        const datePart = `${now.getFullYear()}${String(now.getMonth() * 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
        const random = Math.floor((Math.random() * 9000) + 1000)
        return parseInt(`${datePart}${random}`);
    }

    function getOrdersBody() {
        let orderSummary = {};
        const orderNumber = getOrderNumber();
        const productSummary = cart?.map((item) => item.product._id);
        orderSummary.orderDate = Date();
        orderSummary.orderQuantity = cart?.map((item) => ({
            productId: item.product._id,
            quantity: item.quantity,
            size: item.size
        }));
        orderSummary.deliveryAddress = reviewInfo[0]?.address;
        orderSummary.deliveryTime = reviewInfo[0]?.deliveryTime;

        return { productSummary, orderSummary, orderNumber };
    };

    return (
        <CheckoutContext.Provider
            value={{
                checkoutForm,
                updateCheckoutForm,
                address,
                dispatch,
                getCheckoutData,
                reviewInfo,
                getOrdersBody,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}
