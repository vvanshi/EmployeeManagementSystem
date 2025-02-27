import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-cyan-500 rounded-xl shadow-lg'>
      <div className='flex justify-between items-center'>     
        <h3 className='bg-red-400 text-white text-sm px-3 border border-white font-semibold py-1 rounded'>
          {data.category}
        </h3>
        <h4 className='font-bold text-sm text-white'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.title}</h2>
      <p className='text-sm mt-2 text-white'>{data.description}</p>
      <div className='mt-9'>
        <button className='w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition'>
          Failed Task
        </button>
      </div>
    </div>
  )
}

export default FailedTask
