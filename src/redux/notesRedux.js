/* selectors */
export const getAllActive = ({ notes }) => notes.filter(note => !note.removed);
export const getAll = ({ notes }) => notes;

/* action name creator */
const reducerName = 'notes';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_NOTE = createActionName('ADD_NOTE');
const DELETE_NOTE = createActionName('DELETE_NOTE');

/* action creators */
export const deleteNote = payload => ({ payload, type: DELETE_NOTE });
export const addNote = payload => ({ payload, type: ADD_NOTE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case DELETE_NOTE:
      statePart.find(note => note.id.toString() === action.payload).removed = true;
      return [
        ...statePart,
      ];
    case ADD_NOTE:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
