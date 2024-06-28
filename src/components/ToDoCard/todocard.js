
import React from 'react';
import './todocard.css';
import Trash from "./trash.png"

function Todocard({index, task, category ,deleteItem}) {

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
        <img
          src={Trash}
          className="delete-icon"
          onClick={()=>{
            deleteItem(index)
          }}
        />
      </div>
      
    </div>
  );
}

export default Todocard;
