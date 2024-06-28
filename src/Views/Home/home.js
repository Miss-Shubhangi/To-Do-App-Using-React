
import './home.css';
import Todocard from "./../../components/ToDoCard/todocard";
import { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';

function Home() {
  const [todoList, setTodoList] = useState([
    
  ]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  useEffect(()=>{
if(todoList.length===0) return

localStorage.setItem("todoList",JSON.stringify(todoList))
  }, [todoList])

  useEffect(()=>{
    const savedList =localStorage.getItem("todoList")
    if(savedList){
      setTodoList(JSON.parse(savedList))
    }

  },[])


function deleteTask(index) {
  Swal.fire({
    title: 'You done this task?',
    text: 'You want to delete this task!',
    icon: 'warning',
    showCancelButton: true,
    
  }).then((result) => {
    if (!result.isConfirmed) {
      return;
    }
    const newTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(newTodoList);
    toast.success("Task deleted successfully.");
  });
}


  return (
    <div className="container-todo">
      <h1 className="Heading">To Do App 🎯🤩</h1>
      <div className="todo-app">
        {todoList.map((todoItem, i) => (
          <Todocard key={i}index={i} task={todoItem.task} category={todoItem.category} deleteItem={deleteTask} />
        ))}
        {todoList.length === 0 ? (
          <p style={{ textAlign: "center" }}>No tasks to show ..... Add new tasks</p>
        ) : null}
      </div>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className="select-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">To be done </option>
          <option value="Day2">within 2 days</option>
          <option value="Day5">within 5 days</option>
          <option value="Day15">within 15 days</option>
          <option value="Day30">within 30 days</option>
          <option value="Day45">within 45 days</option>
          <option value="Anytime">Anytime</option>
        </select>
        <button
          className="todo-button"
          onClick={() => {
            if (newTask === "") {
              toast.error("Task is empty.");
              return;
            }
            if (category === "") {
              toast.error("Please select a deadline.");
              return;
            }
            setTodoList([...todoList, { task: newTask, category }]);
            setNewTask("");
            setCategory("");

            toast.success("Task added successfully.");
          }}
        >
          Add
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
