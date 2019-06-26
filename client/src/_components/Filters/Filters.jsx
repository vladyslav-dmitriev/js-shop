import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filtersActions, productsActions } from '../../_actions';

import FilterBlock from './FilterBlock';

const propTypes = {
  params: PropTypes.shape({}),
  filters: PropTypes.shape({}).isRequired,
  getFiltersAction: PropTypes.func.isRequired,
  getAllProductsAction: PropTypes.func.isRequired,
  saveFiltersParamsAction: PropTypes.func.isRequired,
};

class Filters extends Component {
  componentDidMount() {
    this.props.getFiltersAction();
  }

  handleChangeFilter = (isChecked, value, type) => {
    const {
      params,
      saveFiltersParamsAction,
      getAllProductsAction,
    } = this.props;
    const filteredParams = { page: params.page, filters: {} };

    params.filters = {}.hasOwnProperty.call(params, 'filters') ? params.filters : {};
    const { filters } = params;

    if (!{}.hasOwnProperty.call(filters, type)) {
      filters[type] = [];
    }

    for (const key in filters) {
      filteredParams.filters[key] = key === type && isChecked
        ? [...filters[key], value]
        : filters[key].filter(param => !(param === value));
    }

    const paramsForSave = { ...filteredParams, page: 1 };
    const paramsForRequest = { ...filteredParams.filters, page: 1 };

    saveFiltersParamsAction(paramsForSave);
    getAllProductsAction(paramsForRequest);
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="filters">
        <div className="filters__main-title">Фильтры</div>
        {Object.values(filters).map(filter => (
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

const mapStateToProps = state => ({
  filters: state.filters,
  params: state.params,
});

const mapDispatchToProps = dispatch => ({
  getFiltersAction: () => dispatch(filtersActions.getFilters()),
  getAllProductsAction: params => dispatch(productsActions.getAllProducts(params)),
  saveFiltersParamsAction: params => dispatch(filtersActions.saveFiltersParams(params)),
});

Filters.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
