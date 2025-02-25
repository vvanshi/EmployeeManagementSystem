import React, { useState } from 'react'

const Login = ({handleLogin}) => {

   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const submitHandler=(e)=>{
    e.preventDefault();
    console.log("email is ",email);
    console.log("password is ", password);
    handleLogin(email,password);
    setEmail("");
    setPassword("");
   }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 rounded-xl border-emerald-600 p-15 text-slate-950'>
        <form 
        onSubmit={(e)=>{
              submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}     
           required className='text-white outline-none border-2 bg-transparent border-emerald-600 m-3 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your Email' />
            <input
            value={password}
            onChange={(e)=>{
                   setPassword(e.target.value)
            }} 
            required className='text-white outline-none border-2 bg-transparent border-emerald-600 m-3 text-xl py-3 px-5 rounded-full' type='password' placeholder='Enter your password' />
            <button className='text-white outline-none border-none  bg-emerald-600 m-3 text-xl py-3 px-5 rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
 