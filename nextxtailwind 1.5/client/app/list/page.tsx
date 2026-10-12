import ProductCard from "../components/ProductCard"
import { products } from "../data/products"


export default function ListPage(){
    return (
    <>
        <div className="flex flex-raw gap-2.5">
        {products.map(el => <ProductCard key={el.id} {...el} />)}
        </div>
    </>
    )
}