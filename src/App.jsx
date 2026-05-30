import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Checkout from "./pages/checkout/Checkout";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/user/account" element={<CustomerAccount />} />
        <Route path="/user/account/personalinfo" element={<CustomerPersonalInfo />} />
        <Route path="/user/account/myorders" element={<MyOrders />} />
        <Route path="/user/account/addresses" element={<AddressManagement />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/customer/login" element={<CustomerSignIn />} />
      </Routes>
    </>
  );
}

export default App;
