import React, { useState } from 'react'

const Header = () => {

const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}

  return (
    <div  className='text-white flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hello, <br /><span className='text-3xl font-bold'>username👋 </span></h1>
      <button 
      onClick={logOutUser}
      className='bg-red-500 text-lg font-medium rounded-sm text-white px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header
