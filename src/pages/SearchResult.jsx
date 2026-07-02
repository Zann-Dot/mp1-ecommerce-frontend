import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./productListing/ProductCard"
import { useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import useEcommerceContext from "../../contexts/EcommerceProvider";

export default function SearchResult() {
   const [searchParams] = useSearchParams();
   const [searchResult, setSearchResult] = useState([]);
   const searchQuery = searchParams.get("search");
   const { loading, setLoading } = useEcommerceContext();
   const navigate = useNavigate()

   useEffect(() => {
      if (searchQuery !== "") {
         setLoading(true);
         fetch(`/api/products/search/${searchQuery}`)
            .then((res) => res.json())
            .then((data) => setSearchResult(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      } else {
         navigate('/products')
      }
   }, [searchQuery]);

   return (
      <>
         <Navbar />
         <div className="w-full absolute top-55.75 lg:top-42.25 left-0 right-0">
            <main className="relative max-w-340 mx-auto w-full lg:my-10 px-4 sm:px-6 lg:px-0">
               <div className="lg:flex">
                  <div className="overflow-hidden pt-16 pb-10 lg:pt-5 px-0 lg:px-8 lg:ps-4 xl:ps-8">
                     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:max-[1180px]:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-10">
                        {loading && Array.from({ length: 3 }).map((_, i) => (
                           <div key={i} className="ms-0 lg:ms-4 shrink-0 flex flex-col gap-y-4 animate-pulse">
                              <span className="w-1/1 lg:w-70 h-60 sm:h-80 block bg-surface-1 rounded-xl"></span>

                              <div className="w-full">
                                 <ul className="space-y-3">
                                    <li className="w-3/4 h-4 bg-surface-1 rounded-full"></li>
                                    <li className="w-1/2 h-4 bg-surface-1 rounded-full"></li>
                                    <li className="w-full h-4 bg-surface-1 rounded-full"></li>
                                 </ul>
                              </div>
                           </div>
                        ))}

                        {!loading && searchResult.length !== 0 && searchResult && (
                           searchResult.map(result => (
                              <ProductCard key={result._id} product={result} />
                           ))
                        )}
                     </div>
                  </div>
               </div>
            </main>
            <hr />
            <Footer />
         </div>
      </>
   );
}
