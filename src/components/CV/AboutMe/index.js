import React, { Component } from 'react';
import styles from './aboutMe.scss';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: {}
    };
  }

  componentDidMount() {
    this.getAboutMe();
  }

  getAboutMe() {
    const query = '/api/aboutMe/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        aboutMe: json[0].fields
      });
    });
  }

  render() {
    const { aboutMe } = this.state;
    return (
      <section className={styles.aboutMe}>
        <h3 className="sectionHeader">About me</h3>
        <p>{aboutMe.text}</p>
      </section>
    );
  }
}

export default AboutMe;
