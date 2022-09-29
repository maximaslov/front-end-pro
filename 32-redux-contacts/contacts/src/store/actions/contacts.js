import ContactsApi from '../../Contacts/ContactsApi';

export const ACTION_CONTACT_DELETE = 'remove';
export const ACTION_CONTACT_ADD = 'add';
export const ACTION_CONTACT_FETCH_LIST = 'fetchList';
export const ACTION_CONTACT_UPDATE = 'update';
export const ACTION_CONTACT_EDIT = 'edit';

export function edit(contact) {
  return { type: ACTION_CONTACT_EDIT, payload: contact }
}

export function saveContact(contact) {
  return dispatch => {
    if (contact.id) {
      ContactsApi.update(contact.id, contact)
        .then((newContat) => {
          dispatch({ type: ACTION_CONTACT_UPDATE, payload: newContat });
        });
    } else {
      ContactsApi.create(contact)
        .then((newContat) => {
          dispatch({ type: ACTION_CONTACT_ADD, payload: newContat });
      });
    }
  }
}

export function remove(id) {
  return dispatch => {
    ContactsApi.delete(id)
      .then(() => {
        dispatch({ type: ACTION_CONTACT_DELETE, payload: id });
      });
  }
}

export function fetchList() {
  return (dispatch) => {
    ContactsApi.getList()
      .then((list) => {
        dispatch({ type: ACTION_CONTACT_FETCH_LIST, payload: list });
    });
  }
}