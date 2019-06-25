import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick'; // https://react-slick.neostack.com/
import { recommendationsActions } from '../../_actions';

import RecommendationsItem from './RecommendationsItem';
import ProductLoading from '../_shared/ProductLoading';

const propTypes = {
  getRecommendationsAction: PropTypes.func.isRequired,
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
        <ProductLoading count={6} key={+Date.now()} />
      </div>
    )
);

class Recommendations extends Component {
  state = {
    recommendations: [],
  };

  async componentDidMount() {
    const { data: recommendations } = await this.props.getRecommendationsAction();
    this.setState({ recommendations });
  }

  render() {
    const { recommendations } = this.state;

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

const mapDispatchToProps = dispatch => ({
  getRecommendationsAction: () => dispatch(recommendationsActions.getRecommendations()),
});

Recommendations.propTypes = propTypes;
Recommendations.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Recommendations);
