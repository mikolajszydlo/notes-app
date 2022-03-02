import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../features/Note/Note';

const List = ({notes}) => {
  return (
    <div>
      <h2>Latest notes</h2>
      {notes.sort((a, b) => b.date - a.date).map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

List.propTypes = {
  notes: PropTypes.array,
};

export default List;
