import { connect } from 'react-redux';
import { fetchExperience } from '../../../actions/getExperienceData';
import Experience from '.';

const mapStateToProps = ({
  experienceData: {
    loading,
    data,
  },
}) => ({
  loading,
  data,
});

const mapDispatchToProps = dispatch => ({
  getExperienceData: values => dispatch(fetchExperience(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
