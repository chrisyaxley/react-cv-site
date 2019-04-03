import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './skills.scss';

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getSkillsData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getSkillsData();
  }

  render() {
    const {
      loading, data,
    } = this.props;

    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Skills / Tech</h3>
        <ul className={styles.skillsList}>
          {!loading && data.map(skill => <li className={styles.skillsItem} key={skill.sys.id}>{skill.fields.name}</li>)}
        </ul>
      </section>
    );
  }
}

export default Skills;
