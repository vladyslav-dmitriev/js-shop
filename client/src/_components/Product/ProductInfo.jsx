import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { pathsConstants } from '../../_constants/index';

import WithLoading from '../WithLoading/index';
import Modal from './Modal/index';
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
    isOrderCreate: false,
  };

  handleChangeModalVisibility = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };

  handleOrderCreate = (isOrderCreate, order) => {
    this.setState({ isOrderCreate, order });
  };

  render() {
    const { isModalVisible, isOrderCreate, order } = this.state;
    const { product, productLoading } = this.props;

    return (
      <div className="product">

        {
          isModalVisible
            ? (
              <Modal
                product={product}
                isOrderCreate={isOrderCreate}
                handleOrderCreate={this.handleOrderCreate}
                handleChangeModalVisibility={this.handleChangeModalVisibility}
              />
            )
            : null
        }

        {
          isOrderCreate
            ? <Redirect push to={{ pathname: pathsConstants.CART_PAGE, state: { order } }} />
            : (
              <WithLoading isLoading={productLoading}>
                <ProductInfoBlock
                  product={product}
                  handleChangeModalVisibility={this.handleChangeModalVisibility}
                />
              </WithLoading>
            )
        }
      </div>
    );
  }
}

PropTypes.propTypes = propTypes;
PropTypes.defaultProps = defaultProps;

export default ProductInfo;
