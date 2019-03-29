/* global document fetch */
import React, { Component } from 'react';
import styles from './skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    this.getSkills();
  }

  getSkills() {
    const query = '/api/skills/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        skills: json
      });
    });
  }

  render() {
    const { skills } = this.state;
    return (
      <div>
        <h3 className="sectionHeader">Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map((skill, key) => <li className={styles.skillsItem} key={key}>{skill.fields.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Skills;
