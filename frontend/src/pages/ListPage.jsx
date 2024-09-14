import { ProductCard } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useProductStore } from "@/store/product.store"
import { useEffect } from "react";

/* const fetchProducts = async () => {
   await getProducts()
 } */
export const ListPage = () => {

  const { products, getProducts, deleteProduct } = useProductStore();

  const { toast } = useToast()

  useEffect(() => {
    getProducts()
  }, [getProducts]);


  const onDeleteProduct = async (product_id) => {
    const { success, message } = await deleteProduct(product_id)
    if (!success) {
      toast({
        title: 'Error',
        description: message
      })
    } else {
      toast({
        title: 'Success',
        description: message
      })
    }
  }

    return (
      <div>
        <h1 className="text-3xl text-blue-800 text-center p-4 font-bold">Product's List</h1>
        {
          products.length === 0 ? <p>...Loading</p> : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
              {products.map(product => (
                < ProductCard key={product?._id} {...product} onDeleteProduct={onDeleteProduct} />
              ))}
            </div>
          )
        }
      </div>
    )
  }

