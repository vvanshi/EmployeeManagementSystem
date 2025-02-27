import React from 'react'

const NewTask = ({data}) => {
  return (
    
       <div className='h-full w-[300px] p-5 flex-shrink-0 bg-green-900 rounded-xl'>
      <div className='flex justify-between items-center'>     
      <h3 className='bg-red-400 text-sm px-3 border-white border-1 font-semibold py-1 rounded'>{data.category}</h3>
      <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.title} </h2>
      <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-9'>
            <button className='bg-blue-400 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
          </div>
      </div>
    
  )
}

export default NewTask
