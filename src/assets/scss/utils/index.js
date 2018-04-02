/* global fetch */
import React, { Component } from 'react';
import CaseStudies from './caseStudies';
import Header from '../Global/header';
import styles from './home.scss';

class Home extends Component {
  state = {
    staticHeader: true
  }
  render() {
    return (
      <div id="caseStudyWrapper" className={styles.fullHeightContainer}>
        <Header staticHeader={this.state.staticHeader} />
        <CaseStudies />
      </div>
    );
  }
}

export default Home;
