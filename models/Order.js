
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
