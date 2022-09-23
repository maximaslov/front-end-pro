import {
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_SET
} from "../actions/counter";
import { ACTION_TODO_DELETE, ACTION_TODO_CHANGE_STATUS } from "../actions/todo";

const INITIAL_STATE = {
  counts: 0,
  loading: false,
  todos: [
    {"title": "default 1", "status": true, "id": "1"},
    {"title": "default 2", "status": false, "id": "2"},
  ],
};

function changeStatus(todo) {
  if (todo.status) {
    todo.status = 'false'
  } else {
    todo.status = 'true';
  }
}

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_COUNTER_SET:
      return { ...state, counts: payload };
    case ACTION_COUNTER_INCREMENT:
      return { ...state, counts: state.counts + 1 };
    case ACTION_COUNTER_DECREMENT:
      return { ...state, counts: state.counts - 1 };
    case ACTION_TODO_DELETE:
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload) };
    case ACTION_TODO_CHANGE_STATUS:
      return {
        ...state, todos: state.todos.map((todo) => {
          if (todo === payload) {
            changeStatus(todo);
          }
        })
      };
    default:
      return state;
  }
}