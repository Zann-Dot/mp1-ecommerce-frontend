import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import ProductCard from '../productListing/ProductCard'
import useWishlistContext from '../../../contexts/WishlistProvider';
import useEcommerceContext from '../../../contexts/EcommerceProvider';
import AlertComponent from '../components/AlertComponent';
import WishlistAddToCartModal from './WishlistAddToCartModal';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

export default function Wishlist() {
    const { wishlist } = useWishlistContext();
    const { alert } = useEcommerceContext();

    const [searchParams, setSearchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const productId = searchParams.get("id");

    useEffect(() => {
        if (searchParams.has("size")) {
            params.delete("size");
            setSearchParams(params, { replace: true });
        }
    }, [productId]);

    return (
        <>
            {alert.type !== "" && (
                <AlertComponent
                    headingMessage={alert?.headingMessage}
                    subHeadingMessage={alert?.subHeadingMessage}
                />
            )}
            <link rel="icon" type="image/svg+xml" href="/Solana-Sol-Line--Streamline-Mingcute.svg" />
            <title>Wishlist</title>
            <Navbar />
            <div className="max-w-340 w-full mx-auto absolute top-56.25 lg:top-42.25 left-0 right-0">
                <main className="w-full p-3 mb-20 sm:p-6 md:p-8">
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='text-2xl font-semibold text-foreground'>
                            {wishlist && wishlist.length !== 0 ? "Favorites" : "Add items to wishlist"}
                        </h1>

                        {wishlist.length !== 0 && wishlist && (
                            <p className='text-muted-foreground-1 text-sm text-center w-100'>
                                So that you can access your favorites later please log in or create account
                            </p>
                        )}

                        <div className="relative mt-5 grid grid-cols-2 max-[1160px]:sm:grid-cols-3 min-[1160px]:grid-cols-4 gap-x-6 gap-y-12">
                            {wishlist?.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                        <WishlistAddToCartModal params={params} productId={productId} />

                    </div>
                </main>
                <hr />
                <Footer />
            </div>
        </>
    )
}
