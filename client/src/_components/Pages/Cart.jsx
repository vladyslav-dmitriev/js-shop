import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pathsConstants } from '../../_constants';

const propTypes = {
  location: PropTypes.shape(),
};

const defaultProps = {
  location: {},
};

const Cart = ({ location }) => {
  const order = location.state ? location.state.orderId : null;

  if (order) {
    return (
      <main className="main">
        <div className="container">
          <div>
            <div className="cart__box">
              <div className="cart__title">Заказ успешно оформлен</div>
              <div className="cart__orderId">
                {'#'}
                {order}
              </div>
              <div className="cart__capture">Идентификатор заказа</div>
              <Link className="cart__link" to={pathsConstants.HOME_PAGE}>На главную</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <Redirect to="/" />
  )
};

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
