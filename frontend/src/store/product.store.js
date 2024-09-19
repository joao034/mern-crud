import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), //set the state of products,
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image)
            return { success: false, message: 'Please fill in all fields' }

        const res = await fetch('/api/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: 'Product created successfully' }
    },
    getProducts: async () => {
        const res = await fetch('/api/products');

        if (res.ok) {
            const data = await res.json()
            set({ products: data.data })
        } else {
            return { success: false, message: `There aren't products` }
        }
    },

    deleteProduct: async (product_id) => {
        const res = await fetch(`/api/products/${product_id}`, {
            method: 'DELETE'
        })

        const data = await res.json()

        if (!data.success) return { success: false, message: data.message }

        set((state) => ({ products: state.products.filter(product => product._id !== product_id) }));
        return { success: true, message: data.message }
    },

    updateProduct: async (product_id, updatedProduct) => {

        if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image)
            return { success: false, message: 'Fill all fields to update the product' }

        const res = await fetch(`/api/products/${product_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)

        })
        const data = await res.json()

        if (!data.success)
            return data

        set((state) => ({
            products: state.products.map(product => (product._id === product_id ? data.data : product))
        }))

        return { success: true, message: 'Product updated successfully'}

    }
}))