import { reduce } from '../_helpers/utils';
import { filtersConstants } from '../_constants';
import { filtersService } from '../_services';

const getFilters = () => (dispatch) => {
  dispatch(reduce(filtersConstants.FILTERS_REQUEST));
  return (filtersService.getFilters()
    .then((response) => {
      const { data } = response;
      dispatch(reduce(filtersConstants.FILTERS_SUCCESS, data));
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(filtersConstants.FILTERS_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const saveFiltersParams = params => dispatch => (
  dispatch(reduce(filtersConstants.FILTERS_SAVE, params))
);

export default {
  getFilters,
  saveFiltersParams,
};
