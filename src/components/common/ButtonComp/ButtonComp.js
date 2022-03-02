import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import styles from './ButtonComp.module.scss';

const ButtonComp = ({ variant, text, noteId, deleteNote }) => {
  const handleNoteDeletion = () => {
    deleteNote(noteId);
  };

  return (
    <Link
      className={styles.link}
      to="/"
    >
      <Button
        variant={variant === 'delete' ? 'danger' : 'outline-secondary' }
        type='button'
        onClick={() => variant === 'delete' && handleNoteDeletion()}
      >
        {text}
      </Button>
    </Link>
  );
};

ButtonComp.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  noteId: PropTypes.string,
  deleteNote: PropTypes.func,
};

export default ButtonComp;
