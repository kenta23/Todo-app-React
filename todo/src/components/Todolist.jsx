import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'


const Todolist = ({ text, setTodo, todo, item }) => {
   
  const deleteContent = () => {
      setTodo(todo.filter((element) => element.id !== item.id))
   }
  const completedHandler = () => {
    setTodo(todo.map(items => {
      if(items.id === item.id) {
          return {
                 ...items,
                 completed: !items.completed 
                }
      }
      return items;
    }))

  }
  
  return (
  <div className='flex flex-row justify-between px-8 items-center py-3 w-auto '>
    <li className='mb-4 text-medium bg-white border border-slate-500 ml-10 mt-2 rounded-md flex justify-between items-center px-3 h-[55px] flex-row w-[320px] sm:w-[520px]'>
          <span className={`${item.completed ? 'line-through opacity-50' : ''}`}>{text}</span> 
      <div className='gap-4 flex justify-between items-center w-auto '>
        <button onClick={completedHandler} className='w-[32px] text-green-500 text-3xl h-[32px]'>
           <AiOutlineCheckCircle />
        </button>
        <button className='w-[32px] h-[32px] text-red-600 text-3xl' onClick={deleteContent}>
           <BsTrashFill />
        </button>
      </div>
   </li>
    </div>
  )
}

export default Todolist