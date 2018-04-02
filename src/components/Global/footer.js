import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from './banner';
import styles from './footer.scss';

class Footer extends Component {
  static propTypes = {
    version: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: {
        vatNumber: null,
        companyNumber: null,
        socialLinks: []
      }
    };
  }
  componentDidMount() {
    this.getContactData();
  }
  componentWillReceiveProps() {
    this.getContactData();
  }
  getContactData = () => {
    const query = '/api/contact/';
    return fetch(query).then(response => response.json()).then((json) => {
      if (this.refs.footer) {
        this.setState({
          contactInfo: json,
        });
      }
    });
  };
  formatTelephone(nummberSpaced) {
    if (nummberSpaced) {
      const hyphenatedNumber = nummberSpaced.replace(/\s+/g, '-').replace(/[{()}]/g, '');
      return hyphenatedNumber;
    }
    return false;
  }
  render() {
    const { version } = this.props;
    const { contactInfo } = this.state;

    return (
      version === 'contact' ? (
        <div ref="footer">
          <footer className={styles.site_footer_contact}>
            <div className={styles.container + ' container'}>
              <div className={styles.legals}>
                <div className={styles.company}>
                  <span>Registered in England Company No. {contactInfo.companyNumber}.</span>
                  <span>VAT No. {contactInfo.vatNumber}.</span>
                </div>
                <div className={styles.copyright}>
                  <span>Copyright &copy; {new Date().getFullYear()} Studio Juice Ltd.</span>
                  <span>All Rights Reserved. <a target="_blank" rel="noopener noreferrer" href="/legal">Terms of Use</a>.</span>
                </div>
              </div>
            </div>
          </footer>
          <Banner />
        </div>
      ) : (
        <div ref="footer">
          <footer className={styles.site_footer}>
            <div className={styles.container + ' container'}>
              <div className={styles.address}>
                <address>
                  <span>{contactInfo.addressLine1}</span>
                  <span>{contactInfo.addressLine2}</span>
                  <span>{contactInfo.postCode}</span>
                </address>
                <a target="_blank" rel="noopener noreferrer" href={contactInfo.googleMapsLink}>Google Maps</a>
              </div>
              <div className={styles.contact}>
                <a href={'tel:' + this.formatTelephone(contactInfo.telephone)}>{contactInfo.telephone}</a>
                <a href={'mailto:' + contactInfo.contactEmail}>{contactInfo.contactEmail}</a>
              </div>
              <nav className={styles.social_nav}>
                <ul className={styles.nav_list}>
                  {contactInfo.socialLinks.map((network, key) =>
                    <li key={key}>
                      <a target="_blank" rel="noopener noreferrer" href={network.address}>{network.name}</a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </footer>
          <Banner />
        </div>
      )
    );
  }
}

export default Footer;
