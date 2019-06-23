import axios from '../_helpers/axios';
import { recommendationsConstants } from '../_constants';

const getRecommendations = () => axios.get(recommendationsConstants.RECOMMENDATIONS_ALL);

export default {
  getRecommendations,
};
