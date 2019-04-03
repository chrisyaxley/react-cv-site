import React, { Component } from 'react';
import Header from '../CV/Header';
import Footer from '../CV/Footer/container';
import styles from './error.scss';

class noMatch extends Component {
  componentDidUpdate() {
    document.title = 'Chris Yaxley - 404';
  }

  render() {
    return (
      <div className="site-content">
       <Header />
        <div className="container">
          <div className={styles.errorContainer}>
            <p>Sorry, I couldnt find what you are looking for. I hope you will except this image of me licking Timmy Mallet in 2005 as away of a apology</p>
            <div className={styles.clipText}>
            <p  className={styles.text}>404</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default noMatch;
