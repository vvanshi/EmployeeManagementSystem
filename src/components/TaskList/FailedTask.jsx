import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='h-full w-[300px] m-2 p-5 bg-gradient-to-r from-red-700  to-red-500 border-black border-2 rounded-xl shadow-lg'>
      <div className='flex justify-between items-center'>     
        <h3 className='bg-white text-black text-sm px-3 border border-white font-semibold py-1 rounded'>
          {data.category}
        </h3>
        <h4 className='font-bold text-sm text-black'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.title}</h2>
      <p className='text-sm mt-2 text-black'>{data.description}</p>
      <div className='mt-9'>
        <button className='w-full bg-white text-black py-2 rounded-lg border-1 border-black hover:bg-red-100 transition'>
          Failed Task
        </button>
      </div>
    </div>
  )
}

export default FailedTask
