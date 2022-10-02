import AlbumsApi from "../../pages/albums/AlbumsApi";

export const ACTION_ALBUMS_FETCH_LIST = 'fetchList';

export function fetchList(id) {
  return (dispatch) => {
    AlbumsApi.getList(id)
      .then((list) => {
        dispatch({ type: ACTION_ALBUMS_FETCH_LIST, payload: list });
    });
  }
}