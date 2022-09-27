import {
  ACTION_TODO_DELETE,
  ACTION_TODO_CHANGE_STATUS,
  ACTION_TODO_ADD
} from "../actions/todo";

const INITIAL_STATE = {
  counts: 0,
  loading: false,
  todos: [
    {"title": "default 1", "status": true, "id": "1"},
    {"title": "default 2", "status": false, "id": "2"},
  ],
};

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TODO_DELETE:
      return {
        ...state, todos: state.todos.filter(todo => todo.id !== payload)
      };
    case ACTION_TODO_CHANGE_STATUS:
      return {
        ...state, todos: state.todos.map(todo => todo.id === payload.id ? payload : todo)
      };
    case ACTION_TODO_ADD:
      return {
        ...state, todos: [...state.todos, payload]
      };
    default:
      return state;
  }
}