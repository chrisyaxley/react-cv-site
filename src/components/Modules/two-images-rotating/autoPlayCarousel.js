import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import styles from './carousel.scss';

const { array, number } = PropTypes;

class AutoPlayCarousel extends Component {

  static propTypes = {
    images: array.isRequired,
    index: number.isRequired,
  }
  componentDidMount() {
    const options = {
      loop: true,
      autoplay: true,
      effect: 'fade',
      speed: 1500
    };
    setTimeout(() => {
      this.swiper = new Swiper(this.refs.swiper, options);
    }, ((this.props.index + 2) * (1500 * this.props.index)));
  }
  render() {
    const { images } = this.props;
    return (
      <div ref="swiper" className={styles.container + ' swiper-container'}>
        <div className={styles.swiperWrapper + ' swiper-wrapper'}>
          {images.map((image, i) => (
            <div className={'swiper-slide'} key={i} data-swiper-autoplay="6000">
              <img src={image.url} alt={image.altText} key={image.id} />
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default AutoPlayCarousel;
