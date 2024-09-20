import express from 'express'
import { createProduct, 
         deleteProduct, 
         getProductById, 
         getProducts, 
         updateProduct,
         searchProductByName
} from '../controllers/product.controller.js';

const router = express.Router()

router.get('/search', searchProductByName)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;