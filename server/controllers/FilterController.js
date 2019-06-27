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
          params: categories,
        },
        producers: {
          title: 'Производитель',
          type: 'producer',
          params: producers,
        },
        colors: {
          title: 'Цвет',
          type: 'color',
          params: colors,
        },
      };
      res.send({ data });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default FilterController;
