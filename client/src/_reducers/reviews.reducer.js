import { reviewsConstants } from '../_constants';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case reviewsConstants.REVIEWS_ADD:
      return payload;
    case reviewsConstants.REVIEW_ADD_TO_REVIEWS:
      return [...state, payload];
    default:
      return state;
  }
};
