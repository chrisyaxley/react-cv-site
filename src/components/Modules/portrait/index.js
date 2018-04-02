import React, { Component } from 'react';
import PropTypes from 'prop-types';
import picturefill from 'picturefill';
import styles from './portrait.scss';

const { array } = PropTypes;

class Portrait extends Component {

  static propTypes = {
    images: array.isRequired
  }
  state = {
    imageStatus: 'loading'
  }
  componentDidMount = () => {
    picturefill();
  }
  imageLoaded = () => {
    this.setState({ imageStatus: 'loaded' });
  }
  render() {
    const { images } = this.props;
    return (
      <div className={styles.portrait + ' fadeIn ' + this.state.imageStatus}>
        {images.map((image) => {
          let imageWrapper = null;
          if (image.orientation === 'portrait') {
            imageWrapper = (
              <picture className={'intrinsic intrinsic--' + image.ratio} key={image.id}>
                <source srcSet={image.url} media="(min-width: 768px)" />
                <source srcSet={image.urlMed} media="(min-width: 401px)" />
                <img src={image.urlSmall} alt={image.altText} className="portrait intrinsic-item" onLoad={this.imageLoaded} key={image.id} />
              </picture>
            );
          }
          return imageWrapper;
        })}
      </div>
    );
  }
}

export default Portrait;
