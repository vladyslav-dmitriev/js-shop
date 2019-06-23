import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../../../_helpers/utils';
import { orderActions } from '../../../_actions/index';

import InputText from '../../_shared/InputText/index';
import Button from '../../_shared/Button/index';

const propTypes = {
  createOrder: PropTypes.func.isRequired,
  handleOrderCreate: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
};

const defaultProps = {};

class Form extends Component {
  state = {
    ...getUserDataFromLocalStorage('name', 'email', 'phone'),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { order, handleOrderCreate } = nextProps;

    if (prevState.isOrderCreate === undefined) {
      return {
        isOrderCreate: nextProps.isOrderCreate,
      };
    }

    if (order && !prevState.isOrderCreate) {
      handleOrderCreate(true, order);
      return {
        isOrderCreate: true,
      };
    }
    return null;
  }

  handleChangeInput = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  sendForm = (event) => {
    event.preventDefault();

    const { productId, createOrder, handleOrderCreate } = this.props;
    const { name, phone, email } = this.state;
    const order = {
      product: productId,
      name,
      phone,
      email,
    };
    handleOrderCreate(false);
    createOrder(order);
    saveUserDataToLocalStorage({ name, phone, email });
  };

  render() {
    const {
      name,
      phone,
      email,
    } = this.state;

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

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(orderActions.createOrder(order)),
});

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
