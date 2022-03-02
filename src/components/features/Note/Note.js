import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import ReactMarkdown from 'react-markdown';

const Note = ({note}) => {
  const {date} = note;
  const convertedDate = new Date(date);

  const formatedDate = `${convertedDate.getFullYear()}/${(convertedDate.getMonth() + 1).toString().padStart(2, '0')}/${(convertedDate.getDate()).toString().padStart(2, '0')}`;
  return (
    <div>
      <ReactMarkdown>
        {note.content}
      </ReactMarkdown>
      <Link
        to={`/${note.id}`}
        key={shortid.generate()}
      >
        {formatedDate}
      </Link>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
};

export default Note;
