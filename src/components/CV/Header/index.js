/* global document fetch */
import React, { Component } from 'react';
import styles from './header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.cvHeader}>
        <h1>Chris Yaxley</h1>
        <h2>Front-end Developer</h2>
        <div className={styles.contactBar}>
          <a href="mailto:chris.yaxley@gmail.com">chris.yaxley@gmail.com</a>
          <span className={styles.pipe}>|</span>
          <a href="tel:07904039897">07904039897</a>
        </div>
      </header>
    );
  }
}

export default Header;
