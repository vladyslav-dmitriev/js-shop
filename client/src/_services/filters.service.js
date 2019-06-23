import axios from '../_helpers/axios';
import { filtersConstants } from '../_constants';

const getFilters = () => axios.get(`${filtersConstants.FILTERS_URL}`);

export default {
  getFilters,
};
