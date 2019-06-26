import { combineReducers } from 'redux';
import pagination from './pagination.reducer';
import params from './params.reducer';
import loading from './api/loading.reducer';

const rootReducer = combineReducers({
  pagination,
  params,
  api: combineReducers({
    loading,
  }),
});

export default rootReducer;
