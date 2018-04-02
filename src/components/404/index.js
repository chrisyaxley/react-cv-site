import React, { Component } from 'react';
import styles from './error.scss';

class noMatch extends Component {

  componentDidUpdate() {
    document.title = 'Studio Juice - 404';
  }
  render() {
    return (
      <div className="site-content">
        <div className={'container'}>
          <div className={styles.errorContainer}>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default noMatch;
