import { reduce } from '../_helpers/utils';
import { orderConstants } from '../_constants';
import { orderService } from '../_services';

const createOrder = order => (dispatch) => {
  dispatch(reduce(orderConstants.ORDER_CREATE));
  return (orderService.createOrder(order)
    .then((response) => {
      const { data } = response;

      dispatch(reduce(orderConstants.ORDER_SUCCESS));
      dispatch(reduce(orderConstants.ORDER_CREATE_SUCCESS, data));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch(reduce(orderConstants.ORDER_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  createOrder,
};
