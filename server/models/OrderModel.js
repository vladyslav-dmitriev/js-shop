import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
}, {
  collection: 'order',
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;
