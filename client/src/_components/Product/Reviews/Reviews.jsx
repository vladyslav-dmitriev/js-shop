import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './Form';
import ReviewsItem from './ReviewsItem';
import WithLoading from '../../WithLoading';

const propTypes = {
  productLoading: PropTypes.bool,
  productId: PropTypes.number,
  reviews: PropTypes.arrayOf.isRequired,
};

const defaultProps = {
  productLoading: false,
  productId: 0,
};

const makeReviewsListContent = reviews => (
  reviews.length
    ? reviews.map(review => <ReviewsItem review={review} key={+review.createdAt} />)
    : <div className="reviews__empty-message">Для этого товара еще оставляли отзывы</div>
);

const Reviews = ({ productLoading, reviews, productId }) => (
  <div className="reviews">
    <div className="reviews__wrapper">
      <div className="reviews__left-box">
        <div className="reviews__title reviews__title_list">Отзывы покупателей</div>
        <div>
          <WithLoading isLoading={productLoading}>
            {makeReviewsListContent(reviews)}
          </WithLoading>
        </div>
      </div>
      <div className="reviews__right-box">
        <div className="reviews__title reviews__title_form">Добавить отзыв</div>
        <Form productId={productId} />
      </div>
    </div>
  </div>
);

Reviews.propTypes = propTypes;
Reviews.defaultProps = defaultProps;

const mapStateToProps = state => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps, {})(Reviews);
