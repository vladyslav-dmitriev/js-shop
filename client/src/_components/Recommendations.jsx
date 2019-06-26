import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick'; // https://react-slick.neostack.com/
import { recommendationsActions } from '../_actions';
import { appConstants } from '../_constants';

import ProductLoading from './_shared/ProductLoading';
import ProductElement from './_shared/ProductElement';

const propTypes = {
  getRecommendationsAction: PropTypes.func.isRequired,
};

const defaultProps = {
  recommendations: [],
};

class Recommendations extends Component {
  state = {
    recommendations: [],
  };

  async componentDidMount() {
    const { data: recommendations } = await this.props.getRecommendationsAction();
    this.setState({ recommendations });
  }

  renderRecommendations = recommendations => (
    <Slider {...appConstants.RECOMMENDATIONS_SLIDES_SETTINGS}>
      {recommendations.map(recommendation => (
        <div className="recommendations__item">
          <ProductElement product={recommendation} />
        </div>
      ))}
    </Slider>
  );

  render() {
    const { recommendations } = this.state;

    if (recommendations.length) {
      return (
        <div className="recommendations__container">
          <div className="recommendations__title">Рекомендуемые товары</div>
          <div className="recommendations__box">
            {this.renderRecommendations(recommendations)}
          </div>
        </div>
      );
    }

    return (
      <div className="recommendations__container">
        <div className="recommendations__title">Рекомендуемые товары</div>
        <div className="recommendations__box">
          <div className="recommendations__container">
            <ProductLoading count={4} key={+Date.now()} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getRecommendationsAction: () => dispatch(recommendationsActions.getRecommendations()),
});

Recommendations.propTypes = propTypes;
Recommendations.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Recommendations);
