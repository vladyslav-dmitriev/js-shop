import { reduce } from '../_helpers/utils';
import { recommendationsConstants } from '../_constants';
import { recommendationsService } from '../_services';

const getRecommendations = () => (dispatch) => {
  dispatch(reduce(recommendationsConstants.RECOMMENDATIONS_REQUEST));
  return (recommendationsService.getRecommendations()
    .then((response) => {
      const { data } = response;

      dispatch(reduce(recommendationsConstants.RECOMMENDATIONS_SUCCESS));
      dispatch(reduce(recommendationsConstants.ADD_ALL_RECOMMENDATIONS, data));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(recommendationsConstants.RECOMMENDATIONS_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  getRecommendations,
};
