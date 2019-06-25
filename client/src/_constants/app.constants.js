const env = process.env;

export const SERVER_URL = env.PORT || '/';
export const PUBLIC_URL = '';
export const FETCH_TIMEOUT = 30000;

export const RECOMMENDATIONS_SLIDES_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
};

export default {
  SERVER_URL,
  PUBLIC_URL,
  FETCH_TIMEOUT,
  RECOMMENDATIONS_SLIDES_SETTINGS,
};
