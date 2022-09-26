import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/actions/todo";

export default function Input() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  function id() {
    const id = Math.floor(Math.random() * 1000);
    if (todos.map(e => e.id !== id)) {
      return id;
    }
    return id()
  }
  
 Math.floor(Math.random() * 1000)
  function onAddBtnClick() {
    const newTodo = {
        "title": value,
        "status": false,
        "id": id()
        } 

    dispatch(add(newTodo));
    
    setValue('')
  }

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={onAddBtnClick}>Add</button>
    </>
  )
}