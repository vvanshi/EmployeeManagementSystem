import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
          <div className='h-full w-[300px] p-5 flex-shrink-0 bg-rose-400 rounded-xl'>
      <div className='flex justify-between items-center'>     
    <h3 className='bg-red-400 text-sm px-3 border-white border-1 font-semibold py-1 rounded'>{data.category}</h3>
      <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.title} </h2>
      <p className='text-sm mt-2'>{data.description}</p>
          <div className='flex mt-9 justify-between'>
            <button className='bg-green-600 px-2 text-sm py-1'>Mark as Completed</button>
            <button className='bg-green-600 px-2 text-sm py-1'>Mark as failed</button>
          </div>
      </div>
    </div>
  )
}

export default AcceptTask
