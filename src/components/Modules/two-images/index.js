import React, { Component } from 'react';
import PropTypes from 'prop-types';
import picturefill from 'picturefill';

import styles from './two-images.scss';

const { array } = PropTypes;

class TwoImages extends Component {

  static propTypes = {
    images: array.isRequired
  }
  state = {
    imageStatus: 'loading',
    imagesLoaded: 1,
    totalImages: this.props.images.length
  }
  componentDidMount = () => {
    picturefill();
  }

  imageLoaded = () => {
    this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
    if (this.state.imagesLoaded >= this.state.totalImages) {
      this.setState({ imageStatus: 'loaded' });
    }
  }
  render() {
    const { images } = this.props;
    return (
      <div className={styles.twoImages + ' fadeIn collapsibleMargin ' + this.state.imageStatus}>
        {images.map(image =>
          <div className={styles.imageWrapper} key={image.id}>
            <picture className={'intrinsic intrinsic--' + image.ratio}>
              <source srcSet={image.url} media="(min-width: 768px)" />
              <source srcSet={image.urlMed} media="(min-width: 401px)" />
              <img src={image.urlSmall} alt={image.altText} className={'intrinsic-item'} onLoad={this.imageLoaded} key={image.id} />
            </picture>
          </div>
        )}
      </div>
    );
  }
}

export default TwoImages;
