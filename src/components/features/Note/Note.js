import React from 'react';
import PropTypes from 'prop-types';

const Note = ({id}) => {
  return (
    <div>{id}</div>
  );
};

Note.propTypes = {
  id: PropTypes.string,
};

export default Note;
