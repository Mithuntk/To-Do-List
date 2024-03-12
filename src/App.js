import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos]=useState([]);
  const [toDo,setTodo]=useState('');
  const currentDate = new Date(); // Get the current date
  const options = { weekday: 'long' }; // Define options to format the date as the full name of the day
  const currentDay = currentDate.toLocaleDateString('en-US', options);
  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      const newTodo = {
        text: toDo,
        date: new Date().toLocaleDateString() // Get the current date
      };
      setTodos([...toDos, toDo]);
      setTodo(''); // Clear the input field after adding the todo
    }
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
      <input 
          value={toDo} 
          onChange={(e) => setTodo(e.target.value)} 
          type="text" 
          placeholder="🖊️ Add item..." 
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      {toDos.map((value, index) => ( // Explicitly defining 'index' variable here
        <div key={index} className="todos">
          <div className="todo">
            <div className="left">
              <input type="checkbox" id="lst" />
              <p id="do">{value}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteTodo(index)} className="fas fa-times"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;