import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [msgInput, setMsgInput] = useState('');
  const [todoList, setTodoList] = useState([
    'XXX',
    'YYY',
    'QQQ'
  ]);

  function onAddBtnClick() {

    setTodoList([...todoList, msgInput]);

    setMsgInput('');
  }

  function onMessageChange(e) {
    setMsgInput(e.target.value);
  }

  return (
    <>
      <ul className="list__items">
        {todoList.map((item, i) => <li key={i}>{ item }</li>)}
      </ul>
      <div className="list__input">
        <input value={msgInput} onChange={onMessageChange} className="list__text" type="text" placeholder ="Enter item" />
        <button className="list__btn" onClick={onAddBtnClick}>Add to the list</button>
      </div>
    </>

  )
}

function App() {
  return <div className="App">
    <Todo />
  </div>;
}

export default App;
