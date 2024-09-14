import { ProductCard } from "@/components/ProductCard";
import { useProductStore } from "@/store/product.store"
import { useEffect } from "react";

 /* const fetchProducts = async () => {
    await getProducts()
  } */
export const ListPage = () => {

  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts()
  }, [ getProducts ]);


  return (
    <div>
      <h1>List Page</h1>
      {
        products.length === 0 ? <p>...Loading</p> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {products.map( product => (
            < ProductCard key={ product._id } { ...product } />
          ))}
          </div>
        )
      }
    </div>
  )
}

