import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

class Experience extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getExperienceData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getExperienceData();
  }

  dateOrder(a, b) {
    let comparison = 0;
    if (a.fields.employedTo < b.fields.employedTo) {
      comparison = 1;
    } else if (a.fields.employedTo > b.fields.employedTo) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    const {
      loading, data,
    } = this.props;
    console.log(data.sort(this.dateOrder));
    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Experience</h3>
        {!loading && data.sort(this.dateOrder).map(position => <Job key={position.sys.id} fields={position.fields} />)}
      </section>
    );
  }
}

export default Experience;
