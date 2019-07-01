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
    filtersList: [],
  };

  async componentDidMount() {
    const { data: products, pages } = await this.props.getAllProductsAction({ page: 1 });
    const { data: filtersList } = await this.props.getFiltersAction();
    this.props.saveFiltersParamsAction({ page: 1 });
    this.setState({
      filtersList,
      products,
      pages,
    });
  }

  getAllProducts = async (paramsForRequest) => {
    const { data: products, pages } = await this.props.getAllProductsAction(paramsForRequest);
    this.setState({ products, pages });
  };

  render() {
    const {
      productsLoading,
      saveFiltersParamsAction,
      filters,
    } = this.props;

    const {
      filtersList,
      products,
      pages,
    } = this.state;

    return (
      <main className="main">
        <div className="container">
          <div className="home">
            <div className="home__wrapper">
              <div className="aside">
                <Filters
                  filters={filters}
                  filtersList={filtersList}
                  saveFiltersParamsAction={saveFiltersParamsAction}
                  getAllProducts={this.getAllProducts}
                />
              </div>
              <div className="home__box">
                <div className="home__title">Компьютеры и электроника</div>
                <WithLoading isLoading={productsLoading}>
                  {
                    products && (
                      <div>
                        <Products products={products} productsLoading={productsLoading} />
                        <Pagination
                          pages={pages}
                          filters={filters}
                          getAllProducts={this.getAllProducts}
                          saveFiltersParamsAction={saveFiltersParamsAction}
                        />
                      </div>
                    )
                  }
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
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  getFiltersAction: () => dispatch(filtersActions.getFilters()),
  getAllProductsAction: params => dispatch(productsActions.getAllProducts(params)),
  saveFiltersParamsAction: params => dispatch(filtersActions.saveFiltersParams(params)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
