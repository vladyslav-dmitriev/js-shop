import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../../../_helpers/utils';

import InputText from '../../_shared/InputText';
import Button from '../../_shared/Button';

const propTypes = {
  productId: PropTypes.number.isRequired,
  createReviewAction: PropTypes.func.isRequired,
  addReviewToReviews: PropTypes.func.isRequired,
};

const defaultProps = {};

class Form extends Component {
  state = {
    ...getUserDataFromLocalStorage('name'),
    text: '',
    status: null,
    isShowMessage: false,
  };

  handleChangeInput = (event, name) => this.setState({ [name]: event.target.value });

  hideMessage = () => this.setState({ isShowMessage: false });

  sendForm = async(event) => {
    event.preventDefault();

    const { productId, createReviewAction, addReviewToReviews } = this.props;
    const { name, text } = this.state;

    saveUserDataToLocalStorage({ name });
    const review = { product: productId, author: name, text };
    const { data: status } = await createReviewAction(review);

    if (status) {
      const reviewData = {
        createdAt: +Date.now(),
        author: name,
        text,
      };

      addReviewToReviews(reviewData);
      this.setState({ status, text: '', isShowMessage: true });
    } else {
      this.setState({ status, isShowMessage: true });
    }
  };

  render() {
    const { name, text, status, isShowMessage } = this.state;
    const isStatusSuccess = status === 'success';

    return (
      <form onSubmit={this.sendForm}>
        <div
          className="reviews__form-item reviews__form-item_name"
          onClick={this.hideMessage}
          role="presentation"
        >
          <InputText
            title="Имя"
            name="name"
            value={name}
            required
            handleChangeInput={this.handleChangeInput}
          />
        </div>
        <div
          className="reviews__form-item reviews__form-item_text"
          onClick={this.hideMessage}
          role="presentation"
        >
          <InputText
            title="Сообщение"
            name="text"
            value={text}
            autocomplete="off"
            required
            handleChangeInput={this.handleChangeInput}
          />
        </div>
        {isStatusSuccess && isShowMessage && <div className="reviews__success-message">Отзыв успешно добавлен</div>}
        <button type="submit" className="reviews__button">
          <Button text="Отправить" />
        </button>
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
