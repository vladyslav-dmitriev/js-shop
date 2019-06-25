import React from 'react';
import PropTypes from 'prop-types';

import ProductElement from '../_shared/ProductElement';

const propTypes = {
  recommendation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

const defaultProps = {
  recommendation: {},
};

const RecommendationsItem = ({ recommendation }) => (
  <div className="recommendations__item">
    <ProductElement product={recommendation} />
  </div>
);

RecommendationsItem.propTypes = propTypes;
RecommendationsItem.defaultProps = defaultProps;

export default RecommendationsItem;
