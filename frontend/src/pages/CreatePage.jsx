import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useProductStore } from "@/store/product.store"
import { useState } from "react"

export const CreatePage = () => {

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const { toast } = useToast()
  const { createProduct } = useProductStore()

  const onSaveProduct = async () => {
    const { success, message } = await createProduct( product )
    if( !success ){
      toast({
        title: 'Error',
        description: message
      })
    }else{
      toast({
        title: 'Success',
        description: message
      })
    }
  }

  return (
    <div className="p-4 md:p-8 flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>Fill every field.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of the Product" value={ product.name } onChange={ (e) => setProduct({...product, name: e.target.value}) } />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Price</Label>
                <Input type="number" id="name" placeholder="Price of the product" value={ product.price } onChange={ (e) => setProduct({...product, price: e.target.value}) }/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Image URL</Label>
                <Input className="h-16" id="name" placeholder="Image's url of the product" value={ product.image } onChange={ (e) => setProduct({...product, image: e.target.value}) }/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={ onSaveProduct }>Save</Button>
        </CardFooter>
      </Card>
    </div>

  )
}

