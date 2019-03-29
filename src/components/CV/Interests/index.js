/* global document fetch */
import React, { Component } from 'react';
import Interest from './interest';
import styles from './interests.scss';

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: []
    };
  }

  componentDidMount() {
    this.getInterests();
  }

  getInterests() {
    const query = '/api/interests/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        interests: json
      });
    });
  }

  render() {
    const { interests } = this.state;
    return (
      <section className={styles.interests}>
        <h3 className="sectionHeader">Interests</h3>
        <div className={styles.interestsList}>
          {interests.map((interest, key) => <Interest key={key} fields={interest.fields} />)}
        </div>
      </section>
    );
  }
}

export default Interests;
