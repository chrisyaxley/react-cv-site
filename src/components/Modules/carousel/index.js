import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import styles from './carousel.scss';

const { array } = PropTypes;

class Carousel extends Component {

  static propTypes = {
    images: array.isRequired
  }
  componentDidMount() {
    const options = {
      keyboardControl: true,
      loop: true,
      lazyLoading: true,
      pagination: this.refs.swiperPagination,
      paginationClickable: true
    };
    this.swiper = new Swiper(this.refs.swiper, options);
  }
  render() {
    const { images } = this.props;
    return (
      <div ref="swiper" className={styles.container + ' swiper-container'}>
        <div className="swiper-wrapper">
          {images.map((image, i) => (
            <div className={'swiper-slide'} key={i}>
              <img src={image.url} alt={image.altText} key={image.id} />
            </div>
          ))};
        </div>
        <div ref="swiperPagination" className={'swiper-pagination ' + styles.pagination} />
      </div>
    );
  }
}

export default Carousel;
