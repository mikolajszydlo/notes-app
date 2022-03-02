import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Note from '../../features/Note/Note';
import ButtonComp from '../../common/ButtonComp/ButtonCompContainer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const SingleNote = ({notes}) => {
  let params = useParams();

  return (
    <Container>
      <Row className="my-3 justify-content-between">
        <ButtonComp text="Go back"/>
        <ButtonComp variant="delete" text="Delete note" noteId={params.id}/>
      </Row>
      <Note note={notes.find(note => note.id.toString() === params.id)} />
    </Container>
  );
};

SingleNote.propTypes = {
  notes: PropTypes.array,
};

export default SingleNote;
