import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const ProductForm = ( { product, setProduct, title = '', description = '', children} ) => {

  return (
    <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of the Product" value={ product.name } 
                          onChange={ (e) => setProduct({...product, name: e.target.value}) } />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Price</Label>
                <Input type="number" id="name" placeholder="Price of the product" value={ product.price }
                      onChange={ (e) => setProduct({...product, price: e.target.value}) }/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Image URL</Label>
                <Input className="h-16" id="name" placeholder="Image's url of the product" value={ product.image } 
                            onChange={ (e) => setProduct({...product, image: e.target.value}) }/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          { children }
        </CardFooter>
      </Card>
  )
}

