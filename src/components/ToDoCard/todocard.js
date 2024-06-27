
import React from 'react';
import './todocard.css';

function Todocard({ task, category }) {

  const colorMap = {
    "Day2": "#FF0000", 
    "Day5": "#FFA500", 
    "Day15": "#FFFF00", 
    "Day30": "#008000", 
    "Day45": "#0000FF", 
    "Anytime": "#800080",
    "": "#FFFFFF" 
  };
 
  return (
    <div className="todo-card">
      <div className="circle" style={{ backgroundColor: colorMap[category] }}></div>
      <div className="todo-content">
        <p className="todo-text">{task}</p>
        <p className="todo-category" style={{color:colorMap[category]}}>{category}</p>
      </div>
    </div>
  );
}

export default Todocard;
