import ProductModel from '../models/ProductModel';
import ReviewModel from '../models/ReviewModel';
import CategoryModel from '../models/CategoryModel';
import ProducerModel from '../models/ProducerModel';
import ColorModel from '../models/ColorModel';

const FilterController = {
  async index(req, res) {
    try {
      const categories = await CategoryModel.find().exec();
      const producers = await ProducerModel.find().exec();
      const colors = await ColorModel.find().exec();
      const data = {
        categories: {
          title: 'Категория',
          type: 'category',
          filters: categories,
        },
        producers: {
          title: 'Производитель',
          type: 'producer',
          filters: producers,
        },
        colors: {
          title: 'Цвет',
          type: 'color',
          filters: colors,
        },
      };
      res.send({ data });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async search(req, res) {
    try {
      const products = await ProductModel
        .find({ name: { $regex: req.query.query, $options: 'i' } })
        .populate('category')
        .exec();
      res.send({ data: products });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async read(req, res) {
    try {
      const product = await ProductModel.findOne({ id: req.params.id }).populate('category').exec();
      const reviews = await ReviewModel.find({ product: product._id }).exec();
      product.reviews = reviews;
      res.send({ data: product });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default FilterController;
