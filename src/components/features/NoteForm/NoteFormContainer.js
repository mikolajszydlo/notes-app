import { connect } from 'react-redux';
import { getAll, addNote } from '../../../redux/notesRedux';

import NoteForm from './NoteForm';

const mapStateToProps = state => ({
  notes: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addNote: payload => dispatch(addNote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
