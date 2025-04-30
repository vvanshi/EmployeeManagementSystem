import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
          <div className='h-full w-[300px] m-2 p-6 flex-shrink-0 bg-gradient-to-r from-emerald-700  to-emerald-500 border-black border-2 rounded-xl'>
      <div className='flex justify-between items-center'>     
    <h3 className='bg-white text-sm px-3 border-white border-1 font-semibold py-1 rounded'>{data.category}</h3>
      <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.title} </h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className="m-5 flex justify-between">
        <button className="bg-emerald-200 hover:bg-emerald-300 text-emerald-900 font-semibold text-sm px-3 py-1 transition duration-200">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-3 py-1 transition duration-200">
          Mark as Failed
        </button>
      </div>
      </div>
    </div>
  )
}

export default AcceptTask
