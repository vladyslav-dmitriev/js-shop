import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtersActions, productsActions } from '../../_actions';

import WithLoading from '../WithLoading';
import Aside from '../Aside';
import Products from '../Products';
import Pagination from '../Pagination';

const propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  saveFiltersParams: PropTypes.func.isRequired,
  productsLoading: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const defaultProps = {
  productsLoading: false,
};

class Home extends Component {
  componentDidMount() {
    this.props.getAllProducts({ page: 1 });
    this.props.saveFiltersParams({ page: 1 });
  }

  render() {
    const { products, productsLoading } = this.props;

    return (
      <main className="main">
        <div className="container">
          <div className="home__container">
            <div className="home__wrapper">
              <Aside />
              <div className="home__box">
                <div className="home__title">Компьютеры и электроника</div>
                <WithLoading isLoading={productsLoading}>
                  <Products products={products} productsLoading={productsLoading} />
                  <Pagination />
                </WithLoading>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  productsLoading: state.api.loading.PRODUCTS,
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: params => dispatch(productsActions.getAllProducts(params)),
  saveFiltersParams: params => dispatch(filtersActions.saveFiltersParams(params)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
