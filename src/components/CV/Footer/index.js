import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
    return (
      <footer className={`${styles.siteFooter} fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <section className={styles.socialLinks}>
          {!loading && data.map(link => (
            <a href={link.fields.link} key={link.sys.id} target="_blank" rel="noopener noreferrer">
              <img className={styles.linkIcon} alt={link.fields.name} src={link.fields.icon.fields.file.url} />
            </a>
          ))}
        </section>
        <div className={styles.copyright}>
          <p>{`© 2018-${moment().format('YYYY')} Chris Yaxley`}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
