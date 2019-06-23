import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../_shared/Loading';

const propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

/* styles */

const WithLoading = ({ children, isLoading }) => (
  isLoading
    ? <Loading />
    : children
);

WithLoading.propTypes = propTypes;
WithLoading.defaultProps = defaultProps;

export default WithLoading;
