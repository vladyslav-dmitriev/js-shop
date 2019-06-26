import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithLoading from '../WithLoading';
import Modal from './Modal';
import ProductInfoBlock from './ProductInfoBlock';

const propTypes = {
  productLoading: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.array.isRequired,
    producer: PropTypes.shape({}).isRequired,
    code: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.shape({}).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const defaultProps = {};

class ProductInfo extends Component {
  state = {
    isModalVisible: false,
  };

  handleChangeModalVisibility = () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));

  render() {
    const { isModalVisible } = this.state;
    const { product, productLoading } = this.props;

    return (
      <div className="product">
        {isModalVisible && (
          <Modal
            product={product}
            handleChangeModalVisibility={this.handleChangeModalVisibility}
          />
        )}
        <WithLoading isLoading={productLoading}>
          <ProductInfoBlock product={product} handleChangeModalVisibility={this.handleChangeModalVisibility} />
        </WithLoading>
      </div>
    );
  }
}

PropTypes.propTypes = propTypes;
PropTypes.defaultProps = defaultProps;

export default ProductInfo;
