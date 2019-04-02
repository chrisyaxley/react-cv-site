import React, { Component } from 'react';
import Interest from './interest';
import styles from './interests.scss';

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getInterests();
  }

  getInterests() {
    const query = '/api/interests/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        interests: json,
        loading: false
      });
    });
  }

  render() {
    const { interests, loading } = this.state;
    return (
      <section className={`${styles.interests} fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Interests</h3>
        <div className={styles.interestsList}>
          {interests.map(interest => <Interest key={interest.sys.id} fields={interest.fields} />)}
        </div>
      </section>
    );
  }
}

export default Interests;
