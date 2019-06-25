import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../../../_helpers/utils';
import { orderActions } from '../../../_actions';
import { pathsConstants } from '../../../_constants';

import InputText from '../../_shared/InputText';
import Button from '../../_shared/Button';

const propTypes = {
  productId: PropTypes.number.isRequired,
  createOrderAction: PropTypes.func.isRequired,
};

const defaultProps = {};

class Form extends Component {
  state = {
    ...getUserDataFromLocalStorage('name', 'email', 'phone'),
  };

  handleChangeInput = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  sendForm = async(event) => {
    event.preventDefault();

    const { productId, createOrderAction } = this.props;
    const { name, phone, email } = this.state;
    const order = {
      product: productId,
      name,
      phone,
      email,
    };
    saveUserDataToLocalStorage({ name, phone, email });
    const { data: orderId } = await createOrderAction(order);
    await this.setState({ orderId });
  };

  render() {
    const {
      name,
      phone,
      email,
      orderId,
    } = this.state;

    if (orderId) {
      return (
        <Redirect push to={{ pathname: pathsConstants.CART_PAGE, state: { orderId } }} />
      )
    }

    return (
      <div>
        <form onSubmit={this.sendForm}>
          <div className="product-modal__item product-modal__item_name">
            <InputText
              title="Имя"
              name="name"
              value={name}
              handleChangeInput={this.handleChangeInput}
            />
          </div>
          <div className="product-modal__item product-modal__item_phone">
            <InputText
              title="Номер телефона"
              name="phone"
              placeholder="+38 (000) 00 00"
              value={phone}
              required
              handleChangeInput={this.handleChangeInput}
            />
          </div>
          <div className="product-modal__item product-modal__item_email">
            <InputText
              title="E-mail"
              name="email"
              placeholder="email@gmail.com"
              value={email}
              handleChangeInput={this.handleChangeInput}
            />
          </div>
          <button type="submit" className="product-modal__button">
            <Button text="Подтвердить" />
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createOrderAction: order => dispatch(orderActions.createOrder(order)),
});

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Form);
