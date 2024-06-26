import React, { useState } from 'react';
import './home.css';

function Home() {


  return (

    <div className="container-todo">
        <h1 className='Heading'>To Do App 🎯🤩</h1>
      <div className="todo-app">
       
        
      </div>
      <div className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task"
          />
          <select className='select-category'>
              <option>Select Category</option>
              <option >Work</option>
            <option >Personal</option>
            <option >Shopping</option>
            <option>Hospital</option>
            <option>Grocery</option>
            <option >Others</option>
              
          </select>
          <button className="todo-button">
            Add
          </button>
        </div>
    </div>
  );
}

export default Home;
