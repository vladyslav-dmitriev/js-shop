import axios from '../_helpers/axios';
import { searchConstants } from '../_constants';

const getSearchWithQuery = query => axios.get(`${searchConstants.SEARCH_QUERY}?query=${query}`);

export default {
  getSearchWithQuery,
};
