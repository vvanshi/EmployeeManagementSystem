import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminUser = admin.find((a) => a.email === email && a.password === password);
    if (adminUser) {
      setUser('admin');
      setLoggedInUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }));
      return;
    }

    const employeeUser = employees.find((e) => e.email === email && e.password === password);
    if (employeeUser) {
      setUser('employee');
      setLoggedInUser(employeeUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employeeUser }));
    } else {
      alert('Invalid credentials');
    }
  };

  const freshEmployeeData = user === 'employee'
    ? userData.find((u) => u.email === loggedInUser?.email)
    : null;

  const freshAdminData = user === 'admin'
    ? userData.find((u) => u.email === loggedInUser?.email)
    : null;

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} data={freshAdminData || loggedInUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={freshEmployeeData || loggedInUser} />
      ) : null}
    </>
  );
};

export default App;
