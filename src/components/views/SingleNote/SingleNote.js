import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleNote = () => {
  let params = useParams();
  return (
    <h2>Single Note {params.id}</h2>
  );
};

SingleNote.propTypes = {
  id: PropTypes.string,
};

export default SingleNote;
