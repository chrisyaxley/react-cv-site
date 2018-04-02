import React, { Component } from 'react';
import styles from './banner.scss';

class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    this.checkCookie();
  }
  checkCookie() {
    if (!localStorage.getItem('studio-juice-cookie')) {
      localStorage.setItem('studio-juice-cookie', Math.random()); // Store the Cookie in localStorage
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }
  closeBanner() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div className={'bannerWrapper ' + styles.bannerWrapper + ' ' + this.state.open}>
        <div className={styles.banner}>
          <div className={styles.textWrapper}>
            <h3>Have a Cookie!</h3>
            <p>Our site uses <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">cookies</a> to improve your overall experience. By entering our site, you’re consenting to the use of cookies.</p>
          </div>
          <button className={styles.button + ' button'} onClick={this.closeBanner.bind(this)}>I Agree</button>
        </div>
      </div>
    );
  }
}

export default Banner;
