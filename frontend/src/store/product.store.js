import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), //set the state of products,
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image)
            return { success: false, message: 'Please fill in all fields' }

        const res = await fetch('http://localhost:4000/api/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        const data = res.json();
        set((state) => ({ products: [...state.products, data.data] }))
        return {success: true, message: 'Product created successfully'}
    }
}))