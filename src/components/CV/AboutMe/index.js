import React, { Component } from 'react';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: {},
      loading: true
    };
  }

  componentDidMount() {
    this.getAboutMe();
  }

  getAboutMe() {
    const query = '/api/aboutMe/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        aboutMe: json[0].fields,
        loading: false
      });
    });
  }

  render() {
    const { aboutMe, loading } = this.state;
    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">About me</h3>
        <p>{aboutMe.text}</p>
      </section>
    );
  }
}

export default AboutMe;
