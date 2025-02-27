import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

   const[userData,setUserData]=useContext(AuthContext);


  const[taskTile,setTaskTitle]=useState('');
  const[taskDescription,setTaskDescription]=useState('');
  const[taskDate,setTaskDate]=useState('');
  const[assignTo,setAssignTo]=useState('');
  const[taskCategory,setTaskCategory]=useState('');


 const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title: taskTile,
    description: taskDescription,
    date: taskDate,
    category: taskCategory,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  // Create a new userData array instead of modifying existing state
  const updatedUserData = userData.map((user) => {
    if (user.name === assignTo) {
      return {
        ...user,
        tasks: [...user.tasks, newTask], // Append new task
        taskCount: {
          ...user.taskCount,
          newTask: user.taskCount.newTask + 1,
        },
      };
    }
    return user;
  });

  setUserData(updatedUserData); // ✅ Update state correctly

  // Clear input fields after submission
  setAssignTo('');
  setTaskCategory('');
  setTaskDate('');
  setTaskDescription('');
  setTaskTitle('');
};


  return (
    <div>
          <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
          value={taskTile}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4  text-white' type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4  text-white' type='date' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input
          value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4  text-white' type="text"placeholder='Employee Name'/>
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input
          value={taskCategory}
          onChange={(e)=>{
            setTaskCategory(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4  text-white' type="text" placeholder='design, dev, etc'/>
          </div>
          </div>
          
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
  value={taskDescription} 
  onChange={(e) => setTaskDescription(e.target.value)} 
  className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent text-white border-gray-400 border-[1px]'
></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
