import React, { Component } from 'react';
import Job from './Job';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
      loading: true
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
        loading: false
      });
    });
  }

  render() {
    const { positions, loading } = this.state;
    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Experience</h3>
        {positions.map(position => <Job key={position.sys.id} fields={position.fields} />)}
      </section>
    );
  }
}

export default Experience;
