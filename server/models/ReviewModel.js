import mongoose, { Schema } from 'mongoose';
import ProductModel from './ProductModel';

const ReviewSchema = new Schema({
  product: {
    type: String,
    ref: ProductModel,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
  },
  text: {
    type: String,
  },
}, {
  collection: 'review',
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

export default ReviewModel;
