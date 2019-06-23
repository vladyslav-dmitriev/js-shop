import { filtersConstants } from '../_constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case filtersConstants.FILTERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
