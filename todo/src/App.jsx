import React from "react"
import Form from "./components/Form"
import { useState, useEffect } from "react";
import Todolist from "./components/Todolist";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const [Status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
      filterHandler() /*call the function*/
  }, [todo, Status])

  const filterHandler = () => {
    switch(Status) {
       case 'completed':
          setFilteredTodos(todo.filter(todos => todos.completed === true))
          break;
       case 'uncompleted':
          setFilteredTodos(todo.filter(todos => todos.completed === false))
          break;
       default:
          setFilteredTodos(todo)
    }
  }

  //Save to local
  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todo));
  };
  const getLocal = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([])) //returns empty array if we dont create any todos
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodo(todoLocal)
    }
  }

  console.log(getLocal)

  return (
    <div className="App overflow-x-hidden font-poppins">
        <h1 className="text-center text-4xl mt-10 font-medium text-white">Todo List</h1>

      <Form 
         value={input}
         input={input}
         setTextInput={setInput}
         todo={todo}
         setTodo={setTodo}
         setStatus={setStatus}
         />    

      <Todo 
          todo={todo} 
          setTodo={setTodo}
          filteredTodos={filteredTodos}/>
    </div>
    
  )
}

export default App
