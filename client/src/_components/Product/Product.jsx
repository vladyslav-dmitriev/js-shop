import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsActions } from '../../_actions';
import { getIdFromUrl } from '../../_helpers/utils';

import ProductInfo from './ProductInfo';
import Reviews from './Reviews';
import Recommendations from '../Recommendations';
import NotFound from '../NotFound';

const propTypes = {
  getProductById: PropTypes.func.isRequired,
  productLoading: PropTypes.bool,
  product: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  productLoading: false,
};

class Product extends Component {
  componentDidMount() {
    const id = getIdFromUrl('product');
    this.props.getProductById(id);
  }

  render() {
    const { product, productLoading } = this.props;

    return (
      <main className="main">
        <div className="container">
          {
            !product.error
              ? (
                <div>
                  <ProductInfo product={product} productLoading={productLoading} />
                  <Reviews productId={product.id} productLoading={productLoading} />
                  <Recommendations />
                </div>
              )
              : <NotFound />
          }
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  productLoading: state.api.loading.PRODUCT,
});

const mapDispatchToProps = dispatch => ({
  getProductById: id => dispatch(productsActions.getProductById(id)),
});

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Product);
