import React from 'react';
import List from './List';
import Form from './Form';
import useTodo from './useTodo';

export const CURRENT_TODO = {
    "title": '',
    "status": false,
  }

export default function Todo({ defaultMessage, defaultList }) {
  const { error, todos, onTodoFormSubmit, onDelete, onItem, setEditTodo, editTodo} = useTodo(defaultList)
  if (error) {
    return <div>{ error }</div>
  }

  return (
    <>
      <List
        todos={todos}
        onEdit={setEditTodo}
        onDelete={onDelete}
        onItem={onItem}
      />
      
      <Form
        key={editTodo?.id}
        editTodo={editTodo}
        onSubmit={onTodoFormSubmit}
        defaultMessage={defaultMessage}
      />
      
    </>

  )
}