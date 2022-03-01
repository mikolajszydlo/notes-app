import React from 'react';
import shortid from 'shortid';

import Note from '../../features/Note/Note';

const List = () => {
  return (
    <div>
      <h2>Latest notes</h2>
      {[...Array(3)].map((item, index) => (
        <Note key={shortid.generate()} id={index} />
      ))}
    </div>
  );
};

export default List;
