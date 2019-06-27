import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'; // https://react-slick.neostack.com/
import { appConstants } from '../_constants';

import ProductLoading from './_shared/ProductLoading';
import ProductElement from './_shared/ProductElement';

const propTypes = {
  recommendations: PropTypes.array,
};

const defaultProps = {
  recommendations: [],
};

const Recommendations = ({ recommendations }) => {
  const renderRecommendations = recommendations => (
    <Slider {...appConstants.RECOMMENDATIONS_SLIDES_SETTINGS}>
      {recommendations.map(recommendation => (
        <div className="recommendations__item" key={recommendation.id}>
          <ProductElement product={recommendation} />
        </div>
      ))}
    </Slider>
  );

  if (recommendations.length) {
    return (
      <div className="recommendations__container">
        <div className="recommendations__title">Рекомендуемые товары</div>
        <div className="recommendations__box">
          {renderRecommendations(recommendations)}
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations__container">
      <div className="recommendations__title">Рекомендуемые товары</div>
      <div className="recommendations__box">
        <ProductLoading count={4} key={+Date.now()} />
      </div>
    </div>
  );
};

Recommendations.propTypes = propTypes;
Recommendations.defaultProps = defaultProps;

export default Recommendations;
