/* global document fetch */
import React, { Component } from 'react';

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
    console.log(aboutMe.text);
    return (
      <div>
        <h3>About me</h3>
        <p>{aboutMe.text}</p>
      </div>
    );
  }
}

export default AboutMe;
