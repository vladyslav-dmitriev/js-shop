import { combineReducers } from 'redux';
import reviews from './reviews.reducer';
import filters from './filters.reducer';
import pagination from './pagination.reducer';
import params from './params.reducer';
import loading from './api/loading.reducer';

const rootReducer = combineReducers({
  reviews,
  filters,
  pagination,
  params,
  api: combineReducers({
    loading,
  }),
});

export default rootReducer;
