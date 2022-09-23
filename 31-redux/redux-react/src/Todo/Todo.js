import React, { useState } from "react";
import List from "./List";
import {useSelector} from "react-redux";


export default function Todo() {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);

  return (
    <>
      {loading && <div>Loading...</div>}

      <List
        todos={todos}
        // onEdit={setEditTodo}
        // onDelete={onDelete}
        // onItem={onItem}
      />
    </>
  )
}


 