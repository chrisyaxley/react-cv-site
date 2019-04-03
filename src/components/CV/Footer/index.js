import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './footer.scss';

class Footer extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getLinksData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getLinksData();
  }

  render() {
    const {
      loading, data,
    } = this.props;
    console.log(data);
    return (
      <footer className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        {!loading && data.map(link => (
          <div key={link.sys.id} className={styles.linkContainer}>
            <a href={link.fields.link} target="_blank" rel="noopener noreferrer">
              <img alt={link.fields.name} src={link.fields.icon.fields.file.url} />
              {link.fields.name}
            </a>
          </div>
        ))}
      </footer>
    );
  }
}

export default Footer;
