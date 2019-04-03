import { connect } from 'react-redux';
import { fetchSkills } from '../../../actions/getSkillsData';
import Skills from '.';

const mapStateToProps = ({
  skillsData: {
    loading,
    data,
  },
}) => ({
  loading,
  data,
});

const mapDispatchToProps = dispatch => ({
  getSkillsData: values => dispatch(fetchSkills(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
