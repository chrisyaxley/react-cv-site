import React, { Component } from 'react';
import PropTypes from 'prop-types';
import picturefill from 'picturefill';
import styles from './full-image.scss';

const { string } = PropTypes;

class FullImage extends Component {

  static propTypes = {
    urlSmall: string.isRequired,
    urlMed: string.isRequired,
    url: string.isRequired,
    altText: string.isRequired,
    ratio: string.isRequired
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
    const { url, urlMed, urlSmall, altText, ratio } = this.props;
    return (
      <div className={styles.fullWidthImage + ' fadeIn ' + this.state.imageStatus}>
        <picture className={'intrinsic intrinsic--' + ratio}>
          <source srcSet={url} media="(min-width: 768px)" />
          <source srcSet={urlMed} media="(min-width: 401px)" />
          <img className="intrinsic-item" src={urlSmall} alt={altText} onLoad={this.imageLoaded} />
        </picture>
      </div>
    );
  }
}

export default FullImage;
