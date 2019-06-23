import { orderConstants } from '../_constants';

export default (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case orderConstants.ORDER_CREATE_SUCCESS:
      return payload;
    default:
      return state;
  }
};
