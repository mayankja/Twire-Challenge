import { connect } from 'react-redux';
import Leaderbord from '../components';
import { requestLeaderboardData } from '../actions';

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps ={
    requestLeaderboardData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderbord);
