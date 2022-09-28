import {
  ACTION_CONTACT_DELETE,
  ACTION_CONTACT_ADD,
  ACTION_CONTACT_FETCH_LIST,
  ACTION_CONTACT_UPDATE,
} from "../actions/contacts";

const INITIAL_STATE = [
  { "firstname": "Daron222", "lastname": "Orn", "number": "70975", "id": "61" },
  { "firstname": "fdfdf", "lastname": "fdfd", "number": "3434", "id": "62" },
];

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_CONTACT_FETCH_LIST:
      return [...payload];
    case ACTION_CONTACT_UPDATE:
      return state.map(contact => contact.id === payload.id ? payload : contact);
    case ACTION_CONTACT_DELETE:
      return state.filter(contact => contact.id !== payload);
    case ACTION_CONTACT_ADD:
      return [...state, payload];
    default:
      return state;
  }
}