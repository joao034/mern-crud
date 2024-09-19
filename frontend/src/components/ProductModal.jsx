import { useState } from "react";
import { ProductForm } from "./ProductForm"
import { Modal } from "./ui/Modal"
import { useProductStore } from "@/store/product.store";
import { useToast } from "@/hooks/use-toast";

export const ProductModal = ({ producRef }) => {

    const [product, setProduct] = useState(producRef);
    const { updateProduct } = useProductStore()
    const { toast } = useToast()

    const onUpdateProduct = async ( ) => {

        const { success, message } = await updateProduct( product._id, product )
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

        <Modal buttonTitle='Edit' title='Edit Product' onSave={ onUpdateProduct }>
            <ProductForm
                title="Product"
                product={product}
                setProduct={setProduct}
            />
        </Modal>

    )
}


