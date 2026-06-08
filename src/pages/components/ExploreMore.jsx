import useEcommerceContext from '../../../contexts/EcommerceProvider'
import ProductCard from '../productListing/ProductCard'

export default function ExploreMore() {
    const { products } = useEcommerceContext();
    const exploreMoreProducts = products.filter((p) => products.indexOf(p) <= 6);

    return (
        <div className='col-span-3 flex flex-col gap-4'>
            <h1 className='text-xl font-medium text-foreground'>You may also like</h1>

            <div className='grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-8px)] lg:auto-cols-[calc(25%-12px)]  overflow-x-auto gap-x-4 scroll-smooth no-scrollbar snap-x snap-mandatory pb-4'>
                {exploreMoreProducts?.map((product) => (
                    <div key={product._id} className="shrink-0 snap-start">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
