
import React from 'react'

const NewTask = ({data}) => {
  return (
    
       <div className='h-full w-[300px] m-2 p-5 flex-shrink-0  bg-gradient-to-r from-emerald-700  to-emerald-500 border-black border-2 rounded-xl'>
      <div className='flex justify-between items-center'>     
      <h3 className='bg-white text-sm px-3 border-white border-1 font-semibold py-1 rounded'>{data.category}</h3>
      <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.title} </h2>
      <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-7'>
          <button className='w-full bg-white text-black py-2 rounded-lg transition'>Accept Task</button>
          </div>
      </div>
    
  )
}

export default NewTask
