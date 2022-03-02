import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ notes, addNote }) => {
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
  };

  return (
    <div>
      <form onSubmit={addNewNote}>
        <h3>Note</h3>
        <input ref={noteInput} type="text" placeholder="Note text" />
        <button type="submit">Add note</button>
      </form>

    </div>
  );
};

Form.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
};

export default Form;
