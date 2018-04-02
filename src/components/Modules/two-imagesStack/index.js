import React, { Component } from 'react';
import PropTypes from 'prop-types';
import picturefill from 'picturefill';
import styles from './2-imageStack.scss';

const { array } = PropTypes;

class TwoImagesStack extends Component {

  static propTypes = {
    images: array.isRequired
  }
  state = {
    imageStatus: 'loading',
    imagesLoaded: 1
  }
  componentDidMount = () => {
    picturefill();
  }
  imageLoaded = () => {
    const totalImages = this.props.images.filter(image => image.orientation === 'landscape');
    this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
    if (this.state.imagesLoaded >= totalImages.length) {
      this.setState({ imageStatus: 'loaded' });
    }
  }
  render() {
    const { images } = this.props;
    return (
      <div className={styles.imageStack + ' fadeIn ' + this.state.imageStatus}>
        {images.map((image) => {
          let imageWrapper = null;
          if (image.orientation === 'landscape') {
            imageWrapper = (
              <picture className={'intrinsic intrinsic--' + image.ratio} key={image.id}>
                <source srcSet={image.url} media="(min-width: 768px)" />
                <source srcSet={image.urlMed} media="(min-width: 401px)" />
                <img src={image.urlSmall} alt={image.altText} className={'intrinsic-item'} onLoad={this.imageLoaded} key={image.id} />
              </picture>
            );
          }
          return imageWrapper;
        })}
      </div>
    );
  }
}

export default TwoImagesStack;
