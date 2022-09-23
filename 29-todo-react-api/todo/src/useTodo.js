import { useState, useEffect } from 'react';
import TodoApi from './ToDoApi';
import { CURRENT_TODO } from './Todo';

export default function useTodo(defaultList) {
  const [error, setError] = useState('');
  const [todos, setTodo] = useState(defaultList);
  const [editTodo, setEditTodo] = useState();
  
  function showError(e) {
    setError(e.message)
  }

  function updateItem(newTodo) {
    const newList = todos.map(todoItem => todoItem.id === newTodo.id ? newTodo : todoItem);
    return newList;
  }

  useEffect(() => {
    TodoApi.getList()
      .then(setTodo)
      .catch(showError);
  }, []);

  function onTodoFormSubmit(todo) {
    if (todo.id) {
    TodoApi.update(todo.id, todo)
      .then((newTodo) => {
        setTodo(updateItem(newTodo));
        setEditTodo(CURRENT_TODO);
        })
      .catch(showError);
    } else {
    TodoApi.create(todo)
      .then(newTodo => {
        setTodo([...todos, newTodo])
      })
      .catch(showError);
    }
  }

  function onDelete(id) {
    TodoApi.delete(id)
        .then((item) => {
            const newList = todos.filter(e => e.id !== item.id);
            
            setTodo([...newList])
        })
        .catch(showError);
  }
  
  function onItem(id, status) {
    TodoApi.update(id, { status })
      .then((newTodo) => {
        setTodo(updateItem(newTodo));
      })
      .catch(showError);
  }
    return { error, todos, onTodoFormSubmit, onDelete, onItem, setEditTodo, editTodo}
}