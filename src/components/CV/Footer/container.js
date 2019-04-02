import { connect } from 'react-redux';
import { fetchLinks } from '../../../actions/getLinksData';
import Footer from '.';

const mapStateToProps = ({
  linksData: {
    loading,
    data,
  },
}) => ({
  loading,
  data,
});

const mapDispatchToProps = dispatch => ({
  getLinksData: values => dispatch(fetchLinks(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
