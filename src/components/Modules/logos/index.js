import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './logos.scss';

const { array, string } = PropTypes;

class Logos extends Component {

  static propTypes = {
    images: array.isRequired,
    headline: string.isRequired
  }

  render() {
    const { images, headline } = this.props;
    return (
      <div className={styles.logosContainer + ' fadeIn'}>
        <h2>{headline}</h2>
        <div className={styles.logosWrapper}>
          <div className={styles.images}>
            {images.map(image =>
              <div className={styles.logo} key={image.id}>
                <img src={image.url} alt={image.client} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Logos;
