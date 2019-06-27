import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import ReviewsItem from './ReviewsItem';
import WithLoading from '../../WithLoading';

const propTypes = {
  productLoading: PropTypes.bool,
  productId: PropTypes.number,
  reviews: PropTypes.array,
};

const defaultProps = {
  productLoading: false,
  productId: 0,
  reviews: [],
};

const Reviews = ({
  productLoading,
  reviews,
  productId,
  addReviewToReviews,
  createReviewAction,
 }) => {
  const makeReviewsListContent = reviews => (
    reviews && reviews.length
      ? reviews.map(review => <ReviewsItem review={review} key={review._id} />)
      : <div className="reviews__empty-message">Для этого товара еще оставляли отзывы</div>
  );

  return (
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
          <Form
            productId={productId}
            addReviewToReviews={addReviewToReviews}
            createReviewAction={createReviewAction}
          />
        </div>
      </div>
    </div>
  )
};

Reviews.propTypes = propTypes;
Reviews.defaultProps = defaultProps;

export default Reviews;
