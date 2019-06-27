import React from 'react';
import PropTypes from 'prop-types';

import FilterCheckbox from './FilterCheckbox';

const propTypes = {
  filter: PropTypes.shape({
    params: PropTypes.array,
  }),
  handleChangeFilter: PropTypes.func.isRequired,
};

const defaultProps = {
  filter: {
    params: [],
  },
};

const FilterBlock = ({ filter, handleChangeFilter }) => (
  <div className="filters__item">
    <div className="filters__title">{filter.title}</div>
    {filter && filter.params.map(item => (
      <FilterCheckbox
        handleChangeFilter={handleChangeFilter}
        type={filter.type}
        item={item}
        key={item.value}
      />
    ))}
  </div>
);

FilterBlock.propTypes = propTypes;
FilterBlock.defaultProps = defaultProps;

export default FilterBlock;
