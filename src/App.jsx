import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import ProductListing from "./pages/productListing/ProductListing";

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
      </Routes>
    </>
  );
}

export default App;
