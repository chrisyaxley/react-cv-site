/* global document fetch */
import React, { Component } from 'react';
import styles from './header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.cvHeader}>
        <h1 className={styles.name}>Chris Yaxley</h1>
        <h2 className={styles.role}>Freelance Developer</h2>
        <span className={styles.pipe}>|</span>
        <h3 className={styles.location}>London, UK</h3>
        <div className={styles.contactBar}>
          <a href="mailto:chris.yaxley+website@gmail.com" className={styles.email}>
            chris
            {' '}
            <span>[dot]</span>
            {' '}
            yaxley
            {' '}
            <span>[at]</span>
            {' '}
            gmail
            {' '}
            <span>[dot]</span>
            {' '}
            com
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
