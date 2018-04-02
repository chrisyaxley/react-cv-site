import React, { Component } from 'react';
import styles from './pageLoader.scss';

class PageLoader extends Component {

  render() {
    return (
      <div className="container">
        <div className={styles.loadingWrapper}>
          <div className={styles.loader} />
        </div>
      </div>
    );
  }
}

export default PageLoader;
