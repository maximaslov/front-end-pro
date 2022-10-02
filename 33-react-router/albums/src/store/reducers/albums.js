import { ACTION_ALBUMS_FETCH_LIST } from "../actions/albums";

const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_ALBUMS_FETCH_LIST:
            return payload
        default:
            return state;
    }
}