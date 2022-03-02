import { connect } from 'react-redux';
import { deleteNote } from '../../../redux/notesRedux';
import Button from './Button';

const mapDispatchToProps = dispatch => ({
  deleteNote: payload => dispatch(deleteNote(payload)),
});

export default connect(null, mapDispatchToProps)(Button);
