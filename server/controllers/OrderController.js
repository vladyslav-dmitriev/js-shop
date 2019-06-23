import generate from 'nanoid/generate';
import telegramBot from '../telegram';
import { orderConstants, messegerConstants } from '../constants';

import ProductModel from '../models/ProductModel';
import OrderModel from '../models/OrderModel';

const OrderController = {
  async create(req, res) {
    try {
      const id = generate(orderConstants.ORDER_ID_DICTIONARY, orderConstants.ORDER_ID_LENGTH);
      const {
        name,
        product,
        phone,
        email,
      } = req.body;

      const order = await new OrderModel({
        id,
        product,
        name,
        phone,
        email,
      });

      await order.save();

      const productObj = await ProductModel.findOne({ id: product });
      const telegramMessage = `
Новый заказ №${id}
${productObj.name}
имя: ${name}
телефон: ${phone}
e-mail: ${email}`;

      await telegramBot.sendMessage(messegerConstants.TELEGRAM_PROFILE, telegramMessage, {
        parse_mode: 'HTML',
      });
      await res.send({ data: order.id });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default OrderController;
