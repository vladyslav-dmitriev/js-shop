import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

const propTypes = {
  images: PropTypes.array,
};

const defaultProps = {
  images: [],
};

const makePictures = (images) => {
  const pictures = images.map((image) => {
    const picture = {
      original: image,
      thumbnail: image,
    };
    return picture;
  });
  return pictures;
};

const Gallery = ({ images }) => (
  <ImageGallery
    items={makePictures(images)}
    lazyLoad
    showNav={false}
    showFullscreenButton={false}
    showPlayButton={false}
  />
);

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
