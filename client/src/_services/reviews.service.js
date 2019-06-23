import axios from '../_helpers/axios';
import { reviewsConstants } from '../_constants';

const createReview = review => axios.post(`${reviewsConstants.REVIEW_CREATE}`, review);

export default {
  createReview,
};
