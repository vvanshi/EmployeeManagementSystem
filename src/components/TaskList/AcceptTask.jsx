import React from 'react'

const AcceptTask = () => {
  return (
    <div>
          <div className='h-full w-[300px] p-5 flex-shrink-0 bg-rose-400 rounded-xl'>
      <div className='flex justify-between items-center'>     
    <h3 className='bg-red-400 text-sm px-3 border-white border-1 font-semibold py-1 rounded'>High</h3>
      <h4 className='font-bold text-sm'>20 feb 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> Make a youtube vedio </h2>
      <p className='text-sm mt-2'>The world is constantly evolving, driven by innovation,
         curiosity, and the relentless pursuit of progress. Technology has
          transformed the way we communicate.</p>
          <div>
            <button>Mark as Completed</button>
            <button>Mark as failed</button>
          </div>
      </div>
    </div>
  )
}

export default AcceptTask
