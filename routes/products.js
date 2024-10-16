
const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { authMiddleware, roleCheck } = require('../middleware/auth');
const router = express.Router();

router.get('/', authMiddleware, getProducts);
router.post('/', authMiddleware, roleCheck(['admin']), createProduct);
router.put('/:id', authMiddleware, roleCheck(['admin']), updateProduct);
router.delete('/:id', authMiddleware, roleCheck(['admin']), deleteProduct);

module.exports = router;
