
import './home.css';
import Todocard from "./../../components/ToDoCard/todocard"
import { useState } from 'react';
import toast ,{Toaster } from "react-hot-toast"

function Home() {
     /*const TodoList=[
     
     ]*/
  const [todoList , setTodoList]= useState([
    "Buy Groceries"
  ])
  const [newTask , setNewTask]=useState("")
  return (

    <div className="container-todo">
        <h1 className='Heading'>To Do App 🎯🤩</h1>
      <div className="todo-app">
      {todoList.map((todoItem, i) => (
          <Todocard key={i} todoItem={`${todoItem} `} />
        ))}
        {
          todoList.length===0?<p style={{textAlign:"center"}}>No tasks to show ..... Add new tasks  </p> : null
        }
        
      </div>
      <div className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
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
          <button className="todo-button"
           onClick={()=>{
            if(newTask==""){
              toast.error("task is empty.")
              return
            }
            setTodoList([...todoList,newTask])
            setNewTask("")
            toast.success("Task added successfully.")
            
           }}
          >
            Add
          </button>
        </div>
        <Toaster/>
    </div>
   
  );
}

export default Home;
