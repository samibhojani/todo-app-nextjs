"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState();
  const [desc, setDesc] = useState();

  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, {task, desc}]);

    setTask("");
    setDesc("");
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    let removedTask = copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h1 className='text-center flex justify-center'>No Tasks Available</h1>;


    if(mainTask.length > 0) {
      renderTask = mainTask.map((t, i) => {

        return <li key={i} className='flex items-center justify-between'> 
                <div className='w-2/3'>
                  <h4 className='text-2xl font-semibold'>{t.task}</h4>
                  <p className='text-lg font-light'>{t.desc}</p>
                </div>
                <button 
                  onClick={() => {
                    deleteHandler(i)
                  }}
                className='bg-red-500 font-bold text-white text-bold uppercase px-4 py-2 rounded'>Delete</button>
                </li>
      })
    
    }

  return (
    <div>
      <>
      <h1 className='p-5 text-3xl font-bold bg-black text-white text-bold text-center'>Sami's Todo List</h1>
      <form onSubmit={submitHandler}>

        <input className='text-xl border-zinc-800 border-2 rounded m-8 px-4 py-2'
        placeholder='Enter task here' value={task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}>
        </input>

        <input className='text-xl border-zinc-800 border-2 rounded m-8 px-4 py-2'
         placeholder='Task Description'
         value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}>
        </input>

        <button className='bg-black text-2xl text-white font-bold text-center p-5 rounded'>
          Add Task
        </button>

      </form>
      
      <div className='p-8 bg-slate-200'>
        <ul>
          <li>
            {renderTask}
          </li>
        </ul>
      </div>
      </>
    </div>
  );
};

export default page
