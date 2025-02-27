import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider';

const App = () => {

const [user,setUser]=useState(null)
const[loggedInUser,setLoggedInUser]=useState(null);
const authData=useContext(AuthContext);

useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    setUser(userData.role);
    setLoggedInUser(userData.data); 
  }
}, []);


const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' })); // ✅ Corrected
  } else if (authData) {
    const employee = authData.employees.find((e) => email === e.email && password === e.password);
    if (employee) {
      setUser('employee');
      setLoggedInUser(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee })); // ✅ Store full employee data
    } else {
      alert('Invalid credentials');
    }
  }
};



  return (
    < >
   {!user?<Login handleLogin={handleLogin}/>:''}
   {user=='admin'?<AdminDashboard/>:user == 'employee'?<EmployeeDashboard data={loggedInUser}/>:null}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App

