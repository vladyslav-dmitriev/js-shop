import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick'; // https://react-slick.neostack.com/
import { recommendationsActions } from '../../_actions';

import RecommendationsItem from './RecommendationsItem';
import ProductLoading from '../_shared/ProductLoading';

const propTypes = {
  getRecommendations: PropTypes.func.isRequired,
  recommendations: PropTypes.oneOfType([PropTypes.arrayOf, PropTypes.shape({})]),
};

const defaultProps = {
  recommendations: [],
};

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const renderRecommendations = recommendations => (
  recommendations.map(recommendation => (
    <RecommendationsItem recommendation={recommendation} key={recommendation.id} />
  ))
);

const makeRecommendationsContent = recommendations => (
  recommendations.length
    ? (
      <Slider {...sliderSettings}>
        {renderRecommendations(recommendations)}
      </Slider>
    )
    : (
      <div className="recommendations__container">
        <ProductLoading count={4} key={+Date.now()} />
      </div>
    )
);

class Recommendations extends Component {
  componentDidMount() {
    this.props.getRecommendations();
  }

  render() {
    const { recommendations } = this.props;

    return (
      <div className="recommendations__container">
        <div className="recommendations__title">Рекомендуемые товары</div>
        <div className="recommendations__box">
          {makeRecommendationsContent(recommendations)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recommendations: state.recommendations,
});

const mapDispatchToProps = dispatch => ({
  getRecommendations: () => dispatch(recommendationsActions.getRecommendations()),
});

Recommendations.propTypes = propTypes;
Recommendations.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
