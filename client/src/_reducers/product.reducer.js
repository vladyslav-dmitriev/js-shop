import { productsConstants } from '../_constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case productsConstants.FETCH_PRODUCT:
    case productsConstants.PRODUCT_FAILURE:
      return payload;
    default:
      return state;
  }
};
