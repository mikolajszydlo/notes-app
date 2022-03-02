import { connect } from 'react-redux';
import List from './List';
import { getAllActive } from '../../../redux/notesRedux';

const mapStateToProps = state => ({
  notes: getAllActive(state),
});

export default connect(mapStateToProps)(List);
