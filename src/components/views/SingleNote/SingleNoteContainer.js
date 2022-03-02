import { connect } from 'react-redux';
import { getAllActive } from '../../../redux/notesRedux';
import SingleNote from './SingleNote';

const mapStateToProps = state => ({
  notes: getAllActive(state),
});

export default connect(mapStateToProps)(SingleNote);

