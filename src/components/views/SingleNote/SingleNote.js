import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Note from '../../features/Note/Note';
import Button from '../../common/Button/ButtonContainer';

const SingleNote = ({notes}) => {
  let params = useParams();

  return (
    <div>
      <Button variant='back' text='Go back'/>
      <Button variant='delete' text='Delete note' noteId={params.id}/>
      <Note note={notes.find(note => note.id.toString() === params.id)}/>
    </div>
  );
};

SingleNote.propTypes = {
  notes: PropTypes.array,
};

export default SingleNote;
