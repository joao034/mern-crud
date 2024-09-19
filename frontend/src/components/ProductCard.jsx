import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { ProductModal } from "./ProductModal"


export const ProductCard = ({ _id, name, price, image, onDeleteProduct }) => {

    const product = {
        _id, 
        name, 
        price, 
        image
    }

    return (
        <Card>
            <CardHeader>
                <img className="w-full h-56" src={image} alt="" />
            </CardHeader>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{price}</CardDescription>
            </CardContent>
            <CardFooter className="space-x-2">
                <ProductModal producRef={ product }/>
                <Button onClick={() => onDeleteProduct(_id)} >Delete</Button>
            </CardFooter>
        </Card>

    )
}


