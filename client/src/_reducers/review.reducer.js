import { reviewsConstants } from '../_constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case reviewsConstants.REVIEW_ADD:
      return payload;
    default:
      return state;
  }
};
