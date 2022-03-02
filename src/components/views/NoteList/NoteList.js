import React from 'react';
import PropTypes from 'prop-types';

import List from '../../features/List/ListContainer';
import Form from '../../features/Form/FormContainer';


const NoteList  = () => {

  return (
    <div>
      <Form />
      <List />
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array,
};


export default NoteList;
