import { reduce } from '../_helpers/utils';
import { reviewsConstants } from '../_constants';
import { reviewsService } from '../_services';

const addReviewToReviews = review => (dispatch) => {
  dispatch(reduce(reviewsConstants.REVIEW_ADD_TO_REVIEWS, review));
};

const createReview = review => (dispatch) => {
  dispatch(reduce(reviewsConstants.REVIEW_REQUEST));
  return (reviewsService.createReview(review)
    .then((response) => {
      const { data } = response;
      dispatch(reduce(reviewsConstants.REVIEW_SUCCESS));
      dispatch(reduce(reviewsConstants.REVIEW_ADD, data));
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(reviewsConstants.REVIEW_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  addReviewToReviews,
  createReview,
};
