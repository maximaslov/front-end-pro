import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, editStatus } from "../store/actions/todo";
import style from "../todo.module.css";

export default function List() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  function onElemClick(e, todo) {
    e.stopPropagation();

    todo.status = !todo.status

    dispatch(editStatus(todo));
  };

  function onDeleteBtnClick(e, todo) {
    e.stopPropagation();

    dispatch(remove(todo.id));
  };

  return (
    <>
      <ul id="todoList">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.status ? style.done : style.todo}
            onClick={e => onElemClick(e, todo)}
          >
            {todo.title}
            <button
              className="remove-button"
              onClick={e => onDeleteBtnClick(e, todo)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

