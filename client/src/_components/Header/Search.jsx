import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest'; // https://github.com/moroshko/react-autosuggest#render-input-component-prop
import { Scrollbars } from 'react-custom-scrollbars'; // https://github.com/malte-wessel/react-custom-scrollbars
import { searchActions } from '../../_actions';
import { pathsConstants } from '../../_constants';

const propTypes = {
  getSearchWithQueryAction: PropTypes.func.isRequired,
};

const defaultProps = {};

const getSuggestionValue = suggestion => suggestion.name;

const onSuggestionSelected = (event, { suggestion }) => {
  window.open(`${pathsConstants.PRODUCT_PAGE}/${suggestion.id}`);
};

const onSuggestionsClearRequested = () => {};

const renderSuggestionsContainer = ({ containerProps, children }) => (
  <Scrollbars
    autoHeight
    {...containerProps}
    renderThumbVertical={({ style, ...props }) =>
      (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: '#666666',
            width: '4px',
            opacity: '0.5',
            borderRadius: 0,
          }}
        />
      )
    }
  >
    {children}
  </Scrollbars>
);

const renderSuggestion = suggestion => (
  <div className="react-autosuggest__custom-wrapper">
    <div className="react-autosuggest__custom-picture">
      <img className="react-autosuggest__custom-image" src={suggestion.url[0]} alt={suggestion.name} />
    </div>
    <div>
      {suggestion.name}
    </div>
  </div>
);

class Search extends Component {
  state = {
    value: '',
    items: [],
  };

  handleChangeInput = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionsFetchRequested = async({ value }) => {
    const { data: items } = await this.props.getSearchWithQueryAction(value);
    this.setState({ items });
  };

  render() {
    const { value, items } = this.state;
    const inputProps = {
      placeholder: 'Введите название товара',
      value,
      onChange: this.handleChangeInput,
    };

    return (
      <Autosuggest
        suggestions={items}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestionsContainer={renderSuggestionsContainer}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchWithQueryAction: query => dispatch(searchActions.getSearchWithQuery(query)),
});

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Search);
