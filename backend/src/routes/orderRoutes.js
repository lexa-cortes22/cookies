// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getUserOrders,
  getOrder
} = require('../controllers/orderController');
const { protect, authorize } = require('../../middleware/authorize');

router.post('/', protect, createOrder);
router.get('/', protect, authorize('admin'), getOrders);
router.get('/my-orders', protect, getUserOrders);
router.get('/:id', protect, getOrder);

module.exports = router;