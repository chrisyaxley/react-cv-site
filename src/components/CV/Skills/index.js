/* global document fetch */
import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getSkills();
  }

  getSkills() {
    console.log('json');
    const query = '/api/skills/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        skills: json
      });
    });
  }

  render() {
    const { skills } = this.state;
    console.log(skills);
    return (
      <div>
        <h3 className="sectionHeader">Skills</h3>
        <ul>
          {skills.map((skill, key) => <li key={key}>{skill.fields.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Skills;
