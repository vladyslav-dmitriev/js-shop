import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

const defaultProps = {
  placeholder: '',
  autocomplete: 'on',
  required: false,
};

class InputText extends Component {
  handleChangeInput = (event) => {
    this.props.handleChangeInput(event, this.props.name);
  };

  render() {
    const {
      title,
      name,
      value,
      placeholder,
      autocomplete,
      required,
    } = this.props;

    return (
      <div className="input-text">
        <div className="input-text__title">
          {title}
          { required && <span className="input-text__required">*</span> }
        </div>
        <div className="input-text__box">
          <input
            className="input-text__input"
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autocomplete}
            onChange={this.handleChangeInput}
            required={required}
          />
        </div>
      </div>
    );
  }
}

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
