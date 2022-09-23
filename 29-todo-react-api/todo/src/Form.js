import React, { useState } from 'react';

export default function Form({ editTodo, onSubmit, defaultMessage }) {
  const [message, setMessage] = useState(editTodo?.title ?? defaultMessage);

  function onFormSubmit(e) {
    e.preventDefault();

    const newTodo = {
      "status": false,
      ...editTodo,
      "title": message,
    };

    onSubmit(newTodo);

    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
      <form
          onSubmit={onFormSubmit}
      >
      <input
        value={message}
        onChange={onMessageChange}
        className="list__text"
        type="text"
        placeholder="Enter item"
      />
      <button>Add to the list</button>
    </form>
  )
}
