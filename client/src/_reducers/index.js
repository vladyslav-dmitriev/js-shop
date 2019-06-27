import { combineReducers } from 'redux';
import filters from './filters.reducer';
import loading from './api/loading.reducer';

const rootReducer = combineReducers({
  filters,
  api: combineReducers({
    loading,
  }),
});

export default rootReducer;
