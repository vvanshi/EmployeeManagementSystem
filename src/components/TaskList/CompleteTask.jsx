import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-violet-600 rounded-xl'>
      <div className='flex justify-between items-center'>     
      <h3 className='bg-red-400 text-sm px-3 border-white border-1 font-semibold py-1 rounded'>{data.category}</h3>
      <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.title} </h2>
      <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-9'>
            <button className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition'>Complete</button>
          </div>
      </div>
  )
}

export default CompleteTask
