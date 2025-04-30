import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div
      className="h-[80vh] w-full p-8 bg-cover bg-center bg-no-repeat backdrop-blur-lg bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-500"
    >
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-xl text-white">
        <div className="grid grid-cols-5 font-bold text-lg border-b border-gray-400 pb-2 mb-4 uppercase tracking-wide">
          <span>Employee Name</span>
          <span>New</span>
          <span>Active</span>
          <span>Completed</span>
          <span>Failed</span>
        </div>

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {userData.map((e, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 items-center bg-white/30 text-white rounded-lg px-4 py-3 backdrop-blur-md shadow-md hover:scale-[1.01] transition-transform"
            >
              <span className="font-semibold">{e.name}</span>
              <span className="text-blue-600 font-bold">{e.taskCount.newTask}</span>
              <span className="text-yellow-600 font-bold">{e.taskCount.active}</span>
              <span className="text-green-600 font-bold">{e.taskCount.completed}</span>
              <span className="text-red-600 font-bold">{e.taskCount.failed}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
