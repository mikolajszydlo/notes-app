import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ variant, text, noteId, deleteNote }) => {
  const handleNoteDeletion = () => {
    deleteNote(noteId);
  };

  return (
    <Link
      to="/">
      <button
        type="button"
        onClick={() => variant === 'delete' && handleNoteDeletion()}
      >
        {text}
      </button>
    </Link>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  noteId: PropTypes.string,
  deleteNote: PropTypes.func,
};

export default Button;
