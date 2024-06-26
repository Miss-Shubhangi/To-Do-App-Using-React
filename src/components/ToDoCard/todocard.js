import React from 'react'
import "./todocard.css"

function Todocard({todoItem}) {
  return (
    <div className="todo-card">
    <p className="todo-text">{todoItem}</p>
  </div>
  )
}

export default Todocard