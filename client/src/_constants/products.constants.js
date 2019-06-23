import { API_KEY } from './app.constants';

export const PRODUCTS_URL = '/api/products';

/* get all products */
export const PRODUCTS_ALL = PRODUCTS_URL;
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';
export const PRODUCTS_RESET = 'PRODUCTS_RESET';
export const ADD_PRODUCTS_ALL = 'ADD_PRODUCTS_ALL';

/* get product by id */
export const GET_PRODUCT = '/api/product';
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';
export const PRODUCT_RESET = 'PRODUCT_RESET';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export default {
  API_KEY,
  PRODUCTS_URL,
  PRODUCTS_ALL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  ADD_PRODUCTS_ALL,
  GET_PRODUCT,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  FETCH_PRODUCT,
};
