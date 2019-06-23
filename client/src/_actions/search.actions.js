import { reduce } from '../_helpers/utils';
import { searchConstants } from '../_constants';
import { searchService } from '../_services';

const getSearchWithQuery = query => (dispatch) => {
  dispatch(reduce(searchConstants.SEARCH_REQUEST));
  return (searchService.getSearchWithQuery(query)
    .then((response) => {
      const { data } = response;

      dispatch(reduce(searchConstants.ADD_SEARCH_QUERY, data));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(searchConstants.SEARCH_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  getSearchWithQuery,
};
