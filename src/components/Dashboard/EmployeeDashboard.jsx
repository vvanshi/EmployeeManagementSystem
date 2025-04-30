import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
   
      <div className="bg-gradient-to-r from-amber-100 via-emerald-100 to-amber-100 bg-cover bg-center bg-fixed w-full h-screen">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data} />
      </div>
   
  )
}

export default EmployeeDashboard
