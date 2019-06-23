import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
}, {
  collection: 'category',
});

const CategoryModel = mongoose.model('Category', CategorySchema);

export default CategoryModel;
