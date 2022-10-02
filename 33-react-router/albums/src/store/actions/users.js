import UsersApi from "../../pages/users/UsersApi";

export const ACTION_USERS_FETCH_LIST = 'fetchList';

export function fetchList() {
  return (dispatch) => {
    UsersApi.getList()
      .then((list) => {
        dispatch({ type: ACTION_USERS_FETCH_LIST, payload: list });
    });
  }
}