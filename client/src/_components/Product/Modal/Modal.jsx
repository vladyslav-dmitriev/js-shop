import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const propTypes = {
  handleChangeModalVisibility: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  isOrderCreate: PropTypes.bool.isRequired,
  handleOrderCreate: PropTypes.func.isRequired,
};

const defaultProps = {};

const Modal = ({
  product: {
    id,
    name,
    url,
    price,
  },
  handleChangeModalVisibility,
  isOrderCreate,
  handleOrderCreate,
}) => (
  <div className="product-modal">
    <div
      className="product-modal__wrapper"
      onClick={handleChangeModalVisibility}
      role="presentation"
    />
    <div className="product-modal__inner">
      <div className="product-modal__head">
        <div className="product-modal__main-title">Оформление заказа</div>
        <div className="product-modal__close" onClick={handleChangeModalVisibility} role="presentation">
          <i className="icon-cross" />
        </div>
      </div>
      <div className="product-modal__body">
        <div className="product-modal__left-box">
          <div className="product-modal__picture">
            <img className="product-modal__image" src={url[0]} alt={name} />
          </div>
          <div className="product-modal__name">
            {name}
          </div>
          <div className="product-modal__price">
            {`${price} $`}
          </div>
        </div>
        <div className="product-modal__right-box">
          <Form
            isOrderCreate={isOrderCreate}
            handleOrderCreate={handleOrderCreate}
            productId={id}
          />
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
