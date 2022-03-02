import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../features/Note/Note';

import styles from './List.module.scss';

const List = ({notes}) => {
  return (
    <div>
      <h3 className={styles.title}>Latest notes</h3>
      {notes.sort((a, b) => b.date - a.date).map((note) => (
        <Note key={note.id} note={note} dashboardView={true}/>
      ))}
    </div>
  );
};

List.propTypes = {
  notes: PropTypes.array,
};

export default List;
