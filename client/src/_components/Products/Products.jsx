import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsItem from './ProductsItem';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const defaultProps = {};

const Products = ({ products }) => (
  <div className="products__list">
    {
      products.length
        ? products.map(product => <ProductsItem product={product} key={product.id} />)
        : <div className="products__emptyMessage">По Вашему запросу ничего не найдено</div>
    }
  </div>
);

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, {})(Products);
