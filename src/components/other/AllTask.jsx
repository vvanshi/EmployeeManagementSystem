import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const AllTask = () => {

const authData=useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] mt-5 rounded p-5'>
    <div className='bg-rose-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-xl font-extrabold'>Employee Name</h2>
          <h3 className='w-1/5 text-xl font-extrabold'>New Task</h3>
          <h5 className='w-1/5 text-xl font-extrabold'>Active Task</h5>
          <h5 className='w-1/5 text-xl font-extrabold'>Completed Task</h5>
          <h5 className='w-1/5 text-xl font-extrabold'>Failed Task</h5>
        </div>

        <div className=''>
        {authData.employees.map((e,idx)=>{
          return  (<div key={idx} className='bg-blue-300 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-xl font-extrabold'>{e.name}</h2>
          <h3 className='w-1/5 text-blue-600 text-xl font-extrabold'>{e.taskCount.newTask}</h3>
          <h3 className='w-1/5 text-yellow-600 text-xl font-extrabold'>{e.taskCount.active}</h3>
          <h5 className='w-1/5 text-green-600 text-xl font-extrabold'>{e.taskCount.completed}</h5>
          <h5 className='w-1/5 text-red-600 text-xl font-extrabold'>{e.taskCount.failed}</h5>
        </div>)
         })}
        </div>
    </div>
  )
}

export default AllTask
