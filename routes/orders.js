
const express = require('express');
const { createOrder, getOrders, updateOrder } = require('../controllers/orderController');
const { authMiddleware, roleCheck } = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, roleCheck(['customer']), createOrder);
router.get('/', authMiddleware, getOrders);
router.put('/:id', authMiddleware, roleCheck(['admin']), updateOrder);

module.exports = router;
