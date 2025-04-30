import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [taskCategory, setTaskCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUserData = userData.map((user) => {
      if (user.name === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            newTask: (user.taskCount.newTask || 0) + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUserData);

    setAssignTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
  };

  return (
    <div className="p-6 m-8 bg-white backdrop-blur-md rounded-xl border border-gray-200 shadow-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-col md:flex-row gap-8">
        {/* Left side inputs */}
        <div className="md:w-1/2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md bg-white text-sm focus:ring-emerald-500 focus:border-emerald-500"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:ring-emerald-500 focus:border-emerald-500"
              type="date"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assign to</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:ring-emerald-500 focus:border-emerald-500"
              type="text"
              placeholder="Employee Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:ring-emerald-500 focus:border-emerald-500"
              type="text"
              placeholder="Design, Dev, etc"
              required
            />
          </div>
        </div>

        {/* Right side description */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full text-black h-44 px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:ring-emerald-500 focus:border-emerald-500 resize-none"
              placeholder="Task details..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md shadow-md transition-all duration-300 text-sm font-semibold w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
