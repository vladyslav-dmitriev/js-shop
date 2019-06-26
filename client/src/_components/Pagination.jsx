import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  params: PropTypes.shape({}).isRequired,
  pagination: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]).isRequired,
  getAllProductsAction: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

const defaultProps = {};

class Pagination extends Component {
  renderPagination = (page, pagination, handleChangePage) => {
    const paginationItems = [];
    for (let i = 1; i <= pagination; i++) {
      paginationItems.push(
        <li
          className={classnames('pagination__item', { 'pagination__item_active': page === i })}
          onClick={() => handleChangePage(i)}
          role="presentation"
        >
          {i}
        </li>
      );
    }
    return paginationItems;
  };

  handleChangePage = (page) => {
    const {
      params,
      getAllProductsAction,
      saveFiltersParamsAction,
    } = this.props;

    const paramsForSave = { ...params.filters, page };
    const paramsForRequest = { ...params.filters, page };

    saveFiltersParamsAction(paramsForSave);
    getAllProductsAction(paramsForRequest);
  };

  render() {
    const { params: { page }, pagination } = this.props;
    return (
      <ul className="pagination">
        {this.renderPagination(page, pagination, this.handleChangePage)}
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
