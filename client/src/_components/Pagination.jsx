import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  filters: PropTypes.shape({}).isRequired,
  pages: PropTypes.number.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

const defaultProps = {};

class Pagination extends Component {
  renderPaginationItems = (page, pages, handleChangePage) => {
    const paginationItems = [];
    for (let i = 1; i <= pages; i++) {
      paginationItems.push(
        <li
          className={classnames('pagination__item', { 'pagination__item_active': page === i })}
          onClick={() => handleChangePage(i)}
          key={i}
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
      filters,
      getAllProducts,
      saveFiltersParamsAction,
    } = this.props;

    const paramsForSave = { params: filters.params || {}, page };
    const paramsForRequest = { ...filters.params, page };

    saveFiltersParamsAction(paramsForSave);
    getAllProducts(paramsForRequest);
  };

  render() {
    const { filters: { page }, pages } = this.props;
    return (
      <ul className="pagination">
        {this.renderPaginationItems(page, pages, this.handleChangePage)}
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
