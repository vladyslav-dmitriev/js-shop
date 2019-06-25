import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsActions, filtersActions } from '../../_actions';

import PaginationItem from './PaginationItem';

const propTypes = {
  params: PropTypes.shape({}).isRequired,
  pagination: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]).isRequired,
  getAllProductsAction: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

const defaultProps = {};

const makePagination = (page, pagination, handleChangePage) => {
  let i = 1;
  const paginationItems = [];
  while (i <= pagination) {
    const isCurrentPage = page === i;
    paginationItems.push(
      <PaginationItem
        handleChangePage={handleChangePage}
        isCurrentPage={isCurrentPage}
        index={i}
        key={i}
      />,
    );
    i += 1;
  }
  return paginationItems;
};

class Pagination extends Component {
  handleChangePage = (page) => {
    const {
      params,
      getAllProductsAction,
      saveFiltersParamsAction,
    } = this.props;

    const paramsForSave = { ...params, page };
    const paramsForRequest = { ...params.filters, page };

    saveFiltersParamsAction(paramsForSave);
    getAllProductsAction(paramsForRequest);
  };

  render() {
    const { params, pagination } = this.props;
    return (
      <ul className="pagination">
        {makePagination(params.page, pagination, this.handleChangePage)}
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

const mapStateToProps = state => ({
  products: state.products,
  pagination: state.pagination,
  params: state.params,
});

const mapDispatchToProps = dispatch => ({
  getAllProductsAction: params => dispatch(productsActions.getAllProducts(params)),
  saveFiltersParamsAction: params => dispatch(filtersActions.saveFiltersParams(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
