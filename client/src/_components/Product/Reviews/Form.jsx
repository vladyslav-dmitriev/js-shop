import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserDataFromLocalStorage, saveUserDataToLocalStorage } from '../../../_helpers/utils';
import { reviewsActions } from '../../../_actions/index';

import InputText from '../../_shared/InputText/index';
import Button from '../../_shared/Button/index';

const propTypes = {
  createReview: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
  review: PropTypes.shape,
};

const defaultProps = {
  review: {},
};

class Form extends Component {
  state = {
    ...getUserDataFromLocalStorage('name'),
    text: '',
    isSend: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.review === 'success' && !prevState.isSend) {
      const { addReviewToReviews } = nextProps;
      const { name, text } = prevState;
      const reviewData = {
        createdAt: +Date.now(),
        author: name,
        text,
      };

      addReviewToReviews(reviewData);
      saveUserDataToLocalStorage({ name });

      return {
        isSend: true,
        text: '',
      };
    }
    return null;
  }

  handleChangeInput = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  sendForm = (event) => {
    event.preventDefault();
    const { productId } = this.props;
    const { name, text } = this.state;

    const review = { product: productId, author: name, text };
    this.props.createReview(review);
    this.setState({ isSend: false });
  };

  render() {
    const { name, text } = this.state;
    const { review } = this.props;

    return (
      <form onSubmit={this.sendForm}>
        <div className="reviews__form-item reviews__form-item_name">
          <InputText
            title="Имя"
            name="name"
            value={name}
            required
            handleChangeInput={this.handleChangeInput}
          />
        </div>
        <div className="reviews__form-item reviews__form-item_text">
          <InputText
            title="Сообщение"
            name="text"
            value={text}
            autocomplete="off"
            required
            handleChangeInput={this.handleChangeInput}
          />
        </div>
        {
          review.status === 'success'
            ? <div className="reviews__success-message">Отзыв успешно добавлен</div>
            : null
        }
        <button type="submit" className="reviews__button">
          <Button text="Отправить" />
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  review: state.review,
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(reviewsActions.createReview(review)),
  addReviewToReviews: review => dispatch(reviewsActions.addReviewToReviews(review)),
});

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
