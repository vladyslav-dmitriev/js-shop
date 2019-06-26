import React from 'react';
import PropTypes from 'prop-types';

import ProductElement from './_shared/ProductElement';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const defaultProps = {};

const Products = ({ products }) => {
  if (products.length) {
    return (
      <div className="products__list">
        {
          products.map(product => (
            <div className="products__item">
              <ProductElement product={product} />
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div className="products__list">
      <div className="products__emptyMessage">По Вашему запросу ничего не найдено</div>
    </div>
  )
};

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
