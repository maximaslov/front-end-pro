import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [message, setMessage] = useState('');
  const [items, setItem] = useState([
    'XXX',
    'YYY',
    'QQQ'
  ]);

  function onAddBtnClick() {

    setItem([...items, message]);

    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <ul className="list__items">
        {items.map((item, i) => <li key={i}>{ item }</li>)}
      </ul>
      <div className="list__input">
        <input value={message} onChange={onMessageChange} className="list__text" type="text" placeholder ="Enter item" />
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
