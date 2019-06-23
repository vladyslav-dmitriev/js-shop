import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery/index';
import Button from '../_shared/Button/index';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.array,
    producer: PropTypes.shape({}),
    code: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.shape({}),
    price: PropTypes.string,
  }).isRequired,
  handleChangeModalVisibility: PropTypes.func.isRequired,
};

const defaultProps = {};

const ProductInfoBlock = (
  {
    product: {
      url,
      name,
      producer,
      code,
      description,
      color,
      price,
    },
    handleChangeModalVisibility,
  },
) => (
  <div className="product__wrapper">
    <div>
      <div className="product__gallery">
        <Gallery images={url} />
      </div>
    </div>
    <div className="product__right-box">
      <div className="product__name">
        {name}
      </div>
      <div className="product__producer">
        {producer && `Производитель: ${producer.name}`}
      </div>
      <div className="product__color">
        {color && `Цвет: ${color.name}`}
      </div>
      <div className="product__code">
        {`Код товара: ${code}`}
      </div>
      <div className="product__description">
        {description}
      </div>
      <div className="product__price">
        {`${price} $`}
      </div>
      <div
        role="presentation"
        className="product__button"
        onClick={handleChangeModalVisibility}
      >
        <Button text="Купить" />
      </div>
    </div>
  </div>
);

ProductInfoBlock.propTypes = propTypes;
ProductInfoBlock.defaultProps = defaultProps;

export default ProductInfoBlock;
