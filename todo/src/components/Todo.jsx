import React from 'react'
import Todolist from './Todolist'

const Todo = ({ todo, setTodo, filteredTodos }) => {
  return (
    <section className='todo-container flex justify-center mt-[100px] flex-col items-center  p-10'>
      <ul className='todo-list flex flex-col justify-center items-center'>
       {filteredTodos.map((item) => (
          <Todolist 
            text={item.text} 
            key={item.id} 
            setTodo={setTodo} 
            item={item}
            todo={todo}
          />
       ))}
      </ul>
   </section>
  )
}

export default Todo