export const ACTION_TODO_DELETE = 'remove';
export const ACTION_TODO_CHANGE_STATUS = 'change';

export function remove(id) {
  return { type: ACTION_TODO_DELETE, payload: id };
}

export function editStatus(todo) {
  return { type: ACTION_TODO_CHANGE_STATUS, payload: todo };
}