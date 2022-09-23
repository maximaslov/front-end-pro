import React from 'react';

export default function List({ todos, onEdit, onDelete, onItem }) {
  function onEditBtnClick(e, todo) {
    e.stopPropagation()

    onEdit(todo);
  }
    
  function onDeleteBtnClick(e, todo) {
    e.stopPropagation();
    onDelete(todo.id);
  }
  
  function onListItemClick(e, todo) {
    e.stopPropagation();
  
    if (todo.status) {
      onItem(todo.id, todo.status = false)
    } else {
      onItem(todo.id, todo.status = true)
    }
  }

  function itemStatus(todo) {
    if (todo.status === false) {
      return "todo-item"
    } else {
      return "todo-item done"
    }
  }

  return (
    <ul className="list__items">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={itemStatus(todo)}
          onClick={e => onListItemClick(e, todo)}
        >
          { todo.title }
              <button
                  className='edit-button'
                  onClick={e => onEditBtnClick(e, todo)}
              >Edit</button>
              <button
                  className='remove-button'
                  onClick={e => onDeleteBtnClick(e, todo)}
              >Delete</button>
        </li>
        ))}
    </ul>
  )
}