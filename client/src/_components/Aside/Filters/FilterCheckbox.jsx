import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

const defaultProps = {};

class FilterCheckbox extends Component {
  state = {
    isChecked: false,
  };

  componentDidMount() {
    this.setState({ value: this.props.item.value });
  }

  handleChangeFilter = () => {
    const { item, type, handleChangeFilter } = this.props;
    this.setState(prevState => ({ isChecked: !prevState.isChecked }), () => {
      handleChangeFilter(this.state.isChecked, item.value, type);
    });
  };

  render() {
    const { item } = this.props;
    const { value, isChecked } = this.state;
    return (
      <label className="filters__container">
        <input
          className="filters__input"
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={this.handleChangeFilter}
        />
        <div className="filters__marker" />
        <span className="filters__capture">{item.name}</span>
      </label>
    );
  }
}

FilterCheckbox.propTypes = propTypes;
FilterCheckbox.defaultProps = defaultProps;

export default FilterCheckbox;
