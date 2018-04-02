import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import picturefill from 'picturefill';
import AutoPlayCarousel from './autoPlayCarousel';
import styles from './two-images-rotating.scss';

const { array } = PropTypes;

class TwoImagesRotating extends Component {

  static propTypes = {
    columns: array.isRequired
  }

  render() {
    const { columns } = this.props;
    return (
      <div className={styles.twoImages + ' collapsibleMargin'}>
        {columns.map((column, key) =>
          <div className={styles.imageWrapper} key={key}>
            <AutoPlayCarousel index={key} images={column.images} />
          </div>
        )}
      </div>
    );
  }
}

export default TwoImagesRotating;
