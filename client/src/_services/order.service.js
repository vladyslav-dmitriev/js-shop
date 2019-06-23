import axios from '../_helpers/axios';
import { orderConstants } from '../_constants';

const createOrder = order => axios.post(`${orderConstants.ORDER_URL}`, order);

export default {
  createOrder,
};
