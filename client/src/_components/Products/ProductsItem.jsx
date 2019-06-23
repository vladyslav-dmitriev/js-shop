import React from 'react';
import PropTypes from 'prop-types';

import ProductElement from '../_shared/ProductElement/ProductElement';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {};

const ProductsItem = ({ product }) => (
  <div className="products__item">
    <ProductElement product={product} />
  </div>
);

ProductsItem.propTypes = propTypes;
ProductsItem.defaultProps = defaultProps;

export default ProductsItem;
