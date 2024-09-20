import { Input } from "@/components/ui/input";
import { useProductStore } from "@/store/product.store";

export const SearchBar = () => {

    const { searchQuery, setSearchQuery, searchProducts } = useProductStore()

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            searchProducts(searchQuery)
    }

    return (
        <Input className="m-4 max-w-screen-md" placeholder="Search a product by name"
            onKeyDown={handleKeyDown}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
    )
}


