import mongoose, { Schema } from 'mongoose';

const ProducerSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
}, {
  collection: 'producer',
});

const ProducerModel = mongoose.model('Producer', ProducerSchema);

export default ProducerModel;
