import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBlock from './FilterBlock';

const propTypes = {
  filters: PropTypes.shape({}).isRequired,
  getAllProducts: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

const defaultProps = {};

class Filters extends Component {
  handleChangeFilter = (isChecked, value, type) => {
    const {
      filters,
      saveFiltersParamsAction,
      getAllProducts,
    } = this.props;
    const filteredParams = { page: filters.page, params: {} };

    filters.params = {}.hasOwnProperty.call(filters, 'params') ? filters.params : {};
    const { params } = filters;

    if (!{}.hasOwnProperty.call(params, type)) {
      params[type] = [];
    }

    for (const key in params) {
      filteredParams.params[key] = key === type && isChecked
        ? [...params[key], value]
        : params[key].filter(param => !(param === value));
    }

    const paramsForSave = { ...filteredParams, page: 1 };
    const paramsForRequest = { ...filteredParams.params, page: 1 };

    saveFiltersParamsAction(paramsForSave);
    getAllProducts(paramsForRequest);
  };

  render() {
    const { filtersList } = this.props;
    return (
      <div className="filters">
        <div className="filters__main-title">Фильтры</div>
        {Object.values(filtersList).map(filter => (
          <FilterBlock
            handleChangeFilter={this.handleChangeFilter}
            filter={filter}
            key={filter.type}
          />
        ))}
      </div>
    );
  }
}

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
