import mongoose, { Schema } from 'mongoose';

const ColorSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
}, {
  collection: 'color',
});

const ColorModel = mongoose.model('Color', ColorSchema);

export default ColorModel;
