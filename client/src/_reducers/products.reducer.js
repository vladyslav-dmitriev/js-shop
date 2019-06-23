import { productsConstants } from '../_constants';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case productsConstants.ADD_PRODUCTS_ALL:
      return payload;
    default:
      return state;
  }
};
