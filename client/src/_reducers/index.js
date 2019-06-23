import { combineReducers } from 'redux';
import products from './products.reducer';
import product from './product.reducer';
import order from './order.reducer';
import search from './search.reducer';
import recommendations from './recommendations.reducer';
import reviews from './reviews.reducer';
import review from './review.reducer';
import filters from './filters.reducer';
import pagination from './pagination.reducer';
import params from './params.reducer';

import loading from './api/loading.reducer';

const rootReducer = combineReducers({
  products,
  product,
  order,
  search,
  recommendations,
  reviews,
  review,
  filters,
  pagination,
  params,
  api: combineReducers({
    loading,
  }),
});

export default rootReducer;
