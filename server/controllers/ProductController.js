import ProductModel from '../models/ProductModel';
import ReviewModel from '../models/ReviewModel';
import { paginationConstants } from '../constants';

const ProductController = {
  index(req, res) {
    try {
      const perPage = paginationConstants.PAGINATION_SIZE;
      const {
        category,
        color,
        producer,
        page = 1,
      } = req.query;

      const categoryParams = category ? { path: 'category', match: { value: category } } : 'category';
      const colorParams = color ? { path: 'color', match: { value: color } } : 'color';
      const producerParams = producer ? { path: 'producer', match: { value: producer } } : 'producer';

      ProductModel
        .find()
        .populate(categoryParams)
        .populate(colorParams)
        .populate(producerParams)
        .exec((err, products) => {
          let filteredProducts = products
            .filter(product => product.category && product.color && product.producer);

          const pages = Math.ceil(filteredProducts.length / perPage);

          if (req.query.page) {
            filteredProducts = filteredProducts.splice((0, perPage * page) - perPage);
            if (filteredProducts.length > perPage) {
              filteredProducts.length = perPage;
            }
          }

          res.send({ data: filteredProducts, pages });
        });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  search(req, res) {
    try {
      ProductModel
        .find({ name: { $regex: req.query.query, $options: 'ig' } })
        .exec((err, products) => res.send({ data: products }));
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async read(req, res) {
    try {
      const product = await ProductModel
        .findOne({ id: req.params.id })
        .populate('category')
        .populate('producer')
        .populate('color')
        .exec();

      const reviews = await ReviewModel.find({ product: product.id }).exec();
      const data = { ...product._doc, reviews };
      res.send({ data });
    } catch (err) {
      res.status(200).send({ data: { hasError: true } });
    }
  },
};

export default ProductController;
