import { recommendationsConstants } from '../_constants';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case recommendationsConstants.ADD_ALL_RECOMMENDATIONS:
      return payload;
    default:
      return state;
  }
};
