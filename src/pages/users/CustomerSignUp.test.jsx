import { describe, expect, it } from "vitest";

describe("signup form authenticator", () => {
    const defaultData = {
        username: "zann-dot",
        email: "test@gmail.com",
        password: "729692gd92vjabb92820b&3bhaubicb0280802u0#89bk",
        firstName: "test first",
        lastName: "last name",
        phoneNumber: "9987853218",
        ISDCode: "+91",
        address: {
            addressLine: "b-16 budh nagar",
            city: "delhi",
            state: "new delhi",
            pincode: "123546",
        },
        TnC: true,
        mode: "customer",
    };

    it("should display error alert on same email or username input", () => {
        expect()
    })
})