import PhotosApi from "../../pages/photos/PhotosApi";

export const ACTION_PHOTOS_FETCH_LIST = 'fetchList';

export function fetchList(id) {
  return (dispatch) => {
    PhotosApi.getList(id)
      .then((list) => {
        dispatch({ type: ACTION_PHOTOS_FETCH_LIST, payload: list });
    });
  }
}