import { paginationConstants } from '../_constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case paginationConstants.PAGINATION_CREATE:
      return payload;
    default:
      return state;
  }
};
