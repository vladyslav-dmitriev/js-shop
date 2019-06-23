import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  count: PropTypes.number.isRequired,
};
const defaultProps = {};

const LoadingItem = () => (
  <div className="product-loading__item">
    <div className="product-loading__picture" />
    <div className="product-loading__name" />
    <ul className="product-loading__colors" />
    <div className="product-loading__status" />
    <div className="product-loading__price" />
  </div>
);

const ProductLoading = ({ count }) => {
  const Loadings = [];
  let i = 0;
  while (i < count) {
    Loadings.push(<LoadingItem key={i} />);
    i += 1;
  }

  return <div className="product-loading">{Loadings}</div>;
};

ProductLoading.propTypes = propTypes;
ProductLoading.defaultProps = defaultProps;

export default ProductLoading;
