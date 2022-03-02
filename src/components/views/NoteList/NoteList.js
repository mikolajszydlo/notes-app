import React from 'react';
import PropTypes from 'prop-types';

import List from '../../features/List/ListContainer';
import NoteForm from '../../features/NoteForm/NoteFormContainer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const NoteList  = () => {

  return (
    <Container>
      <Row>
        <NoteForm />
      </Row>
      <Row>
        <List />
      </Row>
    </Container>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array,
};


export default NoteList;
