import { createStore } from "redux";
import {
    ACTION_COUNTER_SET,
    ACTION_COUNTER_INCREMENT,
    ACTION_COUNTER_DECREMENT
} from '../redux-react/src/store/actions/counter'

const INITIAL_STATE = {
    counts: 0,
    todos: [
        { "title": "default 1", "status": true, "id": "1" },
        { "title": "default 2", "status": false, "id": "2" }
    ]
};

function rootReducer(state = INITIAL_STATE, { type, payload}) {
    console.log(state, type);

    switch (type) {
        case ACTION_COUNTER_SET:
            return { ...state, counts: payload };
        case ACTION_COUNTER_INCREMENT:
            return { ...state, counts: state.counts + 1};
        case ACTION_COUNTER_DECREMENT:
            return { ...state, counts: state.counts - 1 };
        default: return state;
    }
}



let store = createStore(rootReducer);

store.dispatch(set(8));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


console.log( store.getState() );