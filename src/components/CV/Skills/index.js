import React, { Component } from 'react';
import styles from './skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getSkills();
  }

  getSkills() {
    const query = '/api/skills/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        skills: json,
        loading: false
      });
    });
  }

  render() {
    const { skills, loading } = this.state;
    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => <li className={styles.skillsItem} key={skill.sys.id}>{skill.fields.name}</li>)}
        </ul>
      </section>
    );
  }
}

export default Skills;
