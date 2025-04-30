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

  return(
    <div className="flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../bridge.jpg')" }}>
  <div className="rounded-3xl bg-white/40 backdrop-blur-md p-10 shadow-2xl w-full max-w-md">
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="flex flex-col gap-5"
    >
      <h2 className="text-white text-3xl font-bold text-center mb-4">Welcome👋</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        id="email"
        placeholder="Enter your Email"
        className="text-black bg-white border-2 border-gray-400 rounded-full px-5 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        placeholder="Enter your Password"
        className="text-black bg-white border-2 border-gray-400 rounded-full px-5 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      <button
        type="submit"
        className="bg-gray-600 hover:bg-gray-700 active:bg-gray-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        Log in
      </button>
    </form>
  </div>
</div>
)
}

export default Login
 