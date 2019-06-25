import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pathsConstants } from '../../_constants';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const defaultProps = {};

const ProductElement = ({
  product: {
    id,
    url,
    name,
    color,
    price,
  },
}) => (
  <Link className="product-element" to={`${pathsConstants.PRODUCT_PAGE}/${id}`}>
    <div className="product-element__picture">
      <img className="product-element__image" src={url[0]} alt={name} />
    </div>
    <div className="product-element__name">
      {name}
    </div>
    <div className="product-element__color">{color.name}</div>
    <div className="product-element__price">
      {`${price} $`}
    </div>
  </Link>
);

ProductElement.propTypes = propTypes;
ProductElement.defaultProps = defaultProps;

export default ProductElement;
