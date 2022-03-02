import { connect } from 'react-redux';
import { getAll, addNote } from '../../../redux/notesRedux';

import Form from './Form';

const mapStateToProps = state => ({
  notes: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addNote: payload => dispatch(addNote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
