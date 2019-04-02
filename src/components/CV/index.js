import React, { Component } from 'react';
import Header from './Header';
import Experience from './Experience';
import Interests from './Interests';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Footer from './Footer/container';
import styles from './cv.scss';

class CV extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className={styles.cvContent}>
          <div className={styles.sidebar}>
            <AboutMe />
            <Skills />
          </div>
          <div className={styles.cvMain}>
            <Experience />
          </div>
          <Interests />
          <Footer />
        </main>
      </div>
    );
  }
}

export default CV;
