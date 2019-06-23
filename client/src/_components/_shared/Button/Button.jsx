import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const defaultProps = {};

const Button = ({ text }) => <div className="button">{text}</div>;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
