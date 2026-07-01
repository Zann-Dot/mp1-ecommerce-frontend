import { createContext, useContext } from "react";
import useEcommerceContext from "./EcommerceProvider";

const AddressContext = createContext();
const useAddressContext = () => useContext(AddressContext);
export default useAddressContext;


export function AddressProvider({ children }) {
    const { user, dispatch } = useEcommerceContext();

    async function updateAddressList(currentAddress, updatedAddress) {
        try {
            const response = await fetch(
                `/api/user/address/${user?._id}${currentAddress ? `?addressId=${currentAddress._id}` : ""}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedAddress),
                },
            );
            const data = await response.json();

            if (!response.ok) {
                dispatch({
                    type: "addressUpdateFormError",
                    heading: "Incomplete Address",
                    subHeading: data.error,
                });

                setTimeout(() => {
                    dispatch({
                        type: "",
                        headingMessage: "",
                        subHeadingMessage: "",
                    });
                }, 1700);

                throw new Error(data.error)
            };

            data.success &&
                dispatch({
                    type: "addressUpdateForm",
                    heading: "Address updated successfully",
                    subHeading: "You have successfully updated your address.",
                });

            setTimeout(() => {
                dispatch({
                    type: "",
                    headingMessage: "",
                    subHeadingMessage: "",
                });
            }, 3000);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function setAddressToDefault(isDefault, addressId) {
        try {
            const res = await fetch(
                `/api/user/defaultAddress/${user?._id}/${addressId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ isDefault }),
                },
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            data.success && dispatch({
                type: "setToDefault",
                heading: "Address set to default",
                subHeading: "You have successfully updated your address to default"
            });

            setTimeout(() => {
                dispatch({
                    type: "",
                    headingMessage: "",
                    subHeadingMessage: "",
                })
            }, 3000);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function removeAddress(addressId) {
        try {
            const res = await fetch(
                `/api/user/remove/${user?._id}/${addressId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                },
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            data.success && dispatch({
                type: "removeAddress",
                heading: "Address removed successfully",
                subHeading: "You have successfully removed your address."
            });

            setTimeout(() => {
                dispatch({
                    type: "",
                    headingMessage: "",
                    subHeadingMessage: "",
                })
            }, 3000)

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <AddressContext.Provider value={{
            removeAddress,
            updateAddressList,
            setAddressToDefault,
        }}>
            {children}
        </AddressContext.Provider>
    )
}
