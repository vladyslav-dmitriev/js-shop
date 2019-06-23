import qs from 'qs';
import axios from '../_helpers/axios';
import { productsConstants } from '../_constants';

const getAllProducts = params => axios.get(`${productsConstants.PRODUCTS_ALL}`, {
  params,
  paramsSerializer: queries => qs.stringify(queries),
});
const getProductById = id => axios.get(`${productsConstants.GET_PRODUCT}/${id}`);

export default {
  getAllProducts,
  getProductById,
};
