import mongoose, { Schema } from 'mongoose';
import CategoryModel from './CategoryModel';
import ColorModel from './ColorModel';
import ProducerModel from './ProducerModel';

const ProductSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  price: String,
  url: Array,
  code: String,
  category: { type: Schema.Types.ObjectId, ref: CategoryModel },
  color: { type: Schema.Types.ObjectId, ref: ColorModel },
  producer: { type: Schema.Types.ObjectId, ref: ProducerModel },
  description: String,
}, {
  collection: 'product',
  autoIndex: false,
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
