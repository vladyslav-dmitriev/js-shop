import { searchConstants } from '../_constants';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case searchConstants.ADD_SEARCH_QUERY:
      return payload;
    default:
      return state;
  }
};
