import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"


export const ProductCard = ({ _id, name, price, image, onDeleteProduct }) => {

    return (
        <Card>
            <CardHeader>
                <img className="w-56 h-56" src={image} alt="" />
            </CardHeader>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{price}</CardDescription>
            </CardContent>
            <CardFooter className="space-x-2">
                <Button>Edit</Button>
                <Button onClick={ () => onDeleteProduct( _id ) } >Delete</Button>
            </CardFooter>
        </Card>

    )
}


