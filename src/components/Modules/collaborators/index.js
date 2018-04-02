import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './collaborators.scss';

const { array } = PropTypes;

class Collaborators extends Component {

  static propTypes = {
    collaborators: array.isRequired
  }
  render() {
    const { collaborators } = this.props;
    return (
      <div className={styles.collaborators}>
        <h2>Collaborators</h2>
        {collaborators.map((collaborator, i) => (
          <p key={i}>{collaborator.role}: {collaborator.link ?
            <a target="_blank" rel="noopener noreferrer" href={collaborator.link}>{collaborator.name}</a>
            :
            collaborator.name}
          </p>
        ))}
      </div>
    );
  }
}

export default Collaborators;
