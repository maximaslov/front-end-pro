import React from 'react';
import './App.css';
import Todo from './Todo';

function App() {

  const INITIAL_TODO_LIST = [
    { "title": "default 1", "status": true, "id": "1" },
    { "title": "default 2", "status": false, "id": "2" }
  ];
  
  return <div className="App">
    <Todo defaultMessage={'Hello'} defaultList={INITIAL_TODO_LIST} />
  </div>;
}

  export default App;