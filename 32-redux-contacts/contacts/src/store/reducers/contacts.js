import {
  ACTION_CONTACT_DELETE,
  ACTION_CONTACT_ADD,
  ACTION_CONTACT_FETCH_LIST,
  ACTION_CONTACT_UPDATE,
  ACTION_CONTACT_EDIT,
} from "../actions/contacts";

const INITIAL_STATE = {
  editedContact: {},
  list: [
    { "firstname": "Daron222", "lastname": "Orn", "number": "70975", "id": "4390" },
    { "firstname": "fdfdf", "lastname": "fdfd", "number": "3434", "id": "6435446" },
  ],
}

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_CONTACT_FETCH_LIST:
      return { ...state, list: payload }
    case ACTION_CONTACT_EDIT:
      return { ...state, editedContact: payload }
    case ACTION_CONTACT_UPDATE:
      return {
        ...state, editedContact: {}, list: state.list.map(contact => contact.id === payload.id ? payload : contact)
      }
    case ACTION_CONTACT_DELETE:
      return { ...state, list: state.list.filter(contact => contact.id !== payload) }
    case ACTION_CONTACT_ADD:
      return { ...state, list: [...state.list, payload] }
    default:
      return state;
  }
}