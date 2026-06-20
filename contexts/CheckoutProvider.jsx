import { createContext, useContext, useReducer, useState } from "react";

const CheckoutContext = createContext();
const useCheckoutContext = () => useContext(CheckoutContext);
export default useCheckoutContext;

export function CheckoutProvider({ children }) {
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

    return (
        <CheckoutContext.Provider
            value={{
                checkoutForm,
                updateCheckoutForm,
                address,
                dispatch,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}
