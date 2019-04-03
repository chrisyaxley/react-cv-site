import { connect } from 'react-redux';
import { fetchInterests } from '../../../actions/getInterestsData';
import Interests from '.';

const mapStateToProps = ({
  interestsData: {
    loading,
    data,
  },
}) => ({
  loading,
  data,
});

const mapDispatchToProps = dispatch => ({
  getInterestsData: values => dispatch(fetchInterests(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Interests);
