import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import ReactMarkdown from 'react-markdown';

import ButtonComp from '../../common/ButtonComp/ButtonCompContainer';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './Note.module.scss';

const Note = ({note, dashboardView}) => {
  const {date} = note;
  const convertedDate = new Date(date);

  const formatedDate = `${convertedDate.getFullYear()}/${(convertedDate.getMonth() + 1).toString().padStart(2, '0')}/${(convertedDate.getDate()).toString().padStart(2, '0')}`;
  return (
    <Row className={styles.row}>
      <Col xs={dashboardView ? 10 : 12}>
        <Row>
          <ReactMarkdown className={styles.noteContent}>
            {note.content}
          </ReactMarkdown>
        </Row>
        <Row>
          <Link
            key={shortid.generate()}
            to={`/${note.id}`}
            className={`${styles.link} ${dashboardView ? styles.linkLeft : styles.linkRight} text-secondary`}
          >
            {formatedDate}
          </Link>
        </Row>
      </Col>
      <Col className={dashboardView ? styles.active : styles.hidden} xs={2}>
        <ButtonComp variant='delete' text='Delete note' noteId={note.id.toString()}/>
      </Col>
    </Row>
  );
};

Note.propTypes = {
  note: PropTypes.object,
  dashboardView: PropTypes.bool,
};

export default Note;
