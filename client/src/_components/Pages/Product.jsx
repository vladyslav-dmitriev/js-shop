import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { productsActions, recommendationsActions, reviewsActions } from '../../_actions';
import { getIdFromUrl } from '../../_helpers/utils';
import { pathsConstants } from '../../_constants';

import ProductInfo from '../ProductInfo';
import Reviews from '../ProductInfo/Reviews';
import Recommendations from '../Recommendations';

const propTypes = {
  productLoading: PropTypes.bool,
  getProductByIdAction: PropTypes.func.isRequired,
};

const defaultProps = {
  productLoading: false,
};

class Product extends Component {
  state = {
    product: {},
    reviews: [],
    recommendations: [],
    pageId: getIdFromUrl('product'),
  };

  async componentDidMount() {
    await this.loadProductData(this.state.pageId);
    const { data: recommendations } = await this.props.getRecommendationsAction();
    this.setState({ recommendations });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const pageId = getIdFromUrl('product');
    if (pageId !== prevState.productId) {
      return {
        productId: pageId,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const pageId = getIdFromUrl('product');
    if (pageId !== prevState.productId) {
      this.loadProductData(pageId);
      window.scrollTo(0, 0);
    }
  }

  async loadProductData(id) {
    const { data: product } = await this.props.getProductByIdAction(id);
    this.setState({ product, reviews: product.reviews });
  }

  addReviewToReviews = (review) => {
    this.setState(prevState => ({ reviews: [...prevState.reviews, review] }));
  };

  render() {
    const { product, product: { hasError }, reviews, recommendations } = this.state;
    const {
      productLoading,
      createReviewAction,
    } = this.props;

    if (hasError) {
      return (
        <Redirect push to={{ pathname: pathsConstants.NOTFOUND_PAGE }} />
      );
    }

    return (
      <main className="main">
        <div className="container">
          <ProductInfo product={product} productLoading={productLoading} />
          <Reviews
            reviews={reviews}
            productId={product.id}
            productLoading={productLoading}
            createReviewAction={createReviewAction}
            addReviewToReviews={this.addReviewToReviews}
          />
          <Recommendations recommendations={recommendations} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  productLoading: state.api.loading.PRODUCT,
});

const mapDispatchToProps = dispatch => ({
  getProductByIdAction: id => dispatch(productsActions.getProductById(id)),
  getRecommendationsAction: () => dispatch(recommendationsActions.getRecommendations()),
  createReviewAction: review => dispatch(reviewsActions.createReview(review)),
});

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Product);
