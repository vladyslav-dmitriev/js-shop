import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  isCurrentPage: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

const defaultProps = {};

const PaginationItem = ({ isCurrentPage, handleChangePage, index }) => (
  <li
    className={classnames('pagination__item', { 'pagination__item_active': isCurrentPage })}
    onClick={() => handleChangePage(index)}
    role="presentation"
  >
    {index}
  </li>
);

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
