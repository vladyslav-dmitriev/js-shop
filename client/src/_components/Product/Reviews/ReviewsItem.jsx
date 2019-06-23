import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedTime } from '../../../_helpers/utils';

const propTypes = {
  review: PropTypes.shape({}).isRequired,
};

const defaultProps = {};

const ReviewsItem = ({
  review: {
    author,
    createdAt,
    text,
  },
}) => (
  <div className="reviews__item">
    <div className="reviews__head">
      <div className="reviews__name">
        {author}
      </div>
      <div className="reviews__date">
        {getFormattedTime(createdAt)}
      </div>
    </div>
    <div className="reviews__text">
      {text}
    </div>
  </div>
);

ReviewsItem.propTypes = propTypes;
ReviewsItem.defaultProps = defaultProps;

export default ReviewsItem;
