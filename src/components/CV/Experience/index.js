/* global document fetch */
import React, { Component } from 'react';
import Job from './Job';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: []
    };
  }

  componentDidMount() {
    this.getPositions();
  }

  getPositions() {
    const query = '/api/positions/';
    return fetch(query).then(response => response.json()).then((json) => {
      this.setState({
        positions: json,
      });
    });
  }

  render() {
    const { positions } = this.state;
    return (
      <section>
        <h3 className="sectionHeader">Experience</h3>
        {positions.map((position, key) => <Job key={key} fields={position.fields} />)}
      </section>
    );
  }
}

export default Experience;
