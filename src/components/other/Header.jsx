import React from 'react';

const Header = ({ data = {}, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <header className="w-full px-8 py-5 bg-emerald-700 backdrop-blur-md shadow-lg flex flex-col md:flex-row items-center justify-between text-white mb-10 border-b-2 border-emerald-900">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
        Hello, <span className="font-bold text-emerald-200">{data?.name || 'Guest'} 👋</span>
      </h1>

      <button
        onClick={logOutUser}
        className="mt-4 md:mt-0 bg-emerald-600 hover:bg-red-600 transition-all duration-300 text-white px-6 py-2 font-semibold shadow-md border border-white/30"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
