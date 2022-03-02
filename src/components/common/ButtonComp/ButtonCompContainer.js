import { connect } from 'react-redux';
import { deleteNote } from '../../../redux/notesRedux';
import ButtonComp from './ButtonComp';

const mapDispatchToProps = dispatch => ({
  deleteNote: payload => dispatch(deleteNote(payload)),
});

export default connect(null, mapDispatchToProps)(ButtonComp);
