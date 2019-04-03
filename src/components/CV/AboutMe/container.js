import { connect } from 'react-redux';
import { fetchAboutMe } from '../../../actions/getAboutMeData';
import AboutMe from '.';

const mapStateToProps = ({
  aboutMeData: {
    loading,
    data,
  },
}) => ({
  loading,
  data,
});

const mapDispatchToProps = dispatch => ({
  getAboutMeData: values => dispatch(fetchAboutMe(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
