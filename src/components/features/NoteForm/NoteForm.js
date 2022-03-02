import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from './NoteForm.module.scss';

const NoteForm = ({ notes, addNote }) => {
  const noteInput = React.createRef();

  const addNewNote = (event) => {
    event.preventDefault();
    const date = Date.now();

    addNote({
      id: notes.length + 1,
      content: noteInput.current.value,
      date: parseInt(date),
      removed: false,
    });

    noteInput.current.value = '';
  };

  return (
    <Form className={styles.form} onSubmit={addNewNote}>
      <Row>
        <Form.Label>Note</Form.Label>
      </Row>
      <Row>
        <textarea className={styles.textArea} ref={noteInput} type="text" rows="5" resize="none" placeholder="Note text" />
      </Row>
      <Row>
        <Button className={styles.button} variant="outline-secondary" type="submit">Add note</Button>
      </Row>
    </Form>
  );
};

NoteForm.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
};

export default NoteForm;
