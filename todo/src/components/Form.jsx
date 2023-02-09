import React, { } from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'

const Form = ({ input,setTextInput,todo,setTodo, setStatus }) => {
    const handleChange = (e) => {
        setTextInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([
            ...todo, 
            {text: input, completed: false, id: Math.random() * 1000} 
        ])
        setTextInput('')
    }
    const statusChange = (e) => {
        setStatus(e.target.value)
    }
   
  return (
     <form action="">
         <div className='flex md:flex-row flex-col gap-4 justify-center items-center mt-12 w-full'>
           <div className='relative flex items-center'>
               <input type="text" onChange={handleChange} name="" id="" className='md:w-[270px] w-[220px] h-[40px]'/>

                <button onClick={handleSubmit} className='absolute w-[35px] flex items-center justify-center transition-all duration-200 top-0 right-0 h-full hover:bg-orange-300 '>
                   <AiFillPlusSquare className='text-center z-[1] text-green-700 text-2xl cursor-pointer '/>
                </button>       
           </div> 
             
            <div className='relative'>
                <select onChange={statusChange} name="todo" id="" className='md:w-[270px] w-[220px] h-[40px] cursor-pointer outline-none text-green-700'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>  
                </select>       
            </div>
         </div>

     </form>
  )
}

export default Form