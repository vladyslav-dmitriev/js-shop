import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtersActions, productsActions } from '../../_actions';

import WithLoading from '../WithLoading';
import Products from '../Products';
import Pagination from '../Pagination';
import Filters from '../Filters';

const propTypes = {
  productsLoading: PropTypes.bool,
  getAllProductsAction: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

const defaultProps = {
  productsLoading: false,
};

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await this.props.getAllProductsAction({ page: 1 });
    this.setState({ products });
    this.props.saveFiltersParamsAction({ page: 1 });
  }

  render() {
    const {
      productsLoading,
      pagination,
      params,
      getAllProductsAction,
      saveFiltersParamsAction,
    } = this.props;

    const { products } = this.state;

    return (
      <main className="main">
        <div className="container">
          <div className="home__container">
            <div className="home__wrapper">
              <div className="aside">
                <Filters filter={{}} />
              </div>
              <div className="home__box">
                <div className="home__title">Компьютеры и электроника</div>
                <WithLoading isLoading={productsLoading}>
                  <Products products={products} productsLoading={productsLoading} />
                  <Pagination
                    pagination={pagination}
                    params={params}
                    getAllProductsAction={getAllProductsAction}
                    saveFiltersParamsAction={saveFiltersParamsAction}
                  />
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
  productsLoading: state.api.loading.PRODUCTS,
  pagination: state.pagination,
  params: state.params,
});

const mapDispatchToProps = dispatch => ({
  getAllProductsAction: params => dispatch(productsActions.getAllProducts(params)),
  saveFiltersParamsAction: params => dispatch(filtersActions.saveFiltersParams(params)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
