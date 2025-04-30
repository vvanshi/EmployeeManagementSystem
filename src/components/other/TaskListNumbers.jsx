import React from 'react';
import { ClipboardList } from "lucide-react";

const TaskListNumbers = ({ data }) => {
  const tasks = [
    { label: "New Task", count: data.taskCount.newTask },
    { label: "Completed Task", count: data.taskCount.completed },
    { label: "Active Task", count: data.taskCount.active },
    { label: "Failed Task", count: data.taskCount.failed },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-5 text-white">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center bg-white text-black border border-black shadow-md"
        >
          <div className="bg-emerald-600 h-full w-1/3 flex justify-center items-center py-6">
            <ClipboardList className="w-10 h-10 text-black" />
          </div>
          <div className="flex flex-col justify-center px-4 py-3 w-2/3">
            <h2 className="text-3xl font-bold">{task.count}</h2>
            <p className="text-md font-medium text-gray-800">{task.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
