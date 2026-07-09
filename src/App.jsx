import { useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import ProductListing from "./pages/productListing/ProductListing";
import CustomerSignUp from "./pages/users/CustomerSignUp";
import CustomerSignIn from "./pages/users/CustomerSignIn";
import Wishlist from "./pages/users/Wishlist";
import Cart from "./pages/cart/Cart";
import CustomerAccount from "./pages/users/CustomerAccount";
import CustomerPersonalInfo from "./pages/users/CustomerPersonalInfo/CustomerPersonalInfo";
import AddressManagement from "./pages/users/AddressManagement/AddressManagement";
import MyOrders from "./pages/users/OrderDetails/MyOrders";
import ProductDetails from "./pages/productListing/ProductDetails/ProductDetails";
import Checkout from "./pages/checkout/Checkout/Checkout";
import ReviewAndPay from "./pages/checkout/ReviewAndPay/ReviewAndPay";
import OrderConfirmationPage from "./pages/checkout/OrderConfirmation/OrderConfirmationPage";
import useEcommerceContext from "../contexts/EcommerceProvider";
import SearchResult from "./pages/SearchResult";
import useCartContext from "../contexts/CartProvider";
import useCheckoutContext from "../contexts/CheckoutProvider";
import useWishlistContext from "../contexts/WishlistProvider";
import CategoryPage from "./pages/CategoryPage";

function App() {
    const { fetchProducts, getUser, getOrdersDetails, getProductsByCategory } =
        useEcommerceContext();
    const { loadCart, getPaymentSummary } = useCartContext();
    const { reviewInfo } = useCheckoutContext();
    const { fetchWishlistProducts } = useWishlistContext();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
        searchParams.has("c")
            ? getProductsByCategory(searchParams.get("c"))
            : fetchProducts();
        getUser();
        fetchWishlistProducts();
        loadCart();
        getPaymentSummary(reviewInfo[0]?.shipping);
        getOrdersDetails();
    }, [location.pathname, reviewInfo[0]]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search-result" element={<SearchResult />} />
                <Route path="/checkout/review-and-pay" element={<ReviewAndPay />} />
                <Route
                    path="/checkout/review-and-pay/order-confirmation/:orderNumber"
                    element={<OrderConfirmationPage />}
                />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path="/user/account" element={<CustomerAccount />} />
                <Route
                    path="/user/account/personal-information"
                    element={<CustomerPersonalInfo />}
                />
                <Route path="/user/account/myorders" element={<MyOrders />} />
                <Route path="/user/account/addresses" element={<AddressManagement />} />
                <Route path="/customer/signup" element={<CustomerSignUp />} />
                <Route path="/customer/login" element={<CustomerSignIn />} />
                <Route path="/category" element={<CategoryPage />} />
            </Routes>
        </>
    );
}

export default App;
