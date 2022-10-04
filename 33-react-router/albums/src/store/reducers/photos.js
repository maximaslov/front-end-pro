import { ACTION_PHOTOS_FETCH_LIST } from "../actions/photos";

const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_PHOTOS_FETCH_LIST:
            return payload
        default:
            return state;
    }
}