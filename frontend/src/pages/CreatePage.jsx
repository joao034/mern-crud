import { ProductForm } from "@/components/ProductForm"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useProductStore } from "@/store/product.store"
import { useState } from "react"

export const CreatePage = () => {

  const initialState = {
    name: '',
    price: '',
    image: ''
  }

  const [product, setProduct] = useState( initialState );
  const { toast } = useToast()
  const { createProduct } = useProductStore()

  const onSaveProduct = async () => {
    const { success, message } = await createProduct(product)
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
      setProduct( initialState )
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[400px] p-4 md:p-8">
        <ProductForm
          product={product}
          title='Create Product'
          setProduct={setProduct}
        >
          <Button onClick={onSaveProduct}>
            Save 
          </Button>
        </ProductForm>
      </div>
    </div>


  )
}

