import { API_KEY } from './app.constants';

export const SEARCH_URL = '/api/products/search';

/* get products with query */
export const SEARCH_QUERY = SEARCH_URL;
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const ADD_SEARCH_QUERY = 'ADD_SEARCH_QUERY';

export default {
  API_KEY,
  SEARCH_URL,
  SEARCH_QUERY,
  SEARCH_REQUEST,
  SEARCH_FAILURE,
  ADD_SEARCH_QUERY,
};
