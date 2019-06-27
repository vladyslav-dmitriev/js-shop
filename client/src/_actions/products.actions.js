import { reduce } from '../_helpers/utils';
import { productsConstants, reviewsConstants, paginationConstants } from '../_constants';
import { productsService } from '../_services';

const getAllProducts = params => (dispatch) => {
  dispatch(reduce(productsConstants.PRODUCTS_REQUEST));
  return (productsService.getAllProducts(params)
    .then((response) => {
      const { data, pages } = response;
      dispatch(reduce(productsConstants.PRODUCTS_SUCCESS));
      dispatch(reduce(productsConstants.ADD_PRODUCTS_ALL, data));
      dispatch(reduce(paginationConstants.PAGINATION_CREATE, pages));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(productsConstants.PRODUCTS_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const getProductById = id => (dispatch) => {
  dispatch(reduce(productsConstants.PRODUCT_REQUEST));
  return (productsService.getProductById(id)
    .then((response) => {
      const { data } = response;
      dispatch(reduce(productsConstants.PRODUCT_SUCCESS));
      dispatch(reduce(productsConstants.FETCH_PRODUCT, data));
      dispatch(reduce(reviewsConstants.REVIEWS_ADD, data.reviews));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(productsConstants.PRODUCT_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  getAllProducts,
  getProductById,
};
