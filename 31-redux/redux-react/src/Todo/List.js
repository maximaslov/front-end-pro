import React from "react";
import {useDispatch} from "react-redux";
import { remove, editStatus } from "../store/actions/todo";

export default function List({ todos, onEdit, onDelete }) {
  const dispatch = useDispatch();

  function onEditBtnClick(e, todo) {
    e.stopPropagation();

    // dispatch(remove(todo.id));
    // onEdit(todo);
  }

  function onDeleteBtnClick(e, todo) {
    e.stopPropagation();

    dispatch(remove(todo.id));
  }
  
  // function onListItemClick(e, todo) {
  //   e.stopPropagation();
  
  //   if (todo.status) {
  //     onItem(todo.id, todo.status = false)
  //   } else {
  //     onItem(todo.id, todo.status = true)
  //   }
  // }

  function itemClassName(todo) {
    if (todo.status === false) {
      return "todo-item"
    } else {
      return "todo-item done"
    }
  }

  //Просто дать обычный класс, а добавлять класс done уже дом элементу??

  function onElemClick(e, todo) {
    e.stopPropagation();

    dispatch(editStatus(todo));
    console.log(todo.status);
  }

  return (
    <ul id="todoList">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={itemClassName(todo)}
          onClick={e => onElemClick(e, todo)}
        >
          {todo.title}
          <button
            className="edit-button"
            onClick={e => onEditBtnClick(e, todo)}
          >Edit</button>
          <button
            className="remove-button"
            onClick={e => onDeleteBtnClick(e, todo)}
          >Delete</button>
        </li>
      ))}
    </ul>
  );
}

