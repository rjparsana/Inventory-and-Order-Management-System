
const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
  const { products } = req.body;

  try {
    const orderProducts = await Product.find({ _id: { $in: products } });

    const total = orderProducts.reduce((sum, product) => sum + product.price, 0);

    const newOrder = new Order({
      customer: req.user.userId,
      products,
      total,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = req.user.role === 'admin'
      ? await Order.find().populate('customer products')
      : await Order.find({ customer: req.user.userId }).populate('products');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

module.exports = { createOrder, getOrders, updateOrder };
